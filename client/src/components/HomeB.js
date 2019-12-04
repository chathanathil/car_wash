import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import searchIcon from '../../src/images/search.png';
import '../style/HomeB.css'
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {logoutUser} from '../actions/authActions';
import {clearCurrentWork} from '../actions/workActions';
import {createWork} from '../actions/workActions';
import LoginB from './auth/LoginB';
import {getCurrentWork} from '../actions/workActions';
import {carSearch} from '../actions/searchAction';
import CarSearch from './CarSearch';
 class HomeB extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            vno:"",
            work:"",
            amount:"",
            searching:false,
            searchValue:"",
            errors:{}
        }
       
    }
   onInputChange=e=>{
     this.setState({[e.target.name]:e.target.value});
   }

  handleSearchSubmit=(e)=>{
    e.preventDefault();
    if(e.keyCode===13){
      this.props.history.push(`/search/${this.state.searchValue}`);
    }
    console.log("hii"+this.state.searchValue)
  }

  onSearchChange=e=>{
    this.setState({searchValue:e.target.value})
  }
   

    
   
    onSubmit=(e)=>{
      e.preventDefault();

      const workData={
        name:this.state.name,
        vno:this.state.vno,
        work:this.state.work,
        amount:this.state.amount
      }
      console.log(workData);
      this.props.createWork(workData,this.props.history);
      this.nameInput.value = "";
      this.numberInput.value = "";
      this.workInput.value = "Select Work";
      this.amountInput.value = "";
      // this.setState=({
      //   name:"",
      //   vno:"",
      //   work:"",
      //   amount:""
      // })
    }
    onLogoutClick(e){
      e.preventDefault();
      this.props.clearCurrentWork();
      this.props.logoutUser();
      this.props.history.push('/login');
    }
  
  

    render() {
  
      const { name,amount,vno,work } = this.state;
const isEnabled = name.length > 0 && amount.length > 0 && vno.length > 0 && work.length > 0;

        const {isAuthenticated,user}=this.props.auth;
      const authLinks=(
            <Link to="/login" className="nav-link" onClick={this.onLogoutClick.bind(this)}>
              Logout
            </Link>
      )
      // const guestLinks=(
      //  <h1>hi</h1>
      // )
     

      
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-info">
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                        <Link to="#" className="nav-link" data-toggle="modal" data-target="#exampleModalCenter">
                          Add
                        </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/history">History</Link>
                        </li>
                        <li className="nav-item">
                         {authLinks}
                          {/* {isAuthenticated?authLinks:guestLinks} */}
                        </li>
                        
                        </ul>
                    </div>
                    </nav>
                    

                      {/* <!-- Modal --> */}
                      <div className="modal fade" id="exampleModalCenter"  role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="exampleModalCenterTitle">Fill the form</h5>
                              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div className="modal-body">
                            <div className="form-group">
                              <label >Name</label>
                              <input type="text" className="form-control"  placeholder="name"
                                name="name"
                                ref={(ref) => this.nameInput= ref}
                                value={this.state.name}
                                onChange={this.onInputChange}
                              />
                            </div>
                            <div className="form-group">
                              <label >Number</label>
                              <input type="text" className="form-control"  placeholder="number_of_car"
                               name="vno"
                               required
                               ref={(ref) => this.numberInput= ref}
                               value={this.state.vno}
                               onChange={this.onInputChange}
                              />
                            </div>
                            <select className="select-css"
                                name="work"
                                ref={(ref) => this.workInput= ref}
                                value={this.state.work}
                                onChange={this.onInputChange}
                            >
                               <option>Select Work</option>
                              <option>Body Wash</option>
                              <option>Full Body</option>
                              <option>Polish</option>
                            
                          </select>
                            <div className="form-group">
                              <label >Amount</label>
                              <input type="text" className="form-control"  placeholder="amount"
                                name="amount"
                                ref={(ref) => this.amountInput= ref}
                                value={this.state.amount}
                                onChange={this.onInputChange}
                              />
                            </div>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-primary"
                               onClick={this.onSubmit}
                               disabled={!isEnabled}
                              >Submit</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    <h1 className="homeHeader">Al Sadaf Car Wash </h1>
                    
                    <div className="container" >
                      <div className="input-group carSearch"
                        style={{
                          width:"50%",
                          position:"absolute",
                          top:"50%",
                          left:"50%",
                          transform:"translateX(-50%)"
                        }}
                      >
                      <input type="search" className="form-control" placeholder="Search" name="search"
                         
                         style={{borderRadius:"40px"}}
                         autoComplete="off"
                         onKeyUp={this.handleSearchSubmit}
                         onChange={this.onSearchChange}
                         value={this.state.searchValue}
                      />
 
{/*                      
                     <img 
                       alt="search"
                       src={searchIcon}
                      /> */}
                      {/* <div class="input-group-btn">
                      <button class="btn btn-default"
                        // onClick={this.onSearch(arr,this.state.search)}
                        // onClick={console.log(this.state.search)}
                      >
                     Search</button>
                      </div> */}
                      
                      
                    </div>
                    </div>
                 </div>
   
        )
    }
}
HomeB.propTypes={
    logoutUser:PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired,
    work:PropTypes.object.isRequired,
    carSearch:PropTypes.func.isRequired,
    // errors:PropTypes.object.isRequired
  }
  
  const mapStateToProps=state=>({
    auth:state.auth,
    work:state.work,
    errors:state.errors
  })
  
export default connect(mapStateToProps,{carSearch,getCurrentWork,createWork,logoutUser,clearCurrentWork})(withRouter(HomeB));