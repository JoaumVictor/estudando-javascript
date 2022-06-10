// preciso adicionar varios objetos de dados em um array, porém n posso repetir o username

const users = [
  {
    name: "Victor",
    last_name: "Fausto",
    username: "Bescoito",
    user_id: "811t01s001o5",
  },
  {
    name: "João",
    last_name: "Silva",
    username: "Pasip",
    user_id: "91s22p91p31i",
  },
  {
    name: "Adson",
    last_name: "Reis",
    username: "Baianor",
    user_id: "01r19o3n74i2",
  },
  {
    name: "Vitor",
    last_name: "Belarmino",
    username: "Vitinho",
    user_id: "31v93t11o82n",
  },
  {
    name: "Adson",
    last_name: "Reis",
    username: "Baianor",
    user_id: "01r19o3n74i2",
  },
  {
    name: "Vitor",
    last_name: "Belarmino",
    username: "Vitinho",
    user_id: "31v93t11o82n",
  },
  {
    name: "Adson",
    last_name: "Reis",
    username: "Baianor",
    user_id: "01r19o3n74i2",
  },
  {
    name: "Vitor",
    last_name: "Belarmino",
    username: "Vitinho",
    user_id: "31v93t11o82n",
  },
  {
    name: "Adson",
    last_name: "Reis",
    username: "Baianor",
    user_id: "01r19o3n74i2",
  },
  {
    name: "Vitor",
    last_name: "Belarmino",
    username: "Vitinho",
    user_id: "31v93t11o82n",
  },
];

const imprimeTudo = () => {
  const database = new Map();
  users.forEach((each) => database.set(each.user_id, each));
  let newArray = [];
  Array.from(database).forEach((each) => newArray.push(each[1]));
  return newArray;
};

console.log(imprimeTudo());

// por mais que o array users tenha diversos objetos repetidos, nenhum objeto com o mesmo user_id irá ser adicionado ao meu database!
// na linha 67 eu crio um map, na linha 68 eu alimento esse map passando como parametro para ser adicionado o user_id
// na linha 69 eu crio um array vazio, na linha 70 eu percorro meu map e adiciono os valores já filtrados no meu array, em seguida retorno o array!
