import React from "react";
export default class User extends React.Component{
    render() {
        return(
            <div>
                <p>NAME  : {this.props.username}</p>
                <p>AGE  : {this.props.age}</p>
            </div>
        )
    }

}
