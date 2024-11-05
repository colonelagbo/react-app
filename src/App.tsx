import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "Los Angeles", "San francisco"];
  return (
    <div>
      <ListGroup heading="Miami" items={items} onSelectItem={() => {}} />
    </div>
  );
}

export default App;
