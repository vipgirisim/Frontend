import React, { Component } from "react";
import TutorialDataService from "../../services/burc.service";

export default class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      id: null,
      burcadi: "",
      burclinki: "",  

      submitted: false
    };
  }

  onChangeTitle(e) {
    this.setState({
      burcadi: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      burclinki: e.target.value
    });
  }

  saveTutorial() {
    var data = {
      burcadi: this.state.burcadi,
      burclinki: this.state.burclinki
    };

    TutorialDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          burcadi: response.data.burcadi,
          burclinki: response.data.burclinki, 

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
      burcadi: "",
      burclinki: "", 

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        
          <div>
            <div className="form-group">
              <label htmlFor="title">Başlık</label>
              <input
                type="text"
                className="form-control"
                id="burcadi"
                required
                value={this.state.burcadi}
                onChange={this.onChangeTitle}
                name="burcadi"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Burç</label>
              <input
                type="text"
                className="form-control"
                id="burclinki"
                required
                value={this.state.burclinki}
                onChange={this.onChangeDescription}
                name="burclinki"
              />
            </div>

            <button onClick={this.saveTutorial} className="btn btn-success">
              Burc Ekle
            </button>
          </div>
        
      </div>
    );
  }
}
