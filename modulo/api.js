import { contatos } from "./contatos.js";


export const listarContatos = function(id) {
    const dados = contatos["whats-users"][id].contacts;
    let array = [];
    return (array = dados);
};

console.log(listarContatos(1));

// module.exports = {
//   listarContatos,
// };