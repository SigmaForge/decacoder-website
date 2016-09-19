import React from 'react'

let default_day = "day_id"

export default (props) => (
  <section className="section text-left">
		<div className="container">
			<div className="schedule">
				<ul className="nav nav-schedule">
					<li className="active">
						<a href={"#"+default_day} data-toggle="tab">
						<h5 className="highlight">Schedule</h5></a>\
          </li>
				</ul>
				<div className="tab-content">
          {/* DAYS */}
					<div id={default_day} className="tab-pane fade active in">
						<div className="tab-content tab-content-schedule">
              {/* STREAMS */}
							<div id={default_day+"_main"} className="tab-pane fade active in">
								<div className="panel-group" id={default_day+"_main"+"_timeline"}>
                  {/* SESSIONS */}
                  {props.schedule.items.map((item)=>
                    <ScheduleItem
                      item={item}
                      dataParent={default_day+"_main"+"_timeline"}/>
                  )}
                </div>
              </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
)
