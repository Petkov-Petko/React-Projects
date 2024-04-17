import Button from "./assets/Button/Button.jsx";
import Student from "./props.jsx";
import List from "./List.jsx";
import MyComponent from "./useState.jsx";
import ObjectComponent from "./objectUpdate.jsx";
function App() {
  return (
    <>
      <Button />
      <Student name="Petko" age={25} isStudent={true} />
      <Student name="Gosho" age={77} isStudent={false} />
      <Student />
      <List />
      <MyComponent />
      <ObjectComponent />
    </>
  );
}

export default App;
