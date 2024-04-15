
/**
 * 
 * @param {string} url 
 * @param {AxiosEventInit} options 
 */
export function useAxios(url,options) {


    await axios.get(url,{
        
    })
        .then(resp => {
            console.log(resp.status)
            console.log(resp.fileDetails)
        })
        .catch((err) =>{
            console.log(err);
        })
    }

}