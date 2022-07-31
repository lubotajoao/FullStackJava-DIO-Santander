"use strict";
var pessoa = {
    nome: 'Mariana',
    idade: 23,
    profissao: 'desenvolvedora'
};
pessoa.idade = 38;
var andre = {
    nome: 'Paula',
    idade: 23,
    profissao: 'Desenvolvedor'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["Cantor"] = 3] = "Cantor";
})(Profissao || (Profissao = {}));
var vanessa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Atriz
};
var veronica = {
    nome: 'Veronica',
    idade: 23,
    profissao: Profissao.Desenvolvedora
};
var monica = {
    nome: 'Monica',
    idade: 23,
    materias: ['Geografia', 'Matematica', 'Historia']
};
function listar(lista) {
    for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
        var item = lista_1[_i];
        console.log('-', item);
    }
}
listar(monica.materias);
