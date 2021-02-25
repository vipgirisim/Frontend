
import React, { Component } from "react";
import IndirimDataService from "../../services/indirim.service";
 
export default class IndirimListesi extends Component {
  constructor(props) {
    super(props);
    this.onchanegeindirimkodu = this.onchanegeindirimkodu.bind(this);
    this.onchanegekackisikullansin= this.onchanegekackisikullansin.bind(this);
    this.onchanegeyuzdeorani= this.onchanegeyuzdeorani.bind(this);
    this.onchanegebaslangicTarihi= this.onchanegebaslangicTarihi.bind(this);
    this.onchanegeBitisTarihi= this.onchanegeBitisTarihi.bind(this);
   /*  this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);



    this.getTutorial = this.getTutorial.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateTutorial = this.updateTutorial.bind(this);
    this.deleteTutorial = this.deleteTutorial.bind(this); */

    this.state = {
      currentTutorial: {
        id: null,
        indirimkodu: "",
        kackisikullansin: "",
        yuzdeorani: "",
        baslangicTarihi: "",
        BitisTarihi: "", 
        published: false
      },
      message: "",
      indirim: [],
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


 

onchanegeindirimkodu(e) {
    const kackisikullansin = e.target.value;
    this.setState(function(prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          kackisikullansin: kackisikullansin
        }
      };
    });
  }
  
  onchanegekackisikullansin(e) {
    const yuzdeorani = e.target.value;
    
    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        yuzdeorani: yuzdeorani
      }
    }));
  }


  onchanegeyuzdeorani(e) {
    const indirimkodu = e.target.value;
    this.setState(function(prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          indirimkodu: indirimkodu
        }
      };
    });
  }
  
  onchanegebaslangicTarihi(e) {
    const baslangicTarihi = e.target.value;
    
    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        baslangicTarihi: baslangicTarihi
      }
    }));
  }

  onchanegeBitisTarihi(e) {
    const BitisTarihi = e.target.value;
    
    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        BitisTarihi: BitisTarihi
      }
    }));
  }





  getTutorial(id) {
    IndirimDataService.get(id)
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
      indirimkodu: this.state.currentTutorial.indirimkodu,
      kackisikullansin: this.state.currentTutorial.kackisikullansin,
      yuzdeorani: this.state.currentTutorial.yuzdeorani,
      baslangicTarihi: this.state.currentTutorial.baslangicTarihi,
      BitisTarihi: this.state.currentTutorial.BitisTarihi,

      published: status
    };

    IndirimDataService.update(this.state.currentTutorial.id, data)
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
     IndirimDataService.update(
      this.state.currentTutorial.id,
      this.state.currentTutorial
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "başarılı!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteTutorial() {   
    IndirimDataService.delete(this.state.currentTutorial.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/indirim')
      })
      .catch(e => {
        console.log(e);
      });
  }

  retrieveTutorials() {
    IndirimDataService.getAll()
      .then(response => {
        this.setState({
          burclar: response.data
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

  setActiveTutorial(indirimkodu, index) {
    this.setState({
      currentTutorial: indirimkodu,
      currentIndex: index
    });
  }

  removeAllTutorials() {
    IndirimDataService.deleteAll()
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

    IndirimDataService.findByTitle(this.state.searchTitle)
      .then(response => {
        this.setState({
          burclar: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchTitle, indirim, currentTutorial, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Burç Ara"
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
          <h4>Burclar Listesi</h4>

          <ul className="list-group">
            {indirim &&
              indirim.map((indirim, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveTutorial(indirim, index)}
                  key={index}
                >
                  {indirim.indirimkodu}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllTutorials}
          >
            Hepsini Sil
          </button>
        </div>
        <div className="col-md-6">
        <div>
        {currentTutorial ? (
          <div className="edit-form">
            <h4>İndirim</h4>
            <form>
              <div className="form-group">
                <label htmlFor="indirimkodu">indirimkodu</label>
                <input
                  type="text"
                  className="form-control"
                  id="indirimkodu"
                  value={currentTutorial.indirimkodu}
                  onChange={this.onchanegeindirimkodu}
                />
              </div>


              <div className="form-group">
                <label htmlFor="kackisikullansin">kackisikullansin</label>
                <input
                  type="text"
                  className="form-control"
                  id="kackisikullansin"
                  value={currentTutorial.kackisikullansin}
                  onChange={this.onchanegekackisikullansin}
                />
              </div>

              <div className="form-group">
                <label htmlFor="kackisikullansin">kackisikullansin</label>
                <input
                  type="text"
                  className="form-control"
                  id="kackisikullansin"
                  value={currentTutorial.kackisikullansin}
                  onChange={this.onchanegekackisikullansin}
                />
              </div>

              <div className="form-group">
                <label htmlFor="kackisikullansin">kackisikullansin</label>
                <input
                  type="text"
                  className="form-control"
                  id="kackisikullansin"
                  value={currentTutorial.kackisikullansin}
                  onChange={this.onchanegekackisikullansin}
                />
              </div>

              <div className="form-group">
                <label htmlFor="kackisikullansin">kackisikullansin</label>
                <input
                  type="text"
                  className="form-control"
                  id="kackisikullansin"
                  value={currentTutorial.kackisikullansin}
                  onChange={this.onchanegekackisikullansin}
                />
              </div>
              <div className="form-group">
                <label htmlFor="kackisikullansin">kackisikullansin</label>
                <input
                  type="text"
                  className="form-control"
                  id="kackisikullansin"
                  value={currentTutorial.kackisikullansin}
                  onChange={this.onchanegekackisikullansin}
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
            <p>Lütfen Burclar tıkla</p>
          </div>
        )}
      </div>
        </div>
      </div>
    );
  }
}
