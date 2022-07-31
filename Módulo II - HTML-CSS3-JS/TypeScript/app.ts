const pessoa = {
	nome: 'Mariana',
	idade: 23,
	profissao: 'desenvolvedora'
}

pessoa.idade = 38;

const andre: { nome: string, idade: number, profissao: string } = {
	nome: 'Paula',
	idade: 23,
	profissao: 'Desenvolvedor'
}

enum Profissao {
	Professora,
	Atriz,
	Desenvolvedora,
	Cantor
}

interface Pessoa {
	nome: string,
	idade: number,
	profissao?: Profissao
}

interface Estudante extends Pessoa {
	materias: string[]
}

const vanessa: Pessoa = {
	nome: 'Vanessa',
	idade: 23,
	profissao: Profissao.Atriz
}

const veronica: Pessoa = {
	nome: 'Veronica',
	idade: 23,
	profissao: Profissao.Desenvolvedora
}

const monica: Estudante = {
	nome: 'Monica',
	idade: 23,
	materias: ['Geografia', 'Matematica', 'Historia']
}

function listar(lista: string[]) {
	for (const item of lista) {
		console.log('-', item)
	}
}

listar(monica.materias);