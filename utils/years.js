let year = new Date().getFullYear();

let years = [];
let i;

for (i = 1956; i <= year; i++) {
  years.push({
    label: i,
    value: i,
  });
}

export default years;
