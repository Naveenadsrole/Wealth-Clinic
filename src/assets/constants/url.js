const URL = {
  ABOUT: "/AboutUs",
  AWARD: "/award",
  BLOGS: "/blogs",
  BLOG_SUMMARY_PAGE: "/blogs/detail/:blogName",
  CAREER: "/career",
  CITY: "/:city",
  CONTACT_US: "/contactus",
  DISCLAIMER: "/disclaimer",
  EVENT: "/event",
  // EVENT: "/event",
  EVENT_STATUS_AND_NAME: "event/:eventStatus/EventName",
  FIND_PROPERTY: "/properties",
  GALLERY: "/wcgallery",
  HOME: "/",
  HAPPY_CUSTOMER: "/happyCustomer",
  MEDIA_COVERAGE: "/mediacoverage",
  OUR_TEAM: "/OurTeam",
  PROPERTY_DETAILS: "/:cityName/:propertyName",
  PRIVACY_POLICY: "/privacy-policy",
  SUCCESS_FULL_Event: "/event/successfull-event",
  SEARCH: "/search",
  TERMS_AND_CONDITIONS: "/terms-and-conditions",
  UPCOMING_EVENT: "/event/upcoming-event",
  EMI_CALCULATOR: "/emi-calculator",
  CareerForm: "/careerForm"
};

export default URL;

export const getPropertiesByCity = (cityName) => `/${cityName}`;

export const getPropertyDetails = (cityName, propertyName) =>
  `/${cityName}/${propertyName}`;

export const getBlogDetails = (propertyName) =>
  `${URL.BLOG_SUMMARY_PAGE}/${propertyName}`;

export const getUpcomingEvent = () => `/event/upcoming-event`;

export const getSuccessFullEvent = () => `/event/successfull-event`;

export const getEventSummary = (eventStatus) =>
  `/event/${eventStatus}/EventName`;
