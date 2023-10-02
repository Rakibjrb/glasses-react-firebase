import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";

function Root() {
  return (
    <div className="2xl:container mx-auto">
      <NavBar />
      <Outlet />
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default Root;
