import Helloworld from "./Helloworld";
import StudentList from "./StudentsList";
import Webpage from "./Webpage";
import "./style.css";

export default function App() {
  return (
    <div>
      <Webpage />
      <StudentList />
      <h1>Plz Enter Your Name!</h1>
      <Helloworld />
    </div>
  );
}
