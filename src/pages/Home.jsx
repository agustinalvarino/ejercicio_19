import GroupOfLists from "../components/GroupOfLists";
import Listado from "../components/List";
function Home({ setItems }) {
  return (
    <>
      <h1>Listas</h1>
      <div className="d-flex flex-column ">
        <Listado setItems={setItems} />
      </div>
    </>
  );
}
export default Home;
