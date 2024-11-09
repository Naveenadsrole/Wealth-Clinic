// import { Link } from "react-router-dom";

// import useScrollOnTop from "./../../../hooks/useScrollOnTop";
import URL from "../../../assets/constants/url";
import WcLogo from "../../../assets/logoWC.png";
import "./rightSideMenu.css";

const RightSideMenu = () => {
  return (
    <div>
      <div
        className="modal sidebar fade"
        id="sidebarMenu"
        tabIndex="-1"
        aria-labelledby="sidebarMenuLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="sidebarMenuLabel">
                <img className="sizeWc" alt="" src={WcLogo} />
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                &#10006;
              </button>
            </div>
            <div className="modal-body">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    href={URL.ABOUT}
                    // onClick={useScrollOnTop(700)}
                  >
                    AboutUs
                  </a>

                  <span>
                    {/* <Link to={URL.ABOUT} className="disabledButton">
                      Vision
                    </Link>
                    <Link to={URL.ABOUT} className="disabledButton">
                      Mission
                    </Link>
                    <Link to={URL.ABOUT} className="disabledButton">
                      Leadership Team
                    </Link>
                    <Link to={URL.ABOUT}>Awards</Link> */}
                    <a
                      href={URL.ABOUT}
                      className="disabledButton"
                      // onClick={useScrollOnTop(2100)}
                    >
                      Vision
                    </a>
                    <a
                      href={URL.ABOUT}
                      className="disabledButton"
                      // onClick={useScrollOnTop(3000)}
                    >
                      Mission
                    </a>
                    <a href={URL.OUR_TEAM} className="disabledButton">
                      {/* URL */}
                      Leadership Team
                    </a>
                    <a href={URL.AWARD}>Awards</a>
                  </span>
                </li>

                <br></br>
                <li className="nav-item">
                  <a
                    href={URL.HAPPY_CUSTOMER}
                    className="nav-link disabledButton"
                  >
                    Happy Customer
                  </a>
                  {/* <a className="nav-link" href={URL.HOME}>
                    Happy Customer
                  </a> */}
                </li>
                <li className="nav-item">
                  <a href={URL.MEDIA_COVERAGE} className="nav-link">
                    Media
                  </a>
                  {/* <a className="nav-link" href={URL.HOME}>
                    Media
                  </a> */}
                </li>
                <li className="nav-item">
                  <a href={URL.CAREER} className="nav-link">
                    Careers
                  </a>
                  {/* <a className="nav-link" href={URL.HOME}>
                    Careers
                  </a> */}
                </li>
                <li className="nav-item">
                  <a href={URL.CONTACT_US} className="nav-link">
                    Contact
                  </a>
                  {/* <a className="nav-link" href={URL.HOME}>
                    Contact Us
                  </a> */}
                </li>
                <li>
                  <br></br>
                  <iframe
                    className="MapClasses"
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14023.316517875597!2d77.3773025!3d28.5147882!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce70438c07157%3A0xcfb3b8097d601d47!2sWealth%20Clinic%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1708379371197!5m2!1sen!2sin"
                    width={"100%"}
                    height="200"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RightSideMenu;
