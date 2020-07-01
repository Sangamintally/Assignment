import React , {Component} from 'react';
import './App.css';
import Food from './container/Food';
import Recipe from './container/Recipe';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: [],
      Recipe: []
    };
  }
  handleClick = ()=>{
    console.log("onclick fnction will triger")
  }
  render(){
  return (
    <div className="App">
      <div className = "d-flex search-block">
      <TextField
          id="filled-full-width"
          style={{ margin: 8  }}
          placeholder="Placeholder"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        /> 
        <Button variant="contained" color="primary" disableElevation onClick={this.handleClick}> Search</Button>
      </div>
      <h2> Food Data </h2>
      <Food />
      <h2> Recipe Data </h2>
      <Recipe />
    </div>
  );
  }
}

export default App;
