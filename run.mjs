const heavyFunction = () => {
  [...new Array(334588)].map(() => "a")
}

const base = new Date().getTime();
console.log("start!");

heavyFunction();

console.log("end!", new Date().getTime() - base, "ms");



