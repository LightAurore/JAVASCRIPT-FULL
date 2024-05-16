console.read = function() {
    return new Promise((resolve, reject) => {
        process.stdin.on('readable', () => {
            const readBuffer = process.stdin.read()

            return resolve(readBuffer.toString())
        })
    })
}