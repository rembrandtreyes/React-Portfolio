import React from 'react'

export const ContactForm = () => (
  <div className="contact-form-container">
    <h2 className="question">Have a burning question to ask Rembrandt?</h2>
    <p>Please feel free to contact him through the email form below</p>
    <form className="form" id="contactform" action="//formspree.io/reyes.rembrandt@gmail.com" method="POST">
     <fieldset className="field">
       <input className="input" type="text" name="name" placeholder="Name" id="name" required />
       <label className="label" htmlFor="name"><span className="label-content">Your name</span></label>
     </fieldset>
     <fieldset className="field">
       <input className="input" type="email" name="_replyto" placeholder="example@domain.com" id="_replyto" required />
       <label className="label" htmlFor="_replyto"><span className="label-content">Your email</span></label>
     </fieldset>
     <fieldset className="field">
       <textarea className="input" name="message" rows="1" placeholder="Message" id="message" required></textarea>
       <label className="label" htmlFor="message"><span className="label-content">Your message</span></label>
     </fieldset>
       <input className="hidden" type="text" name="_gotcha" style={{display: 'none' }} />
       <input className="hidden" type="hidden" name="_subject" value="Message via www.rembrandtreyes.com" />
     <fieldset className="field">
     <input className="button submit" type="submit" value="Send" />
     </fieldset>
    </form>
  </div>
)
/*
Break up the contact form component into smaller components
Header Header Header Header
p p p p
input Name
input email
input message
in
*/
