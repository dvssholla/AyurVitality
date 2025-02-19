import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Cognitive() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Cognitive Senses Screen</Text>
    </View>
  );
}
