import { Routes, Route, BrowserRouter } from 'react-router-dom';
import {useState, useEffect} from 'react';
import { useKeycloak } from '@react-keycloak/web';
import Header from './components/layout/header/Header';
import Home from './pages/Home';
import Footer from './components/layout/footer/Footer';
import CatPage from './pages/cat/Cat';



const App = () => {

  const { initialized, keycloak } = useKeycloak();

  useEffect(async () => {
    if (initialized && !keycloak.authenticated) {
      await keycloak.login();
    }
  });


  return keycloak.authenticated ? (
  
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="govuk-width-container">
            <main className="govuk-main-wrapper" id="main-content" role="main">
             
                <Routes>
                  <Route index="true" element={<Home />} />
                  <Route path="/cat" element={<CatPage />} />
                </Routes>
           
            </main>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    
  ): ( <button
    type="button"
    className="text-blue-800"
    onClick={() => keycloak.login()}
  >
    Login
  </button>)
}

export default App;
