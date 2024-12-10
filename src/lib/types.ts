type Categoria = {
    titulo: string,
    imagemURL: string,
    descricao: string,
    path: string,
    fullImagemURL: string,
};

type Ingrediente = {
    nome: string,
    imagemURL: string,
};

type Receitas = {
    nome: string,
    categoria: Categoria,
    descricao: string,
    ingredientes: {
        ingrediente: Ingrediente,
        quantidade: number,
        medicao: string,
    }[],
    imagemURL: string,
    tempoDePreparacao: string,
    passos: string[],
    path: string,
    substituicoes: string[],
    conselhos: string[],
    visaoGeral: string,
    porcoes: number,
};