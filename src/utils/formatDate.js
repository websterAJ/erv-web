export const formatDate = (dateString) => {
  const dateSplit = dateString.split("-");
  const date = { year: dateSplit[0], month: dateSplit[1], day: dateSplit[2] };
  const months = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  return `${date.day} de ${months[date.month - 1]} del ${date.year}`;
};
