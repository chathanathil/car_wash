import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { carSearch, setSearchNull } from "../actions/searchAction";
import Spinner from '../components/common/spinner';
import Moment from 'react-moment';
import {Link} from 'react-router-dom'
 class CarSearch extends Component {
    constructor(props){
        super(props);
        this.state={
            cars:[],
            query:null,
            noResult:false
        }
    }

    componentDidMount(){
        this.setState(
            {
                query:this.props.match.params.query
            },
            ()=>{
                this.props.carSearch(this.state.query);
            }
        )
    }

    componentWillReceiveProps(newProps){
        const newState={};
        if(newProps.match.params.query!==this.state.query){
          this.setState(
              {
                  cars:[],
                  query:newProps.match.params.query,
                  noResult:false
              },
              ()=>{
                  this.props.setSearchNull();
                  this.props.carSearch(this.state.query);
              }
          )
        }else{
            if(newProps.search.car){
                if(!newProps.search.car){
                    this.setState({
                        noResult:true
                       
                    })
                }else{
                    newState.cars=newProps.search.car;
                    
                    this.setState({
                        cars:newState.cars,
                        noResult:false
                    })
                }
            }
        }
    }

    render() {
        let content=
        this.props.search.car!==null?this.props.search.car.map((cr,index)=>{
            
            return(
                
            <tr key={cr._id}>
             <td>{index+1}</td>
             <td>
               <Moment format="DD/MM/YYYY" >{cr.date}</Moment>
             </td>
            <td>{cr.name}</td>
            <td>{cr.vno}</td>
            <td>{cr.work}</td>
            <td>{cr.amount}</td>
        </tr>
         
       )

        }):(<Spinner />)
        return (
            <div>
                {this.state.noResult?(<h1>No result</h1>):(
                    <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item ">
                            <Link className="nav-link" to="/home">Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/history">History <span className="sr-only">(current)</span></Link>
                        </li>
                       
                        </ul>
                    </div>
                </nav>
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Date</th>
                        <th scope="col">Name</th>
                        <th scope="col">Vehicle</th>
                        <th scope="col">Work</th>
                        <th scope="col">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                    {content}
                    </tbody>
                </table>
                </div>)
                
                }
            </div>
        )
    }
}
CarSearch.proptype={
    carSearch:PropTypes.func.isRequired,
    setSearchNull:PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired,
    work:PropTypes.object.isRequired,
    search:PropTypes.object.isRequired
};

const mapStateToProps=state=>({
    auth:state.auth,
    work:state.work,
    search:state.search
})
export default connect(mapStateToProps,{carSearch,setSearchNull}) (withRouter(CarSearch));