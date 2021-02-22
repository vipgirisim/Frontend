
import React from "react";/* 
import Duyuruekle from "../../src/components/Admin/AddTutorial"
import Duyuruekle from "../../src/components/Admin/tutorials-list" */
import BurcEkle from "../../src/components/Admin/BurclEkle"
import Duyurulistesi from "../../src/components/Admin/tutorials-list"
import Burclistesi from "../../src/components/Admin/burc-list"



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
                <Duyurulistesi />

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
                <Burclistesi/>
              </CardHeader>

              <CardHeader>
                <CardTitle tag="h4">Havuz Fal Menüsü</CardTitle>

               </CardHeader>

               <CardHeader>
                <CardTitle tag="h4">Slayt  Menüsü</CardTitle>
                
               </CardHeader>

               <CardHeader>
                <CardTitle tag="h4">Fal  Menüsü</CardTitle>
                <h1>Falları görüntüyebilme, filitreeybilme, araların arama yapabilme, Fallar için yapılan üye yorumlarını
görebilme ve onaylama / siilme / onaylarken düzenleyebilme. Üye adı ile yorumu da
düzenleyeblimeli. </h1>
               </CardHeader>

               <CardTitle tag="h4">Falcilar  Menüsü</CardTitle>
                <h1> Zamanı yoktur vs. Bu durumda ilgili falcı başka bir falcıya aktarmak gerekir. 
Aktarma yapıldığında yine havuz falı mantığında olur ve üye, aynı falcı cevaplamış zanneder.

 Bu tip aktarma için falcıların panelinde fal geldiğinde CEVAPLA butonu vardır, eğer bu buton tıkladıysa fala bakıyor demektir ki biz de falı
akatramayız. Bize “Şuan Falcı Fala Bakıyor” uyası çıkar ama falcı CEVAPLA butonuna basmadıysa
biz istediğimiz statüde ve yetkideki sistemdeki tüm falcılardan birini seçip aktarabiliriz. ( Bu
akarma sonrası yine falcı, aktaruıldığını bilmez ve havuz falcısı gibi fala ilk gönderdiği kişinin
baktığını zanneder ve yorum ile soruların da mantığı aynıdır ) Tüm satış raporlarını görebilir, falcı kaç fal bakmış görebilirim. </h1>
          

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
