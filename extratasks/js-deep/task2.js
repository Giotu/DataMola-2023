/* eslint-disable no-shadow */
function add(a, b) {
  if (arguments.length === 2) {
    return a + b;
  }
  return function (b) {
    return a + b;
  };
}
function sub(a, b) {
  if (arguments.length === 2) {
    return a - b;
  }
  return function (b) {
    return b - a;
  };
}
function mul(a, b) {
  if (arguments.length === 2) {
    return a * b;
  }
  return function (b) {
    return a * b;
  };
}
function div(a, b) {
  if (arguments.length === 2) {
    return a / b;
  }
  return function (b) {
    return b / a;
  };
}

const a = add(1, 2);
console.log(a);

const b = mul(a, 10);
console.log(b);

const sub1 = sub(1);
const c = sub1(b);
console.log(c);

const d = mul(sub(a, 1))(c);
console.log(d);

function pipe(...args) {
  return function (x) {
    return args.reduce((prev, curr) => curr(prev), x);
  };
}

const x = pipe(add(1), mul(2))(3);

console.log(x);

const doSmth = pipe(add(d), sub(c), mul(b), div(a));

console.log(doSmth(0));
