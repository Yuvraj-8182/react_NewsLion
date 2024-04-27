import React, { Component } from 'react'

export class Newsitem extends Component {
   
  render() {
   let {title,description,imageurl,newsurl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width:"18rem"}}>
            <img src={!imageurl?"https://img.etimg.com/thumb/msid-109607838,width-1070,height-580,imgsize-2140662,overlay-ettech/photo.jpg":imageurl} className="card-img-top" alt="..."/>
            <div className="card-body">
         <h5 className="card-title">{title}</h5>
         <p className="card-text">{description}</p>
        <a rel='noreferrer' href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitem
