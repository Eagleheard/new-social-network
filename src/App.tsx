import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { Header, Preview } from "./components";
import { Content, News, Profile, Sidebar } from "screen";
import { useAuth } from "hooks/useAuth";
import { useToast } from "hooks/useToast";
import { ToastOptions } from "types/enumerators";
import { authorization } from "api/authorization";

import "./App.css";

function App() {
  const { user, setUser } = useAuth();
  const { openToast } = useToast();

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
    <>
      {user ? (
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/news" element={<News />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
          <Sidebar />
        </div>
      ) : (
        <Preview />
      )}
    </>
  );
}

export default App;
