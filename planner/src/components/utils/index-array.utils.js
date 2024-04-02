export const IndexarrayUtils = (arr,id) => {
        let index;
        
        arr.forEach((t,i) => {
            if((t.id) === id){
                index = i;
            }

        })

        return index;
}

