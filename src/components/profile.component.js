import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../services/auth.service";
import axios from 'axios';
export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      phone: '',
       iban: '',
      currentUser: { username: "" }
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();
    this.getBlogPost( currentUser.id);
    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })
  }

  getBlogPost = (id) => {
    axios.get('http://localhost:8080/api/usergetir/'+id)
      .then((response) => {
        debugger;
        const data = response.data;
        this.setState({ user: data });
        console.log('Data has been received!!' + data);
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    const { currentUser } = this.state;

    return (
      <div className="container">
        {(this.state.userReady) ?
        <div>
        <header className="jumbotron">
          <h3>
            <strong>{currentUser.username}</strong> Hesap
          </h3>
        </header>
        <p>
          <strong>Token:</strong>{" "}
          {currentUser.accessToken.substring(0, 20)} ...{" "}
          {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
        </p>
        {this.state.user!=null?<div>
            <div> <strong>id  :</strong>{this.state.user.id}</div>
            <div> <strong>Adı Soyadı        :</strong>{this.state.user.username}</div>
            <div> <strong>Profil Yazısı :</strong>{this.state.user.profilyazisi}</div>
            <div> <strong>7/24          :</strong>{this.state.user.yediYirmidort}</div>
            <div> <strong>Canlı Fal Fiyatı          :</strong>{this.state.user.canlifalFiyati}</div>


           </div>: <div></div>}
        <strong>Yetkilendirme:</strong>
        {/* baktığı falları ve daha önce bakılan fallarla ilgili üyelerin
        yaptığı yorumları görebilir (üye yorumları ADMİN onayından geçmeli.) */}
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>
        <header className="jumbotron">
          <h3>

          <strong>Gelen Yorumlar </strong>

          </h3>
          <strong>yorumlar</strong>{" "}
          
        </header>
        
        
      
      </div>: null}
      </div>
    );
  }
}
