export type Categoria = {
    titulo: string,
    imagemURL: string,
    descricao: string,
    path: string,
    fullImagemURL: string,
};

export type Ingrediente = {
    nome: string,
    imagemURL: string,
    path: string,
    id: number,
};

export type IngredienteReceita = {
    ingrediente: {
      nome: string;
      imagemURL: string;
    };
    quantidade: number;
    medicao: string;
};

export type Receitas = {
    id: number,
    nome: string,
    categoria: Categoria,
    descricao: string,
    ingredientes: {
        ingrediente: Ingrediente,
        quantidade: number,
        medicao: string,
    }[],
    imagensURL: string[],
    tempoDePreparacao: string,
    passos: string[],
    path: string,
    substituicoes: string[],
    conselhos: string[],
    visaoGeral: string,
    porcoes: number,
    videoId: string,
};