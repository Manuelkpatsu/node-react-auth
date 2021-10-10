import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// Routing
import PrivateRoute from "./components/routing/PrivateRoute"
// Screens
import LoginScreen from './components/screens/login/LoginScreen'
import RegisterScreen from './components/screens/register/RegisterScreen'
import ForgotPasswordScreen from './components/screens/forgotPassword/ForgotPasswordScreen'
import ResetPasswordScreen from './components/screens/resetPassword/ResetPasswordScreen'
import PrivateScreen from './components/screens/private/PrivateScreen'

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <PrivateRoute exact path="/" component={PrivateScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route 
            path="/forgot-password" 
            component={ForgotPasswordScreen} 
          />
          <Route 
            path="/reset-password/:resetToken" 
            component={ResetPasswordScreen} 
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
