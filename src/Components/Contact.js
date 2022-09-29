import React from "react";

const Contact = () => {
  return (
    <>
      <div className="info-wrap w-100 p-5">
        <h3 className="mb-4">Contact us</h3>
        <div className="dbox w-100 d-flex align-items-start">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className="fa fa-map-marker"></span>
          </div>
          <div className="text pl-4">
            <p>
              <span>Address:</span> 198 West 21th Street, Suite 721 New York NY
              10016
            </p>
          </div>
        </div>
        <div className="dbox w-100 d-flex align-items-start">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className="fa fa-phone"></span>
          </div>
          <div className="text pl-4">
            <p>
              <span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a>
            </p>
          </div>
        </div>
        <div className="dbox w-100 d-flex align-items-start">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className="fa fa-paper-plane"></span>
          </div>
          <div className="text pl-4">
            <p>
              <span>Email:</span>{" "}
              <a href="mailto:info@yoursite.com">info@yoursite.com</a>
            </p>
          </div>
        </div>
        <div className="dbox w-100 d-flex align-items-start">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className="fa fa-globe"></span>
          </div>
          <div className="text pl-4">
            <p>
              <span>Website</span> <a href="#">yoursite.com</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
