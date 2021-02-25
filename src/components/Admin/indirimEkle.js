import React, { Component } from "react";
import IndirimDataService from "../../services/indirim.service";


 

export default class BurcEkle extends Component {
    constructor(props) {
        super(props);
        this.onchanegeindirimkodu = this.onchanegeindirimkodu.bind(this);
        this.onchanegekackisikullansin= this.onchanegekackisikullansin.bind(this);
        this.onchanegeyuzdeorani= this.onchanegeyuzdeorani.bind(this);

        this.onchanegebaslangicTarihi= this.onchanegebaslangicTarihi.bind(this);
        this.onchanegeBitisTarihi= this.onchanegeBitisTarihi.bind(this);

        this.saveTutorial = this.saveTutorial.bind(this);
        this.newTutorial = this.newTutorial.bind(this);

        this.state = {
            id: null, 
            indirimkodu: "",
            kackisikullansin: "",
            yuzdeorani: "",
            baslangicTarihi: "",
            BitisTarihi: "",


            submitted: false
        };
    }

    onchanegeindirimkodu(e)
     {
        this.setState({
            indirimkodu: e.target.value
          });
    }


    onchanegekackisikullansin(e) {
        this.setState({
            kackisikullansin: e.target.value
        });
    }
    onchanegeyuzdeorani(e) {
        this.setState({
            yuzdeorani: e.target.value
        });
    }
    onchanegebaslangicTarihi(e) {
        this.setState({
            baslangicTarihi: e.target.value
        });
    }
    onchanegeBitisTarihi(e) {
        this.setState({
            BitisTarihi: e.target.value
        });
    } 

    saveTutorial() {
        var data = {
            indirimkodu: this.state.indirimkodu,
            kackisikullansin: this.state.kackisikullansin,
            yuzdeorani: this.state.yuzdeorani,
            baslangicTarihi: this.state.baslangicTarihi,
            BitisTarihi: this.state.BitisTarihi
        };

        IndirimDataService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    indirimkodu: response.data.indirimkodu,
                    kackisikullansin: response.data.kackisikullansin,
                    yuzdeorani: response.data.yuzdeorani,
                    baslangicTarihi: response.data.baslangicTarihi,
                    BitisTarihi: response.data.BitisTarihi,  
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
            yuzdeorani: "",
            baslangicTarihi:"",
            BitisTarihi: "", 
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
                                <label htmlFor="title">indirim kodu :</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="indirimkodu"
                                    required
                                    value={this.state.indirimkodu}
                                    onChange={this.onchanegeindirimkodu}
                                    name="indirimkodu"
                                />
                              <label htmlFor="title">Kaç Kişi Kullansın :</label>

                                <input
                                    type="text"
                                    className="form-control"
                                    id="kackisikullansin"
                                     
                                    value={this.state.kackisikullansin}
                                    onChange={this.onchanegekackisikullansin}
                                    name="kackisikullansin"
                                />
                                 <label htmlFor="title">Yuzde Oranı :</label>

                                <input
                                    type="text"
                                    className="form-control"
                                    id="yuzdeorani"
                                     
                                    value={this.state.yuzdeorani}
                                    onChange={this.onchanegeyuzdeorani}
                                    name="yuzdeorani"
                                />
                                <label htmlFor="title">Baslangic Tarihi :</label>
 
                                <input
                                    type="text"
                                    className="form-control"
                                    id="baslangicTarihi"
                                     
                                    value={this.state.baslangicTarihi}
                                    onChange={this.onchanegebaslangicTarihi}
                                    name="baslangicTarihi"
                                />
                                <label htmlFor="title">Bitis Tarihi :</label>
 
                                <input
                                    type="text"
                                    className="form-control"
                                    id="BitisTarihi"
                                    required
                                    value={this.state.BitisTarihi}
                                    onChange={this.onchanegeBitisTarihi}
                                    name="BitisTarihi"
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
