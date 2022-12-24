async function listaVideos() {
    const url = 'http://localhost:3000/videos'
    const conexao = await fetch(url)
    const conexaoConvertida = await conexao.json()

    return conexaoConvertida
}

export const conectaApi = {
    listaVideos
}