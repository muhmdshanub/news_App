import {useEffect, useState} from 'react';
import NewsItem from './NewsItem';
const apiKey = import.meta.env.VITE_NEWS_API_KEY;


const NewsBoard = ({category}) => {

    const [articles, setArticles] = useState([]);
    const [url, setUrl] =useState('');

    useEffect(()=>{
        if(category){
            setUrl(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`)
        }else{
            setUrl(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
        }
    },[category])

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to fetch articles');
                }
                const data = await response.json();
                setArticles(data.articles);
            } catch (error) {
                console.error('Error fetching articles:', error.message);
            }
        };

        fetchArticles();
    }, [url]);



  return (
    <div>
        <h2 className='text-center'>Latest <span className='badge bg-danger py-2'>News</span></h2>
        {articles.map((article)=>{
            return <NewsItem key={article.description} news={article} />
        })}
    </div>
  )
}

export default NewsBoard