import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import {ReactTitle} from 'react-meta-tags';
import Grid from '@material-ui/core/Grid';
import { Card} from 'react-bootstrap';
import axios from 'axios';

class EditTemplates extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title: '',
        selectedFile:null,
        description:'',
        language:[],
        imageURL:null,
        passdata:[],
        languageSelected:'',
        showdata: [],

        showingAlert: false,
        issue_id:'',
        language_id:'',
    };
    this.handleIssue = this.handleIssue.bind(this);
    this.handleLanguage = this.handleLanguage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
  
    this.handleSubmit = this.handleSubmit.bind(this);
    
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
        console.log(response)
        
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
        console.log("data",this.state.language)
      },

      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }    
    )

  };
  // handleLanguage(e) {
  //   this.setState({languageSelected: e.target.value})
  // }
  // getLanguage = () => {
  // 	const language = [ 'English','French','ARABIC'];
  //   return (
  //   	Array.from( new Array(3), (v,i) =>
  //     	<option key={i} value={language[i]}>{language[i]}</option>
  //     )
  //   );
  // };


  handleChange(event) {
    this.setState({title: event.target.value});
  }
  handleIssue(e){
    // console.log(e.target.value);
    this.setState({issue_id:e.target.value})
  };
  handleLanguage(e) {
    // console.log(e.target.value);
     this.setState({language_id: e.target.value});
  }
  fileSelectedHandler = e =>{
    e.preventDefault();
console.log("cloudinary funciton")
var myWidget = window.cloudinary.createUploadWidget({
  cloudName: 'dyqcevdpm', 
  uploadPreset: 'xuktgij2'}, (error, result) => { 
    if (!error && result && result.event === "success") { 
      console.log('Done! Here is the image info: ', result.info.url); 
      this.setState({imageURL:result.info.url})
    }
  })
  myWidget.open();

  } 
  handleDescription(event) {
    this.setState({description: event.target.value});
  }
  handleSubmit(e) {  
    e.preventDefault();
    console.log( this.state.imageURL);
    console.log( this.state.description);
    console.log("issue",this.state.issue_id)
    console.log("lang",this.state.language_id)
    var htmlString='<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Page Title</title></head><body> <div class="container" style=" text-align: -webkit-center;  position: absolute; "> <h1 style=" font-family: Times,serif; line-height:1.2; font-size: 120px; color: rgb(0,0,0); font-weight: normal; font-style: normal; text-decoration: none; padding-top: 15px; ">'+this.state.title+'</h1> <div class="image"><img src="'+this.state.imageURL+'"/></div> <div class="text-container"> <div class="block1" style="display:inline-block;width: 540px;padding: 5px;"><div style="text-align: left;font-size: 22px;font-family: none;letter-spacing: 0.5px;">'+this.state.description.substring(0, 570)+'</div></div> <div class="block1" style="display:inline-block;width: 430px;padding: 5px;"><div style="text-align: left;font-size: 22px;font-family: none;letter-spacing: 0.5px;">'+this.state.description.substring(570,this.state.description.length) +'</div></div></div></div></body></html> ';
    
    console.log(htmlString,htmlString)
    // axios.post(`http://13.233.111.57/createPDF`, {htmltext:htmlString })
    // .then(res => {
    //   console.log(res);
    //   console.log(res.data);
    //   alert("Post Uploaded Succesfully")
    //     let previousData= JSON.parse(localStorage.getItem('POST_DATA'))
    //     previousData.push({
    //         title : this.state.title,
    //         body : this.state.description,
    //         image : this.state.imageURL
    //     })
    //       localStorage.setItem('POST_DATA', JSON.stringify(previousData));

    //   window.location='/';
    // })
      this.setState({
         showingAlert: true
      });

    setTimeout(() => {
      this.setState({
        showingAlert: false
      });
    }, 2000);

     axios.post('http://54.152.91.239/createPDF/index.php?mission_user_id=1',{
            htmltext:htmlString,
            title : this.state.title,
            
            language_id:this.state.language_id,
            issue_id:this.state.issue_id,
            description : this.state.description,
            image : this.state.imageURL

     })
    .then(
      (response) => {
         
        this.setState({
          isLoaded: true,
          passdata: response.data
        });
        console.log("submit",this.state.passdata)
      },

      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
        window.location='/';
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

          
              <Grid container>
                <Grid item md={2} lg={2}></Grid>
                <Grid className="formdetail" item xs={12} sm={12} md={8} lg={8}>
                  <Card className="mainpage">
                  <div className="banner">
                    <img src={this.state.imageURL} alt="banners"/>
                  </div>
                  <form >
                        <div className="form-group">
                          <label for="exampleInputEmail1" style={{fontWeight:'700'}} >Title :</label>
                          <input type="text" className="form-control" placeholder="title" value={this.state.title} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                          <label for="exampleInputEmail1" style={{fontWeight:'700'}} >Add Images :</label>
                          <button onClick={this.fileSelectedHandler} >Upload File </button>
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

                        <div class="form-group">
                          <label for="exampleInputPassword1" style={{fontWeight:'700'}}>Description :</label>
                          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={this.state.description} onChange={this.handleDescription}></textarea>
                        </div>
                        
                        <button type="submit" onClick={this.handleSubmit}  class="btn btn-primary submit1">Submit</button>
                        <div className={`alert alert-success ${this.state.showingAlert ? 'alert-shown' : 'alert-hidden'}`}>
                              <strong>Successfull Post Upload!</strong> 
                         </div>
                    </form>
                    </Card>
                </Grid>
                
            </Grid>
      
        </React.Fragment>
    );
  }
}

export default EditTemplates;
