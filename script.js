// 1 - crie uma função que exiba uma mensagem no console

// 2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

// 3 - crie uma função que receba seu nome, idade, e estilo musical preferido (parâmetros) e exiba no console

// 4 - crie uma função que receba o seu filme favorito, musica favorita (parâmetros) e exiba no console

// 5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

// 1 - crie uma função que exiba uma mensagem no console

/* function nome (){
    tarefa
} */

function musica(){
    console.log("O player está ativo")
}

musica()

// 2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function cadastro(nome){
    console.log(`Meu nome é ${nome}`)
}

cadastro("Rodrigo")

// 3 - crie uma função que receba seu nome, idade, e estilo musical preferido (parâmetros) e exiba no console

function perfil(nome,idade, estiloMusical){
    console.log(`Meu nome é ${nome}, tenho ${idade} anos de idade e se tratando de música adoro escutar ${estiloMusical}` )
}

perfil("Rodrigo", 26, "músicas lentas e instrumentais" )

// 4 - crie uma função que receba o seu filme favorito, musica favorita (parâmetros) e exiba no console

function favoritos(filme, musica){
    console.log(`Meu filme favorito é ${filme} e minha música favorita é ${musica}.`) 
}

favoritos("Meu Amigo Fela, Joel Zito Araújo, 2019", "Onda, Cassiano, 1977")

// 5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function triplo(number){
    return number * 3
}

let result = triplo (10)

console.log(result)



 
