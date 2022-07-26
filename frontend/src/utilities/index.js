export const formatNumber = (value) => {
  if (value > 1000000) {
    return round(value / 1000000, 2);
  }

  if (value >= 1000 && value < 1000000) {
    return round(value / 1000, 2);
  }

  return value;
};

export const round = (value, exp) => {
  if (typeof exp === "undefined" || +exp === 0) return Math.round(value);

  value = +value;
  exp = +exp;

  if (isNaN(value) || !(typeof exp === "number" && exp % 1 === 0)) return NaN;

  // Shift
  value = value.toString().split("e");
  value = Math.round(+(value[0] + "e" + (value[1] ? +value[1] + exp : exp)));

  // Shift back
  value = value.toString().split("e");
  return +(value[0] + "e" + (value[1] ? +value[1] - exp : -exp));
};
