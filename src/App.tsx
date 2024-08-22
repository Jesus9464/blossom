import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import ApolloClientProvider from "./common/graphql/ApolloClient";
import { persistor, store } from "./common/store";

//Routers
import CharacterScreen from "./modules/characters/screens/Character.screen";
import TryAgain from "./modules/shared/components/TryAgain";
import Home from "./modules/shared/container/Home";

//navbar navigation
import NavbarContainer from "./modules/shared/container/Navbar";

//styles
import "./styles/index.css";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApolloClientProvider>
          <Router>
            <NavbarContainer>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/character/:id" element={<CharacterScreen />} />
                <Route path="/TryAgain" element={<TryAgain />} />
              </Routes>
            </NavbarContainer>
          </Router>
        </ApolloClientProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
