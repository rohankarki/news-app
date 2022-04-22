import { waitForElementToBeRemoved } from '@testing-library/react';
import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  constructor(){
    super();
    this.state = {
      articles: [],
      laoding: false,
      page:1,

    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=f5fe4472b9b944f3b582e23e2ccfc5ac&page=1pageSize=20 ";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(data);
    this.setState({articles: parsedData.articles,totalArticles: parsedData.totalResults})
  }

  handleNextClick =  async()=>{
    console.log("Next");
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

    }
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=f5fe4472b9b944f3b582e23e2ccfc5ac&page=${this.state.page + 1}&pageSize=20 `;
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
      })
    } 
  }

handlePrevClick =  async()=>{
    console.log("previous");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=f5fe4472b9b944f3b582e23e2ccfc5ac&page=${this.state.page - 1}&pageSize=20 `;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })
  }

  render() {
    return (
      <div className='container my-3'>
        <h2 className="text-primary">NEWS APP - Top Headlines</h2>
        
        <div className='row'>
        {this.state.articles.map ((element)=>{
           return <div className='col-md-4' key={element.url}>
           <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl ={element.url}/>
           </div>
        })}
          </div> 
          <div className="container d-flex justify-content-between">
          <button disabled ={this.state.page<=1} type="button" className="btn btn-sm btn-dark  btn-outline-warning" onClick={this.handlePrevClick} > &larr; Previous</button>
          <button type="button" className="btn btn-sm btn-dark  btn-outline-warning" onClick={this.handleNextClick} >Next &rarr;</button>
          </div>
      </div>
    )
  }
}