import { features, iconMap } from "../services/ContentList";

const FeatureCard = ({ title, icon, content, index }) => {
  const IconComponent = iconMap[icon];
  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] ${
        index !== features.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}
    >
      <div
        className={`w-[64px] h-[64px] mr-2 rounded-full flex justify-center items-center bg-dimBlue`}
      >
        <IconComponent color='#33bbcf' className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  );
};

const DescriptionSection = () => {
  return (
    <section
      id="features"
      className="flex items-center md:flex-row flex-col sm:py-16 py-6"
    >
      <div className="flex-1 flex justify-center items-center flex-col text-center lg:flex lg:justify-start lg:items-start lg:text-left">
        <h2 className="font-poppins font-semibold text-[40px] xs:text-[48px] text-white leading-[66.8px] xs:leading-[76.8px] w-full">
          You make the <span className="text-gradient">choices</span>,{" "}
          <br className="sm:block hidden" /> we’ll secure the{" "}
          <span className="text-gradient">votes</span>
        </h2>
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
          With the right blockchain voting system, you can ensure transparency,
          security, and trust in elections. However, with many platforms
          available.
        </p>
        <button className="mt-6 text-white font-poppins font-normal rounded-lg btn-blue-gradient-2 rounded-lg">
          Create New Election
        </button>
      </div>

      <div
        className={`flex-1 flex flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative flex-col`}
      >
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default DescriptionSection;
