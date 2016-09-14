import React from 'react'

export default (props) => (
  <section class="section">
    <div class="container">
      <h3>Testimonial</h3>
      <div class="row">
        <div class="col-sm-9 workshop-description">
          {props.data.map((person) => (
            <div class="testimonial">
              <article class="text-box workshop-description"> {person.testimonial} </article>
              <div class="author-block">
                <div class="photo-container" style="background-image: url('/assets/img/testimonials/client3.jpg')"></div>
                <strong class="name"> {person.name} </strong>
                <small class="text-alt company"> {person.title} </small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)
