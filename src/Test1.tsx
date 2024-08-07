import { View, Text, FlatList,TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const store = [
  { id: 1, FirstName: 'Ram', LastName: 'patel' },
  { id: 2, FirstName: 'shayam', LastName: 'Joshi' },
  { id: 3, FirstName: 'sagar', LastName: 'chauhan' },
 
];

export default function Test1() {
  const [data1, setData1] = useState(store);

  // const renderItemView = ({ item }) => {
  //   return(   <View style={{ backgroundColor: 'green', padding: 20 }}>
  //     <Text>
  //       {item.FirstName}
  //     </Text>
  //   </View>)
  
  // };
  const renderItemView = ({ item }) => {
    return (
      <View style={{  padding: 10 }}>
        <Text>{item.FirstName}</Text>
      </View>
    );
  };
  
  return (
    <View style={{ flex: 1,justify:'center'}}>
   <TouchableOpacity onPress={console.log("test")}>
    <Text>Add Emplyee</Text>
   </TouchableOpacity>
      <FlatList
        data={store}
        renderItem={renderItemView}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}
