//унікальний інтерфейс

/* interface List {
  [key: string]: number | null;
}

const fruits: List = {
  apples: 10,
  banana: 35,
  apple: 24,
  peach: null,
}; */

//generics

/* function getFirstElement<T>(array: T[]): T | undefined {
  return array[0];
}

console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement(["4", "5", "6"])); */

//get element by index
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = {
  name: "John",
  age: 30,
  city: "Kyiv",
};

const name = getProperty(person, "age");
console.log(name);
