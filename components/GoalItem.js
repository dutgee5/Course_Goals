import { View, StyleSheet, Text, Pressable } from "react-native";


function GoalItem(params) {
    return (

        <View style={styles.goalItem} >
            <Pressable
                onPress={params.onDeleteItem.bind(this, params.id)}
                android_ripple={{color:'#210644'}}
                style={({pressed})=>pressed && styles.pressItem}  /* bu stil IOS cihazlar için verilmiştir.  */ 
            >
                <Text style={styles.goalText}> {params.text}</Text>
            </Pressable>
        </View>
    )
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,    
        backgroundColor: '#5e0acc',
    },
    goalText: {
        color: 'white',
        padding: 8,
    },
    pressItem:{
        opacity:0.5
    }
}
);