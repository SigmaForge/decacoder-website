import React from 'react'

import {md2html} from '../utils'

export default (props) => (
  <div>
    {/* <div className="photo-wrapper"><img src="/assets/img/speakers/lean_agile.jpg" alt="John Doe" className="img-responsive"></div> */}
    <div
      dangerouslySetInnerHTML={md2html(props.description)}
      className="workshop-description text-left"/>
  </div>
)
