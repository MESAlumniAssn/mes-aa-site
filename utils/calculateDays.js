const calculateDays = (date) => {
  var daysToRegistration;
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  const registrationDate = new Date(date);
  registrationDate.setHours(0, 0, 0, 0);

  daysToRegistration = registrationDate.getTime() - currentDate.getTime();

  return parseInt(daysToRegistration / (1000 * 60 * 60 * 24));
};

const formatDate = (date) => {
  let posted = new Date(date);
  posted = posted.toDateString().split(" ");
  return posted[1] + " " + posted[2] + ", " + posted[3];
};

export { calculateDays, formatDate };
