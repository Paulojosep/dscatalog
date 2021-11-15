import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import { AuthContext, AuthContextData } from './AuthContext';
import Routes from './Routes';

function App() {
  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    authenticated: false,
  });

  return (
    <AuthContext.Provider value={{ authContextData, setAuthContextData }}>
      <Routes />
      <ToastContainer />
    </AuthContext.Provider>
  );
}

export default App;
