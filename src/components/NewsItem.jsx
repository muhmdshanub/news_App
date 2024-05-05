import React from "react";
import news_image from './../assets/news.jpg'

const NewsItem = ({news}) => {

    const {title, description, urlToImage, url, content, author, publishedAt} = news;

  return (
   (title != '[Removed]' || description != '[Removed]') && <div className="card bg-dark text-light mb-3 d-inline-block m-3 p-2" style={{ maxWidth: '345px '}}>
      <img src={urlToImage? urlToImage : news_image} style={{height:'200px', width:'100%'}} className="card-img-top" alt={title}/>
      <div className="card-body" >
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">
          {description ? description.slice(0,100) + " ..." : "Please click on the Read More button to know more about this news."}
        </p>
        <a href={url} className="btn btn-primary">
          Read More...
        </a>
      </div>
    </div>
    
  );
};

export default NewsItem;
