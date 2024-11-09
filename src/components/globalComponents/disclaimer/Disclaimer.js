import React, { useState } from "react";
import "./disclaimer.css"; // You can create a separate CSS file for styling

const Disclaimer = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  const handleClose = () => {
    setShowDisclaimer(false);
  };

  return (
    <>
      {showDisclaimer && (
        <div className="disclaimer-popup">
          <div className="disclaimer-content">
            {/* <button className="close-button" onClick={handleClose}>
              X
            </button> */}
            <div className="row">
              <div className="col-md-8 col-sm-8">
                <p>
                  This is a Cookies message. Please read and acknowledge before
                  continuing.
                  {/* Add your disclaimer content here */}
                </p>
              </div>
              <div className="col-md-4 col-sm-4">
                <button className="acknowledge-button" onClick={handleClose}>
                  Accept Cookies
                </button>
              </div>
            </div>
            {/* <h2>Disclaimer</h2> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Disclaimer;
