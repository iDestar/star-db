import React from 'react';

import Header from '../header';
import './app.css';
import SwapiService from '../../services/swapi';
import ErrorBoundry from '../error-bondry';
import Row from '../row';
import ItemDetails, { Record } from '../item-details/item-details';
import ItemList from '../item-list';

import {
  PersonDetails,
  StarshipDetails,
  PlanetDetails,
  PersonList,
  StarshipList,
  PlanetList,
} from '../sw-components/index';

export default class App extends React.Component {
  swapiService = new SwapiService();

  render() {
    return (
      <ErrorBoundry>
        <div>
          <Header />
          <PersonList>{({ name }) => <span>{name}</span>}</PersonList>
          <StarshipList>{({ name }) => <span>{name}</span>}</StarshipList>
          <PlanetList>{({ name }) => <span>{name}</span>}</PlanetList>

          <Row
            left={<PersonDetails itemId={11} />}
            right={<StarshipDetails itemId={11} />}
          />
        </div>
      </ErrorBoundry>
    );
  }
}
