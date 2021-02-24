import React, { Component } from "react";
import BurclarDataService from "../../services/burc.service";
 
export default class BurclarListesi extends Component {
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
    this.getTutorial = this.getTutorial.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateTutorial = this.updateTutorial.bind(this);
    this.deleteTutorial = this.deleteTutorial.bind(this);

    this.state = {
      currentTutorial: {
        id: null,
        burcadi: "",
        burclinki: "",
        published: false
      },
      message: "",
      burclar: [],
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
    const burcadi = e.target.value;
    this.setState(function(prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          burcadi: burcadi
        }
      };
    });
  }
  
  onChangeDescription(e) {
    const burclinki = e.target.value;
    
    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        burclinki: burclinki
      }
    }));
  }

  getTutorial(id) {
    BurclarDataService.get(id)
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
      burcadi: this.state.currentTutorial.burcadi,
      burclinki: this.state.currentTutorial.burclinki,
      published: status
    };

    BurclarDataService.update(this.state.currentTutorial.id, data)
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
     BurclarDataService.update(
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
    BurclarDataService.delete(this.state.currentTutorial.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/burclar')
      })
      .catch(e => {
        console.log(e);
      });
  }

  retrieveTutorials() {
    BurclarDataService.getAll()
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

  setActiveTutorial(burcadi, index) {
    this.setState({
      currentTutorial: burcadi,
      currentIndex: index
    });
  }

  removeAllTutorials() {
    BurclarDataService.deleteAll()
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

    BurclarDataService.findByTitle(this.state.searchTitle)
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
    const { searchTitle, burclar, currentTutorial, currentIndex } = this.state;

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
            {burclar &&
              burclar.map((burclar, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveTutorial(burclar, index)}
                  key={index}
                >
                  {burclar.burcadi}
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
            <h4>Burclar</h4>
            <form>
              <div className="form-group">
                <label htmlFor="burcadi">başlık</label>
                <input
                  type="text"
                  className="form-control"
                  id="burcadi"
                  value={currentTutorial.burcadi}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="burclinki">tanımlama</label>
                <input
                  type="text"
                  className="form-control"
                  id="burclinki"
                  value={currentTutorial.burclinki}
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
            <p>Lütfen Burclar tıkla</p>
          </div>
        )}
      </div>
        </div>
      </div>
    );
  }
}
