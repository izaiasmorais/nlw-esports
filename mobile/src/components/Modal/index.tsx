import {
  View,
  Text,
  ModalProps,
  Modal,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Header } from "../Header";
import { CheckCircle } from "phosphor-react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { THEME } from "../../theme";
import { useState } from "react";
import * as Clipboard from "expo-clipboard";

interface Props extends ModalProps {
  discord: string;
  onClose: () => void;
}

export function ModalMatch({ discord, onClose, ...rest }: Props) {
  const [isCopping, setIsCopping] = useState(false);

  async function copyDiscord() {
    setIsCopping(true);
    await Clipboard.setStringAsync(discord);

    Alert.alert(
      "Discord copiado!",
      "Usuário copiado para sua área de tranferência"
    );
    setIsCopping(false);
    onClose();
  }

  return (
    <Modal animationType="fade" transparent statusBarTranslucent {...rest}>
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
            <MaterialIcons
              name="close"
              size={30}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>
          <CheckCircle
            size={64}
            color={THEME.COLORS.SUCCESS}
            weight="bold"
            style={styles.checkButton}
          />
          <Header
            title="Let's Play!"
            subtitle="Agora é só começar a jogar!"
            style={styles.header}
          />
          <Text style={styles.add}>Adicione ao discord</Text>
          <TouchableOpacity
            onPress={copyDiscord}
            style={styles.discordButton}
            disabled={isCopping}
          >
            <Text style={styles.discord}>{discord}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
