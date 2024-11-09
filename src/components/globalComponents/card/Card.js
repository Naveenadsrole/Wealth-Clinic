import { ButtonDarkBlue } from "./../molecules/ButtonDarkBlue";
import fireFlame from "../../../assets/fireFlame.jpg";

import styles from "./card.module.css";

const Card = ({ cardData }) => {
  const { img, city, type, price, details, name } = cardData;
  return (
    <div className={styles.card1}>
      <div className={styles.imgDiv}>
        {/* <div>For sale</div> */}
        <img alt="img" src={img} />
        <div className={styles.signatureContainer}>
          {/* WEALTH-CLINIC.Signature */}
          <img className={styles.fireFlame} alt="flame" src={fireFlame} />
        </div>
      </div>
      <div className="fw-bold d-flex justify-content-between">
        <div>
          {name} | <span>{city}</span>
        </div>

        <div>
          <i class="bi bi-star c-gray"></i>4.94
        </div>
      </div>
      <div className="c-gray">{details}</div>
      <div className="">
        <div className="col-md-5">
          <div className="c-gray">{type}</div>
          <div className="fw-bold">{price}</div>
        </div>
        <div className="col-md-12">
          <ButtonDarkBlue
            name="View More"
            className={styles.propertiesViewMoreBtn}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
