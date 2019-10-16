import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import Button from './component/common/button';
// import Input from './component/common/input';
// import Checkbox from './component/common/checkbox';
// import Dropdown from './component/common/dropdown';
// import Label from './component/common/Label';
import RestaurantListings from './component/RestaurantListing';

function App() {
    return(
        <div className="container">
            <div className="row m-5">
                <div className="col">
                    <Router>
                        <Switch>
                            <Route path="/">
                                <div className="row">
                                    <div className="col">
                                        <RestaurantListings />
                                    </div>
                                </div>
                            </Route>
                        </Switch>
                    </Router>
                </div>
            </div>
        </div>
	);
}

export default App;
