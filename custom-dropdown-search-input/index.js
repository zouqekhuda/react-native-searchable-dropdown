//import liraries
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';

// create a component
const CustomSearchableDropdown = (props) => {
    return (
        <ScrollView style={styles.heighSetMainView} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="always" >
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    {
                        props.dataSource.length > 0 ?
                            props.dataSource.map(item => {
                                return (
                                    <TouchableOpacity key={props.dataSource.indexOf(item)} onPress={() => {
                                        props.handlePress(item)
                                    }} >
                                        <View style={styles.itemView}>
                                            <Text style={styles.itemText}>{item}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                            :
                            <TouchableOpacity onPress={() => {
                                props.onNoMatchFoundPress(true)
                            }} >
                                <View style={styles.itemView}>
                                    <Text style={styles.itemText}>Not found</Text>
                                </View>
                            </TouchableOpacity>
                    }

                </View>
            </View>
        </ScrollView>
    );
};
export default CustomSearchableDropdown;
