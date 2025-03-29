import { View, StyleSheet } from 'react-native';
import Login from '../pages/Login';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#F6F8FC',

  }
});
