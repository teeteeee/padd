import Home from "./pages/home";
import ChatBot from "./pages/homePage";
import LoginPage from "./pages/login";
import HomePage from "./pages/homePage";
import DynamicHomePage from "./pages/dynamicHome";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { googleLogout, GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { UserProvider } from "./UserContext";
import DocumentHome from "./documents/amazon/home";

import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  Navigate,
} from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  const { folder } = useParams();
  const handleLogin = (credentialResponse) => {
    console.log("credentialResponse here", credentialResponse);
    setUser(credentialResponse);
    // window.location.href = "/home";
    console.log("setUser here", setUser);
  };

  const handleLogout = () => {
    googleLogout();
    setUser(null);
  };


  // useEffect(() => {
  //   // Get the expiration time from local storage
  //   const expirationTime = localStorage.getItem("token_expiration");
  
  //   if (expirationTime) {
  //     const currentTime = new Date().getTime();
  //     if (currentTime > expirationTime) {
  //       // Redirect to the login page
  //       window.location.href = "/"; // Redirect using the browser
  //     } 
  //   }
  // }, []); // Leave the dependency array empty

  
  return (
    <UserProvider>
      <Router basename="/http://localhost:3000/myapp" >
        <div className="App">
          <Routes >
            <Route path="/" element={<LoginPage />} />
            <Route path="/:folder/home" component={DocumentHome} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/home/:folderName" element={<DynamicHomePage />} />
            {/* <Route
        path="/home/:folderName"
        render={(props) => <DynamicHomePage {...props} />}
      /> */}
            
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/chat" element={<ChatBot />} />
//         <Route path="/app/*" element={<AppRoutes />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// function AppRoutes() {
//   return (
//     <div>
//       {/* Additional layout elements can go here */}
//       <Routes>
//         <Route path="/chat" element={<ChatBot />} />
//         {/* Add more routes specific to the app section */}
//       </Routes>
//     </div>
//   );
// }

// export default App;

// function App() {
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" component={Login} />
//       <Route path="/" element={<App />}>
//         <Route path="/chat" element={ <ChatBot /> } />
//       </Route>

//       {/* Add more routes here */}
//     </Routes>
//   </BrowserRouter>;
//   // return (
//   //   <div className="">

//   //     <Login />
//   //     <ChatBot />
//   //   </div>
//   // );
// }

// export default App;
