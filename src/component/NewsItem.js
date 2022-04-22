import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div  className="card" style={{width: "18rem"}}>
        <img src={!imageUrl?"https://c.ndtvimg.com/2022-04/99281pq8_alia-bhatt_625x300_12_April_22.jpg":imageUrl} className="card-img-top" alt="..."/>
        <div  className="card-body">
          <h5  className="card-title">{title}</h5>
          <p  className="card-text">{description}</p>
          <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark  btn-outline-warning">Read More</a>
        </div>
</div>

      </div>
    )
  }
}

export default NewsItem