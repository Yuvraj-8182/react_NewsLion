import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
   
    constructor(){
        super();
        this.state ={
        articles:[],
        loading:false,
        page:1
        }
    }
 handleprevclick =  async ()=>{
    let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=011f37d4e8e6460ea897925a54dc526a&page=${this.state.page11}&pageSize=20`;
    let data =await fetch(url);
    let parsedata = await data.json();
    this.setState({
        page:this.state.page-1,
        articles:parsedata.articles
    })   
    }
  handlenextclick =  async ()=>{
        if(this.state.page+1>Math.ceil(this.state.totalResults/20))
        {

        }
        else
        {
        let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=011f37d4e8e6460ea897925a54dc526a&page=${this.state.page+1}&pageSize=20`;
        let data =await fetch(url);
        let parsedata = await data.json();
        this.setState({
            page:this.state.page+1,
            articles:parsedata.articles
        })
      }
    }

   async componentDidMount(){
        let url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=011f37d4e8e6460ea897925a54dc526a&page=1&pageSize=20";
        let data =await fetch(url);
        let parsedata = await data.json();
        this.setState({articles:parsedata.articles,totalResults:parsedata.totalResults})
    }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsLion --Top Headlines</h2>
        
        <div className='row'>
        {this.state.articles.map((element)=>{
            return  <div className="col-md-4" key={element.url}>
                    <Newsitem  title={element.title?element.title:""} description={element.description?element.description:""} 
                    imageurl={element.urlToImage} newsurl={element.url}/>
        </div>
        })}  
      
        </div>
        <div className='container d-flex justify-content-between'>
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleprevclick}>&larr; Previous</button>
        <button  type="button" className="btn btn-dark" onClick={this.handlenextclick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News

