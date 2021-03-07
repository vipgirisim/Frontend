import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import Layout from './Layout';
import messages from './messages';
import '../styles/App.scss';
import SubSistemislemler from "../views/subSistemislemler";
import Sistemislemler from "../views/Sistemislemler";
import Duyuruekle from "../../src/components/Admin/AddTutorial"
import BurcEkle from "../../src/components/Admin/BurclEkle"
import Duyurulistesi from "../../src/components/Admin/tutorials-list"
import Burclistesi from "../../src/components/Admin/burc-list"
import IndirimEkle from "../../src/components/Admin/indirimEkle"
import IndirimListesi from "../../src/components/Admin/indirim-list"
import FileUploadScreen from "../../src/components/Admin/resimyukle"
import { Button, Modal } from 'react-bootstrap'

import ReactDOM from 'react-dom';
import Menu, { SubMenu, Item as MenuItem, Divider } from 'rc-menu';
import 'rc-menu/assets/index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import { Grid } from '@material-ui/core';
import { func } from 'prop-types';

function handleSelect(info) {
  console.log('selected ', info);
}




const titleRight = (<span>Sistem İşlemler</span>);
const titleRight1 = (<span>Admin İşlemler</span>);
const titleRight2 = (<span>Mod İşlemler</span>);
const titleRight3 = (<span>Uye İşlemler</span>);
const titleRight4 = (<span>Falcı İşlemler</span>);

const titleRight5 = (<span>Sistem İşlemler</span>);
const titleRight6 = (<span>Havuz Fal</span>);
const titleRight7 = (<span>sub menu 3</span>);


 




export default class boardadmincomponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { content: "" };
  }
  handleClick(menuNo, menuCode) {
    let html = "";
    if (menuNo === 1) {
      switch (menuCode) {
        case "1-1":
          html = <Sistemislemler />
          break;
        case "1-2":
          html = <Duyuruekle />
          break;
        case "2-1":
          html = <Sistemislemler />
          break;
        case "2-2":
          html = <Duyuruekle />
          break;
        case "3-1":
          html = <Sistemislemler />
          break;
        case "3-2":
          html = <Duyuruekle />
          break;
        case "4-1":
          html = <Sistemislemler />
          break;
        case "4-2":
          html = <Duyuruekle />
          break;
        case "5-1":
          html = <Duyuruekle />
          break;
        case "5-2":
          html = <Duyurulistesi />
          break;
        case "5-3":
          html = <IndirimEkle />
          break;
        case "5-4":
          html = <IndirimListesi />
          break;
        case "5-5":
          html = <BurcEkle />
          break;
        case "5-6":
          html = <Burclistesi />
          break;
        case "5-7":
          html = <FileUploadScreen />
          break;
        case "5-8":
          html = <Duyuruekle />
          break;
        case "6":
          html = <Duyuruekle />
          break;
        case "7":
          html = <Duyuruekle />
          break;



        default: html = ""; break;
      }
    }

    this.setState({ content: html })
  }


  render() {


    return (

      <Grid container spacing={1}>
        <Grid container item xs={3} spacing={3} style={{ padding: 20 }}>


          <Menu style={
            {
              width: "100%",
            }
          }
          //onSelect={handleSelect}
          // defaultActiveFirst
          //onClick={handleClick}
          >


            <SubMenu title={titleRight1} key="1">
              <MenuItem key="1-1">
                <Link onClick={() => this.handleClick(1, "1-1")}>Ekle</Link>
              </MenuItem>
              <MenuItem key="1-2">
                <Link onClick={() => this.handleClick(1, "1-2")}>Listele / Güncelle / Sil</Link>
              </MenuItem>
            </SubMenu>
            <SubMenu title={titleRight2} key="2">
              <MenuItem key="2-1">
                <Link onClick={() => this.handleClick(1, "2-1")}>Ekle</Link>
              </MenuItem>
              <MenuItem key="2-2">
                <Link onClick={() => this.handleClick(1, "2-2")}>Listele / Güncelle / Sil</Link>
              </MenuItem>
            </SubMenu>
            <SubMenu title={titleRight3} key="3">
              <MenuItem key="3-1">
                <Link onClick={() => this.handleClick(1, "3-1")}>Ekle</Link>
              </MenuItem>
              <MenuItem key="3-2">
                <Link onClick={() => this.handleClick(1, "3-2")}>Listele / Güncelle / Sil</Link>
              </MenuItem>
            </SubMenu>

            <SubMenu title={titleRight4} key="4">
              <MenuItem key="4-1">
                <Link onClick={() => this.handleClick(1, "4-1")}>Ekle</Link>
              </MenuItem>
              <MenuItem key="4-2">
                <Link onClick={() => this.handleClick(1, "4-2")}>Listele / Güncelle / Sil</Link>
              </MenuItem>
            </SubMenu>

            <SubMenu title={titleRight5} key="5">
              <MenuItem key="5-1">
                <Link onClick={() => this.handleClick(1, "5-1")}>Duyuru Ekle</Link>
              </MenuItem>

              <MenuItem key="5-2">
                <Link onClick={() => this.handleClick(1, "5-2")}>Duyuru Düzenle</Link>
              </MenuItem>

              <MenuItem key="5-3">
                <Link onClick={() => this.handleClick(1, "5-3")}>İndirim Ekle</Link>
              </MenuItem>

              <MenuItem key="5-4">
                <Link onClick={() => this.handleClick(1, "5-4")}>İndirim Düzenle</Link>
              </MenuItem>

              <MenuItem key="5-5">
                <Link onClick={() => this.handleClick(1, "5-5")}>Burçlar Ekle</Link>
              </MenuItem>

              <MenuItem key="5-6">
                <Link onClick={() => this.handleClick(1, "5-6")}>Burçlar Listesi</Link>
              </MenuItem>

              <MenuItem key="5-7">
                <Link onClick={() => this.handleClick(1, "5-7")}>Slayt Resmi Ekle</Link>
              </MenuItem>

              <MenuItem key="5-7">
                <Link onClick={() => this.handleClick(1, "5-7")}>Mobil Css Tasarım</Link>
              </MenuItem>
            {/*   <MenuItem key="5-8">
                <Link onClick={() => this.handleClick(1, "5-8")}>Slayt Düzenle</Link>
              </MenuItem>  */}
            </SubMenu> 
           
           

              <SubMenu title={titleRight6} key="7">
              <MenuItem key="7">
              <Link onClick={() => this.handleClick(1, "5-7")}>Falcı Aktar</Link>
              </MenuItem> 
              </SubMenu>
              <MenuItem key="6">Bildirimler</MenuItem>

          </Menu>



        </Grid>
        <Grid container item xs={9} spacing={3} style={{ padding: 20 }}>
          <div id="page-content">
            {this.state.content}
          </div>

        </Grid>
      </Grid>
    )
  }
}


