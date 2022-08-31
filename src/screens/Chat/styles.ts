import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
  },
  rowSearch: {
    flexDirection: 'row',
    backgroundColor: colors.bege,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    width: "90%",
    height: 45,
  },
  input: {
    width: "80%"
  },
  icon: {
    fontSize: 24,
    padding: 5
  },
  button: {
    // position: "absolute",
    // top: 10,
    // right: 0,
    backgroundColor: colors.marrom,
    width: 50,
    height: 50,
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: colors.black,
    fontSize: 28,
    fontWeight: "bold",
  }
})

export default styles;