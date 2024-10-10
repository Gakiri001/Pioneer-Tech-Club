import React,{useState,useEffect} from 'react'
import "./TechNews.css"

function TechNews() {
  const[news, setNews] = useState([])
  const[error,setError] = useState(null)
  const[loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchNews = async () => {
      const apiURL = `https://newsapi.org/v2/top-headlines?category=technology&apiKey=44c6b76305bb43bb8518cf0dc9ffcaca`

      try {
        setLoading(true)
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
    <div className='news'>
      <div className='NewsHeader'><h1>Tech News</h1></div>
      <ul>
        {news
        .filter(article => article.urlToImage && article.title && article.description)
        .map((article, index) =>(
          <li key={index}>
            <img src={article.urlToImage} alt={article.title}/>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url} target='_blank'>Read More</a>
            <p>{ new Date(article.publishedAt).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TechNews