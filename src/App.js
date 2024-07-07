import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/header"
import AddJob from "./pages/AddJob"
import JobList from "./pages/JobList";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <BrowserRouter >
    <Header/>
    <ToastContainer />
      <Routes>
        <Route  path="/" element={<JobList/>} />
        <Route  path="/add-job" element={<AddJob/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
