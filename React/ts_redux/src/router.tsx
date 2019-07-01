import * as React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import { App } from './app';
// import { About, }
import { Provider } from 'react-redux';
import { store } from './store';
import { About, MembersPageContainer }  from './components';


export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="container-fluid">
          <Route component={App} />
          <Switch>
            <Route path="/members" component={MembersPageContainer} />
            <Route exact path="/" component={About} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}
