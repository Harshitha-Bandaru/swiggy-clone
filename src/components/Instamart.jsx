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
            }}
          >
            Hide Text
          </button>
          <p>{description}</p>
        </>
      ) : (
        <button
          className="cursor-pointer underline"
          onClick={() => {
            setIsVisible(true);
          }}
        >
          Show text
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
  const [visibleSection, setVisibleSection] = useState("about");
  return (
    <div>
      <h1 className="text-xl font-bold">Instamart</h1>
      <DisplaySection
        title={"About us"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiatfacilis quidem suscipit inventore autem officiis obcaecati laboriosamitaque qui, dolorum aliquid fugit? Cumque harum fuga perferendis,impedit reiciendis maiores iste, soluta rem laboriosam facilismolestiae eaque hic distinctio officia porro quisquam undevoluptatibus aliquam praesentium. Eveniet impedit commodi quidem a."
        }
        isVisible={visibleSection === "about"}
        setIsVisible={(bool) => {
          // setSectionConfig({
          //   showAbout: true,
          //   showTeam: false,
          //   showCareers: false,
          // });

          isVisible = bool;
          setVisibleSection("about");
        }}
      />
      <DisplaySection
        title={"Team - This is us"}
        description={"This is some lorem ipsum text"}
        isVisible={visibleSection === "team"}
        setIsVisible={(bool) => {
          // setSectionConfig({
          //   showAbout: false,
          //   showTeam: true,
          //   showCareers: false,
          // });

          isVisible = bool;
          setVisibleSection("team");
        }}
      />
      <DisplaySection
        title={"Careers - This is me"}
        description={"This is some lorem ipsum text"}
        isVisible={visibleSection === "career"}
        setIsVisible={(bool) => {
          // setSectionConfig({
          //   showAbout: false,
          //   showTeam: false,
          //   showCareers: true,
          // });

          isVisible = bool;
          setVisibleSection("career");
        }}
      />
    </div>
  );
};
export default Instamart;
