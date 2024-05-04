import WorkTemplate from '../../../app/components/Work/WorkTemplate'
import { projectTemplates } from "../../utils/data";

export const metadata = {
  title: "LansGR - Insyllium",
};


const LansPage = () => {

  return (
    <div>
      <WorkTemplate project={projectTemplates[2]}/>
    </div>
  );
};

export default LansPage;
