const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sendJson(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(body));
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return sendJson(res, 405, { error: "Método no permitido." });
  }

  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) {
    return sendJson(res, 503, { error: "El servicio de contacto no está configurado todavía." });
  }

  let webhook;
  try {
    webhook = new URL(webhookUrl);
  } catch {
    return sendJson(res, 500, { error: "La configuración del servicio de contacto no es válida." });
  }
  if (webhook.protocol !== "https:" || webhook.hostname !== "discord.com" || !webhook.pathname.startsWith("/api/webhooks/")) {
    return sendJson(res, 500, { error: "La configuración del servicio de contacto no es válida." });
  }

  const { name, email, message } = req.body || {};
  if (
    typeof name !== "string" || !name.trim() || name.trim().length > 100 ||
    typeof email !== "string" || email.length > 254 || !EMAIL_PATTERN.test(email.trim()) ||
    typeof message !== "string" || !message.trim() || message.trim().length > 1500
  ) {
    return sendJson(res, 400, { error: "Revisa los campos: nombre, correo y mensaje son obligatorios." });
  }

  try {
    const discordResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        allowed_mentions: { parse: [] },
        embeds: [{
          title: "Nuevo mensaje de contacto",
          color: 14868239,
          fields: [
            { name: "Nombre", value: name.trim(), inline: true },
            { name: "Correo", value: email.trim(), inline: true },
            { name: "Mensaje", value: message.trim() }
          ]
        }]
      })
    });
    if (!discordResponse.ok) {
      console.error("Discord webhook rejected contact message:", discordResponse.status);
      return sendJson(res, 502, { error: "Discord no pudo recibir el mensaje. Inténtalo de nuevo más tarde." });
    }
  } catch (error) {
    console.error("Could not deliver contact message to Discord:", error);
    return sendJson(res, 502, { error: "No se pudo conectar con Discord. Inténtalo de nuevo más tarde." });
  }

  return sendJson(res, 200, { ok: true });
};
