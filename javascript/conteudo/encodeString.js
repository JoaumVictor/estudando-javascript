const encodeString = (string, number) => {
  if (!string || typeof string !== "string")
    return new Error(`geraToken esperava uma string e recebeu ${string}`);
  if (string.length < 5) return new Error("Tamanho de string inválido");
  const arrayString = string.split("").sort();
  let token = "";
  arrayString.forEach((each, i) => {
    const x = each === " " ? "" : each;
    if (i % 2 === 0)
      return (token +=
        x + Math.floor(Math.random() * i + (Math.random() * 40) / 2));
    token += x + Math.floor((Math.random() * i * 55) / 2);
  });
  return token
    .split("")
    .reverse()
    .join("")
    .slice(0, typeof number === "number" ? number : 12);
};

console.log(encodeString("vitinho"));
console.log(encodeString("vitinho", 6));

// Essa função espera uma string obrigatória de no minimo 5 caracteres, e aceita um segundo valor opcional com a quantidade de caracteres que ele retorna!
