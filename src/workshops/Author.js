import React from 'react'

export default (props) => (
  <div className="speaker">
    <div className="photo-wrapper rounded"><img src={props.author.image_url} alt={props.author.name} className="img-responsive" /></div>
    <h3 className="name">{props.author.name}</h3>
    <p className="text-alt"><small>{props.author.job}</small></p>
    <p className="about text-left">{props.author.shortbio}</p>
  </div>
)
