import React from 'react';
import {connect} from "react-redux";
import User from "../components/User";
import Main from "../components/Main";
import {setAge, setName} from "../actions/userActions";

class App extends React.Component {
    render() {
        return (
            <div>
                <Main changeUsername={()=>{
                    this.props.setName("ANNA");
                    this.props.setAge(25);
                }}> </Main>
                <User username={this.props.user.name} age = {this.props.user.age}> </User>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        math: state.math
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setName(name));
        },
        setAge:(age)=>{
          dispatch(setAge(age));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

/*
function LoginScreen() {
    return (
        <div style={{
            display: "flex",
            flex: 4,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "0px"
        }}>
            {/!*
        Here the company logo.
    *!/}
            <form style={{margin: "10px"}}>
                {/!*
            Here the header of the login screen.
        *!/}
                <h3 style={{
                    textAlign: "center",
                    margin: "10px"
                }}> SİSTEM SAYACI : <span id="value">0</span></h3>
                {/!*
            Here we take e-mail address of the user as a input.
        *!/}
                <div className="form-group">
                    <input type="email" id="emailID" className="form-control" placeholder="E-Posta"/>
                </div>
                {/!*
          Here we take password of the user as a input.
        *!/}
                <div className="form-group">
                    <input type="password" id="passwordID" className="form-control" placeholder="Şifre"/>
                </div>
                <Link to="/PersonelScreens/PersonelNavigation">
                    <button type="submit" id="click" className="btn btn-primary btn-block">Giriş</button>
                </Link>

            </form>
        </div>)
}*/
