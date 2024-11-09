import Marquee from "react-fast-marquee";

import { MARQUEE } from "../../../assets/constants/marquee";
import "./marqueeCard.css";

const MarqueeSlider = () => {
  return (
    <div className="bgFinalClient">
    <p className="client-head"><u>Our Prestigious Clients</u></p>
    <div className="marquee-cards-container">
      <Marquee>
        {MARQUEE?.map((image, idx) => {
          const img = image?.img;
          return (
            <div key={idx} className="marqueeCard">
              <img src={img} alt="" />
            </div>
          );
        })}
      </Marquee>
    </div>
    </div>
  );
};

export default MarqueeSlider;
