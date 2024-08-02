import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import AffilatePage from "./pages/AffilatePage";
import AcademyPage from "./pages/AcademyPage";
import ClientAreaPage from "./pages/ClientAreaPage";
import FAQPage from "./pages/FAQPage";
import ContatcUsPage from "./pages/ContactUsPage";
import Header from "./components/Header/Header";
import SignUpPage from "./pages/SignUpPage";
import Footer from "./components/Footer/Footer";
// import HomePage from "./pages/HomePage";

function App() {
  const [login, setLogin] = useState(false);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   navigate("/");
  // }, []);

  return (
    <div className="App">
      <Header />
      {/* <Footer /> */}
      <Routes>
        {/* <Route path="/" element={<LoginPage />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/affilate" element={<AffilatePage />} />
        <Route path="/academy" element={<AcademyPage />} />
        <Route path="/clientarea" element={<ClientAreaPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contatcus" element={<ContatcUsPage />} />
        {/* <Route path="*" element={<div>Not Found</div>} />{" "} */}
      </Routes>
      <Footer />
    </div>
  );
}

// return (

// <div className="App">

//   <Routes>
//     {/* <Route path="/" element={<LoginPage />} /> */}
//     <Route path="/" element={<HomePage />} />
//     <Route path="/affilate" element={<AffilatePage />} />
//     <Route path="/academy" element={<AcademyPage />} />
//     <Route path="/clientarea" element={<ClientAreaPage />} />
//     <Route path="/faq" element={<FAQPage />} />
//     <Route path="/contatcus" element={<ContatcUsPage />} />
//     {/* <Route path="*" element={<div>Not Found</div>} /> */}
//   </Routes>
// </div>
// )

export default App;
