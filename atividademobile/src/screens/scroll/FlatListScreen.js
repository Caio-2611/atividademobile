import { FlatList, Text } from 'react-native';

export default function FlatListScreen() {
  const data = Array.from({ length: 30 }, (_, i) => ({ id: i }));

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Text>Item {item.id}</Text>}
    />
  );
}
