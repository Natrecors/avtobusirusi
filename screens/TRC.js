import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import CreditCard from "./CreditCard";

class TRC extends Component {
  render() {
    return (
      <View style={styles.app}>
        <CreditCard name="Твоята Карта" date="11/22" suffix="3904" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {

    flex: 1, alignItems: "center", justifyContent: "center",
    maxWidth: 500,
    marginTop: 20
  }
});

export default TRC;
