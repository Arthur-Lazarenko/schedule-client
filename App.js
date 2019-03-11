import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { ScrollView } from "react-native";
import reducers from "./reducers";
import CHeader from "./components/Header";
import CContent from "./components/Content";
import CSetting from "./components/Setting";

const store = createStore(reducers);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <CHeader />
        <ScrollView>
          <CSetting />
          <CContent />
        </ScrollView>
      </Provider>
    );
  }
}

export default App;
