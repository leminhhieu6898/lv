import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ManagesScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Manage Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default ManagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});