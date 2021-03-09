import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import AuthService from "../../services/user.service";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};
/*
FalciRutbesi
KahveFaliSayisi
adminFalciyaYorumlari
baktigiFalAdi
baktigiFalUcreti
baktigiFalid
canlifalFiyati
cuzdan
falbilgisi
iban
indirimkodu
kazandigiKar
profilyazisi
resimyolu
yaziliFalFiyat
yediYirmidort
yorumlar
yorumsayisi 

*/
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeFalciRutbesi = this.onChangeFalciRutbesi.bind(this);
    this.onChangeKahveFaliSayisi = this.onChangeKahveFaliSayisi.bind(this);
    this.onChangeadminFalciyaYorumlari = this.onChangeadminFalciyaYorumlari.bind(this);
    this.onChangebaktigiFalAdi = this.onChangebaktigiFalAdi.bind(this);
    this.onChangebaktigiFalUcreti = this.onChangebaktigiFalUcreti.bind(this);
    this.onChangebaktigiFalid = this.onChangebaktigiFalid.bind(this);
    this.onChangecanlifalFiyati = this.onChangecanlifalFiyati.bind(this);
    this.onChangecuzdan = this.onChangecuzdan.bind(this);
    this.onChangefalbilgisi = this.onChangefalbilgisi.bind(this);
    this.onChangeiban = this.onChangeiban.bind(this);
    this.onChangeindirimkodu = this.onChangeindirimkodu.bind(this);
    this.onChangekazandigiKar = this.onChangekazandigiKar.bind(this);
    this.onChangeprofilyazisi = this.onChangeprofilyazisi.bind(this);
    this.onChangeresimyolu = this.onChangeresimyolu.bind(this);
    this.onChangeyaziliFalFiyat = this.onChangeyaziliFalFiyat.bind(this);
    this.onChangeyediYirmidort = this.onChangeyediYirmidort.bind(this);
    this.onChangeyorumlar = this.onChangeyorumlar.bind(this);
    this.onChangeyorumsayisi = this.onChangeyorumsayisi.bind(this);

    this.state = {
      username: "",
      email: "",
      password: "",
      successful: false,
      message: "",
      FalciRutbesi: "",
      KahveFaliSayisi: "",
      adminFalciyaYorumlari: "",
      baktigiFalAdi: "",
      baktigiFalUcreti: "",
      baktigiFalid: "",
      canlifalFiyati: "",
      cuzdan: "",
      falbilgisi: "",
      iban: "",
      indirimkodu: "",
      kazandigiKar: "",
      profilyazisi: "",
      resimyolu: "",
      yaziliFalFiyat: "",
      yediYirmidort: "",
      yorumlar: "",
      yorumsayisi: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

 onChangeFalciRutbesi(e) {
  this.setState({
    FalciRutbesi: e.target.value
  });
}  
 onChangeKahveFaliSayisi(e) {
  this.setState({
    KahveFaliSayisi: e.target.value
  });
}  
 onChangeadminFalciyaYorumlari(e) {
  this.setState({
    adminFalciyaYorumlari: e.target.value
  });
} 
 onChangebaktigiFalAdi(e) {
  this.setState({
    baktigiFalAdi: e.target.value
  });
}
 onChangebaktigiFalUcreti(e) {
  this.setState({
    baktigiFalUcreti: e.target.value
  });
} 
 onChangebaktigiFalid(e) {
  this.setState({
    baktigiFalid: e.target.value
  });
}  
 onChangecanlifalFiyati(e) {
  this.setState({
    canlifalFiyati: e.target.value
  });
} 
 onChangecuzdan(e) {
  this.setState({
    cuzdan: e.target.value
  });
} 
 onChangefalbilgisi(e) {
  this.setState({
    falbilgisi: e.target.value
  });
} 
 onChangeiban(e) {
  this.setState({
    iban: e.target.value
  });
} 
 onChangeindirimkodu(e) {
  this.setState({
    indirimkodu: e.target.value
  });
}  
 onChangekazandigiKar(e) {
  this.setState({
    kazandigiKar: e.target.value
  });
} 
 onChangeprofilyazisi(e) {
  this.setState({
    profilyazisi: e.target.value
  });
}  
 onChangeresimyolu(e) {
  this.setState({
    resimyolu: e.target.value
  });
}  
 onChangeyaziliFalFiyat(e) {
  this.setState({
    yaziliFalFiyat: e.target.value
  });
} 
 onChangeyediYirmidort(e) {
  this.setState({
    yediYirmidort: e.target.value
  });
} 
 onChangeyorumlar(e) {
  this.setState({
    yorumlar: e.target.value
  });
}  
 onChangeyorumsayisi(e) {
  this.setState({
    yorumsayisi: e.target.value
  });
} 

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.Falciregister(
        this.state.username,
        this.state.email,
        this.state.password, 
        this.state.FalciRutbesi,
        this.state.KahveFaliSayisi,
        this.state.adminFalciyaYorumlari,
        this.state.baktigiFalAdi,
        this.state.baktigiFalUcreti,
        this.state.baktigiFalid,
        this.state.canlifalFiyati,
        this.state.cuzdan,
        this.state.falbilgisi,
        this.state.iban,
        this.state.indirimkodu,
        this.state.kazandigiKar,
        this.state.profilyazisi,
        this.state.resimyolu,
        this.state.yaziliFalFiyat,
        this.state.yediYirmidort,
        this.state.yorumlar,
        this.state.yorumsayisi,
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="card card-container">
          <h1>Falci Ekle</h1>

          {/* <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          /> */}

          <Form
            onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="username">Adı soyadı</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required, vusername]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    validations={[required, email]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Şifre</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required, vpassword]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="falcirutbesi">Rutbe</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="FalciRutbesi"
                    value={this.state.FalciRutbesi}
                    onChange={this.onChangeFalciRutbesi}
                    
                  />
                </div>

                <div className="form-group">
                  <button className="btn btn-primary btn-block">Kayıt</button>
                </div>
              </div>
            )}

            {this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
      </div>
    );
  }
}
