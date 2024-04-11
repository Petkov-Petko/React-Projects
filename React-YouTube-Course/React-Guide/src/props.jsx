import propTypes from "prop-types";

//props
function Student(props) {
  return (
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "Yes" : "NO"}</p>
    </div>
  );
}

// propTypes => we can ad types if we want.
// Ако се въседат грешни типове се логва ерор в конзолата.
Student.propTypes = {
  name: propTypes.string,
  age: propTypes.number,
  isStudent: propTypes.bool,
};
export default Student;
