import React from 'react'

export const ContactForm = () => (
  <div className="contact-form-container">
    <h2 className="question">Contact Rembrandt</h2>
    <form className="form" id="contactform" action="//formspree.io/reyes.rembrandt@gmail.com" method="POST">
     <fieldset className="field">
       <input className="input" type="text" name="name" placeholder="Name" id="name" required />
     </fieldset>
     <fieldset className="field">
       <input className="input" type="email" name="_replyto" placeholder="example@domain.com" id="_replyto" required />
     </fieldset>
     <fieldset className="field">
       <textarea className="input" name="message" rows="1" placeholder="Message" id="message" required></textarea>
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
