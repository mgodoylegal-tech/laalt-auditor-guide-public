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
    title: "Un acceso privilegiado existe, pero nadie explica por que sigue activo",
    description:
      "El problema no es solo que exista el acceso. El problema es que no aparece una justificacion visible sobre necesidad, revision ni permanencia.",
    points: [
      "Lectura: el hallazgo revela una brecha de supervision, no solo una configuracion cuestionable.",
      "Lo que cambia la calidad del analisis: preguntar quien revisa, con que frecuencia y bajo que criterio de continuidad.",
      "Pregunta de cierre: que evidencia mostraria que ese acceso sigue siendo razonable hoy.",
    ],
  },
  {
    label: "Caso",
    title: "La evidencia del problema existe, pero el cierre no tiene conductor",
    description:
      "Hay registros, capturas o validaciones suficientes para sostener el hallazgo. Aun asi, nadie puede decir con claridad quien conduce el cierre y como se medira el avance.",
    points: [
      "Lectura: evidencia y remediacion son planos distintos; una buena prueba no reemplaza un buen seguimiento.",
      "Lo que cambia la calidad del analisis: distinguir entre demostrar el problema y gobernar su correccion.",
      "Pregunta de cierre: que condicion concreta, con owner y fecha, mostraria avance real.",
    ],
  },
  {
    label: "Caso",
    title: "La falla tecnica parece acotada, pero su efecto operativo no lo es",
    description:
      "Una observacion tecnica puede parecer menor en aislamiento, pero volverse relevante cuando afecta continuidad, tiempos de respuesta o capacidad de investigacion.",
    points: [
      "Lectura: el punto central no es la falla en si misma, sino la fragilidad organizacional que deja expuesta.",
      "Lo que cambia la calidad del analisis: traducir el hallazgo a impacto de operacion, supervision o respuesta.",
      "Pregunta de cierre: que area debe asumir respuesta primero y que urgencia tiene hacerlo.",
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
