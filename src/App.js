import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/css/fontawesome.min.css";
import "../src/assets/css/icomoon.css";
import "../src/style.css";
  
//import "../src/assets/scss/black-dashboard-react.scss";
//import "../src/assets/demo/demo.css";
//import "../src/assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

/**
 sz_image_001";
 sz_image_002";
 sz_image_003";
 sz_image_slider";
 sz_portfolio_001";
 sz_portfolio_002";
 sz_portfolio_003";
 sz_portfolio_slider";
 sz_post_001";
 sz_post_002";
 sz_post_003";
 sz_post_slider";
 sz_shop_001";
 sz_shop_002";
 sz_shop_003";
 sz_shop_slider";
 sz_team_001";
 sz_team_002";
 sz_team_003";
 sz_team_slider";
 sz_video_001";
 sz_video_002";
 sz_video_003";
 sz_video_slider";
 */

import "../src/lightbox/css/sz_video_002.css";

import "../src/lightbox/css/sz_video_003.css";


import AuthService from "./services/auth.service";

import Login from "../src/components/login.component";
import Register from "../src/components/register.component";
import Home from "../src/components/home.component";
import Profile from "../src/components/profile.component";
import BoardUser from "../src/components/board-user.component";
import BoardModerator from "../src/components/board-moderator.component";
import BoardAdmin from "../src/components/board-admin.component";
import BoardUnlu from "../src/components/board-unlu.component";


class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <div>
         <nav className="navbar navbar-expand navbar-dark bg-dark">
          {/* <Link to={"/"} className="navbar-brand">
            VipFal
          </Link> */}
          <div className="navbar-nav mr-auto">
         
          {/* <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Anasayfa  
              </Link>
            </li>   

            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Alanı
                </Link>
              </li>
            )}
*/}
            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Alanı
                </Link>
              </li>
            )}
 {/*  {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  Kullanıcı
                </Link>
              </li>
            )}


                  {currentUser && (
              <li className="nav-item">
                <Link to={"/unlu"} className="nav-link">
                  Kullanıcı
                </Link>
              </li>
            )}   */}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  çıkış
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
           {/*  <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Giriş
                </Link>
              </li>  

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Kayıt
                </Link>
              </li> */}
            </div>
          )}
        </nav> 







        <div className="container mt-3">
          <Switch>
                       <Route exact path={["/", "/home"]} component={Login} />
          <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
            <Route path="/unlu" component={BoardUnlu} />

          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
