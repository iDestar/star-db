import React from 'react';

import Header from '../header'
import './app.css';
import SwapiService from '../../services/swapi';
import ErrorBoundry from '../error-bondry';
import Row from '../row';
import ItemDetails,{ Record } from '../item-details/item-details';
import ItemList from '../item-list';

export default class App extends React.Component {

    swapiService = new SwapiService();

    render() {

        const {getPerson, 
               getStarship,
               getStarshipImage, 
               getPersonImage,
               getPlanet,
               getPlanetImage,
               getAllPeople} = this.swapiService

        const personDetails = (
        <ItemDetails itemId={11} 
        getData={getPerson}
        getImageUrl={getPersonImage} >
        
        <Record field ="gender" label="Gender" />
        <Record field="eyeColor" label ="Eye Color" />

        </ItemDetails> 
      
        );

        const starshipDetails = (
        <ItemDetails itemId={5} 
        getData={getStarship}
        getImageUrl={getStarshipImage}>
        
        <Record field ="model" label="Model" />
        <Record field="length" label ="Length" />
        <Record field="costInCredits" label ="Cost" />
        </ItemDetails>
        );
        
        return (
        <ErrorBoundry>
            <div>
                <Header />
                <ItemList
                 getData={getAllPeople}
                 onItemSelected={() => {}}>

                 { ({name}) => <span>{name}</span> }
               </ItemList>
                
                <Row
                  left={personDetails}
                  right={starshipDetails} 
                />

            </div>
        </ErrorBoundry>

        );
    }
}