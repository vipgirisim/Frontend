import React, { Component } from "react";
import BurclarDataService from "../../services/burc.service";
import { Link } from "react-router-dom";

export default class BurclarList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchburcadi = this.onChangeSearchburcadi.bind(this);
    this.retrieveburcs = this.retrieveburcs.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.removeAllburcs = this.removeAllburcs.bind(this);
    this.searchburcadi = this.searchburcadi.bind(this);
    this.onChangeburcadi = this.onChangeburcadi.bind(this);
    this.onChangeburclinki = this.onChangeburclinki.bind(this);
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
      burcs: [],
      currentTutorial: null,
      currentIndex: -1,
      searchburcadi: ""
    };
    
  }

  componentDidMount() {
    this.retrieveburcs();
    //this.getTutorial(this.props.match.params.id);
  }

  onChangeSearchburcadi(e) {
    const searchburcadi = e.target.value;

    this.setState({
      searchburcadi: searchburcadi
    });
  }

  onChangeburcadi(e) {
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

  onChangeburclinki(e) {
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

  retrieveburcs() {
    BurclarDataService.getAll()
      .then(response => {
        this.setState({
          burcs: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveburcs();
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

  removeAllburcs() {
    BurclarDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchburcadi() {
    this.setState({
      currentTutorial: null,
      currentIndex: -1
    });

    BurclarDataService.findByburcadi(this.state.searchburcadi)
      .then(response => {
        this.setState({
          burcs: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchburcadi, burcs, currentTutorial, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Duyuru Ara"
              value={searchburcadi}
              onChange={this.onChangeSearchburcadi}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchburcadi}
              >
                Ara
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Burclar Listesi</h4>

          <ul className="list-group">
            {burcs &&
              burcs.map((tutorial, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveTutorial(tutorial, index)}
                  key={index}
                >
                  {tutorial.burcadi}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllburcs}
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
                  onChange={this.onChangeburcadi}
                />
              </div>
              <div className="form-group">
                <label htmlFor="burclinki">tanımlama</label>
                <input
                  type="text"
                  className="form-control"
                  id="burclinki"
                  value={currentTutorial.burclinki}
                  onChange={this.onChangeburclinki}
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
            <p>Lütfen burc tıkla</p>
          </div>
        )}
      </div>
        </div>
      </div>
    );
  }
}
