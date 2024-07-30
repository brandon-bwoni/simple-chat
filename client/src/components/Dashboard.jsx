import OpenConversation from "./OpenConversation";
import Sidebar from "./Sidebar";


const Dashboard = ({ id }) => {
  return (
    <div className="d-flex " style={{ height: "100vh" }}>
      <Sidebar id={id} />
      <OpenConversation />
    </div >
  );
};

export default Dashboard;