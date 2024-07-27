import React from "react";

const NewsItem=(props)=>{

    //this is called destructuring
    let { title, description, imageUrl, newsUrl,author,date ,source} = props;

    return (
      <div className="my-4">
        <div className="card" style={{ width: "17rem" }}>
          <img src={imageUrl?imageUrl:"https://imgeng.jagran.com/images/2024/feb/elon-musk-tesla1708242962445.jpg"} 
          className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}<span class="position-absolute top-0 start-100 translate-middle badge rounded-ill bg-danger">{source}</span></h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small class="text-danger">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a
            rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-xs btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
