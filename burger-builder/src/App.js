import React from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import { Route, withRouter, Redirect } from 'react-router-dom';
import Logout from './containers/Auth/Logout/Logout';
import { connect } from 'react-redux';
import * as actions from './Store/actions/index';
import asyncComponent from './hoc/asyncComponents/asyncComponents';


const asyncCheckout = asyncComponent(() => {
  return import('./containers/Checkout/Checkout');
})

const asyncOrders = asyncComponent(() => {
  return import('./containers/Orders/Orders');
})

const asyncAuth = asyncComponent(() => {
  return import('./containers/Auth/Auth');
})

class App extends React.Component {
  componentDidMount() {
    this.props.onTryAutoSignUp();
  }

  render() {

    let routes = (
      <>
        <Route path="/auth" component={asyncAuth} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
      </>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <>
          <Route path="/logout" component={Logout} />
          <Route path="/checkout" component={asyncCheckout} />
          <Route path="/orders" component={asyncOrders} />
          <Route path="/auth" component={asyncAuth} />
          <Route path="/" exact component={BurgerBuilder} />
          <Redirect to="/" />
        </>
      )
    }

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

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
