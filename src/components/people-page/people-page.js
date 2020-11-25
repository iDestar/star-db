import React, { Component } from 'react';

import './people-page.css';

import ItemList from '../item-list/item-list';
import ItemDetails from '../item-details/item-details';
import SwapiService from '../../services/swapi';
import ErrorBoundry from '../error-bondry';
import Row from '../row';


export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: 3
    };

    onPersonSelected = (id) => {
        this.setState ({
            selectedPerson: id
        });
    };

    

    render() {

        const itemList = (
         <ItemList
        
         onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}>

        {(i) => (
          `${i.name} (${i.birthYear})`
        )}

         </ItemList>
        );

 
        const personDetails = (
            <ErrorBoundry>
              <ItemDetails personId={this.state.selectedPerson} />
            </ErrorBoundry>
        );

        return (
          
              <Row left={itemList} right={personDetails} />
           
        );
      }
    }