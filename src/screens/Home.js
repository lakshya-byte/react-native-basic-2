import React from "react";
import { View, Linking } from "react-native";
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
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 20,
        }}
      >
        <Section>
          <SectionContent>
            <Text
              status="info"
              fontWeight="bold"
              style={{ textAlign: "center" }}
            >
              Components made with rapi ui{" "}
            </Text>
            <Button
              text="Rapi Docs"
              style={{ marginTop: 10 }}
              onPress={() => {
                Linking.openURL("https://rapi-ui.kikiding.space/");
              }}
            />
            <Button
              text="Go to second screen"
              style={{ marginTop: 10 }}
              onPress={() => {
                navigation.navigate("SecondScreen");
              }}
              // status="success"
            />
            <Button
              status={isDarkmode ? "success" : "danger"}
              text={isDarkmode ? "Light Mode" : "Dark Mode"}
              style={{ marginTop: 10 }}
              onPress={() => {
                if (isDarkmode) {
                  setTheme("light");
                } else {
                  setTheme("dark");
                }
              }}
            />
          </SectionContent>
        </Section>
      </View>
    </Layout>
  );
};

export default Home;
