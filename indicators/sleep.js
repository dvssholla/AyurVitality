import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Sleep() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Sleep Screen</Text>
    </View>
  );
}
