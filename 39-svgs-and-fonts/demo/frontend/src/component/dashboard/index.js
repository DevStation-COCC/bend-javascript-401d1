import React from 'react';
import {connect} from 'react-redux';
import ListForm from '../list-form';
import * as util from '../../lib/util.js';
import * as listActions from '../../action/list-actions.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import {Carousel} from 'react-bootstrap';


class Dashboard extends React.Component {

  componentWillMount(){
    this.props.listsFetch();
  }

  render(){
    return (
      <div className='dashboard'>
        <h2> Dashboard </h2>
        <ListForm 
          buttonText='create list'
          onComplete={this.props.listCreate}
          />
        
        {this.props.lists.map(list => 
          <div key={list._id}>
            {list.title} 
            <button onClick={() => this.props.listDelete(list)}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>
        )}

        <div className="carousel-container">
          <Carousel>
            <Carousel.Item>
              <img width={900} height={500} alt="900x500" src="/assets/one.jpg" />
              <Carousel.Caption>
                <h5>Cute</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={500} alt="900x500" src="/assets/two.jpg" />
              <Carousel.Caption>
                <h5>Cuter</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={500} alt="900x500" src="/assets/three.jpg" />
              <Carousel.Caption>
                <h5>Cutest</h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({lists: state.lists});
let mapDispatchToProps = (dispatch) => ({
  listCreate: (list) => dispatch(listActions.listCreateRequest(list)),
  listDelete: (list) => dispatch(listActions.listDeleteRequest(list)),
  listsFetch: () => dispatch(listActions.listsFetchRequest()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);


