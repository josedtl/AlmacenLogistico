export const GetCategoria = async () => {
    const res = await fetch('http://192.168.18.19:9085/api/Categoria/GetItems/')
    const data = await res.json()
    return data.Value
}