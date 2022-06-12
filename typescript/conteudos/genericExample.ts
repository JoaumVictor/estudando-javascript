function soma<T>(array: T[], int: T): T {
  const result = array.find((each: T) => each === int);
  if (!result) throw new Error("Deu merda");
  return result;
}

console.log(soma<number>([1, 2, 3], 3));
