document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () { menu.classList.toggle("open"); });
  }

  var translations = {
    es: {
      "brand-prefix": "Construye el",
      "brand-accent": "Futuro Web",
      "nav-home": "Inicio",
      "nav-javascript": "JavaScript",
      "nav-jquery": "jQuery",
      "nav-json": "JSON",
      "nav-hosting": "Hosting y Dominios",
      "nav-quiz": "Cuestionario",
      "nav-ai": "Herramientas IA",
      "nav-contact": "Contacto",
      "js-title": "JavaScript Vanilla",
      "concept-title": "Concepto",
      "concept-text": "JavaScript Vanilla es JavaScript puro: el lenguaje estándar del navegador usado sin librerías ni frameworks como jQuery, React o Vue. Permite que una página reaccione al usuario, modifique su contenido y se comunique con servidores.",
      "trinomio-title": "El trinomio HTML, CSS y JS",
      "html-title": "HTML",
      "html-text": "Define la estructura y el contenido: títulos, párrafos, formularios, imágenes.",
      "css-title": "CSS",
      "css-text": "Define la presentación: colores, tipografías, espacios y diseño responsivo.",
      "js-card-title": "JS",
      "js-card-text": "Define el comportamiento: interacciones, validaciones y datos dinámicos.",
      "variables-title": "Variables, funciones y eventos",
      "variables-text": "Variables: guardan datos. Se declaran con let (valor cambiable) o const (valor constante).",
      "functions-text": "Funciones: bloques de código reutilizables que pueden recibir parámetros y devolver un resultado.",
      "events-text": "Eventos: acciones del usuario (clic, teclado, envío de formulario) que se capturan con addEventListener.",
      "code-example-title": "Ejemplo de código",
      "table-title": "Cuadro comparativo",
      "table-tech": "Tecnología",
      "table-func": "Función",
      "table-example": "Ejemplo",
      "html-struct": "Estructura",
      "css-struct": "Estilo",
      "js-struct": "Comportamiento",
      "note-text": "Nota: aprender JS Vanilla primero facilita entender cualquier librería o framework después.",
      "sources-title": "Fuentes / Bibliografía"
    },
    en: {
      "brand-prefix": "Build the",
      "brand-accent": "Web Future",
      "nav-home": "Home",
      "nav-javascript": "JavaScript",
      "nav-jquery": "jQuery",
      "nav-json": "JSON",
      "nav-hosting": "Hosting and Domains",
      "nav-quiz": "Quiz",
      "nav-ai": "AI Tools",
      "nav-contact": "Contact",
      "js-title": "JavaScript Vanilla",
      "concept-title": "Concept",
      "concept-text": "JavaScript Vanilla is pure JavaScript: the standard browser language used without libraries or frameworks such as jQuery, React, or Vue. It allows a page to react to the user, modify its content, and communicate with servers.",
      "trinomio-title": "The HTML, CSS, and JS trio",
      "html-title": "HTML",
      "html-text": "Defines the structure and content: headings, paragraphs, forms, images.",
      "css-title": "CSS",
      "css-text": "Defines the presentation: colors, typography, spacing, and responsive design.",
      "js-card-title": "JS",
      "js-card-text": "Defines behavior: interactions, validations, and dynamic data.",
      "variables-title": "Variables, functions, and events",
      "variables-text": "Variables: store data. They are declared with let (changeable value) or const (constant value).",
      "functions-text": "Functions: reusable code blocks that can receive parameters and return a result.",
      "events-text": "Events: user actions (click, keyboard, form submission) that are captured with addEventListener.",
      "code-example-title": "Code example",
      "table-title": "Comparison table",
      "table-tech": "Technology",
      "table-func": "Function",
      "table-example": "Example",
      "html-struct": "Structure",
      "css-struct": "Style",
      "js-struct": "Behavior",
      "note-text": "Note: learning JS Vanilla first makes it easier to understand any library or framework afterward.",
      "sources-title": "Sources / Bibliography"
    }
  };

  var langToggle = document.querySelector(".lang-toggle");
  function applyLanguage(language) {
    var current = translations[language] ? language : "es";
    document.documentElement.lang = current;
    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      var key = node.getAttribute("data-i18n");
      if (translations[current][key]) {
        node.textContent = translations[current][key];
      }
    });
    if (langToggle) {
      langToggle.dataset.lang = current === "es" ? "en" : "es";
      langToggle.textContent = current === "es" ? "English" : "Español";
      langToggle.setAttribute("aria-label", current === "es" ? "Cambiar idioma a inglés" : "Cambiar idioma a español");
    }
    localStorage.setItem("codesphere-language", current);
  }

  if (langToggle) {
    langToggle.addEventListener("click", function () {
      var nextLanguage = langToggle.dataset.lang || "en";
      applyLanguage(nextLanguage);
    });
  }

  var savedLanguage = localStorage.getItem("codesphere-language");
  applyLanguage(savedLanguage === "en" ? "en" : "es");

  var themeToggle = document.querySelector(".theme-toggle");
  var savedTheme = localStorage.getItem("codesphere-theme");
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    if (themeToggle) {
      var isDark = theme === "dark";
      themeToggle.setAttribute("aria-pressed", String(isDark));
      themeToggle.textContent = isDark ? "☀ Modo claro" : "☾ Modo oscuro";
    }
  }
  applyTheme(savedTheme === "dark" ? "dark" : "light");
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var nextTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      localStorage.setItem("codesphere-theme", nextTheme);
      applyTheme(nextTheme);
    });
  }
  var actual = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("#menu a").forEach(function (a) {
    if (a.getAttribute("href") === actual) { a.classList.add("active"); }
  });

  var contactForm = document.getElementById("contact-form");
  if (contactForm) {
    var contactStatus = document.getElementById("contact-status");
    var contactButton = contactForm.querySelector('button[type="submit"]');
    contactForm.addEventListener("submit", async function (e) {
      e.preventDefault();
      contactButton.disabled = true;
      contactStatus.textContent = "Enviando mensaje...";
      contactStatus.setAttribute("aria-busy", "true");
      try {
        var response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: contactForm.elements.namedItem("name").value.trim(),
            email: contactForm.elements.namedItem("email").value.trim(),
            message: contactForm.elements.namedItem("message").value.trim()
          })
        });
        var result = await response.json();
        if (!response.ok) {
          throw new Error(result.error || "No se pudo enviar el mensaje.");
        }
        contactStatus.textContent = "¡Mensaje enviado! Gracias por contactarnos.";
        contactForm.reset();
      } catch (error) {
        contactStatus.textContent = error.message || "No se pudo enviar el mensaje. Inténtalo de nuevo.";
      } finally {
        contactButton.disabled = false;
        contactStatus.removeAttribute("aria-busy");
      }
    });
  }

  var form = document.getElementById("quiz-form");
  if (!form) { return; }
  var respuestas = {
    q1: ["a", "JavaScript Vanilla es JavaScript puro, sin librerías ni frameworks."],
    q2: ["f", "Falso: el CSS define la presentación; la estructura la define el HTML."],
    q3: ["b", "jQuery usa el símbolo $ como función principal."],
    q4: ["v", "Verdadero: JSON.parse() convierte una cadena JSON en un objeto JS."],
    q5: ["b", 'En JSON las claves y las cadenas van entre comillas dobles.'],
    q6: ["v", "Verdadero: Vercel despliega proyectos frontend desde Git."],
    q7: ["b", ".com es un dominio de nivel superior (TLD)."],
    q8: ["v", "Verdadero: el DNS traduce nombres de dominio a direcciones IP."]
  };
  var resultado = document.getElementById("result");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var puntos = 0, total = Object.keys(respuestas).length;
    Object.keys(respuestas).forEach(function (q) {
      var cont = document.getElementById(q);
      var fb = cont.querySelector(".fb");
      var marcada = form.querySelector('input[name="' + q + '"]:checked');
      cont.classList.remove("correct", "wrong", "empty");
      if (!marcada) {
        cont.classList.add("empty");
        fb.textContent = "⚠ Sin responder. " + respuestas[q][1];
      } else if (marcada.value === respuestas[q][0]) {
        puntos++;
        cont.classList.add("correct");
        fb.textContent = "✔ ¡Correcto! " + respuestas[q][1];
      } else {
        cont.classList.add("wrong");
        fb.textContent = "✘ Incorrecto. " + respuestas[q][1];
      }
    });
    var pct = Math.round((puntos / total) * 100);
    var msg, clase;
    if (pct >= 80) { msg = "¡Excelente dominio!"; clase = "good"; }
    else if (pct >= 50) { msg = "Buen avance, repasa los temas fallados."; clase = "mid"; }
    else { msg = "Necesitas repasar el contenido."; clase = "bad"; }
    resultado.className = "result show " + clase;
    resultado.textContent = "Puntaje: " + puntos + " / " + total + " (" + pct + "%) — " + msg;
    resultado.scrollIntoView({ behavior: "smooth", block: "center" });
  });
  form.addEventListener("reset", function () {
    document.querySelectorAll(".question").forEach(function (c) {
      c.classList.remove("correct", "wrong", "empty");
      c.querySelector(".fb").textContent = "";
    });
    resultado.className = "result";
    resultado.textContent = "";
  });
});
