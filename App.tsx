/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {Header} from './components/Header';
import {mainStyles} from './mainStyles';
import {PaperProvider} from 'react-native-paper';
import {menuItem} from './utils/menuItem';
import {Provider} from 'react-redux';
import { store } from './store/store';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <PaperProvider>
        <SafeAreaView style={mainStyles.mainView}>
          <StatusBar hidden={true} />
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{
                header: HeaderProps => (
                  <Header navigation={HeaderProps.navigation} />
                ),
                animation: 'none',
              }}>
              {menuItem.map((item, index) => (
                <Stack.Screen
                  key={index}
                  name={item.title}
                  component={item.component}
                />
              ))}
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </PaperProvider>
    </Provider>
  );
}

export default App;
