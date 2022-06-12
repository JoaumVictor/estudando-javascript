interface Isoma {
  array: number[];
  int: number;
}

function soma2(obj: Isoma) {
  const result = obj.array.find((each: number) => each === obj.int);
  if (!result) throw new Error("Deu merda");
  return result;
}

console.log(soma2({ array: [1, 2, 3], int: 3 }));
