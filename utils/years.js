const fromYears = () => {
  let year = new Date().getFullYear();

  let years = [];
  let i;

  for (i = 1956; i <= year; i++) {
    years.push({
      label: i,
      value: i,
    });
  }

  return years;
};

const toYears = (selectedFromYear) => {
  let year = new Date().getFullYear();

  let years = [];
  let i;

  for (i = parseInt(selectedFromYear); i <= year; i++) {
    years.push({
      label: i,
      value: i,
    });
  }

  return years;
};

export { fromYears, toYears };
