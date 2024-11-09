import AdvancedSearchBar from "../../advancedSearchBar/AdvancedSearchBar";
import Header from "../../../components/globalComponents/header/Header";
import Heading from "../../globalComponents/molecules/Heading";
// import SearchBar from "../molecules/SearchBar";

import "./templateSlider.css";

const TemplateSlider = ({ searchBar, text, style, height, textImg }) => {
  let newStyle = style;
  const VIDEO_URL =
    "https://bold-approval-c005df0fb8.media.strapiapp.com/videoplayback_b595d75df2.webm";
  return (
    <section className="container-fluid p-0">
      <div
        className="video-container"
        style={{ height: height ? height : "100vh", ...newStyle }}
      >
        <video autoPlay loop muted>
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
        <div className="content-on-top">
          <div className="header-container">
            <Header />
          </div>

          <div className="searchBar-container">
            {text && text !== "" ? (
              <p className="text-lg-center">
                <Heading
                  text={text}
                  fontSize="2.5rem"
                  fontWeight="1000"
                  color="#fff"
                />
              </p>
            ) : null}

            {searchBar === "enabled" ? (
              <div className="d-flex justify-content-center">
                <AdvancedSearchBar />
              </div>
            ) : null}

            <p className="text-white text-lg-center fs-lg">
              The Most Followed Real Estate Brand In The India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemplateSlider;
