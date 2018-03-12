import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { add_state } from 'store/common/action'

@connect(state=>{
  return { test:state.test }
},{ add_state })

class App extends Component {
  render() {
    return (
      <div className="App">
          <RaisedButton onClick={this.props.add_state}>{this.props.test}</RaisedButton>
      </div>
    );
  }
}

export default App;
