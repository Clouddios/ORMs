import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  container_center: {
    justifyContent: "center",
  },
  header: {
    backgroundColor: "#09204A",
    padding: 5,
    width: "100%",
    height: "22%",
    paddingTop: 0,
    marginTop: 0,
  },
  header_img: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  footer: {
    width: "100%",
    height: "78%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee",
  },
  input: {
    borderRadius: 2,
    height: 60,
    padding: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    width: "80%",
    marginBottom: 20,
    fontSize: 18,
  },
  texto: {
    fontSize: 20,
    textAlign: "center",
  },
  textoWith: {
    width: "80%",
  },
  button: {
    borderRadius: 5,
    backgroundColor: "#09204A",
    padding: 15,
    paddingRight: 30,
    paddingLeft: 15,
    marginBottom: 30,
  },
  button_text: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold", // Corrigido de "textWeight" para "fontWeight"
  },
});

export default styles;