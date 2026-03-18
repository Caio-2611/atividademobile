import { View, Text, Button, Modal } from 'react-native';
import { useState } from 'react';

export default function ModalSlideScreen() {
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <Button title="Abrir Modal" onPress={() => setVisible(true)} />
      <Modal visible={visible} animationType="slide">
        <Text>Modal Slide</Text>
        <Button title="Fechar" onPress={() => setVisible(false)} />
      </Modal>
    </View>
  );
}
