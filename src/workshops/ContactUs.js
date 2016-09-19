import React from 'react'

export default React.createClass({
  componentDidMount: () => {
    (function(){var qs,js,q,s,d=document,gi=d.getElementById,ce=d.createElement,gt=d.getElementsByTagName,id='typef_orm',b='https://s3-eu-west-1.amazonaws.com/share.typeform.com/';if(!gi.call(d,id)){js=ce.call(d,'script');js.id=id;js.src=b+'widget.js';q=gt.call(d,'script')[0];q.parentNode.insertBefore(js,q)}})()
  },

  render: () => (
    <section id="contacts" className="section text-left">
      <div className="container">
        <h3>Contact Us</h3>
        <p className="text-alt">Contact us for more information</p>
        <div className="typeform-widget" data-url="https://sigmaforge.typeform.com/to/nvy0JC" data-text="Contact Form" style="width:100%;height:500px;"></div>
        <form>
          <Button bsStyle="primary" bsSize="large" block>Block level button</Button>
        </form>
      </div>
    </section>
  )
})
