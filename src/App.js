import React from 'react';

import { Cards, Charts, StatePicker } from './components';
import Style from './App.module.css';
import { fetchData } from './api';
import titleImage from './images/corona.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  };

  async componentDidMount() {
    const apiDate = await fetchData();
    this.setState({ data: apiDate });
  }

  counryChangeHandler = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={Style.container}>
        <img src={titleImage} className={Style.image} alt='COVID-19' />
        <Cards data={data} />
        <StatePicker counryChangeHandler={this.counryChangeHandler} />
        <Charts data={data} country={country} />
      </div>
    );
  }
}

export default App;
