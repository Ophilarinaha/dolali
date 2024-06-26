function convertDateFormat(inputDate, newFormat) {
  const dateParts = inputDate.split("-");
  const year = dateParts[0];
  const month = dateParts[1];
  const day = dateParts[2];
  
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const monthName = months[parseInt(month) - 1];
  
  if (newFormat === "DateFormat2") {
    return day + "-" + monthName + "-" + year;
  }
}

const inputDate = "2024-01-29";
const newDateFormat = "DateFormat2";
const convertedDate = convertDateFormat(inputDate, newDateFormat);
popclip.pasteText(convertedDate); // "29-Jan-2024"
