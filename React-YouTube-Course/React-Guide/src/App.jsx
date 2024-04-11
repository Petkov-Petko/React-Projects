import Button from "./assets/Button/Button.jsx";
import Student from "./props.jsx";
function App() {
  return (
    <>
      <Button />
      <Student name="Petko" age={25} isStudent={true} />
      <Student name="Gosho" age={77} isStudent={false} />
      <Student />
    </>
  );
}

export default App;
