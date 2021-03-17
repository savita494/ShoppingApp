// import React from 'react'
// import {StyleSheet,Text,View,ScrollView} from 'react-native';

// import Header from './components/contentheader/Header'
// import Contact from './components/contentheader/contact'
// import PrivacyPolicy from './components/contentheader/PrivacyPolicy'

// export default function App(){
//   return(
    // <ScrollView style={styles.container}>
    //   <Header/>
    //   </ScrollView>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   }
// })
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';
import Header from './components/contentheader/Header'
import Contact from './components/contentheader/contact'
import PrivacyPolicy from './components/contentheader/PrivacyPolicy'

const API_ENDPOINT = 'https://taobao-api.p.rapidapi.com/api';

export default function App() {
  // local states
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [textInput, setTextInput] = useState('');

  //search parameter
  const [query, setQuery] = useState('');
  const [fullData, setFullData] = useState([]);

  // calling the API endpoint
  useEffect(() => {
    setIsLoading(true);
    fetch(API_ENDPOINT)
      .then(response => response.json())
      .then(json => {
        setData(json.results);
        setFullData(json.results);
        setIsLoading(false); // call is successful
      })
      .catch(err => {
        setIsLoading(false);
        setError(err); //call failed coz of an error
      });
  }, []);
  //console.log(data);

  // loader icon functionality with ActivityIndicator
  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#65d3a5" />
      </View>
    );
  }

  // error handling on UI
  if (error) {
    return (
      <View>
        <Text>
          Error fetching data. Check your data connection or with your backend
          engineer.
        </Text>
      </View>
    );
  }

  //search functionality

  const handleSearch = text => {
    const formattedQuery = text.toLowerCase();
    const filteredData = fullData.filter( user => {
      return contains(user, formattedQuery);
    });
    setData(filteredData); //show filtered data on the UI
    setQuery(text);
  };

  const contains = ({name, email}, query) => {
    const {first, last} = name;

    if (
      first.includes(query) ||
      last.includes(query) ||
      email.includes(query)
    ) {
      return true;
    }

    return false;
  };

  //UI component to render as a header of flatlist (search bar)

  function renderHeader() {
    return (
      <View
        style={{
          backgroundColor: '#fff',
          padding: 10,
          marginVertical: 10,
          borderRadius: 20,
        }}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={query}
          onChangeText={queryText => handleSearch(queryText)}
          placeholder="Search"
          style={{backgroundColor: '#fff', paddingHorizontal: 20}}
        />
      </View>
    );
  }

  // Entire UI components to be rendered
  return (
       <View>
         <ScrollView style={styless.container}>
       <Header/>
      </ScrollView>
      <View>
      <Image
              style={{borderRadius: 100}}
              source={require('https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')}
            />
            <Image
              style={{borderRadius: 100}}
              source={require('https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')}
            /><Image
            style={{borderRadius: 100}}
            source={require('https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')}
          />
      </View>
    <View style={styles.container}>
      <Text style={styles.text}> Flat list example </Text>
      <FlatList horizontal
        contentContainerStyle={{paddingBottom: 20}}
        data={data}
        keyExtractor={(item, _index) => _index.toString()}
        ListHeaderComponent={renderHeader}
        renderItem={({item}) => (
          <View style={styles.listItem}>
            <Image
              style={{borderRadius: 100}}
              source={{uri: item.picture.thumbnail, height: 60, width: 60}}
            />
            <Text
              style={{
                padding: 15,
                color: '#5b9477',
                fontSize: 15.6,
                letterSpacing: 1,
              }}>{`${item.name.first} ${item.name.last}`}</Text>
          </View>
          
        )}
      />
    </View>
    </View>
  );
}

// mock data
/* const data = [
  {id: '1', title: 'first item'},
  {id: '2', title: 'second item'},
  {id: '3', title: 'third item'},
  {id: '4', title: 'four item'},
]; */

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#101010',
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '700',
  },
  listItem: {
    marginTop: 10,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      height: 4,
      width: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 30,
    width: '100%',
    elevation: 2.2,
  },
  listItemText: {
    fontSize: 18,
  },
});
const styless = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    
  }
})