import React, {Component} from 'react';
import SwapiService from '../../services/swapi';
import Spinner from '../spinner'

import './item-list.css'

export default class ItemList extends Component {

    state = { 
        ItemList: null
    };

    componentDidMount () {
       
        const { getData } = this.props;

        getData()
        .then((ItemList)=> {
            this.setState ({
                ItemList,
            });
        });
    };

    renderItems (arr) {

        return arr.map(({ name, id }) => {
            return (
            <li className="list-group-item"
                 key={id}
                 onClick={() => this.props.onItemSelected(id)}>
                {name}
            </li>
            )
        });
    };
 

    render() {

        const { peopleList } = this.state;
       
        if( !peopleList ) {
            return <Spinner />;
        }

        const items = this.renderItems(peopleList)
    
        return (
            <ul className="list-group item-list">
                {items}
            </ul>
        )
    }
}