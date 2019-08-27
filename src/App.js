import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, withRouter } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import 'jquery/dist/jquery.slim';
import 'bootstrap/dist/css/bootstrap.css';
// import axios from './axios';
import axios from 'axios';


class App extends Component {

  state = {
    showBackdrop: false,
    isAuth: false,
    token: null,
    userId: null,
    authLoading: false,
    error: null
  };

  componentDidMount() {
    const token = localStorage.getItem('token');
    const expiryDate = localStorage.getItem('expiryDate');
    const cleanBacket = localStorage.getItem('cleanBucket');
    if (cleanBacket) {
      let remainingMillisecondsBucket =
        new Date(cleanBacket).getTime() - new Date().getTime();
      this.cleanBacket(remainingMillisecondsBucket);
    }
    if (!token || !expiryDate) {
      return;
    }
    if (new Date(expiryDate) <= new Date()) {
      this.logoutHandler();
      return;
    }
    const userId = localStorage.getItem('userId');
    const remainingMilliseconds =
      new Date(expiryDate).getTime() - new Date().getTime();
    console.log(localStorage.getItem('token'));
    console.log('djsakjdal')
    this.setState({ isAuth: true, token: token, userId: userId });
    this.setAutoLogout(remainingMilliseconds);

    // const remainingMilliseconds = 60 * 60 * 1000;
    // const expiryDateBacket = new Date(
    //   new Date().getTime() + remainingMilliseconds
    // );
    // localStorage.setItem('cleanBucket', expiryDateBacket.toISOString());
    // this.cleanBacket(remainingMilliseconds);
  }

  cleanBacket = milliseconds => {
    setTimeout(() => {
      localStorage.removeItem("backet");
    }, milliseconds)
  }

  logoutHandler = () => {
    this.setState({ isAuth: false, token: null });
    localStorage.removeItem('token');
    localStorage.removeItem('expiryDate');
    localStorage.removeItem('userId');
  };

  loginHandler = (event, authData) => {
    event.preventDefault();
    this.setState({ authLoading: true });
    // email: authData.email,
    // password: authData.password
    axios.post('http://localhost:8080/auth/login', {
      email: 'any@mail.ru',
      password: '12345'
    }).then(response => {
      console.log(response);
      if (response.status === 422) {
        throw new Error('Validation failed.');
      }
      if (response.status !== 200 && response.status !== 201) {
        console.log('Error!');
        throw new Error('Could not authenticate you!');
      }
      return response.data;
    }).then(resData => {
      console.log(resData);
      this.setState({
        isAuth: true,
        token: resData.token,
        authLoading: false,
        userId: resData.userId
      });
      localStorage.setItem('token', resData.token);
      localStorage.setItem('userId', resData.userId);
      const remainingMilliseconds = 60 * 60 * 1000;
      const expiryDate = new Date(
        new Date().getTime() + remainingMilliseconds
      );
      localStorage.setItem('expiryDate', expiryDate.toISOString());
      this.setAutoLogout(remainingMilliseconds);
      this.props.history.replace('/');
    })
      .catch(err => {
        console.log(err);
        this.setState({
          isAuth: false,
          authLoading: false,
          error: err
        });
      });

    // fetch('http://localhost:8080/auth/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     email: authData.email,
    //     password: authData.password
    //   })
    // })
    //   .then(res => {
    //     if (res.status === 422) {
    //       throw new Error('Validation failed.');
    //     }
    //     if (res.status !== 200 && res.status !== 201) {
    //       console.log('Error!');
    //       throw new Error('Could not authenticate you!');
    //     }
    //     return res.json();
    //   })
    //   .then(resData => {
    //     console.log(resData);
    //     this.setState({
    //       isAuth: true,
    //       token: resData.token,
    //       authLoading: false,
    //       userId: resData.userId
    //     });
    //     localStorage.setItem('token', resData.token);
    //     localStorage.setItem('userId', resData.userId);
    //     const remainingMilliseconds = 60 * 60 * 1000;
    //     const expiryDate = new Date(
    //       new Date().getTime() + remainingMilliseconds
    //     );
    //     localStorage.setItem('expiryDate', expiryDate.toISOString());
    //     this.setAutoLogout(remainingMilliseconds);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //     this.setState({
    //       isAuth: false,
    //       authLoading: false,
    //       error: err
    //     });
    //   });
  };

  signupHandler = (event, authData) => {
    event.preventDefault();
    this.setState({ authLoading: true });
    axios.put('http://localhost:8080/auth/signup', JSON.stringify({
      email: authData.signupForm.email.value,
      password: authData.signupForm.password.value,
      name: authData.signupForm.name.value
    })).then(res => {
      if (res.status === 422) {
        throw new Error(
          "Validation failed. Make sure the email address isn't used yet!"
        );
      }
      if (res.status !== 200 && res.status !== 201) {
        console.log('Error!');
        throw new Error('Creating a user failed!');
      }
      return res.json();
    })
      .then(resData => {
        console.log(resData);
        this.setState({ isAuth: false, authLoading: false });
        this.props.history.replace('/');
      })
      .catch(err => {
        console.log(err);
        this.setState({
          isAuth: false,
          authLoading: false,
          error: err
        });
      });
    // fetch('http://localhost:8080/auth/signup', {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     email: authData.signupForm.email.value,
    //     password: authData.signupForm.password.value,
    //     name: authData.signupForm.name.value
    //   })
    // })
    //   .then(res => {
    //     if (res.status === 422) {
    //       throw new Error(
    //         "Validation failed. Make sure the email address isn't used yet!"
    //       );
    //     }
    //     if (res.status !== 200 && res.status !== 201) {
    //       console.log('Error!');
    //       throw new Error('Creating a user failed!');
    //     }
    //     return res.json();
    //   })
    //   .then(resData => {
    //     console.log(resData);
    //     this.setState({ isAuth: false, authLoading: false });
    //     this.props.history.replace('/');
    //   })
    //   .catch(err => {
    //     console.log(err);
    //     this.setState({
    //       isAuth: false,
    //       authLoading: false,
    //       error: err
    //     });
    //   });
  };

  setAutoLogout = milliseconds => {
    setTimeout(() => {
      this.logoutHandler();
    }, milliseconds);
  };

  errorHandler = () => {
    this.setState({ error: null });
  };


  render() {
    return (
      <div className="App" style={{ height: "100vh" }}>
        {/* <BrowserRouter> */}
        {/* auth={this.state.isAuth} userId={this.state.userId} */}
        <IndexPage {...this.state} logout={this.logoutHandler.bind(this)} login={this.loginHandler.bind(this)}></IndexPage>
        {/* </BrowserRouter> */}
      </div>
    );
  }
}

export default withRouter(App);
