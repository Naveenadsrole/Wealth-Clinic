import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import CustomDropDown from "../customDropDown/CustomDropDown";
import HeaderBtn from "../headerBtn/HeaderBtn";
import RightSideMenu from "./RightSideMenu";

import { CITY_NAME } from "../../../assets/IMG";
import { COMPANY_LOGO } from "../../../assets/urls";
import { ALL_EVENTS } from "../../../assets/constants/events";

import useApiFetcher from "../../../hooks/useApiFetcher";
import { API_URL, getFullUrl } from "../../../assets/constants/apiUrls";
import URL from "../../../assets/constants/url";
import "./header.css";
import AccountPic from "../../../assets/account.png";
import Wishlist from "../../../assets/wishlist.png";
import Search from "../../../assets/search.png";

// const BLUE_LOGO_URL =
//   "https://res.cloudinary.com/luxuryp/images/w_320,c_limit,f_auto,q_auto/ltwrcvytxvphyeegszjp/WEALTH_CLINIC-dark-logo";
const url = getFullUrl(API_URL.CITY_NAME);

const Header = ({ className }) => {
  const [dropDownConfig, setDropDownConfig] = useState({ cityName: false });
  const [isScrollY, setIsScrollY] = useState(0);
  const handleScroll = () => {
    setIsScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrollY]);

  const [cityName, error, isLoading] = useApiFetcher(url);
  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>Loading...</div>;

  // const CITY_NAME = getCityName(cityName);
  console.log(getCityName(cityName))
 

  return (
    <>
      {/* <h1 className="animated-line">Home</h1> */}
      <div className="container-fluid">
        <div
          className={`header ${
            isScrollY > 300 && "header_active_Darken"
          } ${className}`}
        >
          <div className="row flex-wrap">
            <div className="col-md-5 col-sm-12 ">
              <div className="logoContainer">
                <Link
                  to={URL.HOME}
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <img
                    src={COMPANY_LOGO}
                    alt="company_logo"
                    className="img-fluid header-logo"
                  />
                </Link>
              </div>
            </div>

            <div className="col-md-7 col-sm-12 menu">
              <div>
                <CustomDropDown
                  styleBtn={{
                    color: "rgba(255,255,255,0.8)",
                    width: "6.5rem",
                  }}
                  styleMenu={{ width: "150px", height: "150px !important" }}
                  text={"Find City"}
                  data={CITY_NAME}
                  isDropDownOpen={dropDownConfig.cityName}
                  setIsDropDownOpen={() =>
                    setDropDownConfig({ cityName: !dropDownConfig.cityName })
                  }
                  children={
                    <HeaderBtn
                      className={"navbar-brand"}
                      style={{
                        border: "8px solid red !important",
                        width: "100%",
                      }}
                    />
                  }
                />
              </div>

              <div className="header-btn">
                <Link className="eventDeco" to={URL.FIND_PROPERTY}>
                  Find Property
                </Link>
              </div>
              <div className="header-btn">
                <Link className="eventDeco" to={URL.EVENT} state={ALL_EVENTS}>
                  Events
                </Link>
              </div>
              <div className="text-white">Talk To Our Agents</div>
              <div className="header-btn">
                <Link className="blogsDeco" to={URL.BLOGS}>
                  Blogs
                </Link>
              </div>
              <div className="supergroup">
              <div className="bgGrouping">
              <div className="text-white"><img className="acn" style={{width:27}} src={AccountPic} alt=""/></div>
              <div className="text-white"><img className="wis" style={{width:27}} src={Wishlist} alt=""/></div>
              <div className="text-white"><img className="ser" style={{width:27}} src={Search} alt=""/></div>
              </div>
              {/* <div className="header-btn">Profile</div> */}
              {/* <div>
                <button className="headerSearchBtn fw-bold ">
                  Find a Home <i class="bi bi-search"></i>
                </button>
              </div> */}
              {/* <div className="headerProfile">
                <i class="bi bi-person"></i>
              </div> */}
              {/* <div className="header-btn">Sign Up/Login</div>
              <div className="header-btn">WishList</div> */}
              
              <div
                className="menuBtn header-btn"
                data-bs-toggle="modal"
                data-bs-target="#sidebarMenu"
              >
              <i className="bi bi-list"></i>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RightSideMenu />
      {/*  */}
      {/* <PopUpMenu/> */}
    </>
  );
};

export default Header;

function getCityName(cityName) {
  return cityName?.map((item) => {
    // const data = { id: item?.id, City_Name: item?.attributes?.City_Name }
    return item?.attributes?.City_Name;
  });
}
