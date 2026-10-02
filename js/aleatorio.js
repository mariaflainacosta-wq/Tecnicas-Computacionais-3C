const nomes = ["Camila", "Vitoria", "Joao", "Roberto", "Araldi", "Henrique", "Enzo"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)