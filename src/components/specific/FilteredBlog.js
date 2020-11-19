import React from "react";

export default function FilteredBlog (props) {
    const title= props.articles.title;
    const content= props.articles.content
   

    return (
        <div id="filtered-blog">
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    )
}