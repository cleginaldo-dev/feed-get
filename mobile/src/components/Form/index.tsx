import { ArrowLeft } from "phosphor-react-native";
import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";

import { theme } from "../../theme";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { FeedbackType } from "../Widget";
import { styles } from "./styles";

interface IProps {
  feedbackType: FeedbackType;
}

export function Form({ feedbackType }: IProps) {
  const feedbackInfos = feedbackTypes[feedbackType];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft
            size={24}
            weight={"bold"}
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Image source={feedbackInfos.image} style={styles.image} />
          <Text style={styles.titleText}>{feedbackInfos.title}</Text>
        </View>
      </View>
      <TextInput
        multiline
        style={styles.input}
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo no sistema"
        placeholderTextColor={theme.colors.text_secondary}
      />
    </View>
  );
}
