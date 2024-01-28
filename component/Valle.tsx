import { useState } from "react";
import { ImageProps, StyleSheet, View } from "react-native";




import {
  cardsData as valleCardData,
  profileData as valleProfileData,
} from "../data/ValleInfo";
import Porfolio from "./Porfolio";

export default function Valle() {
  const [isValleProfile, setIsValleProfile] = useState(true);
  const [isLightMode, setIsLightMode] = useState(true);
  return (
    <View>

      <Porfolio
        setIsValleProfile={setIsValleProfile}
        isLightMode={isLightMode}
        isValleProfile={isValleProfile}
        cardsData={valleCardData}
        profileData={valleProfileData}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 20,
  },
});
