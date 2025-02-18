import React, { useState } from 'react';
import { Text, Platform, View } from 'react-native';
import { About, Mapa } from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Kartata from './screens/Kartata';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Qrscener from './screens/qrcodescener';
import Profile from './screens/Profile';
import EditProfile from './screens/EditProfile';
import Settings from './screens/Settings';
import TRC from './screens/TRC';
import LOGIN from './screens/singup';
import SignUpScreen from './screens/singup';
import SignupScreenT from './screens/db/signupT';
import SignupScreenV2Test from './screens/test/signup';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    justifyContent:'space-evenly',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 45,
    backgroundColor: '#90C7EE',
  },
};

export default function App() {
  const [shouldShowHiddenTab, setShouldShowHiddenTab] = useState(false);

  const toggleHiddenTab = () => {
    setShouldShowHiddenTab(!shouldShowHiddenTab);
  };

  return (
    <NavigationContainer>

      <Tab.Navigator screenOptions={screenOptions}>

      <Tab.Screen
          name="test1"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <AntDesign name="profile" size={24} color="grey" />
                  <Text style={{ fontSize: 12, color: '#16247d' }}>Профил</Text>
                </View>
              );
            },
          }}
        />
      {shouldShowHiddenTab && (<Tab.Screen name="test3" component={EditProfile} options={{tabBarIcon: ({ focused }) => {return (<View style={{ alignItems: 'center', justifyContent: 'center' }}></View>);},tabBarStyle: { display: "none" },}}/>)}



        <Tab.Screen
          name="Carti"
          component={Kartata}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Entypo name="ticket" size={24} color="grey" />
                  <Text style={{ fontSize: 12, color: '#16247d' }}>Цени</Text>
                </View>
              );
            },
          }}
        />



        <Tab.Screen
          name="Mapa"
          component={Mapa}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#7798AB',
                    width: Platform.OS == 'ios' ? 50 : 60,
                    height: Platform.OS == 'ios' ? 50 : 60,
                    top: Platform.OS == 'ios' ? -10 : -20,
                    borderRadius: Platform.OS == 'ios' ? 25 : 30,
                  }}
                >
                  <Entypo name="map" size={24} color="white" />
                </View>
              );
            },
          }}
        />




        {/* <Tab.Screen
          name="Za nas"
          component={About}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <MaterialCommunityIcons name="human-handsup" size={24} color="grey" />
                  <Text style={{ fontSize: 12, color: '#16247d' }}>За нас</Text>
                </View>
              );
            },
          }}
        /> */}

        <Tab.Screen name="test6" component={SignupScreenV2Test} options={{tabBarIcon: ({ focused }) => {return (<View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <FontAwesome name="sign-in" size={24} color="grey" />
            <Text style={{ fontSize: 12, color: '#16247d' }}>Логване</Text>
            </View>);},}}/>
         
            {shouldShowHiddenTab && (
                  <Tab.Screen
                    name="test2"
                    component={Settings}
                    options={{
                      tabBarIcon: ({ color, size }) => (
                        <View style={{  alignItems: 'center', justifyContent: 'center' }}></View>
                      ),
                      tabBarStyle: { display: "none" },
                    }}
                  />
                )}
         
         
          <Tab.Screen
          name="CardTest"
          component={TRC}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <AntDesign name="idcard" size={24} color="grey" />
                  <Text style={{ fontSize: 12, color: '#16247d' }}>Картата</Text>
                </View>
              );
            },
          }}
        />



{/* {shouldShowHiddenTab && (<Tab.Screen name="test7" component={SignupScreenV2Test} options={{tabBarIcon: ({ focused }) => {return (<View style={{ alignItems: 'center', justifyContent: 'center' }}></View>);},}}/>)} */}


      </Tab.Navigator>
      <View style={{ flexDirection: 'row', justifyContent:'space-evenly',alignItems:'flex-end',direction:'ltr', flexWrap:'nowrap' , backgroundColor: 'rgb(147, 198,238)'}}>
        <Text onPress={toggleHiddenTab}>Покажи</Text>
        <Text onPress={toggleHiddenTab}></Text>
        <Text onPress={toggleHiddenTab}></Text>
        <Text onPress={toggleHiddenTab}></Text>
      </View>
    </NavigationContainer>
  );
}


