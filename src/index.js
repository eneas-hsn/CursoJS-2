const promise=()=>{
    return new Promise((resolve ,reject)=>{setTimeout(()=>{
        resolve('pronto')
    },2000)})
}
console.log('start')
promise().then(res=>{
    console.log('exem1', res)
})
async function outrapormisse() {
    const res= await promise()
    console.log('ex',res)
}
 const xpromise=async()=> {
    const res= await promise()
    console.log('ex3',res)
}
outrapormisse()
xpromise()
console.log('end')