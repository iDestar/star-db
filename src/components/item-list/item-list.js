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
        .then((ItemList) => {
            this.setState ({
                ItemList,
            });
        });
    };


    renderItems (arr) {

        return arr.map((item) => {
            const { id } = item;
            const label = this.props.children(item);
            return (
            <li className="list-group-item"
                 key={id}
                 onClick={() => this.props.onItemSelected(id)}>
                {label}
            </li>
            )
        });
    };
 

    render() {


        const { ItemList } = this.state;
       
        if( !ItemList ) {
            return <Spinner />;
        }

        const items = this.renderItems(ItemList)
    
        return (
            <ul className="list-group item-list">
                {items}
            </ul>
        )
    }
}