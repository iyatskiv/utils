function fixFloat(number, fractionDigits = 8) {
  if (typeof number === 'string') {
    number = parseFloat(number);
  }

  return Number(number.toFixed(fractionDigits));
}

export default fixFloat;
