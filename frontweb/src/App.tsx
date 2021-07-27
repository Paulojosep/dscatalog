import { useState } from 'react';
import './App.css';
import { AuthContext, AuthContextData } from './AuthContext';
import Routes from './Routes';

function App() {
  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    authenticated: false,
  });

  return (
    <AuthContext.Provider value={{ authContextData, setAuthContextData }}>
      <Routes />
    </AuthContext.Provider>
  );
}

export default App;
