import React from 'react';

import Header from '../header'
import PeoplePage from '../people-page';
import RandomPlanet from '../random-planet';


import './app.css';
import SwapiService from '../../services/swapi';
import ErrorBoundry from '../error-bondry';
import Row from '../row';
import ItemDetails from '../item-details/item-details';

export default class App extends React.Component {

    swapiService = new SwapiService();

    render() {

        const {getPerson, getStarship} = this.swapiService

        const personDetails = (
        <ItemDetails itemId={11} 
        getData={getPerson}/>
            );

        const starshipDetails = (
        <ItemDetails itemId={5} 
        getData={getStarship}/>
        );
        
        return (
        <ErrorBoundry>
            <div>
                <Header />
                <Row
                  left={personDetails}
                  right={starshipDetails} 
                />

            </div>
        </ErrorBoundry>

        );
    }
}