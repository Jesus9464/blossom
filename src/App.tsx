import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import ApolloClientProvider from "./common/graphql/ApolloClient";
import { persistor, store } from "./common/store";

//Routers
import HomeScreen from "./modules/home/screens/Home.screen";
import FavoriteScreen from "./modules/favorite/screens/Favorite.screen";
import CharacterScreen from "./modules/characters/screens/Character.screen";
import TryAgain from "./modules/shared/components/TryAgain";

//styles
import "./styles/index.css";
import NavBar from "./modules/shared/components/Navbar";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApolloClientProvider>
          <Router>
            <NavBar />
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/favorites" element={<FavoriteScreen />} />
              <Route path="/character" element={<CharacterScreen />} />
              <Route path="/TryAgain" element={<TryAgain />} />
            </Routes>
          </Router>
        </ApolloClientProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
