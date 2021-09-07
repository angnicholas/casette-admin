import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {useHistory, withRouter, useLocation} from 'react-router-dom';

const BACKEND_URL = 'https://real-blog-backend.herokuapp.com/';

//import { useHistory } from 'react-router-dom';

class AlertDialog extends React.Component {

  //const history = useHistory();

  deleteid;  

  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleAgree = () => {
    //console.log(this.props.deleteID);
    console.log("I agree!");
    
    const token = localStorage.getItem("token");
    const bearer = `Bearer ${token}`;

    try {
      const req = fetch(

        BACKEND_URL + 
        `posts/${this.props.deleteid}`,

        {
          method: "delete",
          headers: {
            Authorization: bearer,
            "Content-Type": "application/json",
          },
        }
      ).then(()=>{
        
        this.props.history.push("/posts");
        window.location.reload(); //For when I am on my own page
      
      }).catch((err) => {
        console.log(err);

      });

    } catch (err) {
      console.error(err);
    }
    
    this.handleClose();

  };

  handleDisagree = () => {
    console.log("I will not delete. I will not do anything. Save yourself.");
    this.handleClose();
  };

  render() {
    return (
      <div deleteid={this.props.deleteid} style={{
        display: "flex",
        justifyContent: "center"
      }}>

        {/* Button to trigger the opening of the dialog */}
        <Button onClick={this.handleClickOpen}>Delete</Button>
        {/* Dialog that is displayed if the state open is true */}
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Successful Alert"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Do you really want to delete this post?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleDisagree} color="primary">
              No
            </Button>
            <Button onClick={this.handleAgree} color="primary" autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withRouter(AlertDialog);
