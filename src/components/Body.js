import useScrollOnTop from "../hooks/useScrollOnTop";
import CopyRightSection from "./globalComponents/copyRightSection/CopyRightSection";
import Footer2 from "./globalComponents/footer2/Footer2";
import TextContent from "./globalComponents/newFooterContent/TextContent";

// import Disclaimer from "./globalComponents/disclaimer/Disclaimer";
// import CityPages from "./pages/cityPages/CityPages";

const Body = ({ children }) => {
  useScrollOnTop();
  return (
    <div className="body">
      {/* <Disclaimer /> */}
      {children}
      <Footer2 />
      <CopyRightSection />
      <TextContent />
    </div>
  );
};

export default Body;
