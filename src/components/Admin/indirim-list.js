import React, { Component } from "react";
import IndirimDataService from "../../services/discount.service";
import { Link } from "react-router-dom";

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

    this.onChangeDescription = this.onChangeDescription.bind(this);

    this.onChangeYuzdeorani = this.onChangeYuzdeorani.bind(this);
    this.onChangeBaslangicTarihi = this.onChangeBaslangicTarihi.bind(this);
    this.onChangeBitisTarihi = this.onChangeBitisTarihi.bind(this);


    this.getTutorial = this.getTutorial.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateTutorial = this.updateTutorial.bind(this);
    this.deleteTutorial = this.deleteTutorial.bind(this);

    this.state = {
      currentTutorial: {
        id: null,
        indirimkodu: "",
        kackisikullansin: "",
        yuzdeorani:  "",
        baslangicTarihi:  "",
        bitisTarihi: "",
        
        published: false
      },
      message: "",
      tutorials: [],
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

  onChangeDescription(e) {
    const kackisikullansin = e.target.value;
    
    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        kackisikullansin: kackisikullansin
      }
    }));
  }


  onChangeYuzdeorani(e) {
    const yuzdeorani = e.target.value;
    
    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        yuzdeorani: yuzdeorani
      }
    }));
  }


  onChangeBaslangicTarihi(e) {
    const baslangicTarihi = e.target.value;
    
    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        baslangicTarihi: baslangicTarihi
      }
    }));
  }

  onChangeBitisTarihi(e) {
    const bitisTarihi = e.target.value;
    
    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        bitisTarihi: bitisTarihi
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
      yuzdeorani:  this.state.currentTutorial.yuzdeorani,
      baslangicTarihi: this.state.currentTutorial.baslangicTarihi,
      bitisTarihi:this.state.currentTutorial.bitisTarihi,
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
        this.props.history.push('/discounts')
      })
      .catch(e => {
        console.log(e);
      });
  }

  retrieveTutorials() {
    IndirimDataService.getAll()
      .then(response => {
        this.setState({
          tutorials: response.data
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

  setActiveTutorial(tutorial, index) {
    this.setState({
      currentTutorial: tutorial,
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
          tutorials: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchTitle, tutorials, currentTutorial, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="İndirim Ara"
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
          <h4>indirim Listesi</h4>

          <ul className="list-group">
            {tutorials &&
              tutorials.map((tutorial, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveTutorial(tutorial, index)}
                  key={index}
                >
                  {tutorial.indirimkodu}
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
            <h4>Duyuru</h4>
            <form>
              <div className="form-group">
                <label htmlFor="indirimkodu">indirimkodu</label>
                <input
                  type="text"
                  className="form-control"
                  id="indirimkodu"
                  value={currentTutorial.indirimkodu}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="kackisikullansin">kackisikullansin</label>
                <input
                  type="text"
                  className="form-control"
                  id="kackisikullansin"
                  value={currentTutorial.kackisikullansin}
                  onChange={this.onChangeDescription}
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
            <p>Lütfen İndirim Adına tıkla</p>
          </div>
        )}
      </div>
        </div>
      </div>
    );
  }
}
