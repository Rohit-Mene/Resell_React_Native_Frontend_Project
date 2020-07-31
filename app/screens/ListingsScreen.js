import React from "react";
import {
  Image,
  StyleSheet,
  View,
  TouchableHighlight,
  FlatList,
} from "react-native";

import Screen from "../components/Screen";
import AppCard from "../components/AppCard";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "orbea cycle for sale",
    price: 1000,
    image: require("../assets/orbeacycle.jpg"),
  },
  {
    id: 2,
    title: "cannondale cycle for sale",
    price: 1500,
    image: require("../assets/roadbike.jpg"),
  },
];

function ListingsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listings) => listings.id.toString()}
        renderItem={({ item }) => (
          <AppCard
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 15,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
