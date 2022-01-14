import axios from "axios"
import { useEffect, useState } from 'react'
function NewsFeed() {

const [articles, setArticles] = useState(null)

    useEffect(() => {
        

        const options = {
            method: 'GET',
            url: 'https://localhost:8000/news',
        };
        
        axios.request(options).then((response) => {
            console.log(response.data);
            setArticles(response.data)

        }).catch((error) => {
            console.error(error);
        });
        
}, [])


const firstSeven = articles?.slice(0, 7);


    return (
        <div className="news-feed">
            {firstSeven?.map((article, _index) => (
                <p key = {_index}>{article.title}</p>
            ))}
            <p> NewsFeed</p>
        </div>
    )
}

export default NewsFeed
