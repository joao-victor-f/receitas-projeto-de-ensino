
export function formatarTempo(tempo: string): string {
  // Divide a string de tempo em horas, minutos e segundos
  const [horas, minutos, segundos] = tempo.split(":").map(Number);

  // Caso os minutos e segundos sejam zero, retorna apenas horas
  if (horas > 0 && minutos === 0 && segundos === 0) {
    return `${horas} hora${horas > 1 ? 's' : ''}`;
  }

  // Caso as horas sejam zero, retorna apenas minutos
  if (minutos > 0 && horas === 0 && segundos === 0) {
    return `${minutos} minuto${minutos > 1 ? 's' : ''}`;
  }

  // Se tiver horas e minutos
  if (horas > 0 && minutos > 0) {
    return `${horas} hora${horas > 1 ? 's' : ''} e ${minutos} minuto${minutos > 1 ? 's' : ''}`;
  }

  // Caso tenha apenas minutos (quando segundos são diferentes de zero, mas não influenciam na exibição)
  return `${minutos} minuto${minutos > 1 ? 's' : ''}`;
}

export const pluralizeMedicao = (medicao: string, quantidade: number): string => {
  switch (medicao) {
    case 'kg':
      return quantidade > 1 ? 'kgs' : 'kg';
    case 'unidad':
      return quantidade > 1 ? 'unidades' : 'unidad';
    case 'cucharada':
      return quantidade > 1 ? 'cucharadas' : 'cucharada';
    case 'cucharadita':
      return quantidade > 1 ? 'cucharaditas' : 'cucharadita';
    case 'gramo':
      return quantidade > 1 ? 'gramos' : 'gramo';
    case 'taza':
      return quantidade > 1 ? 'tazas' : 'taza';
    default:
      return medicao;
  }
};

export const formatarIngrediente = (ingrediente: IngredienteReceita): string => {
  const { quantidade, medicao, ingrediente: { nome } } = ingrediente;
  const medicaoPlural = pluralizeMedicao(medicao, quantidade);
  return `${quantidade} ${medicaoPlural} de ${nome}`;
};

export const generatePath = (section: string, name: string): string  => {
  // Converter para minúsculas, substituir espaços por underscores, e remover caracteres especiais
  const slug = name
    .toLowerCase()
    .replace(/\s+/g, '_') // Substitui espaços por underscores
    .replace(/[^a-z0-9_]/g, ''); // Remove caracteres especiais

  // Adiciona um número aleatório ao final para garantir unicidade
  const uniqueId = Math.floor(Math.random() * 1000000);

  // Retorna o path no formato desejado
  return `/${section}/${slug}${uniqueId}`;
}

export const formatarHorario = (hora, minuto) => {
  // Adiciona zero à esquerda se a hora ou minuto forem menores que 10
  const horaFormatada = hora < 10 ? `0${hora}` : hora;
  const minutoFormatado = minuto < 10 ? `0${minuto}` : minuto;
  
  // Retorna a hora no formato desejado
  return `${horaFormatada}:${minutoFormatado}:00`;
}

export const extrairHorasMinutos = (horaString) => {
  // Verifica se a string está no formato esperado
  const regex = /^(\d{2}):(\d{2}):00$/;
  const resultado = horaString.match(regex);

  if (resultado) {
    const horas = parseInt(resultado[1], 10);  // Extrai as horas
    const minutos = parseInt(resultado[2], 10);  // Extrai os minutos
    return { horas, minutos };
  } else {
    throw new Error('Formato de hora inválido. Use o formato {hh}:{mm}:00');
  }
}

export const gerarIdNumerico = (tamanho = 6) => {
  let id = '';
  for (let i = 0; i < tamanho; i++) {
      id += Math.floor(Math.random() * 10); // Gera um número aleatório de 0 a 9
  }
  return parseInt(id);
}