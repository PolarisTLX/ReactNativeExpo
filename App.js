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

  renderTodos = () => {
    return this.state.todo.map((item, index) => {
      return (
        <Text key={index}>{item}</Text>
      )
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>New Udemy course</Text>
        <TextInput
          style={styles.inputStyle}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Button
          style={styles.buttonStyles}
          title="Add Todo"
          onPress={this.addTodo}
        />
        {this.renderTodos()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    height: 40,
    width: 0.8*Dimensions.get('window').width, 
    borderColor: "green",
    borderWidth: 1,
    marginBottom: 20
  },
  buttonStyles: {
    marginTop: 20,
    paddingTop: 20
  }
});


export default App;