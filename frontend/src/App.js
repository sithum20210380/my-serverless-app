import React from "react";
import AddStudentForm from "./components/AddStudentForm";
import StudentList from "./components/StudentList";

function App() {
  return (
    <div className="App">
      <h1>Serverless application</h1>
      <AddStudentForm />
      <StudentList />
    </div>
  );
}

export default App;
