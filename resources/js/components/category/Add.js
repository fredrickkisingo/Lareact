import React, {Component} from 'react';
import axios from 'axios';
import SuccessAlert from './SuccessAlert';
import ErrorAlert from './ErrorAlert';


export default class Add extends Component  {

    constructor()
        {
            super();
            this.onChangeCategoryName=this.onChangeCategoryName.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
            this.state={
                category_name:''
            }
        }
        onChangeCategoryName(e){
            this.setState({
                category_name:e.target.value
            });
        }

        onSubmit(e)
        {
            e.preventDefault();
            const category= {
                category_name : this.state.category_name
            }

            // call the  axios api
            axios.post('http://127.0.0.1:8000/api/category/store', category)
            .then(res=>{
                this.setState({alert_message:"success"})
            }).catch(error=>{
                this.setState({alert_message:"error"});
                })

        }
    render(){
  return (
        <div className="container">
             <hr />
           
             {this.state.alert_message=="success"?<SuccessAlert message={"Category added successfully."} />:null}
            {this.state.alert_message=="error"?<ErrorAlert message={"Error occurred while adding the category..."} />:null}

            <form onSubmit={this.onSubmit}>
                <div className="mb-3">
                    <label htmlFor="category_name" className="form-label">Category Name</label>
                    <input type="text" className="form-control"
                     id="category_name" 
                     value={this.state.category_name}
                     onChange={this.onChangeCategoryName}
                     placeholder="Enter Category" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
  }
}

