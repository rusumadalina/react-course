import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cocktails: []
    };
  }

  componentDidMount() {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
      .then(res => {
        this.setState({ cocktails: res.data.drinks });
      });
  }

  render() {
    const cocktailList = this.state.cocktails.map(cocktail => <ListItem listItem={cocktail.strDrink} />);
    return (
      <div>
        {cocktailList}
      </div>
    )
  }
}

const ListItem = ({ listItem }) => <li>{listItem}</li>


export default App;
