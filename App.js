import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import TimerContainer from "./containers/Timer.container.js";
import timers from "./reducers/timer.reducer";
let reducers = combineReducers({
  // On peut en mettre d'autres ici
  timerKey: timers,
});

let store = createStore(reducers);

export default function App() {
  // let timerArray = [];
  return (
    // <View>
    //   <StatusBar style="auto" />
    //   {/* <Text>Test</Text> */}
    //   <TimerContainer />
    // </View>
    <Provider style={styles.container} store={store}>
      <StatusBar style="auto" />
      <TimerContainer />
      {/* <AddTimer timerArray={timerArray} />
      <Timer /> */}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
