import React from "react";
import "./students-list.css";

export default function StudentsList() {
  const [list, setList] = React.useState(["Sai", "Apsar", "Shoyab"]);

  const [newStudent, setNewStudent] = React.useState("Ashok");

  const onStudentAdd = () => {
    list.push(newStudent);
    setNewStudent("");
  };

  return (
    <div>
      <h2> Enter the student data </h2>
      <section className="ui__section">
        <header className="ui__section__header">
          <input
            onChange={(e) => setNewStudent(e.target.value)}
            type="text"
            placeholder="Enter the student name"
            value={newStudent}
          />
          <button onClick={onStudentAdd}>Add</button>
        </header>
        <h2>Student List </h2>
        <ul className="ui__section__list">
          {list.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
