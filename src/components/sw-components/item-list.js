import React from 'react';
import itemList from '../item-list';
import { withData } from '../hoc-helper';
import SwapiService from '../../services/swapi';

const swapiService = new SwapiService();

const { getAllPeople, getAllStarships, getAllPlanets } = swapiService;

const PersonList = withData(itemList, getAllPeople);
const PlanetList = withData(itemList, getAllStarships);
const StarshipList = withData(itemList, getAllPlanets);

export { PersonList, StarshipList, PlanetList };
