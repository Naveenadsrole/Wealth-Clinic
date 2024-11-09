import React, { useState } from "react";
import { IoIosTimer } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineArrowOutward } from "react-icons/md";
import TextBg from "../../../globalComponents/molecules/TextBg";
import { Link } from "react-router-dom";
import "./position.css";

const Position = ({ data }) => {
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState({});

  const positions = [
    {
      title: "Business Development Executive",
      location: "Noida",
      description: [
        "Will be responsible for New Client Acquisition.",
        "Have to conduct sales calls and close the leads.",
        "Will be responsible for building & retaining client relationships through continuous follow-up with clients for their requirements.",
      ],
    },
    {
      title: "Associate Vice President",
      location: "Noida",
      description: [
        "Will devise and implement sales strategies and initiatives by working with other members of the sales team to size market potential",
        "Will be responsible for managing the sales teams, operations.",
      ],
    },
    {
      title: "Sr Business Development Executive",
      location: "Noida",
      description: [
        "Will be responsible for New Client Acquisition.",
        "Have to conduct sales calls and close the leads.",
        "Will be responsible for building & retaining client relationships through continuous follow-up with clients for their requirements.",
      ],
    },
    {
      title: "Assistant Manager",
      location: "Noida",
      description: [
        "Understanding of real estate market is required.",
        "Will be responsible for meeting prospective customers to present the project & following up on the sales.",
        "Will be responsible for building & retaining client relationships through continuous follow-up with clients for their requirements.",
      ],
    },
    {
      title: "Telecaller",
      location: "Noida",
      description: [
        "Exceptional communication and the capacity to switch up speaking approach.",
        "Will be responsible for meeting prospective customers to present the project & following up on the sales.",
        "Will be responsible for building & retaining client relationships through continuous follow-up with clients for their requirements.",
      ],
    },
  ];

  const filteredPositions =
    filter === "All"
      ? positions
      : positions.filter((position) => position.title.includes(filter));

  const toggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div>
      <TextBg text={"JOIN US"} fontWeight={900} fontSize="4rem" />
      <div className="container">
        <div className="row">
          <div className="filterTabs">
            <button onClick={() => setFilter("All")}>All</button>
            <button onClick={() => setFilter("Business Development Executive")}>
              Business Development Executive
            </button>
            <button onClick={() => setFilter("Associate Vice President")}>
              Associate Vice President
            </button>
            <button
              onClick={() => setFilter("Sr Business Development Executive")}
            >
              Sr Business Development Executive
            </button>
            <button onClick={() => setFilter("Assistant Manager")}>
              Assistant Manager
            </button>
            <button onClick={() => setFilter("Telecaller")}>Telecaller</button>
          </div>
          {filteredPositions.map((position, index) => (
            <div className="col-md-4 misnoryGrid" key={index}>
              <div className="joinUsCard">
                <p className="positionTitle">{position.title}</p>
                <p className="positionLocation">
                  <span>
                    <CiLocationOn className="locationIcons" />
                  </span>{" "}
                  {position.location}
                </p>
                <ol className="fullPositionDesc">
                  {expanded[index]
                    ? position.description.map((desc, idx) => <li key={idx}>{desc}</li>)
                    : position.description.slice(0, 2).map((desc, idx) => <li key={idx}>{desc}</li>)}
                </ol>
                {position.description.length > 2 && (
                  <button className="readMoreButton" onClick={() => toggleExpand(index)}>
                    {expanded[index] ? "Read Less" : "Read More"}
                  </button>
                )}
                <div className="setAllButton">
                  <span className="FulltimeStyle">
                    <IoIosTimer /> Full Time
                  </span>
                  <Link className="anchorColor" to="/careerForm">
                    <p className="applyButton">
                      Apply <MdOutlineArrowOutward className="ArrowButton" />
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Position;
