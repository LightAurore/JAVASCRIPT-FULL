export const IndexarrayUtils = (arr,id) => {
    let i = 0
        let index;
        
        arr.forEach(t => {
            if((t.id) === id){
                index = i;
            }
            i++;
        })

        return index;
}

