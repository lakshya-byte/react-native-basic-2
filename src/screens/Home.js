import React from "react";
import { View } from "react-native";
import {
  Text,
  Layout,
  Section,
  SectionContent,
  Button,
  TopNav,
  useTheme,
  themeColor,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  const { isDarkmode, setTheme } = useTheme();
  return (
    <Layout>
      <TopNav
        middleContent="Home"
        rightContent={
          <Ionicons
            name={isDarkmode ? "sunny" : "moon"}
            size={25}
            color={isDarkmode ? themeColor.white : themeColor.dark}
          />
        }
        rightAction={() => {
          if (isDarkmode) {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
      />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Section>
          <SectionContent>
            <Text style={{ textAlign: "center" }} fontWeight="bold">
              These components are from rapi ui
            </Text>
            <Button
              onPress={() => {
                navigation.navigate("SecondScreen");
              }}
              style={{ marginTop: 10 }}
              text="Go to SecondScreen"
            />
          </SectionContent>
        </Section>
      </View>
    </Layout>
  );
};

export default Home;
