import React,{Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from'./components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(){
    super();
      this.state = {
       monster: [],
       searchFiled: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({monster:users}));
  }

  render(){
    const {monster,searchFiled} = this.state;
    const filteredMonsters = monster.filter(monster => 
      monster.name.toLowerCase().includes(searchFiled.toLocaleLowerCase())
    );
  return (
      <div className="App">
        <h2>Monsters Rolodex</h2>
            <SearchBox 
            placeholder = 'search monsters'
            handleChange = {e=>{
              this.setState({searchFiled:e.target.value})
            }}
            />
          <CardList monsters = {filteredMonsters}/>  
      </div>
    );
  }
}

export default App;
