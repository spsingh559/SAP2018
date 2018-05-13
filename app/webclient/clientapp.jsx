import React from 'react';
import ReactDOM from 'react-dom';
// import {Router, Route, hashHistory} from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// <Route path="/dashboard" component={Dashboard} />
		// <Route path="/settings" component={Settings} />
		// <Route path="/analytics" component={Analytic} />
		// <IndexRoute component={MainApp} />

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Home from './components/Home.jsx';
import ParentComponent from './components/UILayout/Parent.jsx';
import Login from './components/Login.jsx';
import Audit from './components/Audit/Audit';
import PlatformActivity from './components/PlatformActivity/PlatformActivity';
import OpenRequest from './components/OpenRequest/OpenRequest';
import Borrower from './components/Borrower/Borrower';
import CreateRequest from './components/Borrower/CreateRequest';

import {Route, Router, IndexRoute, hashHistory} from 'react-router';
ReactDOM.render(
	<MuiThemeProvider>
	<Router history ={hashHistory} >
	<Route path="/login" component={Login} />
	
	
	
	
	<Route path="/" component={ParentComponent}>
	<Route path="/audit" component={Audit} />
	<Route path="/platformActivity" component={PlatformActivity} />
	<Route path="/openRequest" component={OpenRequest} />
	<Route path="/borrower" component={Borrower} />
	<Route path="/createRequest" component={CreateRequest} />
	{/* <Route path="/scrumReport" component={ScrumReport} />
	 */}

		<IndexRoute component={Home} />
		</Route>
	</Router>
	</MuiThemeProvider>,
 document.getElementById('mountapp'));