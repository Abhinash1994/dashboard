import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import {ReactTitle} from 'react-meta-tags';
import Grid from '@material-ui/core/Grid';
import { Card} from 'react-bootstrap';
import Paper from '@material-ui/core/Paper';
import Moment from 'react-moment';

import axios from 'axios';
class Home extends Component {
    
    constructor(){
        super()
        this.state = {showdata:[]}
        this.handleChange = this.handleChange.bind(this)
      }

      handleChange(event){
        console.log(event.target.value)
      }

    componentWillMount(){
       axios.post('http://54.152.91.239/mission_dashboard_api.php?action=getdata-dashboard&mission_user_id=1')
               .then(res => {
                this.setState({
                  showdata: res.data,
                });
                console.log(res)
                console.log("final data",this.state.showdata)
              })
        }

  render() { 
    return (
        
        <React.Fragment>
           <ReactTitle title="Home page"/>
         <MetaTags>
            <meta name="description" content="Some description." />
            <meta property="og:title" content="MyApp" />
           </MetaTags>

           <Card className="homecard">
                <img src="https://res.cloudinary.com/falconworld/image/upload/v1554809895/dashbg.jpg" alt="dashbg img" style={{height:'340px'}}/>
           </Card>
            <Grid container>
                <Grid item  md={1} lg={1}></Grid>
                <Grid item  md={6} lg={10} className="shgys">
                    <Grid container spacing={24} >
                        <Grid item xs={12}  lg={4}>
                            <Paper>
                                <Grid container >
                                    <Grid item xs={6} lg={4} className="dateicon">
                                    <i className="material-icons daterange">
                                        date_range
                                    </i>
                                    </Grid>
                                    <Grid item xs={6} lg={8} className="deadline">
                                        <h5>Deadline</h5>
                                        <h4><Moment format="D MMM YYYY" withTitle>{this.state.showdata.deadline_date}</Moment></h4>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <Paper>
                                <Grid container>
                                    <Grid item xs={6} lg={4} className="dateicon">
                                    <i className="material-icons daterange">
                                        book
                                    </i>
                                    </Grid>
                                    <Grid item xs={6} lg={8} className="deadline">
                                        <h5>Pages submitted</h5>
                                        <h4>{this.state.showdata.numpost}</h4>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}  lg={4}>
                        <Paper>
                             <Grid container>
                                    <Grid item xs={6} lg={4} className="dateicon">
                                    <i className="material-icons daterange">
                                     person_pin
                                    </i>
                                    </Grid>
                                    <Grid item xs={6} lg={8} className="deadline">
                                        <h5>Total visitors</h5>
                                        <h4>0</h4>
                                    </Grid>
                                </Grid>
                        </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item  md={1} lg={1}></Grid>
            </Grid>
        </React.Fragment>
    );
  }
}

export default Home;
