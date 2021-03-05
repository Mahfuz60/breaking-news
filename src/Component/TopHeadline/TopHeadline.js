import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
    const[articles,setArticle]=useState([])
    useEffect(()=>{
        const url='https://newsapi.org/v2/top-headlines?country=us&apiKey=fe95c76214c64473b9ca3d70882106fe';
        fetch(url)
        .then(response =>response.json())
        .then(data =>setArticle(data.articles))


    },[])
    return (
        <div>
        <h1>Top Headline:{articles.length}</h1>
        {
            articles.map(article =><News article={article}></News>)
        }
            
        </div>
    );
};

export default TopHeadline;