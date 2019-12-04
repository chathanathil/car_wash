// import React, { Component } from 'react';
// import '../style/Home.css';
// import '../style/History.css';
// import {Link} from 'react-router-dom';
// import PropTypes from 'prop-types';
// import {connect} from 'react-redux';
// import {getCurrentWork} from '../actions/workActions';
// import Spinner from '../components/common/spinner';
// class History extends Component {
//     componentDidMount(){
//         this.props.getCurrentWork();
//     }

//     render() {
        
//         console.log("render+++++++++",this.props.work)
//         const {user} =this.props.auth;
//         const {work,loading} =this.props.work;

//         let historyPageContent;
//         if(work===null||loading){
//           historyPageContent=<h4><Spinner /></h4>
//         }else{
//          // Check if logged in user has profile data
//          if(work.length>0){
//              historyPageContent=this.props.work.work.map(wrk=>(
            
            
//                 <tr key={wrk._id}>
//                    <td>{wrk.date}</td>
//                    <td>{wrk.name}</td>
//                    <td>{wrk.vno}</td>
//                    <td>{wrk.work}</td>
//                    <td>{wrk.amount}</td>
//                </tr>
            
             
               
//            ));
//          }else{
//              historyPageContent=<h4>No work done yet {user.name}</h4>
//          }
//         }

//         return (
//             <div>
//               <div className="navbar">
//                  <ul>
//                      <Link to="/"><li>Home</li></Link>
//                      <Link to="/history"><li>History</li></Link>
//                  </ul>
//                </div>
                           
//                 <table id="customers">
//                     <tr>
//                         <th>No</th>
//                         <th>Date</th>
//                         <th>Name</th>
//                         <th>Vehicle</th>
//                         <th>Work</th>
//                         <th>Amount</th>
//                     </tr>
//                     {historyPageContent}
//                     {/* {this.props.work.length?<h1>Hii</h1>:null}     */}
//                     {/* {this.props.work} */}
//                     {/* {workDisplay} */}
                   
//                 </table>
                
//             </div>
//         )
//     }
// }

// History.propTypes={
//     getCurrentWork:PropTypes.func.isRequired,
//     auth:PropTypes.object.isRequired,
//     work:PropTypes.object.isRequired
// }

// const mapStateToProps=state=>({
//     work:state.work,
//     auth:state.auth
// })

// export default connect(mapStateToProps,{getCurrentWork}) (History);