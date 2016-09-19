import React from 'react'
import uuid form 'uuid'

export default (props) => {
  let uuid = uuid.v1()

  return (
    <div className="panel schedule-item">
      <div className="lecture-icon-wrapper">
        {(props.item.picture)?<img src="brice.png" alt="" className="img-responsive" />:
          (props.item.icon)?<span className={"fa"+props.item.icon}></span>:""}
      </div>
      <a data-toggle="collapse" data-parent={props.dataParent} href={uuid} className="schedule-item-toggle">
        <strong className="time highlight"><span className="icon icon-office-24"></span>2:20 PM</strong>
        <h6 className="title"> {props.item.title} <i className="icon icon-arrows-06"></i></h6>
      </a>
      <div id={uuid} className="panel-collapse collapse in schedule-item-body">
        <article>
          <p className="description" dangerouslySetInnerHTML={md2html(props.item.description)}/>
          <strong className="highlight speaker-name">{props.item.host}</strong>
        </article>
      </div>
    </div>
  )
}
