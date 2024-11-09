import Heading from "../molecules/Heading";

import Card from "../card/Card.js";
import { CARDS_DATA } from "../../../assets/constant.js";

const CardsContainer = () => {
  return (
    <section className="container my-5">
      <div>
        <Heading
          text={"Featured Properties"}
          color={"#EF750F"}
          fontWeight={700}
        />
        <p className="text-wrap">
          Check out some of our most exclusive houses, apartments, townhomes,
          penthouses, and more.
        </p>

        <div className="row g-1">
          {CARDS_DATA.map((card) => (
            <div key={card.id} className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <Card cardData={card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsContainer;
