import React from "react";
import { useTheme, themeColor } from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

const TabBarIcon = ({ icon }) => {
  const { isDarkmode } = useTheme();
  return <Ionicons style={{
    marginBottom : -9
  }} name={icon} size={24} />;
};

export default TabBarIcon;
