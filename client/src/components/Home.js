// import React, { Component } from 'react';
// import '../../src/style/Home.css';
// import {Link} from 'react-router-dom';
// import {withRouter} from 'react-router-dom';
// import FloatingActionButton from 'material-ui/FloatingActionButton';
// import ContentAdd from 'material-ui/svg-icons/content/add';
// import Dialog from 'material-ui/Dialog';
// import FlatButton from 'material-ui/FlatButton';
// import PropTypes from 'prop-types';
// import {connect} from 'react-redux';
// import {logoutUser} from '../actions/authActions';
// import Login from './auth/Login';
// import RaisedButton from 'material-ui/RaisedButton';
// import TextField from 'material-ui/TextField';
// import {clearCurrentWork} from '../actions/workActions';
// import {createWork} from '../actions/workActions';

// class Home extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             name:"",
//             vno:"",
//             work:"",
//             amount:"",
//             errors:{}
//         }
//         this.onSubmit=this.onSubmit.bind(this);
//     }
//     onNameChange=(e,str)=>{
//         this.setState({name:str})
//     }
//     onNumberChange=(e,str)=>{
//         this.setState({vno:str})
//     }
//     onWorkChange=(e,str)=>{
//         this.setState({work:str})
//     }
//     onAmountChange=(e,str)=>{
//         this.setState({amount:str});
       
//     }
//     onSubmit(e){
//       e.preventDefault();

//       const workData={
//         name:this.state.name,
//         vno:this.state.vno,
//         work:this.state.work,
//         amount:this.state.amount
//       }
//       console.log(workData);
//       this.props.createWork(workData,this.props.history);
//     }
//     onLogoutClick(e){
//       e.preventDefault();
//       this.props.clearCurrentWork();
//       this.props.logoutUser();
//     }
 

//     state = {
//         open: false,
//       };
    
//       handleOpen = () => {
//         this.setState({open: true});
//       };
    
//       handleClose = () => {
//         this.setState({open: false});
//       };
//     render() {
    
//       const {isAuthenticated,user}=this.props.auth;
//       const authLinks=(
//         <ul>
//           <li>
//             <a href="" onClick={this.onLogoutClick.bind(this)}>
//               Logout
//             </a>
//           </li>
//         </ul>
//       )
//       const guestLinks=(
//         <Login />
//       )

//         const actions = [
//             <FlatButton
//               label="Cancel"
//               primary={true}
//               onClick={this.handleClose}
//             />,
           
//           ];

//           // Select options for work
//           // const options=[
//           //   {label:'Select work' , value:0},
//           //   {label:'Full Body',value:'Full Body'},
//           //   {label:'Body Wash',value:'Body Wash'},
//           //   {label:'Polish' , Value:'Polish'}
//           // ];
      
//         return (
//             <div>
//               <div className="navbar">
//                  <ul>
//                     <Link to="/"> <li>Home</li></Link>
//                     <Link to="/history"> <li>History</li></Link>
//                     <li>{isAuthenticated?authLinks:guestLinks}</li>
//                  </ul>
                
//               </div>
//               <FloatingActionButton 
//                  mini={true} 
//                  onClick={this.handleOpen} 
//                  className="floatButton">
//                 <ContentAdd />
//               </FloatingActionButton>
//               <Dialog
//                     title="Fill the form"
//                     actions={actions}
//                     modal={false}
//                     open={this.state.open}
//                     onRequestClose={this.handleClose}
//                     autoScrollBodyContent={true}
//                 >
//                      <div className="textFields">
                        
//                             <TextField
//                               hintText="name"
//                               floatingLabelText="Name"
                              
//                               value={this.state.name}
//                               onChange={this.onNameChange}
//                           /><br />
//                           <TextField
//                               hintText=""
//                               floatingLabelText="Number"
                              
//                               value={this.vno}
//                               onChange={this.onNumberChange}
//                           /><br />

                          
//                            <TextField
                              
//                               floatingLabelText="work"
                              
//                               value={this.state.work}
//                               onChange={this.onWorkChange}
//                           /><br />
//                           <TextField
//                               hintText=""
//                               floatingLabelText="Amount"
                              
//                               value={this.amount}
//                               onChange={this.onAmountChange}
//                           /><br />
                           
                         
//                   <button  
//                   style={{width:"100%",height:"5vw",background:"blue"}}
//                   onClick={this.onSubmit}
//                   />
//                         </div>

//                </Dialog>
//             </div>
//         )
//     }
// }
// Home.propTypes={
//   logoutUser:PropTypes.func.isRequired,
//   auth:PropTypes.object.isRequired,
//   work:PropTypes.object.isRequired,
//   errors:PropTypes.object.isRequired
// }

// const mapStateToProps=state=>({
//   auth:state.auth,
//   work:state.work,
//   errors:state.errors
// })

// export default connect(mapStateToProps,{logoutUser,clearCurrentWork,createWork})(withRouter(Home));