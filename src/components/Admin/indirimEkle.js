import React, { Component } from "react";
import IndirimDataService from "../../services/indirim.service";

export default class BurcEkle extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      id: null,

      indirimkodu:"",
      kackisikullansin:"",
      yuzdeorani:"",
      baslangicTarihi:"",
      BitisTarihi:"",
 

      submitted: false
    };
  }

  onChangeTitle(e) {
    this.setState({
        indirimkodu: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
        indirimkodu: e.target.value
    });
  }

  saveTutorial() {
    var data = {
        indirimkodu: this.state.indirimkodu,
         kackisikullansin:this.state.kackisikullansin,
        yuzdeorani:this.state.yuzdeorani,
        baslangicTarihi:this.state.baslangicTarihi,
        BitisTarihi:this.state.BitisTarihi
    };

    IndirimDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          indirimkodu: response.data.indirimkodu,
           kackisikullansin:response.data.kackisikullansin,
         yuzdeorani:response.data.yuzdeorani,
         baslangicTarihi:response.data.baslangicTarihi,
         BitisTarihi:response.data.BitisTarihi,
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      id: null,
      indirimkodu:"",
      kackisikullansin:"",
      yuzdeorani:"",
      baslangicTarihi:"",
      BitisTarihi:"",

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>başarılı!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Ekle
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">Başlık</label>
              <input
                type="text"
                className="form-control"
                id="indirimkodu"
                required
                value={this.state.indirimkodu}
                onChange={this.onChangeTitle}
                name="indirimkodu"
              />
                <input
                type="text"
                className="form-control"
                id="kackisikullansin"
                required
                value={this.state.kackisikullansin}
                onChange={this.onChangeTitle}
                name="kackisikullansin"
              />
                <input
                type="text"
                className="form-control"
                id="indirimkodu"
                required
                value={this.state.indirimkodu}
                onChange={this.onChangeTitle}
                name="indirimkodu"
              />
                <input
                type="text"
                className="form-control"
                id="indirimkodu"
                required
                value={this.state.indirimkodu}
                onChange={this.onChangeTitle}
                name="indirimkodu"
              />
                <input
                type="text"
                className="form-control"
                id="indirimkodu"
                required
                value={this.state.indirimkodu}
                onChange={this.onChangeTitle}
                name="indirimkodu"
              />
            </div>

          

            <button onClick={this.saveTutorial} className="btn btn-success">
              indirim Ekle
            </button>
          </div>
        )}
      </div>
    );
  }
}
