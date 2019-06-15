import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');



class List extends Component {
  // toggle for checkbox
  onToggleCircle = () => {
    const { isCompleted, id, completeList, incompleteList } = this.props;
    console.log(id);
    if (isCompleted) {
      incompleteList(id);
    } else {
      completeList(id);
    }
   };
  render() {
    const { text, deleteList, id, isCompleted } = this.props;
    return (
      <View style={styles.container}>
             <View style={styles.column}>
               <TouchableOpacity onPress={this.onToggleCircle}>
                 <View
                   style={[
                     styles.circle,
                     isCompleted
                       ? { borderColor: '#36D6E7' }
                       : { borderColor: '#FEB06A' }
                   ]}
                 />
               </TouchableOpacity>
               <Text
                 style={[
                   styles.text,
                   isCompleted
                     ? {
                         color: '#c4c4cc',
                         textDecorationLine: 'line-through'
                       }
                     : { color: '#555555' }
                 ]}
               >
                 {text}
               </Text>
             </View>
             {isCompleted ? (
               <View style={styles.button}>
                 <TouchableOpacity onPressOut={() => deleteList(id)}>
                   <MaterialIcons
                     name="delete"
                     size={24}
                     color={'#FEB06A'}
                   />
                 </TouchableOpacity>
               </View>
             ) : null}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
		width: width - 50,
		flexDirection: 'row',
		borderRadius: 5,
		backgroundColor: '#FBF6F3',
		height: width / 8,
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 5,
		marginBottom: 10,
	},
	column: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width / 1.5
	},
	text: {
		fontWeight: '500',
		fontSize: 16,
		marginVertical: 15
	},
	circle: {
		width: 30,
		height: 30,
		borderRadius: 15,
		borderWidth: 3,
		margin: 10
	},
	button: {
		marginRight: 10
	}
});

export default List;
