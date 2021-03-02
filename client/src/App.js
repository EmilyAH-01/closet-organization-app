import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Clothing from "./pages/Clothing";
import AddItem from "./pages/AddItem";
import MyOutfits from "./pages/MyOutfits";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

// import { createStore, combineReducers } from 'redux';
// import { Provider } from 'react-redux';
// import PhotosListReducer from './reducers/PhotosListReducer';
// import UploadedPhotosReducer from './reducers/UploadedPhotosReducer';
// import config from './config/config';
// import PhotoApp from "./components/PhotoApp";

// const rootReducer = combineReducers({
//     photos: PhotosListReducer,
//     uploadedPhotos: UploadedPhotosReducer,
// });

// const store = createStore(rootReducer);
// const {cloud_name, upload_preset} = config;

// render(
//     <Provider store={store}>
//         <PhotoApp cloudName={cloud_name} uploadPreset={upload_preset}/>
//     </Provider>,
//     //document.getElementById('root')
// );

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/closet"]}>
            <Clothing />
          </Route>
          <Route exact path="/additem">
            <AddItem>
              {/* <Provider store={store}>
                  <PhotoApp cloudName={cloud_name} uploadPreset={upload_preset}/>
              </Provider> */}
            </AddItem>
          </Route>
          <Route exact path="/myoutfits">
            <MyOutfits />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/closet/:id">
            <Detail />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
