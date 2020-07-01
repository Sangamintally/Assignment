import React , {Component} from 'react';
import './App.css';
import Food from './container/Food';
import Recipe from './container/Recipe';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { searchFood , searchRecipe } from './container/Api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // list:[
      //   {name:"chicken",energy: "1200 kcal" , protein:"100 kcal",fat:"320 kcal",carbs:"120 kcal",title:"chicken haris"},
      //   {name:"rice",energy: "1000 kcal" , protein:"200 kcal",fat:"420 kcal",carbs:"220 kcal",title:"curd rice"},
      //   {name:"pulse",energy: "1300 kcal" , protein:"500 kcal",fat:"120 kcal",carbs:"420 kcal",title:"green pulse"},
      //   {name:"wheat",energy: "800 kcal" , protein:"110 kcal",fat:"120 kcal",carbs:"320 kcal",title:"white wheat"},
      //   {name:"idly",energy: "500 kcal" , protein:"120 kcal",fat:"120 kcal",carbs:"120 kcal",title:"spung idly"},
      //   {name:"dosha",energy: "700 kcal" , protein:"130 kcal",fat:"220 kcal",carbs:"120 kcal",title:"plain dosha"},
      //   {name:"apple",energy: "600 kcal" , protein:"140 kcal",fat:"90 kcal",carbs:"120 kcal",title:"red apple"},
      //   {name:"mango",energy: "400 kcal" , protein:"150 kcal",fat:"80 kcal",carbs:"120 kcal",title:"yellow banana"},
      //   {name:"banana",energy: "550 kcal" , protein:"160 kcal",fat:"70 kcal",carbs:"120 kcal",title:"chicken haris"},
      //   {name:"pea",energy: "200 kcal" , protein:"170 kcal",fat:"60 kcal",carbs:"120 kcal",title:"green pea"},
      //   {name:"locky",energy: "750 kcal" , protein:"180 kcal",fat:"50 kcal",carbs:"120 kcal",title:"fresh locky"}
      // ],
      food: [],
      Recipe: [],
      searchValue:''
    };
  }
  handleClick = async()=>{
      console.log("fetchData1");
      const response1 = await searchFood({food: this.state.searchValue})
      console.log(response1,"r111111");
      this.setState({food: response1.data.hints})
    

      console.log("fetchData2");
      const response2 = await searchRecipe({food: this.state.searchValue})
      console.log(response2);
      this.setState({Recipe: response2})
  }



    // const filterFood = this.state.list.filter(item=> item.name == this.state.searchValue)
    // this.setState({
    //   food:filterFood
    // })
    // console.log(filterFood.length,"00000000000")
  


  render(){
    console.log("aaaaaaaaaa",this.state.food)
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
          onChange={event => {
            const { value } = event.target;
            this.setState({ searchValue: value });
          }}
        /> 
        <Button variant="contained" color="primary" disableElevation onClick={this.handleClick}> Search</Button>
      </div>
  
       <Food  filterFood = {this.state.food} item = {this.state.food.length}/> 
      {/* <Recipe filterFood = {this.state.food} item = {this.state.food.length} /> */} 
    </div>
  );
  }
}

export default App;
