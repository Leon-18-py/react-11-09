import SegundoComponente from "./SegundoComponente"

function HelloWorld(){

    const pessoa = {
        nome: "Me chamo Léon",
        idade: 19,
        hobby: "jogo videogame"
    }
    
    return <div>
        <h1>{pessoa.nome}, idade {pessoa.idade}, {pessoa.hobby}</h1>
        <SegundoComponente></SegundoComponente>
    </div>
}

export default HelloWorld