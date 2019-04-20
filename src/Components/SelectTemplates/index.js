import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import {ReactTitle} from 'react-meta-tags';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Blockpost from '../SelectTemplates/postHeader'
import Templatesubmit from '../SelectTemplates/templateSubmit'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import axios from 'axios';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
 
});
class SubmitPosts extends Component {
  constructor(props) {
    super(props);
    this.mergePDF = this.mergePDF.bind(this);
    this.state = {
      showdata:[],
      language_id:'',
      language:[]
    }
    this.handleDelete = this.handleDelete.bind(this);
     this.handleLanguage = this.handleLanguage.bind(this);
  }

   handleLanguage(e) {
    // console.log(e.target.value);
     this.setState({language_id: e.target.value});
  }

    handleDelete(id){    
      console.log(id);
       axios.post('http://54.152.91.239/mission_dashboard_api.php?action=deletearticleinfo',{
          action : 'deletearticleinfo',
          article_id:id,
       })
               .then(res => {
                alert("successfully deleted")
                console.log(res)
                window.location="/post-submit/en";
                console.log("delete data",this.state.showdata)
              })

        }

    componentWillMount(){
      this.getLanguage();
       axios.post('http://54.152.91.239/mission_dashboard_api.php?action=getArticle&mission_user_id=1')
               .then(res => {
                this.setState({
                  showdata: res.data,
                });
                console.log("final data",this.state.showdata)
              })
        }
     
  getLanguage = () => {
     axios.get('http://54.152.91.239/mission_dashboard_api.php?action=get-all-language')
    .then(
      (response) => {
        this.setState({
          isLoaded: true,
          language: response.data
        });
        console.log("Language",this.state.language)
      },

      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }    
    )

  };   

  mergePDF=function(){
    console.log("merge pdfs");
    axios.post('http://54.152.91.239/fpdi_working/returnpdf.php',{
      issue_id:1,
      language_id:1,
      mission_user_id:1
    })
    .then(function (response) {
      // handle success
      console.log("success",response);
      alert("PDFs merged successfully");
      
    })
  }

  render() { 
    const { classes } = this.props;
    return (
        <React.Fragment>
           <ReactTitle title="Home page"/>
         <MetaTags>
            <meta name="description" content="Some description." />
            <meta property="og:title" content="MyApp" />
           </MetaTags>

          <Grid container spacing={16}>
          <Grid item xs={12} lg={12} className="text-webkitcenter">
                    <div className="form-group" style={{width:'50%', padding: '15px'}}>
                          <label for="languageSelected" style={{fontWeight:'700'}}>Language Selected :</label>
                          <DropdownButton id="dropdown-basic-button" title="Select Language">
                             <Dropdown.Item ><Link to={'/post-submit/en'}>English</Link></Dropdown.Item>
                             <Dropdown.Item ><Link to={'/post-submit/ar'}>Arabic</Link></Dropdown.Item>
                          </DropdownButton>
                        </div>
                    </Grid>
          </Grid>

         <Grid container spacing={16} style={{marginTop:'22px'}}>
                    

         {this.state.showdata.map((p, i) => 
                <Grid item xs={3} >
                  <Paper className={classes.paper} style={{marginLeft:'22px'}}>
                      <Blockpost {...p} key={i} id={p.id}  handleDelete={this.handleDelete}/>
                  </Paper>

              </Grid>
                      
           )}
         </Grid>
          <div className="pagecopy">
            {
               this.state.showdata.length === 4 ? 
              (<button className="btn btn-primary btnmore " onClick={this.mergePDF}>Make 96 Page Copy</button>) : null
            }
          </div> 
          {
               this.state.showdata.length < 4 ? 
              (<Grid className="tmpltslct" item xs={12} sm={12} md={12} lg={12}>
                  <h2>Select Templates</h2>
                  <Templatesubmit/>
            </Grid>) : null
            }
            
     
        </React.Fragment>
    );
  }
}

SubmitPosts.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SubmitPosts);
