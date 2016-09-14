import React from 'react'

import Title from './Title'
import Description from './Description'
import BookNow from './BookNow'
import Schedule from './Schedule'
import Venue from './Venue'
import FAQ from './FAQ'
import ContactUs from './ContactUs'
import Testimonials from './Testimonials'
import Author from './Author'

export default (props) => (
  <div>
    <WorkshopHeader title={props.title} url={props.book_url}/>
    <Grid>
      <Row>
        <Col xs={12} sm={9}>
          <Title title={props.title} tagline={props.tagline}/>
          <Description description={props.description}/>
          <BookNow url={props.book_url}/>
          <Schedule schedule={props.schedule}/>
          <Venue venue={props.venue} />
          <FAQ faq={props.faq}/>
          <BookNow url={props.book_url}/>
          <ContactUs />
          <Testimonials data={props.testimonials} />
        </Col>
        <Col xs={12} sm={9}>
          <Author author={props.author}/>
        </Col>
      </Row>
    </Grid>
  </div>
)
