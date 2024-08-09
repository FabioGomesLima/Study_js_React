import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View>
      {/* Aula de ReactNative :D */}
      <Text style={{ marginTop: 100, color: 'green' }}>Olá Mundo!</Text>
      <Text style={estilo}>Primeira Aula</Text> 
      <Text>{1 + 5}</Text>
      <Text style={estilo_2.instituicao}>IFRN</Text>
      <Text style={estilo_2.disciplina}>Teste de Software</Text>
      <Image style={estilo_2.image} source={require('./img/images.jpeg')} />
    </View>
  );
}

const estilo_2 = StyleSheet.create({
  instituicao: {
    textAlign: 'right',
    color: 'gray',
  },
  disciplina: {
    fontStyle: 'italic',
  },
  image: {
    width: 100,
    height: 100,
  }
});

const estilo = {
  fontSize: 20,
  color: 'red',
};






