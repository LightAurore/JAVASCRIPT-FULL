import axios from 'axios';
// const key = "2f9efc0863754308b307411efafff532";

 export const newsWorldService : Promise<{ articles: { source: string; author: string; title: string; description: string; urlToImage: string; publishedAt: string; content: string; }[]; }>  = async ()=> {
    let fetchData : [];

    console.log("j'y suis, la request");
    

    try {
        const { data }= await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=2f9efc0863754308b307411efafff532`);

        fetchData = data.articles;
        console.log("-----------fetchData ---------------");
        console.dir(fetchData);
        console.log("-----------fetchData ---------------");
        

      } catch (error) {
        if (axios.isAxiosError(error)) {
          handleAxiosError(error);
        } else {
          handleUnexpectedError(error);
        }
      }
      let articles : {
        source: string;
        author: string;
        title: string;
        description: string;
        urlToImage: string;
        publishedAt: string;
        content: string;
    }[] = [];

      for (let index = 0; index < fetchData.length; index++) {
        const element = fetchData[index];
        const art_1: {
          source: string;
          author: string;
          title: string;
          description: string;
          urlToImage: string;
          publishedAt: string;
          content: string;
      } = {
          source: element.source.name,
          author: element.author,
          title: element.title,
          description: element.description,
          urlToImage: element.urlToImage,
          publishedAt: element.publishedAt,
          content: element.content
        }

        articles = [...articles, art_1]

        
      }

      // const art_1 = {
      //   source: fetchData.source.name,
      //   author: fetchData.author,
      //   title: fetchData.title,
      //   description: fetchData.description,
      //   urlToImage: fetchData.urlToImage,
      //   publishedAt: fetchData.publishedAt,
      //   content: fetchData.content
      // }
      // console.log('-----------------------------');
      
      
      
    // return articles;
  }