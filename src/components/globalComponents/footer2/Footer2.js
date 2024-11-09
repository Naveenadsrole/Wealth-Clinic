import { Link } from "react-router-dom";

import InputCustom from "./../molecules/InputCustom";
import { ButtonDarkBlue } from "./../molecules/ButtonDarkBlue";
import SocialMediaIcons from "./SocialMediaIcons";

import URL from "../../../assets/constants/url";
import { COMPANY_LOGO } from "../../../assets/urls";
import "./footer2.css";

const Footer2 = () => {
  return (
    <footer className="row m-0">
      <header className="col-md-4">
        <img className="footer-logo" alt="" src={COMPANY_LOGO} />

        <ul class="contactWithUs">
          <li>
            CALL US :
            <div className="my-1">
              <a className="dailDeco" href="tel:+919089222000">
                <span>+919089222000</span>
              </a>
            </div>
          </li>
          <li>
            EMAIL US :
            <div className="my-1">
              <a
                className="dailDeco"
                href="mailto:customercare@wealth-clinic.com"
              >
                <span>customercare@wealth-clinic.com</span>
              </a>
            </div>
          </li>
        </ul>

        <SocialMediaIcons />

        <div className="newsLetter-footer col-md-8">
          <InputCustom placeholder={"Subscribe to our newsletter"} />
          <ButtonDarkBlue
            style={{ borderRadius: "12px", fontSize: "14px" }}
            name="Subscribe Now"
          />
        </div>
      </header>
      <aside className="col-md-8 menuBg">
        <ul className="category">
          <li>
            <h4 className="heading-footer">COMPANY</h4>
          </li>
          <li>
            <Link to={URL.ABOUT}>About Us</Link>
          </li>
          <li>Exclusive Projects</li>
          <li>360° Tour</li>
          <li>
            <Link to={URL.TERMS_AND_CONDITIONS}>Terms & Conditions</Link>
          </li>
          <li>
            <Link to={URL.BLOGS}>Blogs</Link>
          </li>
          <li>
            <Link to={URL.CAREER}>Careers</Link>
          </li>
          <li>
            <Link to={URL.CONTACT_US}>Contact Us</Link>
          </li>

          <li>
            <Link to={URL.AWARD}>Awards</Link>
          </li>
        </ul>
        <ul className="category">
          <li>
            <h4 className="heading-footer">LATEST</h4>
          </li>
          <li>Latest Properties</li>
          <li>New Launches</li>
          <li>
            <Link to={URL.EMI_CALCULATOR}>EMI Calculator</Link>
          </li>
          <li>Happy Customers</li>
          <li>Media</li>

          <li>
            <Link to={URL.PRIVACY_POLICY}>Privacy Policy</Link>
          </li>
          <li>
            <Link to={URL.DISCLAIMER}>Disclaimer</Link>
          </li>
          <li>Gallery</li>
        </ul>
        <ul className="category">
          <li>
            <h4 className="heading-footer">REAL ESTATE IN INDIA</h4>
          </li>
          <li>Projects in Moradabad</li>
          <li>Projects in Lucknow</li>
          <li>Projects in Gurugram</li>
          <li>Projects in Pune</li>
          <li>Projects in Ghaziabad</li>
          <li>Projects in Greater Noida</li>
          <li>Projects in Rishikesh</li>
          <li>Projects in Delhi</li>
          <li>Projects in Noida</li>
        </ul>
        <ul className="category">
          <li>
            <h4 className="heading-footer">POPULAR SEARCHES</h4>
          </li>
          <li>Residential in Ghaziabad</li>
          <li>Residential in Noida</li>
          <li>Residential in Greater Noida</li>
          <li>Commercial in Gurugram</li>
        </ul>
      </aside>
    </footer>
  );
};

export default Footer2;
