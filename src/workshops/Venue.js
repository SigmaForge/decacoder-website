import React from 'react'
import {md2html} from '../utils'


export default (props)=>(
  <section id="venue" className="section text-left">
    <div className="container">
      <h3>Venue</h3>
      <p className="text-alt">We can also run this workshop <span className="highlight">at your location</span>. Get in touch for details.</p>
      <div className="workshop-description text-left" dangerouslySetInnerHTML={md2html(props.venue.description)}/>
      <div className="contacts-wrapper">
        <div id="contacts-map" className="map" data-settings="map-settings.json" style="height:560px;"></div>
        <div className="container contacts-on-map-container">
          <div className="contacts-on-map">
            <h3>Location</h3>
            <ul className="list">
              <li><i className="fa fa-map-marker"></i>{props.venue.shortAddress}</li>
              <li><i className="fa fa-envelope"></i>{props.venue.email}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
)
