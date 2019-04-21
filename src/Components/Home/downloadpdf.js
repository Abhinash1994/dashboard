import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import {ReactTitle} from 'react-meta-tags';
import Grid from '@material-ui/core/Grid';
import { Card} from 'react-bootstrap';
import axios from 'axios';

class DownloadPDF extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
        pdfSelected:'',
        issue_id:'',
        language_id:'',
        showdata:[],
        language:[],
        pdf:'',
        totalpages:''
    };

    this.handleIssue = this.handleIssue.bind(this);
    this.handleLanguage = this.handleLanguage.bind(this);
    this.handlePDFSelected = this.handlePDFSelected.bind(this);
    this.handleNoPages = this.handleNoPages.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleIssue(e){
    // console.log(e.target.value);
    this.setState({issue_id:e.target.value})
  };
  
  handleNoPages(e) {
    this.setState({totalpages: e.target.value})
  }
  handleLanguage(e) {
    // console.log(e.target.value);
     this.setState({language_id: e.target.value});
  }
 handlePDFSelected(event) {
    this.setState({pdfSelected: event.target.value});
  }

   componentDidMount(){
    this.fetchOptions()
    this.getLanguage()
  }

  fetchOptions(){
    axios.get('http://54.152.91.239/mission_dashboard_api.php?action=getallissue&mission_user_id=1')
    .then(
      (response) => {
        this.setState({
          isLoaded: true,
          showdata: response.data
        });
        console.log("pdf",this.state.showdata)
      },

      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
       }    
      )

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


  getDropList = () => {
  	const year = new Date().getFullYear();
    return (
    	Array.from( new Array(10), (v,i) =>
      	<option key={i} value={year+i}>{year+i}</option>
      )
    )
  };


 

  handleSubmit(e) {  
    e.preventDefault();
    console.log("issue",this.state.issue_id)
    console.log("lang",this.state.language_id)
     axios.post('http://54.152.91.239/mission_dashboard_api.php',{
        action:'downloadpdf',
        language_id:this.state.language_id,
        issue_id:this.state.issue_id,
        num_page:this.state.totalpages,
        mission_corner_user_id:1
     })
    .then(
      (response) => {
        this.setState({
          isLoaded: true,
          pdf: response.data
        });
       
        console.log("downloadpdf",this.state.pdf)

           setTimeout(() => {
              const response = {
                file: this.state.pdf,
              };
             
              window.open(response.file);
              
            }, 100);
      },

      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }    
    )
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
                <Grid item   md={2} lg={2}></Grid>
                <Grid className="formdetail" item xs={12} sm={12} md={8} lg={8}>
                <Card className="mainpage">
                   <h1 className="pdf">Download PDF </h1>
                 
                  <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                          <label for="exampleInputEmail1" style={{fontWeight:'700'}}>Year Selected :</label>
                          <select className="form-control">
                               {this.getDropList()}
                          </select>
                        </div>
                        <div className="form-group">
                          <label for="issues Selected" style={{fontWeight:'700'}}>Issues Selected :</label>
                          <select className="form-control" onChange={this.handleIssue} >
                          
                            {this.state.showdata.map(function(data, key){  return (
                              <option key={key} value={data.id}>{data.name}</option> )
                             })}
                          </select>
                        </div>

                        <div className="form-group">
                          <label for="languageSelected" style={{fontWeight:'700'}}>Language Selected :</label>
                          <select className="form-control" onChange={this.handleLanguage}>
                             
                            {this.state.language.map(function(data, key){  return (
                              <option key={key} value={data.id}>{data.language_name}</option> )
                             })}
                          </select>
                        </div>
                        
                        <div className="form-group">
                          <label for="pages" style={{fontWeight:'700'}}>Number of Pages :</label>
                          <select  className="form-control" value={this.state.totalpages} onChange={this.handleNoPages}>
                                <option value="92" active>92</option>
                                <option value="96">96</option>
                              
                            </select>
                        </div>

                        <div className="form-group">
                          <label for="exampleInputEmail1" style={{fontWeight:'700'}}>PDF Select :</label>
                          <select  className="form-control" value={this.state.pdfSelected} onChange={this.handlePDFSelected}>
                                <option value="High Resolution">High Resolution</option>
                                <option value="Low Resolution">Low Resolution</option>
                              
                            </select>
                        </div>
                        <div className="submit1">
                            
                            <button type="submit" class="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                            
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

export default DownloadPDF;
