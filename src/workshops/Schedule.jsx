import React from 'react'

let default_day = "day_id"

export default (props) => (
  <section class="section text-left">
		<div class="container">
			<div class="schedule">
				<ul class="nav nav-schedule">
					<li class="active">
						<a href={"#"+default_day} data-toggle="tab">
						<h5 class="highlight">Schedule</h5></a>\
          </li>
				</ul>
				<div class="tab-content">
          {/* DAYS */}
					<div id={default_day} class="tab-pane fade active in">
						<div class="tab-content tab-content-schedule">
              {/* STREAMS */}
							<div id={default_day+"_main"} class="tab-pane fade active in">
								<div class="panel-group" id={default_day+"_main"+"_timeline"}>
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
