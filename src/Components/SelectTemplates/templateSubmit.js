import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import { Link } from "react-router-dom";

function getModalStyle() {
  const top = 50;
  const left = 53;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

class Templatesubmit extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (  
      <div>

          <Grid container spacing={16} style={{padding: '20px'}}>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    
                     <Button onClick={this.handleOpen}>
                         <img src="https://res.cloudinary.com/falconworld/image/upload/v1555006775/template.png" alt="template" />
                     </Button>
                              
                </Grid>

                <Grid item xs={12} sm={12} md={3} lg={3}>
                    
                    <Button onClick={this.handleOpen}>
                        <img src="https://res.cloudinary.com/falconworld/image/upload/v1555006775/template.png" alt="template" />
                    </Button>
                             
               </Grid>

               <Grid item xs={12} sm={12} md={3} lg={3}>
                    
                    <Button onClick={this.handleOpen}>
                        <img src="https://res.cloudinary.com/falconworld/image/upload/v1555006775/template.png" alt="template" />
                    </Button>
                             
               </Grid>

               <Grid item xs={12} sm={12} md={3} lg={3}>
                    
                    <Button onClick={this.handleOpen}>
                        <img src="https://res.cloudinary.com/falconworld/image/upload/v1555006775/template.png" alt="template" />
                    </Button>
                             
               </Grid>
          </Grid>

        
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <div className="banner">
                <img src="https://res.cloudinary.com/falconworld/image/upload/v1555006775/template.png" alt="template"/>
              </div>
              <div className="submit-pop"> 
                <Link to="/edit-submit"><button type="button" class="btn btn-primary" >Apply </button>
                </Link>
              </div>
            
          </div>
        </Modal>
      </div>
    );
  }
}

Templatesubmit.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(Templatesubmit);
