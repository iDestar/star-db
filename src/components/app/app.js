import React from 'react';

import Header from '../header'
import './app.css';
import SwapiService from '../../services/swapi';
import ErrorBoundry from '../error-bondry';
import Row from '../row';
import ItemDetails,{ Record } from '../item-details/item-details';

export default class App extends React.Component {

    swapiService = new SwapiService();

    render() {

        const {getPerson, 
               getStarship,
               getStarshipImage, 
               getPersonImage,
               getPlanet,
               getPlanetImage} = this.swapiService

        const personDetails = (
        <ItemDetails itemId={11} 
        getData={getPerson}
        getImageUrl={getPersonImage} >
        
        <Record field ="gender" label="Gender" />
        <Record field="eyeColor" label ="Eye Color" />

        </ItemDetails> 
      
        );

        const starshipDetails = (
        <ItemDetails itemId={2} 
        getData={getPlanet}
        getImageUrl={getPlanetImage}/>
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