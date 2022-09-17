import logoImg from "../../assets/logo-nlw-esports.png";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GameParams } from "../../@types/navigation";
import { Background } from "../Background";
import { Entypo } from "@expo/vector-icons";
import { styles } from "./styles";
import { THEME } from "../../theme";
import { Header } from "../Header";
import { AdCard, AdCardProps } from "../AdCard";
import { useEffect, useState } from "react";

export function Game() {
  const route = useRoute();
  const navigate = useNavigation();
  const game = route.params as GameParams;
  const [adInfo, setadInfo] = useState<AdCardProps[]>([]);

  function handleGoBack() {
    navigate.goBack();
  }

  useEffect(() => {
    fetch(`http://192.168.100.2:3333/games/${game.id}/ads`)
      .then((response) => response.json())
      .then((data) => {
        setadInfo(data);
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
          renderItem={({ item }) => <AdCard data={item} onConnect={() => {}} />}
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
      </SafeAreaView>
    </Background>
  );
}
