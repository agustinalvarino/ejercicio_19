import GroupOfLists from "../components/GroupOfLists";
import Listado from "../components/List";
function Home() {
  return (
    <div className="d-flex flex-column ">
      <GroupOfLists />
      <Listado />
    </div>
  );
}
export default Home;
