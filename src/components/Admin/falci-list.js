import React, { Component } from "react";
import UserDataService from "../../services/user.service";
import { Link } from "react-router-dom";
import Input from "react-validation/build/input";

export default class TutorialsList extends Component {
    constructor(props) {
        super(props);
        this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
        this.retrieveTutorials = this.retrieveTutorials.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveTutorial = this.setActiveTutorial.bind(this);
        this.removeAllTutorials = this.removeAllTutorials.bind(this);
        this.searchTitle = this.searchTitle.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);

        /* this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeYuzdeorani = this.onChangeYuzdeorani.bind(this);
        this.onChangeBaslangicTarihi = this.onChangeBaslangicTarihi.bind(this);
        this.onChangeBitisTarihi = this.onChangeBitisTarihi.bind(this); */

        this.onChangeusername = this.onChangeusername.bind(this);
        this.onChangeemail = this.onChangeemail.bind(this);
        this.onChangepassword = this.onChangepassword.bind(this);
        this.onChangeiban = this.onChangeiban.bind(this);
        this.onChangecuzdan = this.onChangecuzdan.bind(this);
        this.onChangefalbilgisi = this.onChangefalbilgisi.bind(this);
        this.onChangeindirimkodu = this.onChangeindirimkodu.bind(this);
        this.onChangeresimyolu = this.onChangeresimyolu.bind(this);
        this.onChangeprofilyazisi = this.onChangeprofilyazisi.bind(this);
        this.onChangeyorumlar = this.onChangeyorumlar.bind(this);
        this.onChangeyorumsayisi = this.onChangeyorumsayisi.bind(this);
        this.onChangeyediYirmidort = this.onChangeyediYirmidort.bind(this);
        this.onChangebaktigiFalid = this.onChangebaktigiFalid.bind(this);
        this.onChangebaktigiFalAdi = this.onChangebaktigiFalAdi.bind(this);
        this.onChangebaktigiFalUcreti = this.onChangebaktigiFalUcreti.bind(this);
        this.onChangekazandigiKar = this.onChangekazandigiKar.bind(this);
        this.onChangeadminFalciyaYorumlari = this.onChangeadminFalciyaYorumlari.bind(this);
        this.onChangeyaziliFalFiyat = this.onChangeyaziliFalFiyat.bind(this);
        this.onChangecanlifalFiyati = this.onChangecanlifalFiyati.bind(this);
        this.onChangeFalciRutbesi = this.onChangeFalciRutbesi.bind(this);
        this.onChangeKahveFaliSayisi = this.onChangeKahveFaliSayisi.bind(this);
        this.onChangePhone=this.onChangePhone.bind(this);
        this.onChangeFalciYetkisi=this.onChangeFalciYetkisi.bind(this);


        this.getTutorial = this.getTutorial.bind(this);
        this.updatePublished = this.updatePublished.bind(this);
        this.updateTutorial = this.updateTutorial.bind(this);
        this.deleteTutorial = this.deleteTutorial.bind(this);

        this.state = {
            currentTutorial: {
                id: null,

                username: "",
                email: "",
                password: "",
                iban: "",
                phone:"",
                cuzdan: "",
                falbilgisi: "",
                indirimkodu: "",
                resimyolu: "",
                profilyazisi: "",
                Falciyetkisi: "", 
                yorumlar: "",
                yorumsayisi: "",
                yediYirmidort: "",
                baktigiFalid: "",
                baktigiFalAdi: "",
                baktigiFalUcreti: "",
                kazandigiKar: "",
                adminFalciyaYorumlari: "",
                yaziliFalFiyat: "",
                canlifalFiyati: "",
                FalciRutbesi: "",
                KahveFaliSayisi: "",
            },
            message: "",
            users: [],
            currentTutorial: null,
            currentIndex: -1,
            searchTitle: ""
        };

    }

    componentDidMount() {
        this.retrieveTutorials();
        //this.getTutorial(this.props.match.params.id);
    }

    onChangeSearchTitle(e) {
        const searchTitle = e.target.value;

        this.setState({
            searchTitle: searchTitle
        });
    }

    onChangeTitle(e) {
        const username = e.target.value;

        this.setState(function (prevState) {
            return {
                currentTutorial: {
                    ...prevState.currentTutorial,
                    username: username
                }
            };
        });
    }

    onChangeusername(e) {
        const username = e.target.value;

        this.setState(prevState => ({
            currentTutorial: {
                ...prevState.currentTutorial,
                username: username
            }
        }));
    }

    onChangeFalciYetkisi(e) {
        const Falciyetkisi = e.target.value;

        this.setState(prevState => ({
            currentTutorial: {
                ...prevState.currentTutorial,
                Falciyetkisi: Falciyetkisi
            }
        }));
    }




    onChangeemail(e) {
        const email = e.target.value;

        this.setState(prevState => ({
            currentTutorial: {
                ...prevState.currentTutorial,
                email: email
            }
        }));
    }
    onChangepassword(e) {
        const password = e.target.value;

        this.setState(prevState => ({
            currentTutorial: {
                ...prevState.currentTutorial,
                password: password
            }
        }));
    }
    onChangeiban(e) {
        const iban = e.target.value;

        this.setState(prevState => ({
            currentTutorial: {
                ...prevState.currentTutorial,
                iban: iban
            }
        }));
    }
    onChangecuzdan(e) {
        const cuzdan = e.target.value;

        this.setState(prevState => ({
            currentTutorial: {
                ...prevState.currentTutorial,
                cuzdan: cuzdan
            }
        }));
    }
    onChangefalbilgisi(e) {
        const falbilgisi = e.target.value;

        this.setState(prevState => ({
            currentTutorial: {
                ...prevState.currentTutorial,
                falbilgisi: falbilgisi
            }
        }));
    }
    onChangeindirimkodu(e) {
        const indirimkodu = e.target.value;

        this.setState(prevState => ({
            currentTutorial: {
                ...prevState.currentTutorial,
                indirimkodu: indirimkodu
            }
        }));
    }
    onChangeresimyolu(e) {
        const resimyolu = e.target.value;

        this.setState(prevState => ({
            currentTutorial: {
                ...prevState.currentTutorial,
                resimyolu: resimyolu
            }
        }));
    }
    onChangeprofilyazisi(e) {
        const profilyazisi = e.target.value;

        this.setState(prevState => ({
            currentTutorial: {
                ...prevState.currentTutorial,
                profilyazisi: profilyazisi
            }
        }));
    }
    onChangeyorumlar(e) {
        const yorumlar = e.target.value;

        this.setState(prevState => ({
            currentTutorial: {
                ...prevState.currentTutorial,
                yorumlar: yorumlar
            }
        }));
    }
    onChangeyorumsayisi(e) {
        const yorumsayisi = e.target.value;

        this.setState(prevState => ({
            currentTutorial: {
                ...prevState.currentTutorial,
                yorumsayisi: yorumsayisi
            }
        }));
    }
    onChangeyediYirmidort(e) {
        const yediYirmidort = e.target.value;

        this.setState(prevState => ({
            currentTutorial: {
                ...prevState.currentTutorial,
                yediYirmidort: yediYirmidort
            }
        }));
    }
    onChangebaktigiFalid(e) {
        const baktigiFalid = e.target.value;

        this.setState(prevState => ({
            currentTutorial: {
                ...prevState.currentTutorial,
                baktigiFalid: baktigiFalid
            }
        }));
    }
    onChangebaktigiFalAdi(e) {
        const baktigiFalAdi = e.target.value;

        this.setState(prevState => ({
            currentTutorial: {
                ...prevState.currentTutorial,
                baktigiFalAdi: baktigiFalAdi
            }
        }));
    }
    onChangebaktigiFalUcreti(e) {
        const baktigiFalUcreti = e.target.value;

        this.setState(prevState => ({
            currentTutorial: {
                ...prevState.currentTutorial,
                baktigiFalUcreti: baktigiFalUcreti
            }
        }));
    }
    onChangekazandigiKar(e) {
        const kazandigiKar = e.target.value;

        this.setState(prevState => ({
            currentTutorial: {
                ...prevState.currentTutorial,
                kazandigiKar: kazandigiKar
            }
        }));
    }
    onChangeadminFalciyaYorumlari(e) {
        const adminFalciyaYorumlari = e.target.value;

        this.setState(prevState => ({
            currentTutorial: {
                ...prevState.currentTutorial,
                adminFalciyaYorumlari: adminFalciyaYorumlari
            }
        }));
    }
    onChangeyaziliFalFiyat(e) {
        const yaziliFalFiyat = e.target.value;

        this.setState(prevState => ({
            currentTutorial: {
                ...prevState.currentTutorial,
                yaziliFalFiyat: yaziliFalFiyat
            }
        }));
    }
    onChangecanlifalFiyati(e) {
        const canlifalFiyati = e.target.value;

        this.setState(prevState => ({
            currentTutorial: {
                ...prevState.currentTutorial,
                canlifalFiyati: canlifalFiyati
            }
        }));
    }
    onChangeFalciRutbesi(e) {
        const FalciRutbesi = e.target.value;

        this.setState(prevState => ({
            currentTutorial: {
                ...prevState.currentTutorial,
                FalciRutbesi: FalciRutbesi
            }
        }));
    }
    onChangeKahveFaliSayisi(e) {
        const KahveFaliSayisi = e.target.value;

        this.setState(prevState => ({
            currentTutorial: {
                ...prevState.currentTutorial,
                KahveFaliSayisi: KahveFaliSayisi
            }
        }));
    }

    onChangePhone(e) {
        const phone = e.target.value;

        this.setState(prevState => ({
            currentTutorial: {
                ...prevState.currentTutorial,
                phone: phone
            }
        }));
    }




    getTutorial(id) {
        UserDataService.get(id)
            .then(response => {
                this.setState({
                    currentTutorial: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    updatePublished(status) {
        var data = {
            id: this.state.currentTutorial.id,
            /*   indirimkodu: "",
                resimyolu: "",
                profilyazisi: "",
                yorumlar: "",
                yorumsayisi: "",
                yediYirmidort: "",
                baktigiFalid: "",
                baktigiFalAdi: "",
                baktigiFalUcreti: "",
                kazandigiKar: "",
                adminFalciyaYorumlari: "",
                yaziliFalFiyat: "",
                canlifalFiyati: "",
                FalciRutbesi: "",
                KahveFaliSayisi: "", */

            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            iban: this.state.iban,
            phone:this.state.phone,
            cuzdan: this.state.cuzdan,
            falbilgisi: this.state.falbilgisi,
            indirimkodu: this.state.indirimkodu,
            resimyolu: this.state.resimyolu,
            profilyazisi: this.state.profilyazisi,
            yorumlar: this.state.yorumlar,
            yorumsayisi: this.state.yorumsayisi,
            yediYirmidort: this.state.yediYirmidort,
            baktigiFalid: this.state.baktigiFalid,
            baktigiFalAdi: this.state.baktigiFalAdi,
            baktigiFalUcreti: this.state.baktigiFalUcreti,
            kazandigiKar: this.state.kazandigiKar,
            adminFalciyaYorumlari: this.state.adminFalciyaYorumlari,
            yaziliFalFiyat: this.state.yaziliFalFiyat,
            canlifalFiyati: this.state.canlifalFiyati,
            FalciRutbesi: this.state.FalciRutbesi,
            Falciyetkisi:this.state.Falciyetkisi,
            KahveFaliSayisi: this.state.KahveFaliSayisi,
            published: status
        };

        UserDataService.update(this.state.currentTutorial.id, data)
            .then(response => {
                this.setState(prevState => ({
                    currentTutorial: {
                        ...prevState.currentTutorial,
                        published: status
                    }
                }));
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    updateTutorial() {
        UserDataService.update(
            this.state.currentTutorial.id,
            this.state.currentTutorial
        )
            .then(response => {
                console.log(response.data);
                this.refreshList();

                this.setState({
                    message: "başarılı!"
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    deleteTutorial() {
        UserDataService.delete(this.state.currentTutorial.id)
            .then(response => {
                console.log(response.data);
                this.refreshList();

                this.props.history.push('/adminlistesi')
            })
            .catch(e => {
                console.log(e);
            });
    }

    retrieveTutorials() {
        UserDataService.getFalciAll()
            .then(response => {
                this.setState({
                    users: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    refreshList() {
        this.retrieveTutorials();
        this.setState({
            currentTutorial: null,
            currentIndex: -1
        });
    }

    setActiveTutorial(users, index) {
        this.setState({
            currentTutorial: users,
            currentIndex: index
        });
    }

    removeAllTutorials() {
        UserDataService.deleteAll()
            .then(response => {
                console.log(response.data);
                this.refreshList();
            })
            .catch(e => {
                console.log(e);
            });
    }

    searchTitle() {
        this.setState({
            currentTutorial: null,
            currentIndex: -1
        });

        UserDataService.findByTitle(this.state.searchTitle)
            .then(response => {
                this.setState({
                    users: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        const { searchTitle, users, currentTutorial, currentIndex } = this.state;

        return (
            <div className="list row">
                <div className="col-md-8">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Falcı Ara"
                            value={searchTitle}
                            onChange={this.onChangeSearchTitle}
                        />
                        <div className="input-group-append">
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={this.searchTitle}
                            >
                                Ara
              </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Falcı Listesi</h4>

                    <ul className="list-group">
                        {users &&
                            users.map((tutorial, index) => (
                                <li
                                    className={
                                        "list-group-item " +
                                        (index === currentIndex ? "active" : "")
                                    }
                                    onClick={() => this.setActiveTutorial(tutorial, index)}
                                    key={index}
                                >
                                    {tutorial.username}
                                </li>
                            ))}
                    </ul>

                    
                </div>
                <div className="col-md-6">
                    <div>
                        {currentTutorial ? (
                            <div className="edit-form">
                                <h4>Falcılar</h4>
                                <form>
                                 <div className="form-group">
                                        <label htmlFor="username">username</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="username"
                                            value={currentTutorial.username}
                                            onChange={this.onChangeusername}
                                        />
                                      </div>  
                                      <div className="form-group">
                                        <label htmlFor="baslangicTarihi">profil yazisi</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="profilyazisi"
                                            value= {currentTutorial.profilyazisi}
                                            onChange={this.onChangeprofilyazisi}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">email</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="email"
                                            value={currentTutorial.email}
                                            onChange={this.onChangeemail}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">password</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="password"
                                            value={currentTutorial.password}
                                            onChange={this.onChangepassword}
                                        />
                                    </div>
                                

                                    <div className="form-group">
                                        <label htmlFor="phone">Telefon</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="phone"
                                            value= {currentTutorial.phone}
                                            onChange={this.onChangePhone}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="baslangicTarihi">Falci Yetki</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="FalciRutbesi"
                                            value="Falci Yetki"//{currentTutorial.FalciRutbesi}
                                            onChange={this.onChangeFalciRutbesi}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="baslangicTarihi">Falci Rutbesi</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="FalciRutbesi"
                                            value="FalciRutbesi"//{currentTutorial.FalciRutbesi}
                                            onChange={this.onChangeFalciRutbesi}
                                        />
                                    </div>

 
                                    <div className="form-group">
                                        <label htmlFor="yuzdeorani">iban</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="iban"
                                            value={currentTutorial.iban}
                                            onChange={this.onChangeiban}
                                        />
                                    </div>


                                    <div className="form-group">
                                        <label htmlFor="baslangicTarihi">7/24</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="yediYirmidort"
                                            value={currentTutorial.yediYirmidort}
                                            onChange={this.onChangeyediYirmidort}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="baslangicTarihi">Kazanç Yüzdesi % cinsinden</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="kazandigiKar"
                                            value={currentTutorial.kazandigiKar}
                                            onChange={this.onChangekazandigiKar}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="baslangicTarihi">yazili Fal Fiyat </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="yaziliFalFiyat"
                                            value={currentTutorial.yaziliFalFiyat}
                                            onChange={this.onChangeyaziliFalFiyat}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="baslangicTarihi">Canli fal Fiyati </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="canlifalFiyati"
                                            value={currentTutorial.canlifalFiyati}
                                            onChange={this.onChangecanlifalFiyati}
                                        />
                                    </div>


                                    
                                    <div className="form-group">
                                        <label htmlFor="baslangicTarihi">Kahve Fali Sayisi </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="KahveFaliSayisi"
                                            value={currentTutorial.KahveFaliSayisi}
                                            onChange={this.onChangeKahveFaliSayisi}
                                        />
                                    </div>
   

                 

                                    <div className="form-group">
                                        <label>
                                            <strong>durum:</strong>
                                        </label>
                                        {currentTutorial.published ? "Published" : "Pending"}
                                    </div>
                                </form>

                                {currentTutorial.published ? (
                                    <button
                                        className="badge badge-primary mr-2"
                                        onClick={() => this.updatePublished(false)}
                                    >
                                        Yayınlanmadı
                                    </button>
                                ) : (
                                    <button
                                        className="badge badge-primary mr-2"
                                        onClick={() => this.updatePublished(true)}
                                    >
                                        Yayınla
                                    </button>
                                )}

                                <button
                                    className="badge badge-danger mr-2"
                                    onClick={this.deleteTutorial}
                                >
                                    sil
            </button>

                                <button
                                    type="submit"
                                    className="badge badge-success"
                                    onClick={this.updateTutorial}
                                >
                                    güncelle
            </button>
                                <p>{this.state.message}</p>
                            </div>
                        ) : (
                            <div>
                                <br />
                                <p>Lütfen Falcı Adına tıkla</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
