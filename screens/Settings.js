import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS } from "../constants";
import { MaterialIcons } from "@expo/vector-icons";
import EditProfile from "./EditProfile";





const Settings = ({ navigation }) => {
   const navigateToEditProfile=()=>{


    navigation.navigate('test3');
  };
  const navigateToSecurity = () => {
    console.log("Защита");
  };

  const navigateToNotifications = () => {
    console.log("Известие");
  };

  const navigateToPrivacy = () => {
    console.log("Поверителност");
  };

  const navigateToSubscription = () => {
    console.log("Абонамент");
  };

  const navigateToSupport = () => {
    console.log("Поддръжка");
  };

  const navigateToTermsAndPolicies = () => {
    console.log("Условия и правила");
  };

  const navigateToFreeSpace = () => {
    console.log("Освобождаване на място");
  };

  const navigateToDateSaver = () => {
    console.log("Пестене на данни");
  };

  const navigateToReportProblem = () => {
    console.log("Съобщете за проблем");
  };


  const logout = () => {
    navigation.navigate('test4');
  };

  const accountItems = [
    {
      icon: "person-outline",
      text: "Редактиране на профил",
      action: navigateToEditProfile,
    },
    { icon: "security", text: "Защита", action: navigateToSecurity },
    {
      icon: "notifications-none",
      text: "Известия",
      action: navigateToNotifications,
    },
    { icon: "lock-outline", text: "Поверителност", action: navigateToPrivacy },
  ];

  const supportItems = [
    {
      icon: "credit-card",
      text: "Мойте абонаменти",
      action: navigateToSubscription,
    },
    { icon: "help-outline", text: "Помощ и поддръжка", action: navigateToSupport },
    {
      icon: "info-outline",
      text: "Условия и правила",
      action: navigateToTermsAndPolicies,
    },
  ];

  const cacheAndCellularItems = [
    {
      icon: "delete-outline",
      text: "Освобождаване на място",
      action: navigateToFreeSpace,
    },
    { icon: "save-alt", text: "Пестене на данни", action: navigateToDateSaver },
  ];

  const actionsItems = [
    {
      icon: "outlined-flag",
      text: "Съобщете за проблеми",
      action: navigateToReportProblem,
    },
    { icon: "logout", text: "Изход от профила", action: logout },
  ];

  const renderSettingsItem = ({ icon, text, action }) => (
    <TouchableOpacity
      onPress={action}
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        paddingLeft: 12,
        backgroundColor: COLORS.gray,
      }}
    >
      <MaterialIcons name={icon} size={24} color="black" />
      <Text
        style={{
          marginLeft: 36,
          ...FONTS.semiBold,
          fontWeight: 600,
          fontSize: 16,
        }}
      >
        {text}{" "}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <View
        style={{
          marginHorizontal: 12,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: "absolute",
            left: 0,
          }}
        >
          <MaterialIcons
            name="keyboard-arrow-left"
            size={24}
            color={COLORS.black}
          />
        </TouchableOpacity>

        <Text style={{ ...FONTS.h3 }}>Настройки</Text>
      </View>

      <ScrollView style={{ marginHorizontal: 12 }}>
        <View style={{ marginBottom: 12 }}>
          <Text style={{ ...FONTS.h4, marginVertical: 10 }}>Акаунт</Text>
          <View
            style={{
              borderRadius: 12,
              backgrounColor: COLORS.gray,
            }}
          >
            {accountItems.map((item, index) => (
              <React.Fragment key={index}>
                {renderSettingsItem(item)}
              </React.Fragment>
            ))}
          </View>
        </View>


        <View style={{ marginBottom: 12 }}>
          <Text style={{ ...FONTS.h4, marginVertical: 10 }}>
          Поддръжка и информация{" "}
          </Text>
          <View
            style={{
              borderRadius: 12,
              backgrounColor: COLORS.gray,
            }}
          >
            {supportItems.map((item, index) => (
              <React.Fragment key={index}>
                {renderSettingsItem(item)}
              </React.Fragment>
            ))}
          </View>
        </View>


        <View style={{ marginBottom: 12 }}>
          <Text style={{ ...FONTS.h4, marginVertical: 10 }}>
          Кеш и Мобилна мрежа{" "}
          </Text>
          <View
            style={{
              borderRadius: 12,
              backgrounColor: COLORS.gray,
            }}
          >
            {cacheAndCellularItems.map((item, index) => (
              <React.Fragment key={index}>
                {renderSettingsItem(item)}
              </React.Fragment>
            ))}
          </View>
        </View>


        <View style={{ marginBottom: 12 }}>
          <Text style={{ ...FONTS.h4, marginVertical: 10 }}>Действия</Text>
          <View
            style={{
              borderRadius: 12,
              backgrounColor: COLORS.gray,
            }}
          >
            {actionsItems.map((item, index) => (
              <React.Fragment key={index}>
                {renderSettingsItem(item)}
              </React.Fragment>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;