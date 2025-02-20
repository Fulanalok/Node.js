const x = 10

//checar se x eh um numero

if (!Number.isInteger(x)) {
    throw new Error('x nao eh um numero inteiro')
}

console.log('Continuando o codigo...')