let estaChovendo: boolean = false

estaChovendo = true;

let idade: number = 18;

let altura: number = 1.75;

const nacionalidade: string = 'Brasileira';

// Arrays no TypeScript  //

const colegas: string[] = ['lucas', 'fernanda'];
const tecnologias: Array<string> = ['html', 'css', 'js'];

const notas: ReadonlyArray<number> = [7, 9, 5, 8]; // ReadonlyArray é um Array de leitura, neste array não tem a função push //

const lista: [nome: string, estaEstudando: boolean, idade: number] = ['gian', true, 18] // cúpulas //

let idadeDaAna: number | string = 25
idadeDaAna = '25 anos';

let dadosDaApi: any;
dadosDaApi = 10;
dadosDaApi = true;
dadosDaApi = [1, 2, 3];
dadosDaApi = 'string'

let curso = 'front-end'