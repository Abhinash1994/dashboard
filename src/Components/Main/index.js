import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Signin from '../Signin';
import DownloadPDF from '../Home/downloadpdf';
import Welcomepage from '../Home/welcome';
import SubmitPosts from '../SelectTemplates/index';
import EditTemplates from '../SelectTemplates/editTemplates';
import EditArabic from '../SelectTemplates/Arabic/editArabicTemplates';
import Forget from '../Forget';
import EditablePage from '../Home/editablepage';
import Arabic from '../SelectTemplates/Arabic';
import Error404 from '../404';


class Main extends Component {
  render() {
    return (
        <main>
          <Switch>
         
         
          <Route exact path='/sign-in' component={Signin}/>
          <Route exact path='/' component={Home}/>
          <Route exact path='/download-pdf' component={DownloadPDF}/>
          <Route exact path='/forget' component={Forget}/>
          <Route exact path='/edit-dashboard' component={EditablePage}/>
          <Route exact path='/welcome' component={Welcomepage}/>
          <Route exact path='/post-submit/en' component={SubmitPosts}/>
          <Route exact path='/edit-submit' component={EditTemplates}/>
          <Route exact path='/edit-submit-arabic' component={EditArabic}/>
          <Route exact path='/post-submit/ar' component={Arabic} />
          <Route component={Error404} />
          
          </Switch>
        </main>
    );
  }
}

export default Main;
