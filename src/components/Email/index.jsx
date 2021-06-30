import React, { useState } from "react";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import { Form, Button } from "react-bootstrap";
import thank from "../images/thank2.png";
import "./email.css";

function Contact() {
  init("user_MK5o33RuOcDlg8ViI1aMb");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_25pxlub",
        "template_4h8yqu8",
        e.target,
        "user_MK5o33RuOcDlg8ViI1aMb"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact">
      <h1 className="contact">CONTACT</h1>
      <div className="layout">
        <div className="message">
          <img src={thank} className="thank" />
          <div className="message2">
            If you'd like to get in contact with me, feel free to send me a
            message!
          </div>
        </div>
        <div className="emailParent">
          <Form className="w-100" onSubmit={sendEmail}>
            <Form.Group>
              <Form.Label className="fonts">Name</Form.Label>
              <input
                name="name"
                className="formControl"
                placeholder="enter your name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="fonts">Email</Form.Label>
              <input
                name="email"
                placeholder="enter your email"
                className="formControl"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="fonts">Message</Form.Label>

              <textarea
                rows={3}
                name="message"
                className="formControlMessage"
                placeholder="write me a message!"
              />
            </Form.Group>
            <button className="submitButton" type="submit">
              Submit
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
