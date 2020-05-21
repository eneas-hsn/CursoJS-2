// //rest
// const convidado={nome:'eneas', idade:16, endereço:'av x, n39'}

// const{nome, ...rest}=convidado

// console.log(nome,rest)

// const convidados=[
//  {nome:'eneas', idade:16, endereço:'av x, 32'},
//     {nome:'eneias', idade:18, endereço:'av x, 320'},
//     {nome:'enea', idade:17, endereço:'av x, 3'},
//     {nome:'enesio', idade:19, endereço:'av x, 2'}
// ]
// const [eneas, eneias,...rest]=convidados
// console.log(eneas)
// console.log(rest)


// const arr1=[1,2,3]
// const arr2=[4,5,6]
// const arr3=[...arr1,...arr2]
// console.log(arr3)

const convidados={nome:'eneas', idade:16, endereço:'av x, 32'}
    const novo={...convidados, idade:11}
    console.log(novo)
