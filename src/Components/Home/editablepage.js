import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import {ReactTitle} from 'react-meta-tags';
import Grid from '@material-ui/core/Grid';
import { Card} from 'react-bootstrap';
import { Link } from "react-router-dom";
class EditablePage extends Component {
    
    constructor(){
        super()
        this.handleChange = this.handleChange.bind(this)
      }

      handleChange(event){
        console.log(event.target.value)
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
                <Grid item  md={1} lg={2}></Grid>
                <Grid className="formdetail" item xs={12} sm={12} md={10} lg={8}>
                    <Card className="mainpage">
                       <h2 className="welcome">Mission Introduction </h2>
                        <p>
                        The Mission Section of the India Perspectives website lets you upload content about your mission or embassy. The section has a provision to add content and upload related images to the website. It also lets you edit the content if required. Please note that this will be done every two months and the task needs to be completed by the 20th of the previous month. For example, for the June-July 2019 edition of India Perspectives, the content in this section has to be ready by the 20th of May. 
                        </p>
                        <div className="submit1">
                        
                          <Link to="/welcome">
                             <button type="submit" class="btn btn-primary submit1">Edit Context</button>
                          </Link>
                        </div>
                        
                    </Card>

                    <Card className="downloadpdf">
                       <h2 className="pdfheading">Download PDF </h2>
                        <p>
                        The Download PDF Section of the India Perspectives website lets you download High Resolution and Low Resolution PDF Files of the India Perspectives Magazine. Each new edition will be uploaded as PDF on the website every two months, which can be easily downloaded by website visitors in both High and low resolution. 
                        </p>
                        <div className="submit1">
                            <Link to="/download-pdf">
                             <button type="submit" class="btn btn-primary submit1">Go To Download</button>
                             </Link>
                        </div>
                    </Card>

                    <Card className="downloadpdf">
                       <h2 className="pdfheading">Submit Post </h2>
                        <p>
                        The Submit Post Section of the India Perspectives website lets you create content, edit the content and submit the same for getting published on the website. The section will allow you to submit latest information about your mission or embassy in an easy and user friendly manner.
                        </p>
                        <div className="submit1">
                         <Link to="/post-submit">
                             <button type="submit" class="btn btn-primary submit1">Submit post</button>
                          </Link>   
                        </div>
                    </Card>
                </Grid>
                <Grid item md={1} lg={2}></Grid>
                
            </Grid>
         
        </React.Fragment>
    );
  }
}

export default EditablePage;
