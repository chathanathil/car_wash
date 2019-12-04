import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getCurrentWork} from '../actions/workActions';
import Spinner from '../components/common/spinner';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
 class HistoryB extends Component {
    
    componentDidMount(){
        this.props.getCurrentWork();
    }
    // handleIncrement=()=>{
    //     this.setState({count:this.state.count+1});
    //     // console.log(this.state.count)
    // }
    render() {
    
       
        const {user} =this.props.auth;
        const {work,loading} =this.props.work;

        let historyPageContent;
        if(work===null||loading){
          historyPageContent=<Spinner />
        }else{
         // Check if logged in user has profile data
         if(work.length>0){
             historyPageContent=this.props.work.work.map((wrk,index)=>(            
                <tr key={wrk._id}>
                <td>{index+1}</td>
                   <td>
                       <Moment format="DD/MM/YYYY" >{wrk.date}</Moment>
                   </td>
                   <td>{wrk.name}</td>
                   <td>{wrk.vno}</td>
                   <td>{wrk.work}</td>
                   <td>{wrk.amount}</td>
               </tr>
           ));
         }else{
             historyPageContent="Refresh again...!"
         }
        }

        return (
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
                        <li className="nav-item active">
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
                    {historyPageContent}
                    </tbody>
                </table>
             
            </div>
        )
    }
}
HistoryB.propTypes={
    getCurrentWork:PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired,
    work:PropTypes.object.isRequired
}

const mapStateToProps=state=>({
    work:state.work,
    auth:state.auth
})


export default connect(mapStateToProps,{getCurrentWork}) (HistoryB);
