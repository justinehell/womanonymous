import React from "react";
import "./blogList.css";

export default function FilteredBlog (props) {
    const title= props.articles.title;
    const content= props.articles.content;
    const imageArticles = props.articles.url; 
    console.log(imageArticles);
   

    return (
        <div id="filtered-blog">
            <h3>{title}</h3>
            {(imageArticles !== "" ? 
            <div className="image-blog"><img  alt="blog" src={imageArticles}/></div> :"")}
            <p>{content}</p>
        </div>
    )
}