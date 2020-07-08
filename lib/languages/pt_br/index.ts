interface TranslateData {
  day: {
    singular: string,
    plural: string
  };
  week: {
    singular: string,
    plural: string,
    weekDay: Array<string>
  }
}

const data = {
  day: {
    singular: "dia",
    plural: "dias"
  }, 
  week: {
    singular: "semana",
    plural: "semanas",
    weekDay: [
      "domingo",
      "segunda",
      "terça",
      "quarta",
      "quinta",
      "sexta",
      "sábado"
    ]
  },
  month: {
    singular: "mês",
    plural: "mêses",
    months: [
      "janeiro",
      "fevereiro",
      "março",
      "abril",
      "maio",
      "junho",
      "julho",
      "agosto",
      "setembro",
      "outubro",
      "novembro",
      "dezembro"
    ]
  }, 
  ano: {
    singular: "ano",
    plural: "anos"
  }, 
  hour: {
    singular: "hora",
    plural: "horas"
  }, 
  minute: {
    singular: "minuto",
    plural: "minutos"
  }, 
  second: {
    singular: "segundo",
    plural: "segundos"
  }
}