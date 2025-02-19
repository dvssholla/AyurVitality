import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome5, Ionicons } from '@expo/vector-icons'; 

import About from './screens/about';
import AuthScreen from './screens/credentials';

import Tracking from './screens/tracking';
import Info from './screens/startinfo';
import Settings from './screens/settings'
import Dashboard from './screens/dashboard';

import AppetiteInfo from './infoScreens/appetiteInfo';
import DigestionInfo from './infoScreens/digestionInfo';
import BowelsInfo from './infoScreens/bowelsInfo';
import StaminaInfo from './infoScreens/staminaInfo';
import ImmunityInfo from './infoScreens/immunityInfo';
import SleepInfo from './infoScreens/sleepInfo';
import CalmnessInfo from './infoScreens/calmnessInfo';
import CognitionInfo from './infoScreens/cognitionInfo';
import HormonesInfo from './infoScreens/hormonesInfo';


import Appetite from './indicators/appetite';
import Digestion from './indicators/digestion';
import Bowel from './indicators/bowel';
import Stamina from './indicators/stamina';
import Immunity from './indicators/immunity';
import Sleep from './indicators/sleep';
import Calmness from './indicators/calmness';
import Cognitive from './indicators/cognitive';
import Hormonal from './indicators/hormonal';

import AppetiteTips from './tips/appetiteTips';





const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTabs() {
  const tabColor = "#187a85";
  return (
    <Tab.Navigator initialRouteName='Info' screenOptions={({route}) => ({
      tabBarIcon: ({color, size}) => {
        let iconName = '';

        if (route.name == 'Dashboard') {
          iconName = 'home';
          color = tabColor;
          size = 20;
        } else if (route.name == 'Info') {
          iconName = 'info';
          color = tabColor;
          size = 20;
        } else if (route.name == 'Tracking') {
          iconName = 'book';
          color = tabColor;
          size = 20;
        } else if (route.name == 'Settings') {
          iconName = 'cog';
          color = tabColor;
          size = 20;
        }


        return (
          <FontAwesome5 name={iconName} size={size} color={color} />
        );
      }, 
      tabBarActiveTintColor: tabColor,
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen name='Info' component={Info}/>
      <Tab.Screen name='Tracking' component={Tracking} />
      <Tab.Screen name='Dashboard' component={Dashboard}/>
      <Tab.Screen name='Settings' component={Settings}/> 
    </Tab.Navigator>
  );
}

export default function App() {
    const screenOptionsInfo = {
    headerTitle: '',
    headerTransparent: true,
    headerBackTitleVisible: true,
    headerBackTitle: 'Info',
  };
  const screenOptionsDashboard = {
    headerTitle: '',
    headerTransparent: true,
    headerBackTitleVisible: true,
    headerBackTitle: 'Dashboard',
  };

  const screenOptionsTips = {
    headerTitle: '',
    headerTransparent: true,
    headerBackTitleVisible: true,
    headerBackTitle: 'Indicator',
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="About">
        <Stack.Screen name="About" component={About} options={{headerShown: false}}/>
        <Stack.Screen name="Main" component={MainTabs} options={{headerShown: false}}/>
        <Stack.Screen name='dashboard' component={Dashboard}/>
        <Stack.Screen name='credentials' component={AuthScreen} options={{headerShown: false}}/>

     

        <Stack.Screen name="appetiteInfo" component={AppetiteInfo} options={screenOptionsInfo} />
        <Stack.Screen name="digestionInfo" component={DigestionInfo} options={screenOptionsInfo} />
        <Stack.Screen name="bowelsInfo" component={BowelsInfo} options={screenOptionsInfo} />
        <Stack.Screen name="staminaInfo" component={StaminaInfo} options={screenOptionsInfo} />
        <Stack.Screen name="immunityInfo" component={ImmunityInfo} options={screenOptionsInfo} />
        <Stack.Screen name="sleepInfo" component={SleepInfo} options={screenOptionsInfo} />
        <Stack.Screen name="calmnessInfo" component={CalmnessInfo} options={screenOptionsInfo} />
        <Stack.Screen name="cognitionInfo" component={CognitionInfo} options={screenOptionsInfo} />
        <Stack.Screen name="hormonesInfo" component={HormonesInfo} options={screenOptionsInfo} />

        <Stack.Screen name="appetite" component={Appetite} options={screenOptionsDashboard}/>
        <Stack.Screen name="digestion" component={Digestion} options={screenOptionsDashboard}/>
        <Stack.Screen name="bowel" component={Bowel} options={screenOptionsDashboard}/>
        <Stack.Screen name="stamina" component={Stamina} options={screenOptionsDashboard}/>
        <Stack.Screen name="immunity" component={Immunity} options={screenOptionsDashboard}/>
        <Stack.Screen name="sleep" component={Sleep} options={screenOptionsDashboard}/>
        <Stack.Screen name="calmness" component={Calmness} options={screenOptionsDashboard}/>
        <Stack.Screen name="cognitive" component={Cognitive} options={screenOptionsDashboard} />
        <Stack.Screen name="hormonal" component={Hormonal} options={screenOptionsDashboard}/>

       <Stack.Screen name="appetiteTips" component={AppetiteTips} options={screenOptionsTips}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
}

// else if (route.name == 'Library') {
          // return (
          //   <Ionicons name="library" size={20} color={tabColor} />
          // );
