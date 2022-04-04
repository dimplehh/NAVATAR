import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function MypageScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
<NavigationContainer>
      <Tab.Navigator
        initialRouteName="옷장"
        tabBarOptions={{
          activeBackgroundColor:'#dcafff',
          activeTintColor:'blue',
          inactiveTintColor:'#fff',
          style:{
            backgroundColor:'#dcafff'
          }
        }}
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: 'purple',
          tabBarInactiveTintColor: 'gray'
        })}
      >
        <Tab.Screen name="옷장" component={HomeScreen} />
        <Tab.Screen name="AR피팅룸" component={SettingsScreen} />
        <Tab.Screen name="마이페이지" component={MypageScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
