import React from 'react'

import {md2html} from '../utils'

export default (props) => (
  <div>
    {/* <div class="photo-wrapper"><img src="/assets/img/speakers/lean_agile.jpg" alt="John Doe" class="img-responsive"></div> */}
    <div
      dangerouslySetInnerHTML={md2html(props.description)}
      class="workshop-description text-left"/>
  </div>
)
