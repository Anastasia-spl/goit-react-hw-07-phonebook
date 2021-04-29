import { Switch, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Suspense } from 'react';
import { contactsSelectors } from './redux/contacts';
import { connect } from 'react-redux';
import Loader from './components/Loader';

const ContactsPage = lazy(() => import('./pages/Contacts' /* webpackChunkName: "contacts-page" */));
const Page404 = lazy(() => import('./pages/Page404' /* webpackChunkName: "404-page" */))

function App(isLoading) {
  return (
    <div className="App">
     {isLoading && <Loader/>}
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path={'/goit-react-hw-07-phonebook/contacts'} component={ContactsPage} />
          <Route component={Page404} />
        </Switch>
      </Suspense>
    </div>
  );
}

const mapStateToProps = state => ({
 isLoading: contactsSelectors.getLoader(state),
})

export default connect(mapStateToProps)(App) ;
