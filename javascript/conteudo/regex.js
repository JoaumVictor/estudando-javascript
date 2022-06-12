// Valida sea string tem formato de email
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

// Mínimo de oito caracteres, pelo menos uma letra e um número:
const passwordRegex1 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

// Mínimo de oito caracteres, pelo menos uma letra, um número e um caractere especial:
const passwordRegex2 =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

// Mínimo de oito caracteres, pelo menos uma letra maiúscula, uma letra minúscula e um número:
const passwordRegex3 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

// Mínimo de oito caracteres, pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial:
const passwordRegex4 =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Mínimo de 8 e máximo de 10 caracteres, pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial:
const passwordRegex5 =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
