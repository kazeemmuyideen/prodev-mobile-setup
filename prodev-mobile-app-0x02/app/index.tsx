import React from "react";
import {
  SafeAreaView,
  ImageBackground,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/images/background-image.png")}
        style={styles.background}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/images/Logo.png")}
            style={styles.logo}
          />
        </View>

        {/* ✅ REQUIRED TEXT */}
        <Text style={styles.textLarge}>Find your favorite place here</Text>

        {/* Button Group Example */}
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        {/* Navigation Prompt */}
        <Text style={styles.prompt}>Already have an account? Sign in</Text>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width,
    height,
    resizeMode: "cover",
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
  textLarge: {
    fontSize: 28,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
    marginVertical: 20,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#90caf9",
    padding: 12,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },
  prompt: {
    textAlign: "center",
    marginTop: 30,
    color: "#fff",
  },
});
