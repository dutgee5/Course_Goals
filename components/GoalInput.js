import { StyleSheet, View, TextInput, Button, Modal,Image } from "react-native";
import { useState } from "react";

function GoalInput(params) {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        params.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }


    return (

        <Modal visible={params.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')}/>
                <TextInput
                    style={styles.textInput}
                    placeholder='You course goal'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />

                <View style={styles.buttonContainer}>
                <View style={styles.button}>
                        <Button 
                        title="Cancel" 
                        onPress={params.onCancel}
                        color='#f31282'
                         />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title='Add Goal'
                            onPress={addGoalHandler}
                            color='#b180f0'
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor:'#3116b6'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor:'#e4d0ff',
        color:'#120438',
        borderRadius:6,
        width: '100%',
        padding: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    }
});