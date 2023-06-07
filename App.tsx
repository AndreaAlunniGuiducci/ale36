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

import {Home} from './pages/Home';
import {LettereInComune} from './pages/LettereInComune';
import {Header} from './components/Header';
import {mainStyles} from './mainStyles';
import {PaperProvider} from 'react-native-paper';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <PaperProvider>
      <SafeAreaView style={mainStyles.mainView}>
        <StatusBar hidden={true} />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="LettereInComune"
            screenOptions={{
              header: HeaderProps => (
                <Header navigation={HeaderProps.navigation} title={'Header'} />
              ),
              animation: 'none',
            }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="LettereInComune" component={LettereInComune} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
}

export default App;
