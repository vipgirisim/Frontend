
import React from "react";/* 
import Duyuruekle from "../../src/components/Admin/AddTutorial"
import Duyuruekle from "../../src/components/Admin/tutorials-list" */
import BurcEkle from "../../src/components/Admin/BurclEkle"
import Duyurulistesi from "../../src/components/Admin/tutorials-list"


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
 


function Sistemislemler() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
             
              <CardHeader>
                <CardTitle tag="h4">Duyuru Menüsü </CardTitle>
                <Duyurulistesi/>

              </CardHeader>
              <CardBody>
              

              </CardBody>


              <CardHeader>
                <CardTitle tag="h4">İndirim Menüsü</CardTitle>
              </CardHeader>

              <CardBody>

              </CardBody>
              <CardHeader>
                <CardTitle tag="h4">Burçlar Menüsü</CardTitle>
                <BurcEkle />
              </CardHeader>

             </Card>
          </Col>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>
                <CardTitle tag="h4"> </CardTitle>
                <p className="category"> </p>
              </CardHeader>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Sistemislemler;
