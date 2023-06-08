import { Text, View } from "react-native";
import { styles } from "./styles";

export const SolutionReader = ({solution}: any) => {
  return (
    <View style={styles.solutionWrapper}>
      <Text style={styles.solutionText}>{solution}</Text>
    </View>
  );
};
