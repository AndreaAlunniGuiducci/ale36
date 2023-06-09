import { StyleSheet } from "react-native";
import { solutionTextFontSize } from "../../mainStyles";

export const styles = StyleSheet.create({
    solutionWrapper: {
        margin: 5,
        borderWidth: 1,
        borderRadius: 20,
        paddingBottom: 5,
        paddingHorizontal: 5
      },
      solutionText: {
        textAlign: 'center',
        fontSize: solutionTextFontSize,
      },
})