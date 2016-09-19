import React from 'react'

export default (props) => (
  <section id="faq" className="section text-left">
    <div className="container">
      <h3>FAQ</h3>
      <p className="text-alt">Just in case we haven't answered everything yet :-)</p>
      <div className="workshop-description text-left">
        {props.faq.map((qa)=>(
          <div>
            <h6> {qa.q} </h6>
            <p> {qa.a} </p>
            <br/>
          </div>
        ))}
      </div>
    </div>
  </section>
)
