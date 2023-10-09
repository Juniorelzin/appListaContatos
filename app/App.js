import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, Vibration, Modal, Pressable } from 'react-native';
import {useState} from 'react';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";

let postagens = [{nome: 'Ultron', numero: '(48)99999-9999', email: 'ultron@gmail.com'},
{nome: 'Jarvis', numero: '(48)99999-9999', email: 'ultron@gmail.com'}]




export default function App() {

  const[conteudoFeed, setConteudoFeed] = useState(<Feed />);

  function mostrarFeed(){

    setConteudoFeed(<Feed />)

  }
  function mostrarAddFeed(){

    setConteudoFeed(<AddFeed />)

  }
 



  return (

    <View style={styles.container}>

     



      <View style={styles.feed}>
        
        <ScrollView>
        {conteudoFeed}
        </ScrollView>

      </View>



     

      <View style={styles.footer}>

      
        <TouchableOpacity onPress={mostrarFeed}>
          <FontAwesome
              name='user'
              size={45}
              color='#00FFFF'
            />
        </TouchableOpacity>

        <TouchableOpacity onPress={mostrarAddFeed}>
          <FontAwesome
              name='plus-circle'
              size={45}
              color='#00FFFF'
            />
        </TouchableOpacity>


      </View>
      
     
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  header: {

    backgroundColor: '#000000',
    height: 65,
    width: '100%',
    marginTop: 20,

  },
  feed: {

    backgroundColor: '#4682B4',
    flex: 1,
    width: '100%',
    

  },
  footer: {

    backgroundColor: '#000000',
    height: 65,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',

  },
  inputImagem: {

    height: 30,
    width: 200,
    borderWidth: 3,
    borderRadius: 15,
    borderColor: '#00FFFF',
    backgroundColor: '#4682B4',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    margin: 10,
    paddingLeft: 10,


  },
  inputTexto: {

    height: 30,
    width: 250,
    borderWidth: 3,
    borderRadius: 15,
    borderColor: '#00FFFF',
    backgroundColor: '#4682B4',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    margin: 10,
    paddingLeft: 10,


  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    height: '90%',
    width: '90%',
    margin: 20,
    backgroundColor: '#4682B4',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: 10
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginTop: 15,
    textAlign: 'center',
  },



});


function Feed(){

  return (

    <View style={{alignItems:'center'}}>

       <FontAwesome
              name='user'
              size={100}
              color='#00FFFF'
            />

            <Text style={{fontSize: 30, alignItems:'center', marginBottom: 10}}>Lista de Contatos</Text>

    {/* <Post imagem={postagens[0].imagem} texto={postagens[0].texto}/> */}

    {postagens.map( (postagens, index) => (

        <Post nome={postagens.nome} numero={postagens.numero} email={postagens.email}  key={index} index={index}/>

    ) )}

    </View>


  )

}

function Post(props){

  const [modalVisible, setModalVisible] = useState(false);
  const[inputNome,setinputNome] = useState(props.nome);
  const[inputNumero,setinputNumero] = useState(props.numero);
  const[inputEmail,setinputEmail] = useState(props.email);
  const [objetoPego, setobjetoPego] = useState('');
  let indiceObjeto = objetoPego
 
 
  const handlePressIn = () => {
    let indice = props.index;
   
    setobjetoPego(indice)
    
   
  };

  const handlePressOut = () => {
    setModalVisible(true);
  };
  

  return (
    <View >
       <TouchableOpacity 
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
    <View style={{maxHeight:150,minHeight:150,maxWidth: 350 ,minWidth: 350, gap:10, padding: 10, backgroundColor: '#ffffff', borderRadius: 15, justifyContent: 'center',}}>

    

      <Text style={{fontSize: 30, alignItems:'left'}}>{'Nome: ' + props.nome}</Text>
      <Text style={{fontSize: 20, alignItems:'left'}}>{'Telefone: ' + props.numero}</Text>
      <Text style={{fontSize: 20, alignItems:'left'}}>{'Email:  ' +  props.email}</Text>
      
   

    </View>
    </TouchableOpacity>
  
   

    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {     
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

          <Text style={{fontSize: 30, alignItems:'center'}}>Detalhes</Text>
           
            <Text style={styles.modalText}>Nome:</Text>
              <TextInput
                multiline= {false}
                style={styles.inputTexto}
                value={inputNome}
                onChangeText={setinputNome}/>

            <Text style={styles.modalText}>Número:</Text>
              <TextInput
                multiline= {false}
                style={styles.inputTexto}
                value={inputNumero}
                onChangeText={setinputNumero}/>


            <Text style={styles.modalText}>Email:</Text>
             <TextInput
                multiline= {false}
                style={styles.inputTexto}
                value={inputEmail}
                onChangeText={setinputEmail}/>
            
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={atualizar}>
              <Text style={styles.textStyle}>Atualizar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Fechar</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[styles.button, {backgroundColor: '#ff0000'}]}
              onPress={excluir}>
              <Text style={styles.textStyle}>Excluir</Text>
            </TouchableOpacity>
           
          </View>
        </View>
      </Modal>
    
    </View>

    </View>
        

  )
  function atualizar(){

    let objetoAtualizado={
      nome: inputNome,
      numero: inputNumero,
      email: inputEmail,

    }

    postagens[indiceObjeto] = objetoAtualizado
    alert(`Contato ${props.nome} atualizado!`)
    setModalVisible(!modalVisible)


  }
  function excluir(){
  
  postagens.splice(indiceObjeto,1)
  alert(`Contato ${props.nome} excluido!`)
  setModalVisible(!modalVisible)
  
  
  }

  
}


function AddFeed(){

  const[inputNome,setinputNome] = useState('');
  const[inputNumero,setinputNumero] = useState( '');
  const[inputEmail,setinputEmail] = useState('');

  return (



    <View style={{flex: 1, alignItems:'center', padding:30}}>

      <Text style={{fontSize: 30, padding:20}}>Adicionar Contato</Text>
  
      <FontAwesome     
        name={'plus-circle'}
        size={100}
        color='#00FFFF'
      />
    
      <Text style={{fontSize: 20, padding:1}}>Nome: </Text>
      <TextInput
      style={styles.inputImagem}
      value={inputNome}
      onChangeText={setinputNome}/>

    
    <Text style={{fontSize: 20, padding: 1, marginTop: 20}}>Número de telefone: </Text>
      <TextInput
      multiline= {false}
      style={styles.inputTexto}
      value={inputNumero}
      onChangeText={setinputNumero}/>

<Text style={{fontSize: 20, padding: 1, marginTop: 20}}>Email: </Text>
      <TextInput
      multiline= {false}
      style={styles.inputTexto}
      value={inputEmail}
      onChangeText={setinputEmail}/>

    <TouchableOpacity style={[styles.button, styles.buttonClose]} onPress={postarFeed}  >
    <Text style={styles.textStyle}>Adicionar</Text>


    </TouchableOpacity>   

    </View>   
  
  )

  function postarFeed(){

    let nomeInput = (inputNome)
    let numeroInput = (inputNumero)
    let emailInput = (inputEmail)

    if(nomeInput == undefined || nomeInput == ''){

      alert('Você deve definir um nome para seu contato!')
      Vibration.vibrate();

    }else{
    let objeto = {

      nome: nomeInput,
      numero: numeroInput,
      email: emailInput,

    }
    postagens.unshift(objeto)
   

   
    alert("Contato Registrado!")
    setinputNome('')
    setinputNumero('')
    setinputEmail('')
    

    
  }
    

  }
  }

 





