
/**
 * 
 * @param {string} url 
 * @param {AxiosEventInit} options 
 */
export function useAxios(url,options) {


    await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&type=video&part=snippet&maxResults=5&q=${location}`)
        .then(resp => {
            console.log(resp.status)
            console.log(resp.fileDetails)
        })
        .catch((err) =>{
            console.log(err);
        })
    }

}