import React, { useRef } from "react";
import Placeholder from "./Placeholder";
import emailjs from "@emailjs/browser";
import lablogo from "../assests/SHIELD.png";
import { toast } from "react-toastify";

const Contact = () => {
  const refForm = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SHIELD_WEB_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_SHIELD_WEB_EMAILJS_TEMPLATE_ID,
        refForm.current,
        process.env.REACT_APP_SHIELD_WEB_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          refForm.current.reset(); // reset the form fields
        },
        (error) => {
          console.error(error);
          toast.error("Failed to send message. Please try again.");
        }
      );
  };
  return (
    <div className="Contact">
      {/* <Placeholder /> */}
      <div className="Contact-container">
        <div className="Contact-container-left-side">
          <h1 className="Contact-header">CONTACT</h1>
          <img alt="" src={lablogo} className="Contact-lab-logo" />
        </div>
        <div className="Contact-form">
          <form ref={refForm} onSubmit={sendEmail}>
            <ul id="Contact-form">
              <li className="Contact-identifier">
                <input type="text" name="name" placeholder="Name" required />
              </li>
              <li className="Contact-identifier">
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  required
                />
              </li>
              <li>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </li>
              <li>
                <textarea name="message" placeholder="Message" required />
              </li>
              <li>
                <input type="submit" className="Send-button" value={"SEND"} />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
