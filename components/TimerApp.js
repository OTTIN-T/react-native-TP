import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import AddTimer from "./AddTimer";
import Timer from "./Timer";

export default function TimerApp(props) {
  console.log("TimerApp props", props.timers);
  const timerList = [];

  for (let i = 0; i < props.timers; i++) {
    timerList.push(<Timer key={i} />);
  }

  return (
    <View style={styles.timerApp}>
      <AddTimer timersProps={props} />
      {timerList}
    </View>
  );
}

const styles = StyleSheet.create({
  timerApp: {
    //     flex: 1,
    //     backgroundColor: "#fff",
    //     alignItems: "center",
    //     justifyContent: "center",
  },
});
