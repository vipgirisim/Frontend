import React, { Component } from "react";
import TutorialDataService from "../../services/tutorial.service";
import { Link } from "react-router-dom";

export default class BurcList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveburclar = this.retrieveburclar.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.removeAllburclar = this.removeAllburclar.bind(this);
    this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      burclar: [],
      currentTutorial: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveburclar();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  retrieveburclar() {
    TutorialDataService.getAll()
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
    this.retrieveburclar();
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

  removeAllburclar() {
    TutorialDataService.deleteAll()
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

    TutorialDataService.findByTitle(this.state.searchTitle)
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
              placeholder="Duyuru Ara"
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
          <h4>Duyuru Listesi</h4>

          <ul className="list-group">
            {burclar &&
              burclar.map((tutorial, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveTutorial(tutorial, index)}
                  key={index}
                >
                  {tutorial.title}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllburclar}
          >
            Hepsini Sil
          </button>
        </div>
        <div className="col-md-6">
          {currentTutorial ? (
            <div>
              <h4>Duyuru</h4>
              <div>
                <label>
                  <strong>Başlık:</strong>
                </label>{" "}
                {currentTutorial.title}
              </div>
              <div>
                <label>
                  <strong>tanım:</strong>
                </label>{" "}
                {currentTutorial.description}
              </div>
              <div>
                <label>
                  <strong>durum:</strong>
                </label>{" "}
                {currentTutorial.published ? "Published" : "Pending"}
              </div>

              <Link
                to={"/admin/sistemislemler" + currentTutorial.id}
                className="badge badge-warning"
              >
                düzenle
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>bir duyuruya tıkla...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
