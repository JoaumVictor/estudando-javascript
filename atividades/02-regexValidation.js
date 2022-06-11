const emailValidation = (email) => {
  const validateEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return validateEmail.test(email);
};
// valida se o formato é um email

const passwordValidation = (password) => {
  const validatePassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return validatePassword.test(password);
};
// tem que ter uma letra, tem que ter um numero, tem que ter no minimo 8 caracteres

const emailAndPasswordValidation = (email, password) => {
  if (
    typeof email !== "string" ||
    typeof password !== "string" ||
    !email ||
    !password
  ) {
    return console.log("Parâmetros inválidos!");
  }
  if (!emailValidation(email) || !passwordValidation(password)) {
    return console.log("Email ou senha inválidos!");
  }
  return console.log("Validação okey!");
};

emailAndPasswordValidation("jaso@lin.com", "joaovict22");
