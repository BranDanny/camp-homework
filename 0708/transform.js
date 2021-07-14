const SIGNS =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-+".split("");

function transform10To64(num) {
  let result = [];

  let div = num;

  while (div > 63) {
    result.push(SIGNS[div % 64]);
    div = Math.floor(div / 64);
  }

  result.push(SIGNS[div]);

  return result.reverse().join("");
}

function transform64To10(codes) {
  let result = 0;

  codes
    .split("")
    .reverse()
    .forEach((code, index) => {
      const base = SIGNS.findIndex((element) => element === code);
      result += base * Math.pow(64, index);
    });

  return result;
}
