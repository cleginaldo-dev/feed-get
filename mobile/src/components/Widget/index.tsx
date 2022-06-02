import BottomSheet from "@gorhom/bottom-sheet";
import { ChatTeardropDots } from "phosphor-react-native";
import React, { useRef } from "react";
import { TouchableOpacity } from "react-native";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

import { theme } from "../../theme";
import { styles } from "./styles";

function Widget() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleOpen = () => {
    bottomSheetRef.current?.expand();
  };

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handleOpen}>
        <ChatTeardropDots
          weight="bold"
          size={24}
          color={theme.colors.text_on_brand_color}
        />
      </TouchableOpacity>
      <BottomSheet
        children
        snapPoints={[1, 280]}
        ref={bottomSheetRef}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      />
    </>
  );
}

export default gestureHandlerRootHOC(Widget);