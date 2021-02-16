import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity
} from 'react-native';
import moment from 'moment';

const HomeScreen =() => {
const [value, setValue] = useState(null)
const [listTodo, setListTodo] = useState([])
const [searchValue, setSearchValue] = useState(null)
const [searchedValue,setSearchedValue]=useState(null)
    
const handleTextInput = (text) => {
        setValue(text)
 }
  
const handleAddTodoButton = () => {
    let todoArray=[...listTodo]; 
    var someDate = moment().format("YYYY-MM-DDTHH:mm:ss")
    todoArray.push({title:value,date:someDate})
    todoArray.sort((a, b) => a.title.localeCompare(b.title));
    setListTodo(todoArray)
    setValue(null)
}

const handleSearchTextInput = (searchText) => {
    setSearchValue(searchText)
}

const handleSearchTodoButton = () => {
    const names = listTodo.map(el => el.title);
    const result=names.includes(searchValue)
    if(result){
        setSearchedValue(searchValue)
    }else{
        setSearchedValue("No result found")
    }
}

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
          <ScrollView>
       <View style={styles.textInputView}>
           <TextInput placeholder="Enter Todo here" 
           onChangeText={text => handleTextInput(text)}
           value={value}
           />
       </View>
       <View style={styles.buttonView}>
           <TouchableOpacity style={styles.buttonStyle} onPress={()=>handleAddTodoButton()}>
               <Text>ADD TODO</Text>
           </TouchableOpacity>
           </View>
           <View>
               {listTodo!==null?listTodo.map((item,index)=>
               <View style={{flexDirection:"row",margin:20}} key={index}>
                   <Text style={{marginHorizontal:20}}>{item.title}</Text>
                   <Text>{item.date}</Text>
               </View>):null}
           </View>
           <View style={styles.textInputView}>
           <TextInput placeholder="Enter Todo Name for search" 
           onChangeText={text => handleSearchTextInput(text)}
           value={searchValue}
           />
           </View>
           <View>
           <TouchableOpacity style={styles.clearButton} 
           onPress={()=>{setSearchedValue(null);setSearchValue(null)}}>
               <Text>Clear Search</Text>
           </TouchableOpacity>
           </View>
           <View style={styles.buttonView}>
           <TouchableOpacity style={styles.buttonStyle} 
           onPress={()=>handleSearchTodoButton()}>
               <Text>Search TODO</Text>
           </TouchableOpacity>
           </View>
           {searchedValue!==null?
           <View>
               <Text style={{margin:20}}>
                   {searchedValue}
               </Text>
           </View>:null}
           </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
      flex:1
  },
  textInputView:{
      borderColor:"cyan",
      borderWidth:1,
      borderRadius:6,
      margin:20
  },
  buttonView:{
      justifyContent: 'center',
      alignItems:'center'
  },
  buttonStyle:{
      height:50,
      width:200,
      justifyContent: 'center',
      alignItems:'center',
      backgroundColor:"#FF9F33",
      borderRadius:6,
  },
  clearButton:{
    height:10,
    width:120,
    justifyContent: 'center',
    alignItems:'center',
}
});

export default HomeScreen;
