import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, Button } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }
class App extends React.Component {

  state = {
    text: "",
    todo: ["Learn React", "Learn React Native"]
  }

  addTodo = () => {
    let newTodo = this.state.text;
    let array = this.state.todo;
    array.push(newTodo);
    this.setState({todo: array, text: ""});
  }

  deleteTodo = (itemtodelete) => {
    let array = this.state.todo;
    let position = array.indexOf(itemtodelete);
    array.splice(position, 1);
    this.setState({todo: array});
  }

  renderTodos = () => {
    return this.state.todo.map((item, index) => {
      return (
        <Text 
          key={index}
          onPress={(itemtodelete) => {this.deleteTodo(itemtodelete)}}
          style={styles.itemStyle}
        >
          {item}
        </Text>
      )
    })
  }

  render() {
    return (
      <View style={styles.wholeStyle}>
        <View style={styles.container}>
          <Text style={styles.header}>Notes App</Text>
          <TextInput
            style={styles.inputStyle}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <Button
            style={styles.buttonStyles}
            color="rgba(100,0,0,1)"
            title="Add Todo"
            onPress={this.addTodo}
          />
          {this.renderTodos()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wholeStyle: {
    flex: 1,
    backgroundColor: 'rgb(66, 134, 244)'
  },
  container: {
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    // color: 'white'
  },
  header: {
    fontSize: 30,
    color: 'white'
  },
  inputStyle: {
    height: 40,
    width: 0.8*Dimensions.get('window').width, 
    color: 'white',
    borderColor: "white",
    borderWidth: 1,
    marginBottom: 20
  },
  buttonStyles: {
    marginTop: 20,
    paddingTop: 20
  },
  itemStyle: {
    color: 'white'
  }
});


export default App;