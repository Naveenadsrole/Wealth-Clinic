import { FaArrowRight } from "react-icons/fa";

import CircleTexture from "../../../../assets/cricle_bg.png";
import styles from "./newReadMoreCard.module.css";

const NewReadMoreCard = (props) => {
  const { color, style, img, readMoreTitle, readMoreDesc, bgColor, txtColor } =
    props;
  const newStyle = style;

  return (
    <div
      className={styles.bgColBlock}
      style={{ background: color, ...newStyle }}
    >
      <div className="row">
        <div className="col-md-3 col-xs-3">
          <img className={styles.pillarsImg} src={img} alt="" />
        </div>
        <div className="col-md-9 col-xs-9">
          <img className={styles.tryBubble} src={CircleTexture} alt="" />
        </div>
        <p className={styles.readMoreTitle}>{readMoreTitle}</p>
        <p className={styles.readMoreDesc}>{readMoreDesc}</p>
        <div className="d-grid gap-2 col-12 mx-auto btnTxt88">
          <button
            style={{
              background: bgColor,
              color: txtColor,
              boxShadow: "4px 4px 8px rgba(0 ,0, 0, 0.4 )",
            }}
            className={`btn border-0 ${styles.btnTxt}`}
            type="button"
          >
            Explore More <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};
export default NewReadMoreCard;
