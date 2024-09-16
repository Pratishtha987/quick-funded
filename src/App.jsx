// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
// import LoginPage from "./pages/LoginPage";
// import HomePage from "./pages/HomePage";
// import AffilatePage from "./pages/AffilatePage";
// import AcademyPage from "./pages/AcademyPage";
// import ClientAreaPage from "./pages/ClientAreaPage";
// import FAQPage from "./pages/FAQPage";
// import ContactUsPage from "./pages/ContactUsPage";
// import Header from "./components/Header/Header";
// import SignUpPage from "./pages/SignUpPage";
// import Footer from "./components/Footer/Footer";
// import GeneralQuestion from "./components/FAQPage/GeneralQuestion";
// // import HomePage from "./pages/HomePage";

// function App() {
//   const [login, setLogin] = useState(false);
//   // const navigate = useNavigate();

//   // useEffect(() => {
//   //   navigate("/");
//   // }, []);

//   return (
//     <div className="App">
//       <Header />
//       {/* <Footer /> */}
//       <Routes>
//         {/* <Route path="/" element={<LoginPage />} /> */}
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<SignUpPage />} />
//         <Route path="/affilate" element={<AffilatePage />} />
//         <Route path="/academy" element={<AcademyPage />} />
//         <Route path="/clientarea" element={<ClientAreaPage />} />
//         {/* <Route path="/faq" element={<FAQPage />}> */}
//         <Route path="/faq" element={<FAQPage />}>
//           <Route>
//             {/* <Route path="/faq" element={<FAQPage />} /> */}
//             <Route path="/faq/general-rules" element={<GeneralQuestion />} />
//             {/* <Route
//               path="/faq/challenge-stage-rules"
//               element={<ChallengeStageRules />}
//             />
//             <Route path="/faq/one-step-rules" element={<OneStepRules />} /> */}
//           </Route>
//         </Route>
//         <Route path="/contactus" element={<ContactUsPage />} />
//         {/* <Route path="*" element={<div>Not Found</div>} />{" "} */}
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

// // return (

// // <div className="App">

// //   <Routes>
// //     {/* <Route path="/" element={<LoginPage />} /> */}
// //     <Route path="/" element={<HomePage />} />
// //     <Route path="/affilate" element={<AffilatePage />} />
// //     <Route path="/academy" element={<AcademyPage />} />
// //     <Route path="/clientarea" element={<ClientAreaPage />} />
// //     <Route path="/faq" element={<FAQPage />} />
// //     <Route path="/contatcus" element={<ContatcUsPage />} />
// //     {/* <Route path="*" element={<div>Not Found</div>} /> */}
// //   </Routes>
// // </div>
// // )

// export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import BlogsPage from "./pages/BlogsPage";
import AffilatePage from "./pages/AffilatePage";
import AcademyPage from "./pages/AcademyPage";
import ClientAreaPage from "./pages/ClientAreaPage";
import FAQPage from "./pages/FAQPage";
import ContactUsPage from "./pages/ContactUsPage";
import GeneralQuestion from "./components/FAQPage/GeneralQuestion/GeneralQuestion";
import QuestionDetail from "./components/FAQPage/GeneralQuestion/QuestionDetail";
import ChallengeStageRulesDeatils from "./components/FAQPage/ChallengeStageRules/ChallengeStageRulesDetails";
import ChallengeStageRules from "./components/FAQPage/ChallengeStageRules/ChallengeStageRules";
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Routes,
//   useParams,
// } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/affilate" element={<AffilatePage />} />
        <Route path="/academy" element={<AcademyPage />} />
        <Route path="/clientarea" element={<ClientAreaPage />} />
        <Route path="/faq" element={<FAQPage />}>
          {/* Uncomment and add components when ready */}
          {/* <Route path="challenge-stage-rules" element={<ChallengeStageRules />} /> */}
          {/* <Route path="one-step-rules" element={<OneStepRules />} /> */}
        </Route>
        <Route path="faq/general-rules" element={<GeneralQuestion />} />
        <Route
          path="faq/general-rules/:routerLink"
          element={<QuestionDetail />}
        />
        <Route
          path="faq/challenge-stage-rules"
          element={<ChallengeStageRules />}
        />
        <Route
          path="faq/challenge-stage-rules/:routerLink"
          element={<ChallengeStageRulesDeatils />}
        />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
