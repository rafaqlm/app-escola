import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20,

    },
    Tasks: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        marginBottom: 10
    },
    deleteTask: {
        justifyContent: 'center',
        paddingLeft: 15,
        marginLeft: 15

    },
    DescriptionTask: {
        width: '75%',
        alignContent: 'flex-start',
        backgroundColor: '#f5f5f5cf',
        padding: 12,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginBottom: 5,
        marginRight: 15,
        color: '#282b2db5'
    },

    buttonNewTask: {
        position: 'absolute',
        width: 60,
        height: 60,
        bottom: 30,
        left: 20,
        backgroundColor: '#f92e64',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconButton: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        paddingLeft: 20

    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#F79031',
        marginVertical: 5,
        width: 270,
        textAlign: 'center',
        borderRadius: 4,
        marginBottom: 30,
        fontWeight: 'bold',
        fontSize: 15,
        textTransform: 'uppercase',
    },
    contextAllTasks: {

    }
})

export default styles