import logoImg from "../../assets/logo-nlw-esports.png";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GameParams } from "../../@types/navigation";
import { Background } from "../../components/Background";
import { Entypo } from "@expo/vector-icons";
import { styles } from "./styles";
import { THEME } from "../../theme";
import { Header } from "../../components/Header";
import { AdCard, AdCardProps } from "../../components/AdCard";
import { useEffect, useState } from "react";
import { ModalMatch } from "../../components/Modal";
import { api } from "../../lib/axios";

export function Game() {
  const route = useRoute();
  const navigate = useNavigation();
  const game = route.params as GameParams;
  const [adInfo, setadInfo] = useState<AdCardProps[]>([]);
  const [discordSelected, setDiscordSelected] = useState("");

  function handleGoBack() {
    navigate.goBack();
  }

  async function handleShowDiscord(id: string) {
    await api
      .get(`/ads/${id}/discord`)
      .then((r) => setDiscordSelected(r.data.discord));
  }

  useEffect(() => {
    api.get(`/games/${game.id}/ads`).then((response) => {
      setadInfo(response.data);
    });
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <Image source={logoImg} style={styles.logo} />

          <View style={styles.right} />
        </View>

        <Image source={{ uri: game.bannerUrl }} style={styles.cover} />

        <Header title={game.title} subtitle="Conecte-se e comece a jogar!" />

        <FlatList
          data={adInfo}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <AdCard data={item} onConnect={() => handleShowDiscord(item.id)} />
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
          style={styles.containerList}
          contentContainerStyle={[
            styles.contentList,
            adInfo.length === 0 && styles.emptyListContent,
          ]}
          ListEmptyComponent={() => (
            <Text style={styles.empty}>Não há anúncios publicados ainda.</Text>
          )}
        />

        <ModalMatch
          visible={discordSelected.length > 0}
          onClose={() => setDiscordSelected("")}
          discord={discordSelected}
        />
      </SafeAreaView>
    </Background>
  );
}
