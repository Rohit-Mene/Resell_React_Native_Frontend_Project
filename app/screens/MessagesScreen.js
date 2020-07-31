import React, { useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "Aditya",
    description:
      "Hey,Rohit. I was thinking if you are still selling the bike. Are the prices negotiable",
    image: require("../assets/rohit.png"),
  },

  {
    id: 2,
    title: "Shiv",
    description:
      "Hey Mate,Selling the bike. I'll buy the bike if you can sell it today.",
    image: require("../assets/rohit.png"),
  },
];
//Screen is a custom compoenent that we have build to resue the safeareaview ,the implementation is present in components/Screen.js
function MessagesScreen(props) {
  //using hooks below
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (message) => {
    //Delete the messages from messages
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            // we are just passing a refernece to function ListItemDeleteAction(Present in components/ListItemDeleteAction.js) and not rendering it
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/rohit.png"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
export default MessagesScreen;
