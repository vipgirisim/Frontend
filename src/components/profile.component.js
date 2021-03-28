import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../services/auth.service";
import axios from 'axios';
import { Input } from "@material-ui/core";
import { Button } from "reactstrap";
import FileUploadScreen from "../../src/components/Admin/resimyukle"

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
          <FileUploadScreen/>
            <div> <strong>id  :</strong>{this.state.user.id}</div>
            <div> <strong>Adı Soyadı        :</strong></div><Input value={this.state.user.username}></Input>
            <div> <strong>Email :</strong>{this.state.user.email}</div>
            <div> <strong>Telefon          : </strong>{this.state.user.phone}</div>
            <div> <strong>Profil Yazısı :</strong></div><Input value={this.state.user.profilyazisi}/>
            <div> <strong>Online Durumu 7/24          : </strong></div><Input value={this.state.user.yediYirmidort}/>
            <div> <strong>İban           : </strong>{this.state.user.iban}</div>
            <div> <strong>Canlı Fal Fiyatı          :</strong> {this.state.user.canlifalFiyati}</div>
            <div> <strong>Rütbe          :</strong>{this.state.user.FalciRutbesi}</div>
            <div> <strong>Yetki          :</strong>{this.state.user.falciyetkisi}</div> 
            <div> <strong>  Canlı Fal Fiyatı         :</strong>{this.state.user.canlifalFiyati}</div> 
            <div> <strong>  Yazılı Fal Fiyatı         :</strong>{this.state.user.yazilifalFiyati}</div> 
            <div> <strong> Cüzdan / Kredi        :</strong>{this.state.user.cuzdan}</div> 
            <Button title="Guncelle">Güncelle</Button>

     
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

          <strong>Bildirimler </strong>

          </h3>
          <strong>Bildirimler</strong>{" "}
          
        </header>


        <header className="jumbotron">
          <h3>

          <strong>Gelen Yorumlar </strong>

          </h3>
          <strong>yorumlar</strong>{" "}
          
        </header>

        <header className="jumbotron">
          <h3>

          <strong>Gelen Fallar </strong>

          </h3>
          <strong>Fallar</strong>{" "}
          
        </header>

       
        
        
      
      </div>: null}
      </div>
    );
  }
}
//./node_modules/.bin/web-push generate-vapid-keys