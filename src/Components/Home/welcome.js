import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import {ReactTitle} from 'react-meta-tags';
import Grid from '@material-ui/core/Grid';
import { Card} from 'react-bootstrap';
import axios from 'axios';

class Welcomepage extends Component {


  constructor(props) {
    super(props);
    this.state={
      showdata: [],
      events:{},
      intro_title:'',
      intro_description:'',
      showingAlert: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

   handleClickShowAlert() {
     this.setState({
      showingAlert: true
    });

    setTimeout(() => {
      this.setState({
        showingAlert: false
      });
    }, 2000);
  }


  componentDidMount() {
 
    var self=this;
   
    axios.get("http://54.152.91.239/mission_dashboard_api.php?action=getmissiondetail&mission_user_id=1")
      .then(
        (response) => {
          self.setState({
            showdata: response.data
          });
          console.log(response)
          console.log("hello",this.state.showdata)
        },
  
        (error) => {
          self.setState({
            isLoaded: true,
            error
          });
        }
        
      )
  }

  handleChange(e) {
   this.setState({showdata:{intro_title:e.target.value,intro_description:this.state.showdata.intro_description}})
  }
  handleDescription(e) {
    this.setState({showdata:{intro_title:this.state.showdata.intro_title,intro_description:e.target.value}})
  }
  handleSubmit(e) {  
    e.preventDefault();
      axios.post('http://54.152.91.239/mission_dashboard_api.php',{
              action:'addmissionintro',
              intro_title:this.state.showdata.intro_title,
              intro_description:this.state.showdata.intro_description,
              mission_user_id:1

        }).then(function (response) {
            console.log("post",response)

            window.location='/welcome';
            
          })
         .catch(function (error) {
            console.log("error");
             alert('not Submitted, error');
          });
     
  }
 
  render() { 
    
    return (
        <React.Fragment>
           <ReactTitle title="Home page"/>
         <MetaTags>
            <meta name="description" content="Some description." />
            <meta property="og:title" content="MyApp" />
           </MetaTags>

          
              <Grid container>
                <Grid item md={2} lg={2}></Grid>
                <Grid className="formdetail" item xs={12} sm={12} md={8} lg={8}>
                  <Card className="mainpage">
                  <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                          <label for="exampleInputEmail1" style={{fontWeight:'700'}} >Title :</label>
                          <input type="text" className="form-control" placeholder="title" value={this.state.showdata.intro_title} onChange={this.handleChange}/>
                          
                        </div>
                        <div class="form-group">
                          <label for="exampleInputPassword1" style={{fontWeight:'700'}}>Description :</label>
                          <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" value={this.state.showdata.intro_description} onChange={this.handleDescription}></textarea>
                        </div>
                        
                        <button type="submit" class="btn btn-primary submit1"  onClick={this.handleClickShowAlert.bind(this)}>Submit</button>
                        <div className={`alert alert-success ${this.state.showingAlert ? 'alert-shown' : 'alert-hidden'}`}>
                              <strong>Successfull your post!</strong> 
                         </div>

                    </form>
                    </Card>
                </Grid>
                <Grid item lg={2}></Grid>
            </Grid>
      
        </React.Fragment>
    );
  }
}

export default Welcomepage;
