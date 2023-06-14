import { useState } from "react";

const DisplaySection = ({ title, description, isVisible, setIsVisible }) => {
  // const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="border border-black m-2 p-2">
      <h1 className="text-xl font-bold">{title}</h1>
      {isVisible ? (
        <>
          <button
            className="cursor-pointer underline"
            onClick={() => {
              setIsVisible(false);
              console.log(isVisible);
            }}
          >
            Hide
          </button>
          <p>{description}</p>
        </>
      ) : (
        <button
          className="cursor-pointer underline"
          onClick={() => {
            setIsVisible(true);
            console.log(isVisible);
          }}
        >
          Show
        </button>
      )}
    </div>
  );
};

const Instamart = () => {
  // const [sectionConfig, setSectionConfig] = useState({
  //   showAbout: true,
  //   showTeam: false,
  //   showCareers: true,
  // });
  const [visibleSection, setVisibleSection] = useState("");
  return (
    <div>
      <h1 className="text-2xl ml-2 font-bold">Instamart</h1>
      <DisplaySection
        title={"About us"}
        description={
          "Introducing Instamart - Your Ultimate stop for convenient Grocery shopping! Are you tired of making endless trips to the grocery store? Do you wish there was a way to get all your essentials delivered right to your doorstep? Look no further! Instamart, our innovative service, is here to revolutionize your grocery shopping experience"
        }
        isVisible={visibleSection === "about"}
        setIsVisible={(b = true) => {
          // setSectionConfig({
          //   showAbout: true,
          //   showTeam: false,
          //   showCareers: false,
          // });
          if (b) {
            setVisibleSection("about");
          } else {
            setVisibleSection("");
          }
        }}
      />
      <DisplaySection
        title={"Team - This is us"}
        description={
          "At Instamart, we believe in working collaboratively, fostering a culture of innovation and excellence. Together, we are building a platform that simplifies lives, ensuring our customers have access to quality groceries without stepping out of their homes."
        }
        isVisible={visibleSection === "team"}
        setIsVisible={(b) => {
          // setSectionConfig({
          //   showAbout: false,
          //   showTeam: true,
          //   showCareers: false,
          // });
          if (b) {
            setVisibleSection("team");
          } else {
            setVisibleSection("");
          }
        }}
      />
      <DisplaySection
        title={"Careers - For you"}
        description={
          "Join Instamart and shape the future of online Grocery! Looking for an exciting career oppurtunity in the booming e-grocery industry? Look no further than Instamart! We're on lookout for passionate individuals who are eager to make a difference and redefine convenience for customers worldwide. "
        }
        isVisible={visibleSection === "career"}
        setIsVisible={(b) => {
          // setSectionConfig({
          //   showAbout: false,
          //   showTeam: false,
          //   showCareers: true,
          // });

          if (b) {
            setVisibleSection("career");
          } else {
            setVisibleSection("");
          }
        }}
      />
    </div>
  );
};
export default Instamart;
