import { Button, Card } from '@rneui/themed';
import { Image, StyleSheet, Text, View } from 'react-native';
import PassImage from '../../assets/images/pass.jpg';
import PassImage2 from '../../assets/images/pass2.jpg';
import PassImage3 from '../../assets/images/pass3.jpg';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export default function CardComponent() {
  const cardStyle = {
    borderRadius: 10,
    backgroundColor: '#e2ecfa',
    marginLeft: 0,
    marginRight: 0,
    marginTop: 10
  }
  return (
    <Card containerStyle={cardStyle}>
      <View style={styles.container}>
        <Image source={PassImage} style={styles.image} />
        <Image source={PassImage2} style={styles.image} />
        <Image source={PassImage3} style={styles.image} />
      </View>
      <Text style={{ paddingTop: 10, color: 'grey' }}>
        2024.07.02
      </Text>
      <View style={styles.flex}>
        <Text style={styles.text}>
          개인 | 전술훈련 | 패스 | 패스드릴
        </Text>
        <EvilIcons name="unlock" color="grey" size={36} />
      </View>
      <Text style={styles.text}>
        오늘은 패스와 드리블 기술 향상이 목표였음. 짧은 패스와 긴 패스 연습, 콘사이를 빠르게 드리블하는 훈련
      </Text>
      <View style={{ marginTop: 20, ...styles.flex }}>
        <Text style={styles.textGrey}>
          2개의 피드백
        </Text>
        <Text style={styles.textGrey}>
          코치피드백 없음
        </Text>
      </View>
      <Button title="자세히" style={styles.button} />
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 1,
  },
  image: {
    width: '32%',
    height: 100,
    borderRadius: 10
  },
  text: {
    color: 'black',
    paddingTop: 10
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  textGrey: {
    color: 'grey'
  },
  button: {
    borderRadius: 30
  }
});
