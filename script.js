document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () { menu.classList.toggle("open"); });
  }
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
