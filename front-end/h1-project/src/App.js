import React, {Suspense} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './containers/Home/Home';
import * as Paths from './shared/Paths';

const Employers = React.lazy(() => {
  return import('./containers/Employers/Employers');
});

const Locations = React.lazy(() => {
  return import('./containers/Locations/Locations');
});

let routes = 
<Switch>
  <Route path={Paths.employers} render={props => <Employers {...props} />} />
  <Route path={Paths.locations} render={props => <Locations {...props} />} />
  <Route path={Paths.home} exact component={Home} />
  <Redirect to ={Paths.home} />
</Switch>;

const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {routes}
    </Suspense>
  );
}

export default App;