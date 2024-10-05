import React,{useState,useEffect} from 'react'

function TechNews() {
  const[news, setNews] = useState([])
  const[error,setError] = useState(null)
  const[loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchNews = async () => {
      const apiURL = `https://newsapi.org/v2/top-headlines?category=technology&apiKey=44c6b76305bb43bb8518cf0dc9ffcaca`

      try {
        const response = await fetch(apiURL)
        console.log(response)
        if(!response.ok){
          throw new error("Failed to fetch tech news")
        }
        const data = await response.json()
        setNews(data.articles);
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)        
      }
    };
    fetchNews()
  }, [])

  if(loading){
    return <div>Loading Tech News....</div>
  }

  if(error){
    return <div>Error: {error}, connect to internet</div>
  }


  return (
    <div>
      <h1>Tech News</h1>
      <ul>
        {news.map((article, index) =>(
          <li key={index}>
            <img src={article.urlToImage} alt="" />
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url} target='_blank'>Read More</a>
            <p>{article.publishedAt}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TechNews