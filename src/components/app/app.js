import React from 'react';
import ErrorIndicator from '../error-indicator';

import Header from '../header'
import PeoplePage from '../people-page';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';
import SwapiService from '../../services/swapi';

export default class App extends React.Component {

    swapiService = new SwapiService();

    state = {
        hasError: false
    }


    componentDidCatch() {
        this.setState({ hasError: true });
    }


    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }
        return (
            <div>
                <Header />
                <RandomPlanet />
                <PeoplePage />
                  
                <div className="row mb2">
                  <div className="col-md-6">
                    <ItemList onItemSelected={this.onPersonSelected} 
                    getData={this.swapiService.getAllPlanets}/>
                  </div>
                </div>

            </div>

        );
    }
}