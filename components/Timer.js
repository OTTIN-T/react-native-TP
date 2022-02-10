import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Timer() {
  const [isActive, setIsActive] = useState(false);
  const [isStoped, setIsStoped] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  const handleActive = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setIsStoped(true);
    setIsActive(false);
    setTime(0);
  };

  function formatSeconds(time) {
    const formatTime = new Date(time * 1000)
      .toUTCString()
      .match(/(\d\d:\d\d:\d\d)/g)[0];
    return formatTime;
  }

  return (
    <View style={styles.timer}>
      <Text>Chrono: {formatSeconds(time)} ms</Text>
      <Button title={isActive ? "PAUSE" : "START"} onPress={handleActive} />
      <Button
        title="RESET"
        onPress={handleReset}
        disabled={isActive ? false : true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  timer: {
    //     flex: 1,
    //     backgroundColor: "#fff",
    //     alignItems: "center",
    //     justifyContent: "center",
  },
});
