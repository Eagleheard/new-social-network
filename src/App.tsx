import React from "react";
import { Routes, Route } from "react-router-dom";

import { Header } from "./components";
import { Content, News, Sidebar } from "screen";
import { AuthProvider } from "hooks/useAuth";
import { ToastProvider } from "hooks/useToast";

import "./App.css";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ToastProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/news" element={<News />} />
          </Routes>
          <Sidebar />
        </ToastProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
