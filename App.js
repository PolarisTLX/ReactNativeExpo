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
    todo: ""
  }

  addTodo = () => {
    this.setState({todo: this.state.text});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>New Udemy course</Text>
        <TextInput
          style={styles.inputStyle}
          onChangeText={(text) => this.setState({text})}
        />
        <Button
          style={styles.buttonStyles}
          title="Add Todo"
          onPress={this.addTodo}
        />
        <Text>{this.state.todo}</Text>
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