import React from 'react';
import {Link, Route} from 'react-router-dom';
import Add from './Add';
import Listing from './Listing';
import Edit from './Edit';




function Index() {
    return (
        <div className="container">
         
                <div>
                    <hr />
            <Link to ="/category" className="btn btn-primary">Listing</Link> &nbsp;
            <Link to ="/category/Add" className="btn btn-primary">Add</Link>
            <Route exact path="/category" component={Listing} />
            <Route exact path="/category/add" component={Add} />
            <Route exact path="/category/edit/:id" component={Edit} />
         </div>
            
        </div>
    );
}

export default Index;

