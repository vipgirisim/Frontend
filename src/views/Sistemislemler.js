
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
<<<<<<< HEAD
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
          
=======

>>>>>>> 816c8dac8d650422e9924d518572ead7d5e65d05
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

<<<<<<< HEAD
=======
              <Table className="tablesorter" responsive>
                <thead className="text-primary">
                  <tr>
                    <th>Name</th>
                    <th>Country</th>
                    <th>City</th>
                    <th className="text-center">Salary</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Dakota Rice</td>
                    <td>Niger</td>
                    <td>Oud-Turnhout</td>
                    <td className="text-center">$36,738</td>
                  </tr>
                  <tr>
                    <td>Minerva Hooper</td>
                    <td>Curaçao</td>
                    <td>Sinaai-Waas</td>
                    <td className="text-center">$23,789</td>
                  </tr>
                  <tr>
                    <td>Sage Rodriguez</td>
                    <td>Netherlands</td>
                    <td>Baileux</td>
                    <td className="text-center">$56,142</td>
                  </tr>
                  <tr>
                    <td>Philip Chaney</td>
                    <td>Korea, South</td>
                    <td>Overland Park</td>
                    <td className="text-center">$38,735</td>
                  </tr>
                  <tr>
                    <td>Doris Greene</td>
                    <td>Malawi</td>
                    <td>Feldkirchen in Kärnten</td>
                    <td className="text-center">$63,542</td>
                  </tr>
                  <tr>
                    <td>Mason Porter</td>
                    <td>Chile</td>
                    <td>Gloucester</td>
                    <td className="text-center">$78,615</td>
                  </tr>
                  <tr>
                    <td>Jon Porter</td>
                    <td>Portugal</td>
                    <td>Gloucester</td>
                    <td className="text-center">$98,615</td>
                  </tr>
                </tbody>
              </Table>
>>>>>>> 816c8dac8d650422e9924d518572ead7d5e65d05
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
