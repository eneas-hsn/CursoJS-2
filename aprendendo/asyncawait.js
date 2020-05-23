const promisse=()=>{
    return new Promise((resolve ,reject)=>{setTimeout(()=>{
        resolve('pronto')
    },2000)})
}
console.log('start')
promisse().then(res=>{
    console.log(res)
})
console.log('end')