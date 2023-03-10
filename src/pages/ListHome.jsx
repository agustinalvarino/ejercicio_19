import ContentList from "../components/ContentList";
import Content from "../components/Content";
function ListHome({ items }) {
  return (
    <>
      <ContentList items={items} />
      <Content />
    </>
  );
}
export default ListHome;
