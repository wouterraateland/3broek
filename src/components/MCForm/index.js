import React from 'react'

const MCForm = () => (
  <form
    action="//driebroek.us16.list-manage.com/subscribe/post?u=d1d38028bbc77575c6482f07f&amp;id=2d4336bc4d"
    method="post"
    id="mc-embedded-subscribe-form"
    name="mc-embedded-subscribe-form"
    className="validate row"
    target="_blank"
    noValidate>
      <div className="alignright">
        <input type="email" name="EMAIL" className="MC-email required email" id="mce-EMAIL" placeholder="you@example.com" />
        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="Button" />
        <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
          <input type="text" name="b_d1d38028bbc77575c6482f07f_2d4336bc4d" tabIndex="-1" value="" />
        </div>
        <div id="mce-responses" className="clear">
          <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
          <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
        </div>
      </div>
  </form>
)

export default MCForm
