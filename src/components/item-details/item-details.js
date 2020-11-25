import React, { Component } from 'react';
import SwapiService from '../../services/swapi';

import './item-details.css'

export default class ItemDetails extends Component {

    swapiService = new SwapiService();

    state = {
        item: null,
        image: null
    };

    componentDidMount () {
        this.updateItem();
    }

    componentDidUpdate (prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem() {
        const { itemId, getData, getImageUrl } = this.props;
        if (!itemId) {
          return;
        }
    
        getData(itemId)
          .then((item) => {
            this.setState({
              item,
              image: getImageUrl(item)
            });
          });
      }


    render () {

        const { item, image } = this.state

        const { name } = item
        
        if(!item) {
            return <span>Select person</span>
        }

      return (
        <div className="item-details card">
         <img className="item-image" 
                src={image}/>

                <div className="card-body">
                  <h4>{name}</h4>
                    
                </div>
        </div>
        )
    }
}



