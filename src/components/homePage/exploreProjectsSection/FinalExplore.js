import { ButtonDarkBlue } from "./../../globalComponents/molecules/ButtonDarkBlue";
import "./finalexplore.css";

const cardData = [
  { title: "LUXURY", className: "bgImageCard" },
  { title: "MID-RANGE", className: "bgImageCard1" },
  { title: "AFFORDABLE", className: "bgImageCard2" },
  { title: "READY TO MOVE IN", className: "bgImageCard3" },
];

const FinalExplore = () => {
  return (
    <div className="container-fluid bgFinalExplore">
      <div className="container">
        <div className="row">
          {cardData.map((card, idx) => (
            <div className="col-md-3" key={idx}>
              <Card data={card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinalExplore;

function Card({ data }) {
  const { title, className } = data;
  return (
    <div className={`card ${className}`}>
      <p className="headingExplore">{title}</p>
      <ButtonDarkBlue className="exploreViewsDetailsBtn" name="View Details" />
    </div>
  );
}
