import React, { useEffect, Suspense } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import { Route, withRouter, Redirect } from 'react-router-dom';
import Logout from './containers/Auth/Logout/Logout';
import { connect } from 'react-redux';
import * as actions from './Store/actions/index';


const Checkout = React.lazy(() => {
  return import('./containers/Checkout/Checkout');
})

const Orders = React.lazy(() => {
  return import('./containers/Orders/Orders');
})

const Auth = React.lazy(() => {
  return import('./containers/Auth/Auth');
})

const App = props => {
  const { onTryAutoSignUp } = props;

  useEffect(() => {
    onTryAutoSignUp();
  }, [onTryAutoSignUp])



  let routes = (
    <>
      <Route path="/auth" render={(props) => <Auth {...props} />} />
      <Route path="/" exact component={BurgerBuilder} />
      <Redirect to="/" />
    </>
  );

  if (props.isAuthenticated) {
    routes = (
      <>
        <Route path="/logout" component={Logout} />
        <Route path="/checkout" render={(props) => <Checkout {...props} /> } />
        <Route path="/orders" render={(props) =>  <Orders {...props} /> } />
        <Route path="/auth" render={(props) =>  <Auth {...props} /> } />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
      </>
    )
  }

  return (
    <div>
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
        {/* <DemoComponent /> */}
      </Layout>
    </div>
  );

}

// const DemoComponent = () => {
//   useEffect(() => {
//     console.log('MOUNTED DEMO COMPONENT');
//   }, [])

//   return (
//     <>
//     </>
//   )
// }

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
