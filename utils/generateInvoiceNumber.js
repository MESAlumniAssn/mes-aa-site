const generateInvoiceNumber = (id) => {
  switch (id.length) {
    case 1:
      return "MES00" + id;
    case 2:
      return "MES0" + id;
    default:
      return "MES" + id;
  }
};

export default generateInvoiceNumber;
