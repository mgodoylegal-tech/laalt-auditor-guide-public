const modules = [
  {
    label: "Rol",
    title: "Que aporta una mirada legal-tecnica en auditoria",
    description:
      "Ubica al auditor como una capa de interpretacion y comunicacion entre hallazgo tecnico, riesgo organizacional y decision.",
    points: [
      "Amplia la lectura mas alla de la severidad tecnica.",
      "Conecta evidencia con supervision, responsabilidad y cierre.",
    ],
  },
  {
    label: "Criterio",
    title: "Como ampliar la lectura mas alla del dato tecnico",
    description:
      "Propone una lectura publica y acotada para conectar evidencia, supervision, responsabilidad y necesidad de accion.",
    points: [
      "Pregunta por impacto organizacional, no solo por falla tecnica.",
      "Ordena que seguimiento hace falta y quien debe conducirlo.",
    ],
  },
  {
    label: "Lenguaje",
    title: "Conceptos publicos para explicar mejor un hallazgo",
    description:
      "Introduce un vocabulario de trabajo claro para explicar hallazgos en un formato introductorio y ordenado.",
    points: [
      "Evita que el hallazgo quede encerrado en jerga tecnica.",
      "Mejora la forma en que una observacion llega a decision.",
    ],
  },
]

const criteria = [
  {
    label: "Criterio",
    title: "No mirar solo severidad",
    description:
      "Un hallazgo puede no ser extremo en severidad tecnica y aun asi revelar una brecha importante de supervision o control.",
    points: [
      "Importa que muestra sobre la calidad de gobierno.",
      "Importa si deja una obligacion difusa o sin conductor claro.",
    ],
  },
  {
    label: "Criterio",
    title: "Separar evidencia de cierre",
    description:
      "Que exista evidencia de un problema no significa que exista un camino claro de correccion o seguimiento.",
    points: [
      "La prueba puede ser buena y el cierre seguir siendo debil.",
      "Owner, fecha y condicion de cierre cambian la lectura.",
    ],
  },
  {
    label: "Criterio",
    title: "Traducir impacto",
    description:
      "La lectura mejora cuando el hallazgo se expresa en terminos de operacion, supervision, continuidad o capacidad de respuesta.",
    points: [
      "El impacto no siempre es inmediato, pero puede ser estructural.",
      "La traduccion correcta facilita decision y priorizacion.",
    ],
  },
]

const cases = [
  {
    label: "Caso",
    title: "Lenguaje tecnico que todavia no se vuelve decision",
    description:
      "Ejemplo breve sobre como un hallazgo puede estar bien descrito tecnicamente y aun asi ser inutil para direccion si no se traduce bien.",
    points: [
      "Lectura: falta pasar del dato tecnico al problema de gestion.",
      "Pregunta de cierre: quien necesita entender esto y para decidir que.",
    ],
  },
  {
    label: "Caso",
    title: "Evidencia suficiente pero seguimiento difuso",
    description:
      "Caso sintetico para mostrar que la calidad de la prueba no resuelve sola el problema si nadie conduce el cierre.",
    points: [
      "Lectura: la evidencia existe, pero el seguimiento no tiene conductor visible.",
      "Pregunta de cierre: que condicion concreta mostraria avance real.",
    ],
  },
  {
    label: "Caso",
    title: "Exposicion sensible con impacto de negocio",
    description:
      "Caso publico de alto nivel pensado para mostrar cruce entre hallazgo, impacto organizacional y necesidad de respuesta.",
    points: [
      "Lectura: el punto central no es solo la falla, sino su efecto operacional.",
      "Pregunta de cierre: que area debe asumir respuesta y en que plazo.",
    ],
  },
]

function renderCards(targetId, items) {
  const root = document.getElementById(targetId)
  root.innerHTML = items
    .map(
      (item) => `
    <article class="card">
      <span class="label">${item.label}</span>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      ${item.points ? `<ul>${item.points.map((point) => `<li>${point}</li>`).join("")}</ul>` : ""}
    </article>
  `,
    )
    .join("")
}

renderCards("modules", modules)
renderCards("criteria", criteria)
renderCards("cases", cases)
