import React from "react";
import Button from "@material-ui/core/Button";
export default class Main extends React.Component{
    render() {
        return(
            <div>
                <Button variant="contained" color="primary" onClick={this.props.changeUsername}>
                    Primary
                </Button>
            </div>
        )
    }
}
