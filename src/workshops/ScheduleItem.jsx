import React from 'react'
import uuid form 'uuid'

export default (props) => {
  let uuid = uuid.v1()

  return (
    <div class="panel schedule-item">
      <div class="lecture-icon-wrapper">
        {(props.item.picture)?<img src="brice.png" alt="" class="img-responsive" />:
          (props.item.icon)?<span class={"fa"+props.item.icon}></span>:""}
      </div>
      <a data-toggle="collapse" data-parent={props.dataParent} href={uuid} class="schedule-item-toggle">
        <strong class="time highlight"><span class="icon icon-office-24"></span>2:20 PM</strong>
        <h6 class="title"> {props.item.title} <i class="icon icon-arrows-06"></i></h6>
      </a>
      <div id={uuid} class="panel-collapse collapse in schedule-item-body">
        <article>
          <p class="description" dangerouslySetInnerHTML={md2html(props.item.description)}/>
          <strong class="highlight speaker-name">{props.item.host}</strong>
        </article>
      </div>
    </div>
  )
}
