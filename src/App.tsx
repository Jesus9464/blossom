import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import ApolloClientProvider from "./common/graphql/ApolloClient";
import { persistor, store } from "./common/store";

//Routers
import HomeScreen from "./modules/home/screens/Home.screen";

//styles
import "./styles/index.css";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApolloClientProvider>
          <Router>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Router>
        </ApolloClientProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
