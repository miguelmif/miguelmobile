import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 70,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.marrom,
    marginBottom: 0,
  },
  formRow: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.marrom,
    borderRadius: 5,
  },
  label: {
    fontSize: 18,
    color: colors.black,
    padding: 5
  },
  input: {
    fontSize: 18,
    padding: 5,
    width: "80%"
  },
  icon: {
    fontSize: 100,
    color: colors.marrom,
  }
})

export default styles;