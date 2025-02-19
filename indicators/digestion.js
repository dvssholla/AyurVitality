import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Digestion() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Digestion Screen</Text>
    </View>
  );
}
