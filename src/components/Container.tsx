import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

export default function Container({ children }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // 화면 전체를 차지하도록 설정
    backgroundColor: '#ffffff', // 공통 배경색 설정
    padding: 15, // 기본적인 패딩 설정
  },
});
