import TextBg from "../../globalComponents/molecules/TextBg";
import MapSection from "./ContactUsComponents/MapSection";
import AddressSection from "./ContactUsComponents/AddressSection";

const ContactUsPage = () => {
  return (
    <section className="container-fluid">
      <TextBg text={"OUR BRANCHES"} fontWeight={900} fontSize="6rem" />
      <AddressSection />
      <MapSection />
    </section>
  );
};
export default ContactUsPage;
