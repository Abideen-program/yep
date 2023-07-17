import Modules from "./Module";
import Overview from "./Overview";

const OverviewModule = () => {
  return (
    <div className="p-5 md:p-10 lg:p-14">
      <Overview />
      <Modules />
    </div>
  );
};

export default OverviewModule;
