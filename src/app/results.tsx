import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

interface Ticket {
  id: number;
  name: string;
  price: number;
  time: string;
}

const Results = () => {
  const router = useRouter();
  const { type, from, to, date } = useLocalSearchParams();
  const tickets: Ticket[] = [
    { id: 1, name: "Flight 101", price: 200, time: "10:00 AM" },
    { id: 2, name: "Flight 202", price: 250, time: "12:00 PM" },
  ];

  const handleBook = (ticket: Ticket) => {
    router.push({ pathname: "/booking", params: { ticket: JSON.stringify(ticket) } });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available {type?.toString().charAt(0).toUpperCase() + type?.toString().slice(1)}</Text>
      <FlatList
        data={tickets}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.ticket} onPress={() => handleBook(item)}>
            <Text style={styles.ticketName}>{item.name}</Text>
            <Text style={styles.ticketPrice}>${item.price}</Text>
            <Text style={styles.ticketTime}>{item.time}</Text>
          </TouchableOpacity>
        )}
      />
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
  ticket: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
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
});

export default Results;