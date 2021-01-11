import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/navbar';
import Products from './components/products';
import Posts from './components/posts';
import Home from './components/home';
import Dashboard from './components/admin/dashboard';
import ProductDetails from './components/productDetails';
import NotFound from './components/notFound';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className='content'>
          {/* Order routes from most specific to most generic */}
          <Switch>
            <Route path='/products/:id' component={ProductDetails} />
            <Route
              path='/products'
              render={(props) => <Products sortBy='newest' {...props} />}
            />
            <Route path='/posts/:year?/:month?' component={Posts} />
            <Route path='/posts' component={Posts} />
            <Route path='/admin' component={Dashboard} />
            <Route path='/not-found' component={NotFound} />
            <Route path='/' exact component={Home} />
            {/* Redirect wouldn't work without exact in the Home route */}
            <Redirect to='/not-found' />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
