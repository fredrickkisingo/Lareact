import React,{Component} from 'react';
import {Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Category from './category/Index';
import Error404 from './Error404';


export default class Header  extends Component{
    render(){
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About Us</Link>
                        </li>  
                        <li className="nav-item">
                            <Link className="nav-link" to="/category">Category</Link>
                        </li>  
                    </ul>
                    
                </div>  
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />&nbsp;&nbsp;
                    <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>  
             </div>
           </div> 
        </nav> 
        <div className='row'>
            <div className='col-md-12'>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/category' component={Category}/>
                    <Route exact path="/category/add" component={Category} />
                    <Route exact path="/category/edit/:id" component={Category} />                   
                    <Route exact path="/*" component={Error404} />

                </Switch>
            </div>
        </div> 
       </div> 
        
 
    );
}
}

