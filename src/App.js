import { Switch, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Suspense } from 'react';
import Loader from './components/Loader';

const ContactsPage = lazy(() => import('./pages/Contacts' /* webpackChunkName: "contacts-page" */));
const Page404 = lazy(() => import('./pages/Page404' /* webpackChunkName: "404-page" */))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader type="Circles" color="#00BFFF" height={80} width={80}/>}>
        <Switch>
          <Route path={'/goit-react-hw-07-phonebook/contacts'} component={ContactsPage} />
          <Route component={Page404} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
