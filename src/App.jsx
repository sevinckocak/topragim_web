import { useState } from "react";
import AppRoutes from "./routes";
import "./index.css";
import { AuthProvider } from "./context/auth/AuthContext";

function App() {
  return (
    <div>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </div>
  );
}

export default App;
