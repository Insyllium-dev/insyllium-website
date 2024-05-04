import WorkTemplate from '../../../app/components/Work/WorkTemplate'
import { projectTemplates } from "../../utils/data";

export const metadata = {
  title: "Insylink - Insyllium",
};


const InsylinkPage = () => {

  return (
    <div>
      <WorkTemplate project={projectTemplates[1]}/>
    </div>
  );
};

export default InsylinkPage;
