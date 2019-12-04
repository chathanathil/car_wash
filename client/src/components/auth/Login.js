// import React, { Component } from 'react'
// import '../../style/Home.css';
// import PropTypes from 'prop-types';
// import {connect} from 'react-redux';
// import TextField from 'material-ui/TextField'
// import {loginUser} from '../../actions/authActions'; 

// class Login extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             name:"",
//             password:"",
//             errors:{}
//         };
//         this.onLogin=this.onLogin.bind(this);
        
 
//     }
//    componentDidMount(){
//        if(this.props.auth.isAuthenticated){
//            this.props.history.push('/')
//        }
//    }

//    componentWillReceiveProps(nextProps){
//        if(nextProps.auth.isAuthenticated){
//            this.props.history.push('/history');
//        }
//    }

//    onNameChange=(e,str)=>{
//        this.setState({name:str})
//    }
//    onPassChange=(e,str)=>{
//        this.setState({password:str})
//    }
//    onLogin=(e)=>{
//     e.preventDefault();
//     const userData={
//       name:this.state.name,
//       password:this.state.password
//     }
//     console.log(userData);
//    this.props.loginUser(userData)
//   }
//     render() {

//         const {errors} =this.state;

//         return (
//             <div>
//                      <TextField
//              hintText="abc@gmail.com"
//              floatingLabelText="Email"
            
//              value={this.state.name}
//              onChange={this.onNameChange}
//         /><br />
//          <TextField
//              hintText=""
//              floatingLabelText="Password"
//              type="password"
//              value={this.password}
//              onChange={this.onPassChange}
//         /><br />
      
//                   <button  
//                   style={{width:"100%",height:"5vw",background:"blue"}}
//                   onClick={this.onLogin}
//                   />
               
//             </div>
//         )
//     }
// }

// loginUser.proptype={
//     loginUser:PropTypes.func.isRequired,
//     auth:PropTypes.object.isRequired,
//     errors:PropTypes.object.isRequired
// }

// const mapStateToProps=state=>({
//     auth:state.auth,
//     errors:state.errors
// })

// export default connect(mapStateToProps,{loginUser}) (Login);