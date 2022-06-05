import BottomSheet from "@gorhom/bottom-sheet";
import { ChatTeardropDots } from "phosphor-react-native";
import React, { useRef, useState } from "react";
import { TouchableOpacity } from "react-native";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

import { theme } from "../../theme";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { Form } from "../Form";
import { Options } from "../Options";
import { Success } from "../Success";
import { styles } from "./styles";

export type FeedbackType = keyof typeof feedbackTypes;

function Widget() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setSendFeedbackSent] = useState(false);

  const handleOpen = () => {
    bottomSheetRef.current?.expand();
  };

  const handleRestartFeedback = () => {
    setFeedbackType(null);
    setSendFeedbackSent(false);
  };

  const handleFeedbackSent = () => {
    setSendFeedbackSent(true);
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
        snapPoints={[1, 280]}
        ref={bottomSheetRef}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        {feedbackSent ? (
          <Success onSendAnotherFeedback={handleRestartFeedback} />
        ) : (
          <>
            {feedbackType ? (
              <Form
                feedbackType={feedbackType}
                onFeedbackCanceled={handleRestartFeedback}
                onFeedbackSent={handleFeedbackSent}
              />
            ) : (
              <Options onFeedbackTypeChanged={setFeedbackType} />
            )}
          </>
        )}
      </BottomSheet>
    </>
  );
}

export default gestureHandlerRootHOC(Widget);
