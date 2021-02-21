
import React from "react";
import Burcekle from "../../src/components/Admin/AddTutorial"

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
            <Table className="tablesorter" responsive>
                <thead className="text-primary">
                  <tr>
                    <th>Başlık</th>
                    <th>Duyuru Adı</th>  
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Başlık 1</td>
                    <td>Duyuru 1</td> 
                  </tr>
                  <tr>
                  <td>Başlık 2</td>
                    <td>Duyuru 2</td> 
                  </tr>
             
                </tbody>
              </Table>
          
              <CardHeader>
                <CardTitle tag="h4">Duyuru Menüsü </CardTitle>
              </CardHeader>
              <CardBody>
                <Burcekle />

              </CardBody>


              <CardHeader>
                <CardTitle tag="h4">İndirim Menüsü</CardTitle>
              </CardHeader>

              <CardBody>

              </CardBody>
              <CardHeader>
                <CardTitle tag="h4">Burçlar Menüsü</CardTitle>
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
