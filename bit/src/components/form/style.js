import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: "#fff",
        alignItems: "center",
        marginTop: 30,
        paddingTop: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    form: {
        width: "100%",
        height: "auto",
        marginTop: 30,
        padding: 10,
    },  
    formLabel: {
        color: "black",
        fontSize: 18,
        paddingLeft: 20,
        fontWeight: "bold",
    },
    formInput: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    formButton: {
        alignItems: "center",
        width: "80%",
        borderRadius: 50,
        backgroundColor: "gold",
        paddingHorizontal: 100,
        paddingVertical: 20,
    },
    textButton: {
        color: "white",
        fontWeight: "bold",
        width: "100%",
    },
});

export default styles