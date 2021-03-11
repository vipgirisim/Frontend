 
import React from "react";
import axios from "axios";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

import userImg from '../assets/user.png';
import { Link } from 'react-router-dom';
 
export default class TableList1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      users: []
    }
  }

componentDidMount() {
    axios.get('https://vipfal.herokuapp.com/api/userrolesgetir')
    .then(res => {
        console.log(res);
        this.setState({ users: res.data })
    });
}
  render() {
    var data = this.state.users;

    return (
     
      <div className="users" style={{marginTop: "50px"}}>
            <div className="container"> 
            <div className="row">
                {data.length > 0 ? 
                    data.map((user, i) => {                        
                        return (
                          <div className="col-lg-6" key={user._id.toString()}>
                                <div className="card" style={{ marginBottom: "20px"}}>
                                    <div className="card-header text-left">{user.name}</div>
                                    <div className="card-body text-left">
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <img className="img-thumbnail" style={{marginBottom: "10px"}} src={userImg} alt="user"/><br/>
                                                <Link to={"users/"+user._id}>
                                                    <button className="btn btn-outline-dark btn-sm">View User</button>
                                                </Link>
                                            </div>   
                                      <div className="col-lg-9">
                                          <ul className="list-group">
                                              <li className="list-group-item"><b>Adi Soyadi </b>: {user.username}</li>
                                              <li className="list-group-item"><b>Mail </b>: {user.email}</li>
                                           </ul>
                                      </div>      
                                  </div>
                              </div>                                
                          </div>
                      </div>
                 )}                       
                    ) : null}                                           
                </div>
            </div>
        </div>
    )
  }
} 