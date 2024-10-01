import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View
} from 'react-native';
import { Colors, Header } from 'react-native/Libraries/NewAppScreen';
import { Icon } from '@rneui/themed';
import Icons from 'react-native-vector-icons/Entypo';
import Container from '../components/Container';

export default function HomeScreen ({ navigation }) {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Container>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Icon name="home" type="entypo" />
          <Icons name="home" />
          <Text>
            heelod
          </Text>
          <Button title='이동' onPress={() => navigation.navigate('Details')} />
        </View>
      </ScrollView>
    </Container>
  );
}
