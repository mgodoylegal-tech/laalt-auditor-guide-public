const modules = [
  {
    label: "Rol",
    title: "Que aporta una mirada legal-tecnica en auditoria",
    description:
      "Ubica al auditor como una capa de interpretacion y comunicacion entre hallazgo tecnico, riesgo organizacional y decision.",
  },
  {
    label: "Criterio",
    title: "Como ampliar la lectura mas alla del dato tecnico",
    description:
      "Propone una lectura publica y acotada para conectar evidencia, supervision, responsabilidad y necesidad de accion.",
  },
  {
    label: "Lenguaje",
    title: "Conceptos publicos para explicar mejor un hallazgo",
    description:
      "Introduce un vocabulario de trabajo claro para explicar hallazgos en un formato introductorio y ordenado.",
  },
]

const cases = [
  {
    label: "Caso",
    title: "Lenguaje tecnico que todavia no se vuelve decision",
    description:
      "Ejemplo breve sobre como un hallazgo puede estar bien descrito tecnicamente y aun asi ser inutil para direccion si no se traduce bien.",
  },
  {
    label: "Caso",
    title: "Evidencia suficiente pero seguimiento difuso",
    description:
      "Caso sintetico para mostrar que la calidad de la prueba no resuelve sola el problema si nadie conduce el cierre.",
  },
  {
    label: "Caso",
    title: "Exposicion sensible con impacto de negocio",
    description:
      "Caso publico de alto nivel pensado para mostrar cruce entre hallazgo, impacto organizacional y necesidad de respuesta.",
  },
]

function renderCards(targetId, items) {
  const root = document.getElementById(targetId)
  root.innerHTML = items.map((item) => `
    <article class="card">
      <span class="label">${item.label}</span>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </article>
  `).join("")
}

renderCards("modules", modules)
renderCards("cases", cases)
