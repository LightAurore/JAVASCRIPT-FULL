
console.read = function(){
    return new Promise((resolve, reject) =>{
        process.stdin.on('readable', () =>{
            const readBuffer = process.stdin.read()

            let str = readBuffer.toString().slice(0,-1)

            return resolve(str)
        })
    })
}