import React from 'react'
import uuid from 'uuid'

export default (props) => {
  let uuid = uuid.v1();
  return (
    <div>
      <section id="tickets" className="section text-left tickets-section">
        <div className="container">
          <div className="workshop-description text-left">
            <div className="align-center">
              <a href={props.url} target="_blank" className="workshop-book btn btn-lg" data-modal-link={"email-ticket"+uuid}> Book Now </a>
            </div>
          </div>
        </div>
      </section>

      <div className="modal-window" data-modal={"email-ticket"+uuid} style="background-color: rgba(2, 2, 2, 0.85);">
        <div className="modal-box iframe-box iframe-video">
          <span className="close-btn icon icon-office-52"></span>
          <div style="width:100%; text-align:left;">
            <iframe src={props.url} frameborder="0" height="245" width="100%" vspace="0" hspace="0" marginheight="5" marginwidth="5" scrolling="auto" allowtransparency="true"></iframe>
            <div style="font-family:Helvetica, Arial; font-size:10px; padding:5px 0 5px; margin:2px; width:100%; text-align:left;" >
              <a className="powered-by-eb" style="color: #dddddd; text-decoration: none;" target="_blank" href="http://www.eventbrite.co.uk/l/registration-online/">Powered by Eventbrite</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
