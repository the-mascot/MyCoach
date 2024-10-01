import { useState } from 'react';
import DropDownComponent from '../components/training/DropDownComponent';
import { SafeAreaView, Text, useColorScheme, View } from 'react-native';
import CardComponent from '../components/training/CardComponent';
import Container from '../components/Container';

export default function TrainingScreen() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: '#ffffff'
  };

  const [trainingType, setTrainingType] = useState<string>('all');
  const [ data, setData ] = useState([1, 2]);
  return (
    <Container>
      <DropDownComponent trainingType={trainingType} onChange={(value) => setTrainingType(value)} />
      <Text style={{ fontWeight: 'bold', color: 'black' }}>전체 (85)</Text>
      {data.map((f, index) => (
        <CardComponent key={index} />
      ))}
    </Container>
  );
}
