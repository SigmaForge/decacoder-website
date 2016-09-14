import React from 'react'
import {md2html} from '../utils'


export default (props)=>(
  <section id="venue" class="section text-left">
    <div class="container">
      <h3>Venue</h3>
      <p class="text-alt">We can also run this workshop <span class="highlight">at your location</span>. Get in touch for details.</p>
      <div class="workshop-description text-left" dangerouslySetInnerHTML={md2html(props.venue.description)}/>
      <div class="contacts-wrapper">
        <div id="contacts-map" class="map" data-settings="map-settings.json" style="height:560px;"></div>
        <div class="container contacts-on-map-container">
          <div class="contacts-on-map">
            <h3>Location</h3>
            <ul class="list">
              <li><i class="fa fa-map-marker"></i>{props.venue.shortAddress}</li>
              <li><i class="fa fa-envelope"></i>{props.venue.email}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
)
