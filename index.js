function printletter(alpha){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(alpha);
            resolve(alpha)
        },2000)
            
    })

}
async function printvariables(){
    await printletter("1")
    await printletter("2")
    await printletter("3")
    await printletter("4")
    await printletter("5")

}
printvariables()
