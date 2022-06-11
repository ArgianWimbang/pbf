import React from "react";
import ContactImg from "../assests/contact.jpg";
import "../styles/Contact.css";
import Typical from 'react-typical';

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${ContactImg})` }}
      ></div>
      <div className="rightSide">
      
        <h1> Contact Us<br/>
        {/* <p><Typical
            loop={Infinity}
              wrapper="b"
              steps={[
                'Terimakasih!',
                4000,
              ]}
            />
            </p> */}
        </h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
