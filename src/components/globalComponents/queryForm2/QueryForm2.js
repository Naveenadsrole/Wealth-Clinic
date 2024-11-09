import { useState } from "react";
import "./queryForm2.css";

const QueryForm2 = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleForm = (event) => {
    event.preventDefault();
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="formbold-main-wrapper ">
      <div className="formbold-form-wrapper px-4 py-4 QueryForm-size">
        <form
          action="https://formbold.com/s/FORM_ID"
          method="POST"
          onClick={handleForm}
        >
          <div className="formbold-mb-5 formbold-pt-3">
            <div className="flex flex-wrap formbold--mx-3">
              <div className="w-full sm:w-half formbold-px-3">
                <div className="formbold-mb-5">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    className="formbold-form-input"
                  />
                </div>
              </div>

              <div className="w-full sm:w-half formbold-px-3">
                <div className="formbold-mb-5">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                    className="formbold-form-input"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="formbold-mb-5">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              className="formbold-form-input"
            />
          </div>

          <div className="formbold-mb-5">
            <select
              id="options"
              value={selectedOption}
              onChange={handleOptionChange}
              className="formbold-form-input"
            >
              <option value="">Property Type</option>
              <option value="option1">Residential</option>
              <option value="option2">Commercial</option>
              <option value="option3">Other</option>
            </select>
          </div>

          <div className="formbold-mb-5">
            <select
              id="options"
              value={selectedOption}
              onChange={handleOptionChange}
              className="formbold-form-input"
            >
              <option value="">City Name</option>
              <option value="option1">Noida</option>
              <option value="option2">Bengaluru</option>
              <option value="option3">Moradabad</option>
              <option value="option3">Moradabad</option>
              <option value="option3">Lucknow</option>
              <option value="option3">Gurugram</option>
              <option value="option3">Pune</option>
              <option value="option3">Ghaziabad</option>
            </select>
          </div>

          <div className="formbold-mb-5">
            <textarea
              placeholder="Message..."
              rows="5"
              cols="30"
              name="myTextArea"
              className="formbold-form-Textarea"
            />
          </div>

          <div>
            <button className="formbold-btn">Submit Now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QueryForm2;
