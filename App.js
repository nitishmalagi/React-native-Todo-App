
import React from "react";
import { View, Text, TextInput, Button } from "react-native";

class App extends React.Component {
  state = {
    text: "",
    todo: []
  }

  addTodo = () => {
    let arr = this.state.todo;
    arr.push(this.state.text);
    this.setState({ todo: arr, text: "" })
  }

  deleteTodo = (elem) => {
    let arr = this.state.todo;
    let pos = arr.indexOf(elem);
    arr.splice(pos, 1);
    this.setState({ todo: arr });
  }

  renderTodos = () => {
    return this.state.todo.map((elem) => {
      return <Text key={elem} onPress={() => { this.deleteTodo(elem) }} style={styles.todo}>{elem}</Text>
    })
  }

  render() {
    return (
      <View style={styles.mainStyle}>
        <View style={styles.viewStyle}>
          <Text style={styles.header}> ToDo App  </Text>
          <TextInput style={styles.inputStyle} onChangeText={(text) => this.setState({ text })} value={this.state.text} />
          <Button title="Click Me" color="white" onPress={this.addTodo} />
          <View style={{marginTop:100}}/>
          {this.renderTodos()}
        </View>
      </View>
    )
  }
}

const styles = {
  mainStyle: {
    flex: 1,
    backgroundColor: '#00796B'
  },
  header: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  viewStyle: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  inputStyle: {
    height: 40,
    width: 300,
    borderColor: "white",
    borderWidth: 2,
    color: "white"
  },
  todo:{
    color:"white",
    fontSize: 25
  }
}

export default App;