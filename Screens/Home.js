import React from "react";
import { View, Text, Button } from "react-native";

const Home = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
      <Button
      onPress={()=>navigation.navigate("Profile")}
      title="Profile"/>
    </View>
  );
};

export default Home;
