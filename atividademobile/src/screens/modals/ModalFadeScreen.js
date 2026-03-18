import { View, Text, Button, Modal } from 'react-native';
import { useState } from 'react';

export default function ModalFadeScreen() {
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <Button title="Abrir Modal" onPress={() => setVisible(true)} />
      <Modal visible={visible} animationType="fade">
        <Text>Modal Fade</Text>
        <Button title="Fechar" onPress={() => setVisible(false)} />
      </Modal>
    </View>
  );
}
