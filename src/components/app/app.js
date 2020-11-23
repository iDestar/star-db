import React from 'react';
import ErrorIndicator from '../error-indicator';

import Header from '../header'
import PeoplePage from '../people-page';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';
import SwapiService from '../../services/swapi';

const Row = ({left,right}) => {
    return (
        <div className="row mb2">
                  <div className="col-md-6">
                   {left}
                  </div>

                  <div className="col-md-6">
                   {right}
                  </div>
                </div>
    );

};

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

        const itemList = (
                 <ItemList onItemSelected={this.onPersonSelected} 
                    getData={this.swapiService.getAllPlanets}
                    renderItem={({ name, diameter }) => `${name}, ${diameter}`}/>
        );

 
        const personDetails = (
            <div className="col-md-6">
              <PersonDetails personId={this.state.selectedPerson}
               />
            </div>
        )

        return (
            <div>
                <Header />
                <RandomPlanet />
                <PeoplePage />
                  
                <div className="row mb2">
                  <div className="col-md-6">
                   {itemList}
                  </div>

                  <div className="col-md-6">
                   {personDetails}
                  </div>
                </div>

                <div className="row mb2">
                  <div className="col-md-6">
                    <ItemList onItemSelected={this.onPersonSelected} 
                    getData={this.swapiService.getAllStarships}
                    renderItem={({ name, model }) => `${name}, ${model}`}/>
                  </div>
                </div>

            </div>

        );
    }
}