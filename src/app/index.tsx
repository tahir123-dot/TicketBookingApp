import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { useRouter } from "expo-router";

const Home = () => {
  const router = useRouter();

  return (
    <ImageBackground
      source={{ uri: "https://via.placeholder.com/1500" }} // Replace with your image URL
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Book Your Tickets</Text>
        <TouchableOpacity style={styles.button} onPress={() => router.push("/search?type=flight")}>
          <Text style={styles.buttonText}>Flights</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.push("/search?type=train")}>
          <Text style={styles.buttonText}>Trains</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.push("/search?type=bus")}>
          <Text style={styles.buttonText}>Buses</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Home;