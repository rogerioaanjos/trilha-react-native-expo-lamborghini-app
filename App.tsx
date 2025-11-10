import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import GarageScreen from "./src/screens/GarageScreen";

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <GarageScreen />
      <StatusBar style="light" />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E20",
  },
});


// import 'react-native-gesture-handler';
// import { StatusBar } from "expo-status-bar";
// import { StyleSheet } from "react-native";
// import { GestureHandlerRootView } from "react-native-gesture-handler";

// import GarageScreen from "./src/screens/GarageScreen";

// export default function App() {
//   return (
//     <GestureHandlerRootView style={styles.container}>
//       <GarageScreen />
//       <StatusBar style="light" />
//     </GestureHandlerRootView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#1E1E20",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });



// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";

// import GarageScreen from "./src/screens/GarageScreen";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <GarageScreen />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
