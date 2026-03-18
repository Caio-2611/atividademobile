import { View, Text, Button, Modal } from 'react-native';
import { useState } from 'react';

export default function ModalNoneScreen() {
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <Button title="Abrir Modal" onPress={() => setVisible(true)} />
      <Modal visible={visible} animationType="none">
        <Text>Modal None</Text>
        <Button title="Fechar" onPress={() => setVisible(false)} />
      </Modal>
    </View>
  );
}
