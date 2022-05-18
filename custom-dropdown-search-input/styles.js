import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius:15,
        borderWidth:0.5,
        borderColor:'grey',
        width:'85%'
    },
    subContainer: {
        paddingTop: 10,
        justifyContent: 'center',
        alignContent: 'center',
    },
    itemView: {
        backgroundColor: 'white',
        height: 30,
        width: '90%',
        marginBottom: 10,
        justifyContent: 'center',
        borderRadius: 4,
    },
    itemText: {
        color: 'black',
        paddingHorizontal: 10,
    },
    noResultView: {
        alignSelf: 'center',
        // margin: 20,
        height: 100,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    noResultText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    heighSetMainView:{
        maxHeight:220,
        marginLeft:'5%'
    }
});
export default styles