const promisse=()=>{
    return new Promise((resolve ,reject)=>{setTimeout(()=>{
        resolve('pronto')
    },2000)})
}
console.log('start')
promisse().then(res=>{
    console.log('exem1', res)
})
async function outrapormisse() {
    const res= await promisse()
    console.log('ex',res)
}
 const xpromise=async()=> {
    const res= await promisse()
    console.log('ex3',res)
}
outrapormisse()
xpromise()
console.log('end')