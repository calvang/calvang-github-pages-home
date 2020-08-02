import React from 'react';
import '../css/App.css';
import '../css/Home.css';    

export default function ContactForm() {

  const contactSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <div className="w3-container w3-text-whie
      Project-container parallax-scroll
      w3-padding-large w3-black"
            style={{ height:"auto", marginTop: "-32px"}}>
            {/* <div className="w3-padding-large w3-content w3-white w3-text-dark-gray" id="photos"> */}
            <div className="w3-content w3-padding" style={{
              marginTop: "32px", marginBottom:"40px" }}>
              <h2 className="w3-text-white">Let's Get in Touch!</h2>
              <hr className="w3-opacity" style={{ width: "300px", borderTop: "1px solid white" }} />
              <form className="w3-card w3-padding"
                onSubmit={contactSubmit}>
                <p><input className="w3-input w3-padding-16" type="text" placeholder="Name" required name="Name"/></p>
                <p><input className="w3-input w3-padding-16" type="text" placeholder="Email" required name="Email"/></p>
                <p><input className="w3-input w3-padding-16" type="text" placeholder="Subject" required name="Subject"/></p>
                <p><input className="w3-input w3-padding-16" type="text" placeholder="Message" required name="Message"/></p>
                <p>
                  <button className="w3-button w3-light-grey w3-padding-large" type="submit">
                    <i className="fa fa-paper-plane"></i> SEND
                  </button>
                </p>
              </form>
            </div>
    </div>
  );
}