import React from 'react'

export default (props) => (
  <section id="faq" class="section text-left">
    <div class="container">
      <h3>FAQ</h3>
      <p class="text-alt">Just in case we haven't answered everything yet :-)</p>
      <div class="workshop-description text-left">
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
