import React from 'react'

export default (props) => (
  <section className="section">
    <div className="container">
      <h3>Testimonial</h3>
      <div className="row">
        <div className="col-sm-9 workshop-description">
          {props.data.map((person) => (
            <div className="testimonial">
              <article className="text-box workshop-description"> {person.testimonial} </article>
              <div className="author-block">
                <div className="photo-container" style="background-image: url('/assets/img/testimonials/client3.jpg')"></div>
                <strong className="name"> {person.name} </strong>
                <small className="text-alt company"> {person.title} </small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)
