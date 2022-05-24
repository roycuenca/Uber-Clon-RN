import { KeyboardAvoidingView, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import tw from 'twrnc';
// navigation
import AppNavigator from './src/navigation';

const keySetupBehavior = Platform.OS === 'ios' ? 'padding' : 'height';
const keyboardVerticalOffsetSetup = Platform.OS === 'ios' ? -64 : 0;
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            style={tw`flex-1`}
            behavior={keySetupBehavior}
            keyboardVerticalOffset={keyboardVerticalOffsetSetup}>
            <AppNavigator />
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
