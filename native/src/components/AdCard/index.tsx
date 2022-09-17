import { GameController } from "phosphor-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { THEME } from "../../theme";
import { AdInfo } from "../AdInfo";
import { styles } from "./styles";

export interface AdCardProps {
  id: string;
  name: string;
  hourEnd: string;
  hourStart: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
}

interface Props {
  data: AdCardProps;
  onConnect: () => void;
}

export function AdCard({ data, onConnect }: Props) {
  return (
    <View style={styles.container}>
      <AdInfo label="Nome" value={data.name} />
      <AdInfo label="Tempo de jogo" value={`${data.yearsPlaying} ano(s)`} />
      <AdInfo
        label="Disponibilidade"
        value={`${data.weekDays.length} dia(s) \u2022 ${data.hourStart} - ${data.hourEnd}`}
      />
      <AdInfo
        label="Chamada de voz?"
        value={data.useVoiceChannel ? "Sim" : "Não"}
        colorValue={
          data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT
        }
      />
      <TouchableOpacity style={styles.button} onPress={onConnect}>
        <GameController size={20} color={THEME.COLORS.TEXT} />
        <Text style={styles.buttonTitle}>Conectar</Text>
      </TouchableOpacity>
    </View>
  );
}
