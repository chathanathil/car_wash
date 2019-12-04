import React, { Component } from 'react';
import '../../style/LoginB.css'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import TextField from 'material-ui/TextField'
import {loginUser} from '../../actions/authActions'; 

 class LoginB extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            password:"",
            errors:{}
        };
        // this.onLogin=this.onLogin.bind(this);
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        
 
    }


   componentDidMount(){
       if(this.props.auth.isAuthenticated){
           this.props.history.push('/home')
       }
   }

   componentWillReceiveProps(nextProps){
       if(nextProps.auth.isAuthenticated){
           this.props.history.push('/home');
       }
   }

   onChange(e){
       this.setState({[e.target.name]:e.target.value});
   }
   onSubmit(e){
       e.preventDefault();

       const user={
           name:this.state.name,
           password:this.state.password
       }
       console.log(user);
       this.props.loginUser(user)
   }
   render() {
        const {errors} =this.state;
        return (
            <div>
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <form onSubmit={this.onSubmit} >
                        <input type="text" id="login" className="fadeIn second"  placeholder="user_name" 
                            name="name"                                
                            value={this.state.name}
                            // onChange={this.onNameChange}
                            onChange={this.onChange}
                        />
                        <input type="text" id="password" className="fadeIn third" placeholder="password"
                          name="password"
                          value={this.state.password}
                        //    onChange={this.onPassChange}
                          onChange={this.onChange}
                        />
                        <input type="submit" className="fadeIn fourth" value="Log In"
                        //    onClick={this.onLogin}
                        />
                        </form>
                    </div>
                    </div>
            </div>
        )
    }
}

LoginB.proptype={
    loginUser:PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired
}

const mapStateToProps=state=>({
    auth:state.auth,
    errors:state.errors
})

export default connect(mapStateToProps,{loginUser})(LoginB);
