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