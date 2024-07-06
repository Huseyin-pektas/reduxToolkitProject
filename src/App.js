import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/header";
import JobList from "./pages/JobList";
import AddJob from "./pages/addJob";

function App() {
  return (
    <BrowserRouter >
    <Header/>
      <Routes>
        <Route  path="/" element={<JobList/>} />
        <Route  path="/add-job" element={<AddJob/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
