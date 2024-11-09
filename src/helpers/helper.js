export function splitDate(date) {
  return date.split("-");
}

export function getMonthName(dateString) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[parseInt(dateString) - 1];
}

export function dateToNumber(date) {
  return parseInt(splitDate(date).join(""));
}

export function getCurrentDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Adding 1 because months are zero-based
  const date = String(currentDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${date}`;
}

function splitTimeInHrs(time) {
  const timingArr = time.split(":");
  return timingArr;
}

export function checkTimeShift(time) {
  const [hours, mints] = splitTimeInHrs(time);
  const hoursInt = parseInt(hours);

  if (hoursInt < 0 && hoursInt > 24) return "not a valid time";
  if (hoursInt === 12) return `${hours} PM`;
  if (hoursInt === 24) return `00:${mints} AM`;
  if (hoursInt < 12) return `${hoursInt}:${mints} AM`;
  if (hoursInt > 12) return `${hoursInt - 12}:${mints} PM`;
}
// console.log(checkShift("24:30:00"));

export function generatePopulatedFieldsUrlStr(arr) {
  let data = "?";
  function getInsertedFieldNameLink(arr) {
    let link;
    for (let i = 0; i < arr.length; i++) {
      link = `populate[${arr[i]}][populate]=*&`;
      data = data + link;
    }
    return data;
  }

  return getInsertedFieldNameLink(arr);
}

export function generatePopulatedFieldsUrlStr1(fields) {
  fields?.reduce((acc, item) => `${acc}populate[${item}][populate]=*&`, "");
}

export const generatePopulatedSearchedFields = (city, type, budget) => {
  let filters = [];
  let counter = 0;
  city?.forEach((city) => {
    filters.push(`filters[create_city][City_Name][$in][${counter}]=${city}&`);
    counter++;
  });

  type?.forEach((type) => {
    filters.push(`filters[sub_category][Title][$in][${counter}]=${type}&`);
    counter++;
  });

  return filters.join("");
};

export function formatIndianCurrency(price) {
  const crore = 10000000;
  const lakhs = 100000;

  if (price >= crore) {
    const number = price / crore;
    let amount = number.toFixed(2);
    return `${amount} cr`;
  }

  if (price > lakhs) {
    const number = price / lakhs;
    let amount = number.toFixed(2);
    return `${amount} L`;
  }
}
