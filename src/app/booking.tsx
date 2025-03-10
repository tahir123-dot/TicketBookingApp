import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from "expo-router";

const Booking = () => {
  const { ticket } = useLocalSearchParams();
  const ticketData = JSON.parse(ticket as string); // ✅ Fix: Type assertion

  const handleConfirm = () => {
    alert("Booking Confirmed!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirm Booking</Text>
      <Text style={styles.ticketName}>{ticketData.name}</Text>
      <Text style={styles.ticketPrice}>${ticketData.price}</Text>
      <Text style={styles.ticketTime}>{ticketData.time}</Text>
      <TouchableOpacity style={styles.button} onPress={handleConfirm}>
        <Text style={styles.buttonText}>Confirm Booking</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  ticketName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  ticketPrice: {
    fontSize: 16,
    color: "#4CAF50",
  },
  ticketTime: {
    fontSize: 14,
    color: "#666",
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Booking;