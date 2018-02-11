import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ListView, Button } from 'react-native';
import { fetchUsers } from  './constants/api';
import Row from './components/Row';
import Header from './components/Header';
import Footer from './components/Footer';

export default class App extends React.Component {
  constructor() {
    super();
    this._onPressButton.bind(this);
    this.state = {
      ds: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      loading: false,
      dataSource: null
    };
  }

  onPressLearnMore(){
      fetch('https://rnative-nslawvdccm.now.sh/clients/add',
      {
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({
              name: "eulises", 
              email: "eulises@gmail.com", 
              phone: "04243621691", 
              address: "hollaaa"
          })
      }) 
      .catch(function(res){ 
          console.log(res); 
      })
  }
  
  _onPressButton() {
    alert('You long-pressed the button!')
  }

  render() {
    fetchUsers()
     .then((data) => {
        this.setState({
          dataSource:this.state.ds.cloneWithRows(data)
        })  
      }); 
    if(this.state.dataSource != null)
    {
      return (
        <View>                      
            <ListView
              dataSource={this.state.dataSource}
              renderRow={(rowData) => <Row {...rowData} />}
              renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
              renderHeader={() => <Header />}
              renderFooter={() => <Footer />}
            />
        </View>
      );
    }else{
      return(
        <View>
          <Footer />
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});
