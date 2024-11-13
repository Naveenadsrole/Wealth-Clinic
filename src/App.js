import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/globalComponents/header/Header";
import Body from "./components/Body";
import TemplateSlider from "./components/homePage/templateSlider/TemplateSlider";
import HomePage from "./components/homePage/HomePage";
import CityPages from "./components/pages/cityPages/CityPages";
// import AboutUsPage from "./components/pages/AboutUsPage/AboutUsPage";
import Gallery from "./components/pages/gallery/Gallery";
import MediaCoverage from "./components/pages/mediaCoverage/MediaCoverage";
import HappyCustomer from "./components/pages/happyCustomer/HappyCustomer";
import Awards from "./components/pages/award/Awards";
import ContactUsPage from "./components/pages/ContactUsPage/ContactUsPage";
import Career from "./components/pages/career/Career";

import Event from "./components/pages/event/Event";
import PrivacyPolicy from "./components/pages/privacyPolicy/PrivacyPolicy";
import DisclaimerPage from "./components/pages/disclaimer/DisclaimerPage";
import TermsAndConditions from "./components/pages/termsAndConditions/TermsAndConditions";
import OurTeam from "./components/pages/ourTeam/OurTeam";
import About from "./components/pages/about/About";
import EventOverview from "./components/pages/eventOverview/EventOverview";
import Blog from "./components/pages/blogPage/Blogs";
import BlogCards from "./components/pages/blogPage/blogsComponents/BlogCards";
import BlogOverview from "./components/pages/blogOverview/BlogOverview";
import PropertyDetails from "./components/pages/propertyDetails/PropertyDetails";


import URL from "./assets/constants/url";
import "./App.css";
import EmiCalculator from "./components/pages/EmiCalculator";
import CareerForm from "./components/careerFrom/CareerForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Routings />
        </Provider>
      </BrowserRouter>
    </>
  );
}
// nice
export default App;

function Routings() {
  return (
    <div className="">
      {/* <Header /> */}
      <Routes>
        <Route
          path={URL.HOME}
          element={
            <Body
              children={
                <HomePage children={<TemplateSlider children={<Header />} />} />
              }
            />
          }
        />
        {/* <Route
      path="/:city"
      element={
        <Body children={<CityPages children={<Header />} />} />
      }
    /> */}
        <Route
          path={URL.CITY}
          element={
            <Body>
              <TemplateSlider
                text="Properties"
                height="100vh"
                searchBar="enabled"
              />
              <CityPages />
            </Body>
          }
        />

        <Route
          path={URL.SEARCH}
          element={
            <Body>
              <TemplateSlider
                text="Properties"
                height="100vh"
                searchBar="enabled"
              />
              <CityPages />
            </Body>
          }
        />

        {/* <Route path="/blogs" element={<Body children={<Blog />} />} /> */}
        <Route
          path={URL.BLOGS}
          element={
            <Body>
              <TemplateSlider text="Blogs" height="100vh" />
              <Blog children={<BlogCards />} />
            </Body>
          }
        />

        <Route
          path={URL.BLOG_SUMMARY_PAGE}
          element={
            <Body>
              <TemplateSlider text="Blogs" height="100vh" />
              <Blog children={<BlogOverview />} />
            </Body>
          }
        />

        <Route
          path={URL.ABOUT}
          element={
            <Body>
              <TemplateSlider text="About Us" height="100vh" />
              <About />
            </Body>
          }
        />

        <Route path="/wcgallery" element={<Gallery />} />

        <Route
          path={URL.AWARD}
          element={
            <Body>
              <TemplateSlider text="Awards" height="100vh" />
              <Awards />
            </Body>
          }
        />
        <Route
          path={URL.CONTACT_US}
          element={
            <Body>
              <TemplateSlider text="Contact Us" height="100vh" />
              <ContactUsPage />
            </Body>
          }
        />
        <Route
          path={URL.HAPPY_CUSTOMER}
          element={
            <Body>
              <TemplateSlider text="Happy Customer" height="100vh" />
              <HappyCustomer />
            </Body>
          }
        />
        <Route
          path={URL.MEDIA_COVERAGE}
          element={
            <Body>
              <TemplateSlider text="Media Coverage" height="100vh" />
              <MediaCoverage />
            </Body>
          }
        />

        <Route
          path={URL.PROPERTY_DETAILS}
          element={
            <Body>
              {/* <TemplateSlider text="" height={"7rem"} /> */}
              <PropertyDetails />
            </Body>
          }
        />

        <Route
          path="/event//*"
          element={
            <Body>
              <TemplateSlider text="Events" height="100vh" />
              <Event />
            </Body>
          }
        />

        <Route
          path={URL.PRIVACY_POLICY}
          element={
            <Body>
              <TemplateSlider text="Privacy-Policy" height="100vh" />
              <PrivacyPolicy />
            </Body>
          }
        />

        <Route
          path={URL.DISCLAIMER}
          element={
            <Body>
              <TemplateSlider text="Disclaimer" height="100vh" />
              <DisclaimerPage />
            </Body>
          }
        />

        <Route
          path={URL.CAREER}
          element={
            <Body>
              <TemplateSlider text="Career" height="100vh" />
              <Career />
            </Body>
          }
        />

        <Route
          path={URL.OUR_TEAM}
          element={
            <Body>
              <TemplateSlider text="Our Team" height="100vh" />
              <OurTeam />
            </Body>
          }
        />

        <Route
          path={URL.TERMS_AND_CONDITIONS}
          element={
            <Body>
              <TemplateSlider text="Terms And Conditions" height="25rem" />
              <TermsAndConditions />
            </Body>
          }
        />

        <Route
          path={URL.EVENT_STATUS_AND_NAME}
          element={
            <Body>
              <TemplateSlider text="EventDetails" height="25rem" />
              <EventOverview />
            </Body>
          }
        />

        <Route
          path={URL.EMI_CALCULATOR}
          element={
            <Body>
              <TemplateSlider text="EMI Calculator" height="25rem" />
              <EmiCalculator />
            </Body>
          }
        />
        <Route
          path={URL.CareerForm}
          element={
            <Body>
              <TemplateSlider text="Fill Career Form" height="25rem" />
              <CareerForm />
            </Body>
          }
        />

        {/* <Route path="/bookInfoPage" element={<Body children={<Suspense fallback={<div>Loading...</div>}><TablePage children={<BooksCard/>}/></Suspense>}/>}/> */}
      </Routes>
    </div>
  );
}
