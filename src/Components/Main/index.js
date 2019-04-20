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

import Sidebar from '../Sidebar'
localStorage.setItem('missionIntroduction',JSON.stringify({"title":"Consulate General of India in Melbourne ","description":"Welcome to the official website of the Consulate General of India in Melbourne. The Consulate General of India was established in Melbourne on 01 September 2006 to extend consular services and to augment cultural and economic relations between India and the States of Victoria and Tasmania. Before September 2006, the work was being done by an Honorary Consul General. The Consulate was initially located at 15 Munro Street Coburg. It was later shifted to the present location: 344 St Kilda Road, Melbourne, in 2010. The Head of Post in Melbourne is Ms. Manika Jain."}));
localStorage.setItem('newItem',{});
localStorage.setItem('templates', {});


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
