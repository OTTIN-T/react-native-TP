import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function AddTimer({ timersProps }) {
  console.log("AddTimer props", timersProps.timers);
  return (
    <View style={styles.addTimer}>
      <Button
        title="+"
        onPress={() => {
          timersProps.actions.addTimer();
          console.log("timersProps onpress", timersProps.timers);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  addTimer: {
    //     flex: 1,
    //     backgroundColor: "#fff",
    //     alignItems: "center",
    //     justifyContent: "center",
  },
});
