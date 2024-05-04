import WorkTemplate from '../../../app/components/Work/WorkTemplate'
import { projectTemplates } from "../../utils/data";

export const metadata = {
  title: "Hakbus - Insyllium",
};

const HakbusPage = () => {
  return (
    <div>
      <WorkTemplate project={projectTemplates[0]}/>
    </div>
  );
};

export default HakbusPage;
