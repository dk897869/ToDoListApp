import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const TodoListScreen = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const handleAddTask = () => {
    if (task.trim() === '') return;

    setTasks([...tasks, { id: Date.now(), text: task }]);
    setTask('');
  };

  // Function to delete a task
  const handleDeleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Function to update task text
  const handleUpdateTask = (id, newText) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, text: newText } : task)));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={task}
        onChangeText={text => setTask(text)}
        placeholder="Enter task"
      />
      <Button title="Add Task" onPress={handleAddTask} />
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <TextInput
              style={styles.taskText}
              value={item.text}
              onChangeText={text => handleUpdateTask(item.id, text)}
            />
            <Button title="Delete" onPress={() => handleDeleteTask(item.id)} />
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  taskText: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginRight: 10,
  },
});

export default TodoListScreen;
