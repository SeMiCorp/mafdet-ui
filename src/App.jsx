
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { useKeycloak } from '@react-keycloak/web';
import Header from './components/layout/header/Header';
import Home from './pages/Home';
import Footer from './components/layout/footer/Footer';
import NewRecord from './pages/record/NewRecord';
import Records from "./pages/record/Records";
import RecordDetails from "./pages/record/RecordDetails";

const App = () => {
  const { initialized, keycloak } = useKeycloak();

  useEffect(async () => {
    if (initialized && !keycloak.authenticated) {
      await keycloak.login();
    }
  });

  useEffect(()=> {
      console.log("Page Reload")
  },[])

  return keycloak.authenticated ? (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="govuk-width-container">
          <main className="govuk-main-wrapper" id="main-content" role="main">
            <Routes>
              <Route index="true" element={<Home />} />
              <Route path="/new-record" element={<NewRecord />} />
              <Route path="/records" element={<Records />} />
              <Route path="/records/:id" element={<RecordDetails />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  ) : (
    <button
      type="button"
      className="text-blue-800"
      onClick={() => keycloak.login()}
    >
      Login
    </button>
  );
};

export default App;
