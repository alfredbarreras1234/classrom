document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () { menu.classList.toggle("open"); });
  }

  var translations = {
    es: {
      "page-title": "Inicio | CodeSphere",
      "page-title-javascript": "JavaScript | CodeSphere",
      "page-title-jquery": "jQuery | CodeSphere",
      "page-title-json": "JSON | CodeSphere",
      "page-title-hosting": "Hosting y Dominios | CodeSphere",
      "page-title-ai": "Herramientas IA | CodeSphere",
      "page-title-quiz": "Cuestionario | CodeSphere",
      "page-title-contact": "Contacto | CodeSphere",
      "page-heading-jquery": "jQuery",
      "page-heading-json": "JSON",
      "page-heading-hosting": "Hosting y Dominios",
      "page-heading-ai": "Herramientas de IA para desarrollo web",
      "page-heading-quiz": "Cuestionario de repaso",
      "page-heading-contact": "Contacto",
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
      "concept-text": "<strong>JavaScript Vanilla</strong> es JavaScript puro: el lenguaje estándar del navegador usado sin librerías ni frameworks como jQuery, React o Vue. Permite que una página reaccione al usuario, modifique su contenido y se comunique con servidores.",
      "trinomio-title": "El trinomio HTML, CSS y JS",
      "html-title": "HTML",
      "html-text": "Define la <strong>estructura</strong> y el contenido: títulos, párrafos, formularios e imágenes.",
      "css-title": "CSS",
      "css-text": "Define la <strong>presentación</strong>: colores, tipografías, espacios y diseño adaptable.",
      "js-card-title": "JS",
      "js-card-text": "Define el <strong>comportamiento</strong>: interacciones, validaciones y datos dinámicos.",
      "variables-title": "Variables, funciones y eventos",
      "variables-text": "<strong>Variables:</strong> guardan datos. Se declaran con <code>let</code> (valor cambiable) o <code>const</code> (valor constante).",
      "functions-text": "<strong>Funciones:</strong> bloques de código reutilizables que pueden recibir parámetros y devolver un resultado.",
      "events-text": "<strong>Eventos:</strong> acciones del usuario (clic, teclado, envío de formulario) que se capturan con <code>addEventListener</code>.",
      "code-example-title": "Ejemplo de código",
      "table-title": "Cuadro comparativo",
      "table-tech": "Tecnología",
      "table-func": "Función",
      "table-example": "Ejemplo",
      "html-struct": "Estructura",
      "css-struct": "Estilo",
      "js-struct": "Comportamiento",
      "note-text": "Nota: aprender JS Vanilla primero facilita entender cualquier librería o framework después.",
      "sources-title": "Fuentes / Bibliografía",
      "home-title": "Construye el Futuro Web",
      "home-tag": "Aprende web. Construye futuro.",
      "home-intro": "CodeSphere es una plataforma educativa que explica de forma clara y práctica las bases del desarrollo web: JavaScript, jQuery, JSON, hosting y dominios, además de herramientas de IA para crear sitios.",
      "home-start": "Empezar a aprender",
      "home-description-title": "Descripción",
      "home-description": "Reunimos en un solo lugar explicaciones breves, ejemplos de código y un cuestionario interactivo para reforzar lo aprendido.",
      "home-audience-title": "Público objetivo",
      "home-audience": "Estudiantes de bachillerato y primeros años de carrera, y personas autodidactas que quieren iniciarse en la programación web.",
      "home-value-title": "Propuesta de valor",
      "home-value": "Contenido directo, ejemplos listos para copiar, comparaciones claras y autoevaluación inmediata, todo gratuito y accesible desde cualquier dispositivo.",
      "home-slogan-title": "Eslogan",
      "home-slogan": "\"Aprende web. Construye futuro.\"",
      "home-colors-title": "Paleta de colores y psicología del color",
      "home-dark-blue": "Azul Oscuro #1E293B",
      "home-dark-blue-desc": "Transmite seriedad, confianza y profesionalismo. Se asocia con la tecnología y la estabilidad.",
      "home-turquoise": "Turquesa #0EA5E9",
      "home-turquoise-desc": "Evoca claridad, innovación y comunicación. Invita a la acción y da sensación de modernidad.",
      "home-green": "Verde #10B981",
      "home-green-desc": "Representa crecimiento, progreso y éxito. Refuerza la idea de avanzar en el aprendizaje.",
      "home-light-gray": "Gris Claro #F8FAFC",
      "home-light-gray-desc": "Aporta limpieza y espacio visual, mejora la legibilidad y descansa la vista.",
      "home-color-note": "Combinación: el azul oscuro da autoridad, el turquesa y el verde aportan energía y optimismo, y el gris claro mantiene el equilibrio y el contraste.",
      "example-title": "Título",
      "example-hello": "Hola",
      "jquery-code-comment": "// $(selector).acción();",
      "jquery-code-hello": "\"Hola jQuery\"",
      "json-code-object": "// Objeto JavaScript",
      "json-code-string": "// Cadena JSON (texto)",
      "json-code-conversion": "// Conversión",
      "js-code-variables": "// Variables",
      "js-code-function": "// Función",
      "js-code-event": "// Evento",
      "js-code-greeting": "\"Hola, \"",
      "js-code-welcome": "\" bienvenido a \"",
      "js-code-clicks": "\" - clics: \"",
      "jquery-origin-title": "¿Qué es jQuery y por qué nació?",
      "jquery-origin-text": "<strong>jQuery</strong> es una librería de JavaScript creada por John Resig en 2006. Nació para simplificar tareas como seleccionar elementos, manejar eventos, animar y hacer peticiones AJAX, en una época en la que los navegadores eran muy incompatibles entre sí. Su lema: <em>&quot;escribe menos, haz más&quot;</em>.",
      "jquery-syntax-title": "Sintaxis del selector $",
      "jquery-syntax-text": "La función <code>$</code> (alias de <code>jQuery</code>) selecciona elementos con selectores CSS y permite encadenar acciones.",
      "jquery-compare-title": "Comparativa: JS Vanilla vs jQuery",
      "jquery-task": "Tarea",
      "jquery-select": "Seleccionar",
      "jquery-hide": "Ocultar",
      "jquery-click": "Clic",
      "jquery-pros-cons-title": "Ventajas y desventajas",
      "jquery-pros": "Ventajas",
      "jquery-pro-1": "Sintaxis corta y fácil.",
      "jquery-pro-2": "Encadenamiento de métodos.",
      "jquery-pro-3": "Gran cantidad de plugins y documentación.",
      "jquery-pro-4": "Compatibilidad entre navegadores.",
      "jquery-cons": "Desventajas",
      "jquery-con-1": "Añade peso extra a la página.",
      "jquery-con-2": "JavaScript moderno ya cubre gran parte de sus funciones.",
      "jquery-con-3": "Menos usado en proyectos nuevos.",
      "jquery-con-4": "No sustituye a frameworks de interfaz modernos.",
      "json-intro-title": "¿Qué es JSON y por qué es el estándar?",
      "json-intro-text": "<strong>JSON</strong> (JavaScript Object Notation) es un formato de texto ligero para intercambiar datos. Es el estándar porque es fácil de leer para las personas, simple de procesar para las máquinas, independiente del lenguaje y nativo en JavaScript.",
      "json-structure-title": "Estructura",
      "json-key-value": "<strong>Clave-valor:</strong> <code>&quot;nombre&quot;: &quot;Ana&quot;</code>. La clave siempre va entre comillas dobles.",
      "json-objects": "<strong>Objetos:</strong> conjuntos de pares clave-valor entre llaves <code>{ }</code>.",
      "json-arrays": "<strong>Arreglos:</strong> listas ordenadas entre corchetes <code>[ ]</code>.",
      "json-values": "<strong>Valores permitidos:</strong> cadena, número, booleano, <code>null</code>, objeto y arreglo.",
      "json-object-string-title": "Objeto JS vs. cadena JSON",
      "json-feature": "Característica",
      "json-type": "Tipo",
      "json-memory-structure": "Estructura en memoria",
      "json-text": "Texto",
      "json-keys": "Claves",
      "json-quotes-optional": "Con o sin comillas",
      "json-quotes-always": "Siempre entre comillas dobles",
      "json-string-quotes": "Comillas en texto",
      "json-single-double": "Simples o dobles",
      "json-double-only": "Solo dobles",
      "json-functions": "Funciones",
      "json-allowed": "Permitidas",
      "json-not-allowed": "No permitidas",
      "json-api-title": "Comunicación con APIs y servidores",
      "json-api-text": "El navegador (cliente) envía una petición a una API y el servidor normalmente responde con JSON. Después, el cliente convierte ese texto en un objeto y lo muestra en la página.",
      "hosting-types-title": "Tipos de alojamiento web",
      "hosting-type": "Tipo",
      "hosting-description": "Descripción",
      "hosting-ideal": "Ideal para",
      "hosting-shared": "Compartido",
      "hosting-shared-desc": "Varios sitios comparten un mismo servidor y sus recursos.",
      "hosting-shared-ideal": "Blogs y sitios pequeños de bajo costo.",
      "hosting-vps-desc": "Servidor virtual con recursos dedicados y control del sistema.",
      "hosting-vps-ideal": "Proyectos medianos que necesitan una configuración propia.",
      "hosting-cloud": "Nube",
      "hosting-cloud-desc": "Recursos distribuidos en varios servidores que escalan según la demanda.",
      "hosting-cloud-ideal": "Aplicaciones con tráfico variable o alto.",
      "hosting-vercel-title": "¿Qué es Vercel?",
      "hosting-vercel-text": "<strong>Vercel</strong> es una plataforma en la nube para desplegar sitios y aplicaciones frontend. Se conecta con GitHub, publica automáticamente cada vez que subes cambios, ofrece HTTPS y un plan gratuito para proyectos personales y escolares. Es la empresa creadora de Next.js.",
      "hosting-domains-title": "Dominios",
      "hosting-tld": "<strong>TLD (dominio de nivel superior):</strong> la terminación del dominio. <code>.com</code> (comercial), <code>.net</code> (redes y tecnología), <code>.org</code> (organizaciones).",
      "hosting-subdomain": "<strong>Subdominio:</strong> prefijo antes del dominio principal, por ejemplo <code>blog.codesphere.com</code> o <code>tienda.codesphere.com</code>.",
      "hosting-dns-title": "Flujo de propagación DNS",
      "hosting-dns-text": "El DNS (Sistema de Nombres de Dominio) traduce un nombre como <code>codesphere.com</code> en una dirección IP.",
      "hosting-dns-step-1": "El usuario escribe el dominio en el navegador",
      "hosting-dns-step-2": "El resolver DNS (ISP) consulta su caché",
      "hosting-dns-step-3": "El servidor raíz indica el servidor del TLD (.com)",
      "hosting-dns-step-4": "El servidor autoritativo entrega la IP",
      "hosting-dns-step-5": "El navegador se conecta al alojamiento y carga el sitio",
      "hosting-dns-note": "Al cambiar los registros DNS, la propagación puede tardar desde unos minutos hasta 48 horas, porque cada resolver guarda la información en caché según su TTL.",
      "hosting-domain-reference": "¿Qué es un nombre de dominio?",
      "hosting-dns-reference": "¿Qué es el DNS?",
      "ai-intro": "Selección de 15 herramientas gratuitas o freemium para crear sitios y aplicaciones web con ayuda de IA.",
      "ai-tool": "Herramienta",
      "ai-type": "Tipo",
      "ai-free-feature": "Característica gratuita",
      "ai-pomelli-type": "Análisis de sitios web",
      "ai-pomelli": "Analiza el enlace de tu sitio web para extraer la identidad de marca y generar creatividades o textos listos para redes sociales.",
      "ai-jules-type": "Redacción de textos",
      "ai-jules": "Asistente virtual enfocado en la redacción estratégica y optimización de textos de marca.",
      "ai-vids-type": "Edición de videos",
      "ai-vids": "Plataforma para el montaje automatizado de videos profesionales que incluye presentadores virtuales en español.",
      "ai-stage-type": "Creación de prototipos visuales",
      "ai-stage": "Permite crear prototipos visuales a partir de comandos de texto o voz y exportarlos directamente a Figma.",
      "ai-stitch-type": "Diseño de interfaces de aplicaciones",
      "ai-stitch": "Convierte instrucciones de texto (prompts) en diseños modernos de interfaces para aplicaciones o páginas web.",
      "ai-mixboard-type": "Creación de imágenes",
      "ai-mixboard": "Combina ideas de Canva y Pinterest para crear y mezclar imágenes con IA hasta conseguir el estilo deseado.",
      "ai-whs-type": "Diseño de portadas y creatividades",
      "ai-whs": "Procesa imágenes de referencia para diseñar portadas automáticas y creatividades de productos.",
      "ai-nano-type": "Diseño de imágenes",
      "ai-nano": "Generador rápido de imágenes que permite crear y editar piezas visuales con resoluciones de hasta 4K.",
      "ai-flow-type": "Transformación de imágenes",
      "ai-flow": "Motor especializado en transformar imágenes estáticas en clips cinematográficos y videos fluidos.",
      "ai-antigravity-type": "Editor de código con IA",
      "ai-antigravity": "Editor y asistente de código con IA integrado, similar a Cursor, diseñado para programar proyectos con lenguaje natural.",
      "ai-opal-type": "Entorno sin código",
      "ai-opal": "Entorno sin código (no-code), similar a Make o n8n, para estructurar automatizaciones y flujos de trabajo con IA.",
      "ai-studio-type": "Entorno de desarrollo con IA",
      "ai-studio": "Espacio para desarrolladores que ofrece acceso a pruebas de la API de Gemini para crear aplicaciones.",
      "ai-gems-type": "Asistente de IA personalizado",
      "ai-gems": "Herramienta que facilita el diseño y la configuración de mini asistentes personalizados para tareas repetitivas.",
      "ai-notebook-type": "Procesamiento de documentos",
      "ai-notebook": "Plataforma de notas que procesa tus documentos (PDF, notas) para generar resúmenes, responder preguntas o convertirlos en podcasts conversacionales.",
      "ai-gemini-type": "Interfaz conversacional",
      "ai-gemini": "Interfaz manos libres de Google para interactuar por voz y en tiempo real con inteligencia artificial.",
      "ai-note": "Los planes gratuitos y sus límites cambian con frecuencia: verifica siempre la información en el sitio oficial de cada herramienta.",
      "quiz-instructions": "Responde las 8 preguntas y presiona <strong>Calificar</strong> para ver tu puntaje y la retroalimentación.",
      "quiz-q1": "1. ¿Qué es JavaScript Vanilla?",
      "quiz-q1-a": "JavaScript puro, sin librerías ni frameworks",
      "quiz-q1-b": "Un framework de Google",
      "quiz-q1-c": "Una versión de Java",
      "quiz-q2": "2. Verdadero o falso: el CSS define la estructura de una página web.",
      "quiz-true": "Verdadero",
      "quiz-false": "Falso",
      "quiz-q3": "3. ¿Qué símbolo usa jQuery como función principal?",
      "quiz-q4": "4. Verdadero o falso: JSON.parse() convierte una cadena JSON en un objeto JavaScript.",
      "quiz-q5": "5. ¿Cuál de estos es JSON válido?",
      "quiz-q5-a": "{nombre: 'Ana'}",
      "quiz-q5-b": "{\"nombre\": \"Ana\"}",
      "quiz-q5-c": "{nombre = Ana}",
      "quiz-q6": "6. Verdadero o falso: Vercel es una plataforma para desplegar proyectos frontend.",
      "quiz-q7": "7. ¿Cuál es un TLD?",
      "quiz-q8": "8. Verdadero o falso: el DNS traduce nombres de dominio a direcciones IP.",
      "quiz-submit": "Calificar",
      "quiz-reset": "Reiniciar",
      "quiz-answer-q1": "JavaScript Vanilla es JavaScript puro, sin librerías ni frameworks.",
      "quiz-answer-q2": "Falso: CSS define la presentación; HTML define la estructura.",
      "quiz-answer-q3": "jQuery usa el símbolo $ como función principal.",
      "quiz-answer-q4": "JSON.parse() convierte una cadena JSON en un objeto JS.",
      "quiz-answer-q5": "En JSON, las claves y las cadenas van entre comillas dobles.",
      "quiz-answer-q6": "Vercel permite desplegar proyectos frontend desde Git.",
      "quiz-answer-q7": ".com es un dominio de nivel superior (TLD).",
      "quiz-answer-q8": "El DNS traduce nombres de dominio a direcciones IP.",
      "quiz-unanswered": "⚠ Sin responder.",
      "quiz-correct": "✔ ¡Correcto!",
      "quiz-incorrect": "✘ Incorrecto.",
      "quiz-result-excellent": "¡Excelente dominio!",
      "quiz-result-good": "Buen avance, repasa los temas fallados.",
      "quiz-result-review": "Necesitas repasar el contenido.",
      "quiz-score": "Puntaje",
      "contact-intro": "¿Tienes una pregunta o sugerencia? Puedes abrir nuestro canal de Discord o enviar el formulario cuando esté configurado.",
      "contact-discord": "Abrir canal de Discord",
      "contact-name": "Nombre",
      "contact-name-placeholder": "Escribe tu nombre",
      "contact-email": "Correo electrónico",
      "contact-email-placeholder": "Escribe tu correo electrónico",
      "contact-message": "Mensaje",
      "contact-message-placeholder": "Escribe tu mensaje",
      "contact-submit": "Enviar mensaje",
      "contact-note": "El botón abre el canal; no envía el contenido del formulario. Para activar el envío automático, en Vercel ve a <strong>Settings &gt; Environment Variables</strong>, agrega <code>DISCORD_WEBHOOK_URL</code> con la URL del webhook de tu canal y vuelve a desplegar el proyecto. Mantén esa URL solo en Vercel; no la publiques en el código.",
      "contact-sending": "Enviando mensaje...",
      "contact-sent": "¡Mensaje enviado! Gracias por contactarnos.",
      "contact-error": "No se pudo enviar el mensaje. Inténtalo de nuevo.",
      "contact-error-not-configured": "El servicio de contacto aún no está configurado.",
      "contact-error-invalid-config": "La configuración del servicio de contacto no es válida.",
      "contact-error-fields": "Revisa los campos: nombre, correo y mensaje son obligatorios.",
      "contact-error-discord": "Discord no pudo recibir el mensaje. Inténtalo de nuevo más tarde.",
      "contact-error-connection": "No se pudo conectar con Discord. Inténtalo de nuevo más tarde.",
      "contact-error": "No se pudo enviar el mensaje. Inténtalo de nuevo.",
      "footer-text": "© 2026 CodeSphere — Proyecto escolar de desarrollo web."
    },
    en: {
      "page-title": "Home | CodeSphere",
      "page-title-javascript": "JavaScript | CodeSphere",
      "page-title-jquery": "jQuery | CodeSphere",
      "page-title-json": "JSON | CodeSphere",
      "page-title-hosting": "Hosting and Domains | CodeSphere",
      "page-title-ai": "AI Tools | CodeSphere",
      "page-title-quiz": "Quiz | CodeSphere",
      "page-title-contact": "Contact | CodeSphere",
      "page-heading-jquery": "jQuery",
      "page-heading-json": "JSON",
      "page-heading-hosting": "Hosting and Domains",
      "page-heading-ai": "AI Tools for Web Development",
      "page-heading-quiz": "Review Quiz",
      "page-heading-contact": "Contact",
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
      "js-title": "Vanilla JavaScript",
      "concept-title": "Concept",
      "concept-text": "<strong>Vanilla JavaScript</strong> is pure JavaScript: the standard browser language used without libraries or frameworks such as jQuery, React, or Vue. It allows a page to react to the user, modify its content, and communicate with servers.",
      "trinomio-title": "The HTML, CSS, and JS trio",
      "html-title": "HTML",
      "html-text": "Defines the <strong>structure</strong> and content: headings, paragraphs, forms, and images.",
      "css-title": "CSS",
      "css-text": "Defines the <strong>presentation</strong>: colors, typography, spacing, and responsive design.",
      "js-card-title": "JS",
      "js-card-text": "Defines <strong>behavior</strong>: interactions, validations, and dynamic data.",
      "variables-title": "Variables, functions, and events",
      "variables-text": "<strong>Variables:</strong> store data. They are declared with <code>let</code> (changeable value) or <code>const</code> (constant value).",
      "functions-text": "<strong>Functions:</strong> reusable code blocks that can receive parameters and return a result.",
      "events-text": "<strong>Events:</strong> user actions (click, keyboard, form submission) that are captured with <code>addEventListener</code>.",
      "code-example-title": "Code example",
      "table-title": "Comparison table",
      "table-tech": "Technology",
      "table-func": "Function",
      "table-example": "Example",
      "html-struct": "Structure",
      "css-struct": "Style",
      "js-struct": "Behavior",
      "note-text": "Note: learning JS Vanilla first makes it easier to understand any library or framework afterward.",
      "sources-title": "Sources / Bibliography",
      "home-title": "Build the Web Future",
      "home-tag": "Learn web. Build the future.",
      "home-intro": "CodeSphere is an educational platform that clearly and practically explains the foundations of web development: JavaScript, jQuery, JSON, hosting and domains, as well as AI tools for creating websites.",
      "home-start": "Start learning",
      "home-description-title": "Description",
      "home-description": "We bring together brief explanations, code examples, and an interactive quiz to reinforce what you have learned.",
      "home-audience-title": "Target audience",
      "home-audience": "High school and early college students, as well as self-taught learners who want to get started with web programming.",
      "home-value-title": "Value proposition",
      "home-value": "Straightforward content, copy-ready examples, clear comparisons, and instant self-assessment—all free and accessible from any device.",
      "home-slogan-title": "Slogan",
      "home-slogan": "\"Learn web. Build the future.\"",
      "home-colors-title": "Color palette and color psychology",
      "home-dark-blue": "Dark Blue #1E293B",
      "home-dark-blue-desc": "Conveys seriousness, trust, and professionalism. It is associated with technology and stability.",
      "home-turquoise": "Turquoise #0EA5E9",
      "home-turquoise-desc": "Evokes clarity, innovation, and communication. It encourages action and feels modern.",
      "home-green": "Green #10B981",
      "home-green-desc": "Represents growth, progress, and success. It reinforces the idea of moving forward in learning.",
      "home-light-gray": "Light Gray #F8FAFC",
      "home-light-gray-desc": "Creates a clean, open layout, improves readability, and is easy on the eyes.",
      "home-color-note": "Combination: dark blue conveys authority, turquoise and green add energy and optimism, and light gray maintains balance and contrast.",
      "example-title": "Title",
      "example-hello": "Hello",
      "jquery-code-comment": "// $(selector).action();",
      "jquery-code-hello": "\"Hello jQuery\"",
      "json-code-object": "// JavaScript object",
      "json-code-string": "// JSON string (text)",
      "json-code-conversion": "// Conversion",
      "js-code-variables": "// Variables",
      "js-code-function": "// Function",
      "js-code-event": "// Event",
      "js-code-greeting": "\"Hello, \"",
      "js-code-welcome": "\" welcome to \"",
      "js-code-clicks": "\" - clicks: \"",
      "jquery-origin-title": "What is jQuery and why was it created?",
      "jquery-origin-text": "<strong>jQuery</strong> is a JavaScript library created by John Resig in 2006. It was designed to simplify tasks such as selecting elements, handling events, animating, and making AJAX requests, at a time when browsers were highly incompatible with one another. Its motto: <em>&quot;write less, do more&quot;</em>.",
      "jquery-syntax-title": "The $ selector syntax",
      "jquery-syntax-text": "The <code>$</code> function (an alias for <code>jQuery</code>) selects elements with CSS selectors and lets you chain actions.",
      "jquery-compare-title": "Comparison: Vanilla JS vs. jQuery",
      "jquery-task": "Task",
      "jquery-select": "Select",
      "jquery-hide": "Hide",
      "jquery-click": "Click",
      "jquery-pros-cons-title": "Advantages and disadvantages",
      "jquery-pros": "Advantages",
      "jquery-pro-1": "Short, simple syntax.",
      "jquery-pro-2": "Method chaining.",
      "jquery-pro-3": "A large number of plugins and extensive documentation.",
      "jquery-pro-4": "Cross-browser compatibility.",
      "jquery-cons": "Disadvantages",
      "jquery-con-1": "Adds extra weight to the page.",
      "jquery-con-2": "Modern JavaScript already covers many of its features.",
      "jquery-con-3": "Less commonly used in new projects.",
      "jquery-con-4": "Does not replace modern UI frameworks.",
      "json-intro-title": "What is JSON and why is it the standard?",
      "json-intro-text": "<strong>JSON</strong> (JavaScript Object Notation) is a lightweight text format for exchanging data. It is the standard because it is easy for people to read, simple for machines to process, language-independent, and native to JavaScript.",
      "json-structure-title": "Structure",
      "json-key-value": "<strong>Key-value:</strong> <code>&quot;name&quot;: &quot;Ana&quot;</code>. The key must always be enclosed in double quotation marks.",
      "json-objects": "<strong>Objects:</strong> collections of key-value pairs enclosed in braces <code>{ }</code>.",
      "json-arrays": "<strong>Arrays:</strong> ordered lists enclosed in square brackets <code>[ ]</code>.",
      "json-values": "<strong>Allowed values:</strong> string, number, boolean, <code>null</code>, object, and array.",
      "json-object-string-title": "JS object vs. JSON string",
      "json-feature": "Feature",
      "json-type": "Type",
      "json-memory-structure": "In-memory structure",
      "json-text": "Text",
      "json-keys": "Keys",
      "json-quotes-optional": "With or without quotation marks",
      "json-quotes-always": "Always enclosed in double quotation marks",
      "json-string-quotes": "Quotation marks in text",
      "json-single-double": "Single or double",
      "json-double-only": "Double only",
      "json-functions": "Functions",
      "json-allowed": "Allowed",
      "json-not-allowed": "Not allowed",
      "json-api-title": "Communication with APIs and servers",
      "json-api-text": "The browser (client) sends a request to an API, and the server usually responds with JSON. The client then converts that text into an object and displays it on the page.",
      "hosting-types-title": "Web hosting types",
      "hosting-type": "Type",
      "hosting-description": "Description",
      "hosting-ideal": "Ideal for",
      "hosting-shared": "Shared",
      "hosting-shared-desc": "Several websites share the same server and its resources.",
      "hosting-shared-ideal": "Low-cost blogs and small websites.",
      "hosting-vps-desc": "Virtual server with dedicated resources and system control.",
      "hosting-vps-ideal": "Medium-sized projects that need their own configuration.",
      "hosting-cloud": "Cloud",
      "hosting-cloud-desc": "Resources distributed across multiple servers that scale with demand.",
      "hosting-cloud-ideal": "Applications with variable or high traffic.",
      "hosting-vercel-title": "What is Vercel?",
      "hosting-vercel-text": "<strong>Vercel</strong> is a cloud platform for deploying frontend websites and applications. It connects to GitHub, automatically publishes whenever you upload changes, provides HTTPS, and offers a free plan for personal and school projects. It is the company behind Next.js.",
      "hosting-domains-title": "Domains",
      "hosting-tld": "<strong>TLD (top-level domain):</strong> the ending of a domain name. <code>.com</code> (commercial), <code>.net</code> (networks and technology), <code>.org</code> (organizations).",
      "hosting-subdomain": "<strong>Subdomain:</strong> a prefix before the main domain, for example <code>blog.codesphere.com</code> or <code>store.codesphere.com</code>.",
      "hosting-dns-title": "DNS propagation process",
      "hosting-dns-text": "DNS (Domain Name System) translates a name such as <code>codesphere.com</code> into an IP address.",
      "hosting-dns-step-1": "The user types the domain into the browser",
      "hosting-dns-step-2": "The DNS resolver (ISP) checks its cache",
      "hosting-dns-step-3": "The root server points to the TLD server (.com)",
      "hosting-dns-step-4": "The authoritative server provides the IP address",
      "hosting-dns-step-5": "The browser connects to the hosting server and loads the site",
      "hosting-dns-note": "After DNS records change, propagation can take from a few minutes up to 48 hours because each resolver caches information according to its TTL.",
      "hosting-domain-reference": "What is a domain name?",
      "hosting-dns-reference": "What is DNS?",
      "ai-intro": "A selection of 15 free or freemium tools for creating websites and web applications with AI.",
      "ai-tool": "Tool",
      "ai-type": "Type",
      "ai-free-feature": "Free feature",
      "ai-pomelli-type": "Website analysis",
      "ai-pomelli": "Analyzes your website link to identify its brand identity and generate creative assets or copy for social media.",
      "ai-jules-type": "Writing",
      "ai-jules": "A virtual assistant focused on strategic writing and brand copy optimization.",
      "ai-vids-type": "Video editing",
      "ai-vids": "Platform for automated production of professional videos, including virtual presenters in Spanish.",
      "ai-stage-type": "Visual prototyping",
      "ai-stage": "Creates visual prototypes from text or voice commands and makes it easy to export them directly to Figma.",
      "ai-stitch-type": "App interface design",
      "ai-stitch": "Turns text instructions (prompts) into modern interface designs for apps or websites.",
      "ai-mixboard-type": "Image creation",
      "ai-mixboard": "Combines ideas from Canva and Pinterest to mix and generate images with AI until you get the style you want.",
      "ai-whs-type": "Cover and creative design",
      "ai-whs": "Processes reference images to automatically design covers and product creatives.",
      "ai-nano-type": "Image design",
      "ai-nano": "High-speed image generator for creating and editing visuals at resolutions up to 4K.",
      "ai-flow-type": "Image transformation",
      "ai-flow": "A specialized engine that transforms still images into cinematic clips and fluid videos.",
      "ai-antigravity-type": "AI code editor",
      "ai-antigravity": "An integrated AI code editor and assistant similar to Cursor, designed for building projects with natural language.",
      "ai-opal-type": "No-code environment",
      "ai-opal": "A no-code environment like Make or n8n for structuring AI-powered automations and workflows.",
      "ai-studio-type": "AI development environment",
      "ai-studio": "A space for developers that provides access to Gemini API testing for building applications.",
      "ai-gems-type": "Custom AI assistant",
      "ai-gems": "A tool that makes it easier to design and configure small custom assistants for repetitive tasks.",
      "ai-notebook-type": "Document processing",
      "ai-notebook": "Note-taking platform that processes your documents (PDFs, notes) to create summaries, answer questions, or turn them into conversational podcasts.",
      "ai-gemini-type": "Conversational interface",
      "ai-gemini": "Google hands-free conversational interface for real-time voice interaction with artificial intelligence.",
      "ai-note": "Free plans and their limits change often: always check each tool’s official website for current information.",
      "quiz-instructions": "Answer all 8 questions and press <strong>Submit</strong> to see your score and feedback.",
      "quiz-q1": "1. What is Vanilla JavaScript?",
      "quiz-q1-a": "Pure JavaScript, without libraries or frameworks",
      "quiz-q1-b": "A Google framework",
      "quiz-q1-c": "A version of Java",
      "quiz-q2": "2. True or false: CSS defines the structure of a web page.",
      "quiz-true": "True",
      "quiz-false": "False",
      "quiz-q3": "3. Which symbol does jQuery use as its main function?",
      "quiz-q4": "4. True or false: JSON.parse() converts a JSON string into a JavaScript object.",
      "quiz-q5": "5. Which of these is valid JSON?",
      "quiz-q5-a": "{name: 'Ana'}",
      "quiz-q5-b": "{\"name\": \"Ana\"}",
      "quiz-q5-c": "{name = Ana}",
      "quiz-q6": "6. True or false: Vercel is a platform for deploying frontend projects.",
      "quiz-q7": "7. Which one is a TLD?",
      "quiz-q8": "8. True or false: DNS translates domain names into IP addresses.",
      "quiz-submit": "Submit",
      "quiz-reset": "Reset",
      "quiz-answer-q1": "Vanilla JavaScript is pure JavaScript, without libraries or frameworks.",
      "quiz-answer-q2": "False: CSS defines presentation; HTML defines structure.",
      "quiz-answer-q3": "jQuery uses the $ symbol as its main function.",
      "quiz-answer-q4": "JSON.parse() converts a JSON string into a JS object.",
      "quiz-answer-q5": "In JSON, keys and strings must be enclosed in double quotation marks.",
      "quiz-answer-q6": "Vercel lets you deploy frontend projects from Git.",
      "quiz-answer-q7": ".com is a top-level domain (TLD).",
      "quiz-answer-q8": "DNS translates domain names into IP addresses.",
      "quiz-unanswered": "⚠ Unanswered.",
      "quiz-correct": "✔ Correct!",
      "quiz-incorrect": "✘ Incorrect.",
      "quiz-result-excellent": "Excellent work!",
      "quiz-result-good": "Good progress. Review the topics you missed.",
      "quiz-result-review": "You need to review the material.",
      "quiz-score": "Score",
      "contact-intro": "Do you have a question or suggestion? You can open our Discord channel or submit the form once it is configured.",
      "contact-discord": "Open Discord channel",
      "contact-name": "Name",
      "contact-name-placeholder": "Enter your name",
      "contact-email": "Email address",
      "contact-email-placeholder": "Enter your email address",
      "contact-message": "Message",
      "contact-message-placeholder": "Enter your message",
      "contact-submit": "Send message",
      "contact-note": "The button opens the channel; it does not submit the form contents. To enable automatic sending, go to <strong>Settings &gt; Environment Variables</strong> in Vercel, add <code>DISCORD_WEBHOOK_URL</code> with your channel webhook URL, and redeploy the project. Keep that URL in Vercel only; do not publish it in the code.",
      "contact-sending": "Sending message...",
      "contact-sent": "Message sent! Thank you for contacting us.",
      "contact-error": "The message could not be sent. Please try again.",
      "contact-error-not-configured": "The contact service is not configured yet.",
      "contact-error-invalid-config": "The contact service configuration is invalid.",
      "contact-error-fields": "Check the fields: name, email, and message are required.",
      "contact-error-discord": "Discord could not receive the message. Please try again later.",
      "contact-error-connection": "Could not connect to Discord. Please try again later.",
      "contact-error": "The message could not be sent. Please try again.",
      "footer-text": "© 2026 CodeSphere — School web development project."
    }
  };

  var langToggle = document.querySelector(".lang-toggle");
  var quizFeedbackState = {};
  var quizResultState = null;
  var contactStatusKey = null;
  var contactErrorKeys = {
    "El servicio de contacto no está configurado todavía.": "contact-error-not-configured",
    "La configuración del servicio de contacto no es válida.": "contact-error-invalid-config",
    "Revisa los campos: nombre, correo y mensaje son obligatorios.": "contact-error-fields",
    "Discord no pudo recibir el mensaje. Inténtalo de nuevo más tarde.": "contact-error-discord",
    "No se pudo conectar con Discord. Inténtalo de nuevo más tarde.": "contact-error-connection"
  };
  function translated(key) {
    var language = document.documentElement.lang;
    return translations[language][key] || key;
  }
  function renderDynamicTranslations() {
    document.querySelectorAll(".question").forEach(function (question) {
      var state = quizFeedbackState[question.id];
      if (!state) { return; }
      var prefix = state === "empty" ? "quiz-unanswered" : state === "correct" ? "quiz-correct" : "quiz-incorrect";
      question.querySelector(".fb").textContent = translated(prefix) + " " + translated("quiz-answer-" + question.id);
    });
    if (quizResultState) {
      var state = quizResultState;
      document.getElementById("result").textContent =
        translated("quiz-score") + ": " + state.points + " / " + state.total + " (" + state.pct + "%) — " + translated(state.messageKey);
    }
    if (contactStatusKey) {
      var status = document.getElementById("contact-status");
      if (status) { status.textContent = translated(contactStatusKey); }
    }
  }
  function applyLanguage(language) {
    var current = translations[language] ? language : "es";
    document.documentElement.lang = current;
    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      var key = node.getAttribute("data-i18n");
      if (Object.prototype.hasOwnProperty.call(translations[current], key)) {
        node.textContent = translations[current][key];
      }
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (node) {
      var key = node.getAttribute("data-i18n-html");
      if (Object.prototype.hasOwnProperty.call(translations[current], key)) {
        node.innerHTML = translations[current][key];
      }
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (node) {
      var key = node.getAttribute("data-i18n-placeholder");
      if (Object.prototype.hasOwnProperty.call(translations[current], key)) {
        node.setAttribute("placeholder", translations[current][key]);
      }
    });
    if (langToggle) {
      langToggle.dataset.lang = current === "es" ? "en" : "es";
      langToggle.textContent = current === "es" ? "English" : "Español";
      langToggle.setAttribute("aria-label", current === "es" ? "Cambiar idioma a inglés" : "Cambiar idioma a español");
    }
    var navToggle = document.querySelector(".nav-toggle");
    if (navToggle) {
      navToggle.setAttribute("aria-label", current === "es" ? "Abrir menú" : "Open menu");
    }
    document.querySelectorAll(".nav img[alt]").forEach(function (image) {
      image.setAttribute("alt", current === "es" ? "Logo CodeSphere" : "CodeSphere logo");
    });
    renderDynamicTranslations();
    localStorage.setItem("codesphere-language", current);
  }

  if (langToggle) {
    langToggle.addEventListener("click", function () {
      var nextLanguage = langToggle.dataset.lang || "en";
      applyLanguage(nextLanguage);
      applyTheme(document.documentElement.getAttribute("data-theme") || "light");
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
      var isEnglish = document.documentElement.lang === "en";
      themeToggle.setAttribute("aria-pressed", String(isDark));
      themeToggle.textContent = isDark
        ? (isEnglish ? "☀ Light mode" : "☀ Modo claro")
        : (isEnglish ? "☾ Dark mode" : "☾ Modo oscuro");
      themeToggle.setAttribute("aria-label", isEnglish ? "Change color mode" : "Cambiar modo de color");
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
    function setContactStatus(key) {
      contactStatusKey = key;
      contactStatus.textContent = translated(key);
    }
    contactForm.addEventListener("submit", async function (e) {
      e.preventDefault();
      contactButton.disabled = true;
      setContactStatus("contact-sending");
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
          var errorKey = contactErrorKeys[result.error] || "contact-error";
          var error = new Error(errorKey);
          throw error;
        }
        setContactStatus("contact-sent");
        contactForm.reset();
      } catch (error) {
        setContactStatus(translations.es[error.message] ? error.message : "contact-error");
      } finally {
        contactButton.disabled = false;
        contactStatus.removeAttribute("aria-busy");
      }
    });
  }

  var form = document.getElementById("quiz-form");
  if (!form) { return; }
  var respuestas = {
    q1: "a",
    q2: "f",
    q3: "b",
    q4: "v",
    q5: "b",
    q6: "v",
    q7: "b",
    q8: "v"
  };
  var resultado = document.getElementById("result");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var puntos = 0, total = Object.keys(respuestas).length;
    Object.keys(respuestas).forEach(function (q) {
      var cont = document.getElementById(q);
      var marcada = form.querySelector('input[name="' + q + '"]:checked');
      cont.classList.remove("correct", "wrong", "empty");
      if (!marcada) {
        cont.classList.add("empty");
        quizFeedbackState[q] = "empty";
      } else if (marcada.value === respuestas[q]) {
        puntos++;
        cont.classList.add("correct");
        quizFeedbackState[q] = "correct";
      } else {
        cont.classList.add("wrong");
        quizFeedbackState[q] = "wrong";
      }
    });
    var pct = Math.round((puntos / total) * 100);
    var messageKey, clase;
    if (pct >= 80) { messageKey = "quiz-result-excellent"; clase = "good"; }
    else if (pct >= 50) { messageKey = "quiz-result-good"; clase = "mid"; }
    else { messageKey = "quiz-result-review"; clase = "bad"; }
    quizResultState = { points: puntos, total: total, pct: pct, messageKey: messageKey };
    resultado.className = "result show " + clase;
    renderDynamicTranslations();
    resultado.scrollIntoView({ behavior: "smooth", block: "center" });
  });
  form.addEventListener("reset", function () {
    quizFeedbackState = {};
    quizResultState = null;
    document.querySelectorAll(".question").forEach(function (c) {
      c.classList.remove("correct", "wrong", "empty");
      c.querySelector(".fb").textContent = "";
    });
    resultado.className = "result";
    resultado.textContent = "";
  });
});
