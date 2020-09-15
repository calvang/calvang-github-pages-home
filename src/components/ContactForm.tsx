import React, { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState("")

  const contactSubmit = (e: any) => {
    // Send information to formspree.io
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  }

  return (
    <div className="w3-container w3-text-white
      Contact-container parallax-scroll
      w3-padding-large w3-black"
      style={{ height:"auto", marginTop: "-32px"}}>
      {/* <div className="w3-padding-large w3-content w3-white w3-text-dark-gray" id="photos"> */}
      <div className="w3-content w3-padding" style={{
        marginTop: "32px", marginBottom:"40px" }}>
        <h2 className="w3-text-white">Let's Get in Touch!</h2>
        <hr className="w3-opacity" style={{ width: "300px", borderTop: "1px solid white" }} />
        <form className="w3-card w3-padding w3-hide-small"
          action="https://formspree.io/moqpadkg"
          method="POST"
          onSubmit={contactSubmit}>
          <div style={{columnCount: 2, columnFill: "balance"}}>
            <input className="w3-input w3-padding-16" type="text" placeholder="Name" required name="Name" />
            <input className="w3-input w3-padding-16" type="text" placeholder="Email" required name="Email"/>
          </div>
          <p><input className="w3-input w3-padding-16" type="text" placeholder="Subject" required name="Subject"/></p>
          <p><textarea className="w3-input w3-padding-16" rows={4} placeholder="Message" required name="Message" /></p>
          <p>
            {status === "SUCCESS" ? <>Thanks!</> :
              <button className="w3-button w3-light-grey w3-padding-large" type="submit">
                <i className="fa fa-paper-plane"></i> SEND
            </button>}
            {status === "ERROR" && <>Ooops! There was an error.</>}
          </p>
        </form>
        <form className="w3-card w3-padding w3-hide-large w3-hide-medium"
          action="https://formspree.io/moqpadkg"
          method="POST"
          onSubmit={contactSubmit}>
          <p><input className="w3-input w3-padding-16" type="text" placeholder="Name" required name="Name"/></p>
          <p><input className="w3-input w3-padding-16" type="text" placeholder="Email" required name="Email"/></p>
          <p><input className="w3-input w3-padding-16" type="text" placeholder="Subject" required name="Subject"/></p>
          <p><textarea className="w3-input w3-padding-16" rows={4} placeholder="Message" required name="Message" /></p>
          <p>
            {status === "SUCCESS" ? <b>Thanks!</b> :
              <button className="w3-button w3-light-grey w3-padding-large" type="submit">
                <i className="fa fa-paper-plane"></i> SEND
            </button>}
            {status === "ERROR" && <b>Ooops! There was an error.</b>}
          </p>
        </form>
      </div>
    </div>
  );
}