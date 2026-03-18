import { SectionList, Text } from 'react-native';

export default function SectionListScreen() {
  const data = [
    { title: 'Grupo A', data: ['Item 1', 'Item 2'] },
    { title: 'Grupo B', data: ['Item 3', 'Item 4'] },
  ];

  return (
    <SectionList
      sections={data}
      renderItem={({ item }) => <Text>{item}</Text>}
      renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
    />
  );
}
