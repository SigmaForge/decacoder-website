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

export default React.createClass({
  render: ()=> (
    <div>
      <WorkshopHeader title={this.props.title} url={this.props.book_url}/>
      <Grid>
        <Row>
          <Col xs={12} sm={9}>
            <Title title={this.props.title} tagline={this.props.tagline}/>
            <Description description={this.props.description}/>
            <BookNow url={this.props.book_url}/>
            <Schedule schedule={this.props.schedule}/>
            <Venue venue={this.props.venue} />
            <FAQ faq={this.props.faq}/>
            <BookNow url={this.props.book_url}/>
            <ContactUs />
            <Testimonials data={this.props.testimonials} />
          </Col>
          <Col xs={12} sm={9}>
            <Author author={this.props.author}/>
          </Col>
        </Row>
      </Grid>
    </div>
  )
})
