import React, { Component } from 'react'
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native'

import { connect } from 'react-redux'
import { fetchData} from './action'


class App extends Component {
    constructor(props) {
      super(props);
  
    }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Redux Examples</Text>
      
        <TouchableHighlight style={styles.button} onPress={() => this.props.fetchData()}>
          <Text style={styles.buttonText}>Load Data</Text>
        </TouchableHighlight>
        
        <View style={styles.mainContent}>
        {
          //props.appData.isFetching && <Text>Loading</Text>
          this.props.appData.isFetching ? (
            <Text>Loading</Text>
          ): null
        }  
        {
          this.props.appData.data.length ? (
            this.props.appData.data.map((person, i) => {
              return <View key={i} >
                <Text>Name: {person.name}</Text>
                <Text>Age: {person.city}</Text>
              </View>
            })
          ) : null  
        }
        {
          this.props.appData.isFetching == false && this.props.appData.error ? (
            <Text>Data not found or can not connect network</Text>
          ) : null
        }
        </View>
        
      </View>
    )
  }
}


let styles = StyleSheet.create({
  container: {
    marginTop: 100
  },
  text: {
    textAlign: 'center'
  },
  button: {
    height: 60,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff'
  },
  buttonText: {
    color: 'white'
  },
  mainContent: {
    margin: 10,
  }
})

function mapStateToProps (state) {
  return {
    appData: state.appData
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchData: () => dispatch(fetchData())

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)