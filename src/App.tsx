import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Header, Portal } from "./components";
import { Content, News, Sidebar } from "screen";
import { useAuth } from "hooks/useAuth";
import { useToast } from "hooks/useToast";
import { ToastOptions } from "types/enumerators";
import { authorization } from "api/authorization";
import { SignIn, SignUp } from "components/Authorization";

import "./App.css";

function App() {
  const { user, setUser } = useAuth();
  const { openToast } = useToast();
  const [isSignInVisible, setIsSignInVisible] = useState<boolean>(true);
  const [isSignUpVisible, setIsSignUpVisible] = useState<boolean>(false);

  const handleSwitch = () => {
    if (isSignInVisible) {
      setIsSignInVisible(false);
      setIsSignUpVisible(true);
      return;
    }
    if (isSignUpVisible) {
      setIsSignInVisible(true);
      setIsSignUpVisible(false);
      return;
    }
  };

  const checkUser = async () => {
    try {
      const { data } = await authorization();
      setUser(data);
    } catch ({
      response: {
        data: { message },
      },
    }) {
      if (message !== "Need authorization") {
        openToast(String(message), ToastOptions.error);
      }
    }
  };

  useEffect(() => {
    checkUser();
  }, []);
  return (
    <div className="App">
      {user ? (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/news" element={<News />} />
          </Routes>
          <Sidebar />
        </>
      ) : isSignInVisible ? (
        <Portal
          Component={() => <SignIn handleSwitch={handleSwitch} />}
          isOpen={isSignInVisible}
          text="Sign In"
          handleClose={() => setIsSignInVisible(false)}
        />
      ) : (
        <Portal
          Component={() => <SignUp handleSwitch={handleSwitch} />}
          isOpen={isSignUpVisible}
          text="Sign Up"
          handleClose={() => setIsSignUpVisible(false)}
        />
      )}
    </div>
  );
}

export default App;
