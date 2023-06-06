import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    label: {
        width: "90%",
        marginTop: 20,
        marginLeft: 20,
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },
    container: {
        flex: 1,

    },
    input: {
        marginLeft: 20,
        width: "90%",
        marginTop: 20,
        padding: 10,
        height: 50,
        backgroundColor:'#fff',
        fontSize: 15,
    },
    input2: {
        marginLeft: 20,
        width: "90%",
        marginTop: 20,
        padding: 10,
        height: 50,
        backgroundColor:'#fff',
        fontSize: 14,
    },
    obrigatorio: {
        marginLeft: 20,
        fontSize: 12,

    },
    buttonNext: {
        width: "90%",
        height: 60,
        backgroundColor: 'orange',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 15,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default styles