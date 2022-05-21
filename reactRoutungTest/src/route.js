import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Stories from './components/Stories';
const route = () => {
  return (
    <Switch>
      <Route exact path='/stories' component={Stories} />
      <Route exact path='/' component={Home} />
    </Switch>
  )
}
export default route;
