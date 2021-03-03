import React, { Component } from "react";

import UserService from "../services/user.service";
import "bootstrap/dist/css/bootstrap.min.css";
 
import "../../src/assets/css/fontawesome.min.css";
import "../../src/assets/css/icomoon.css";
 
//import "../src/assets/scss/black-dashboard-react.scss";
//import "../src/assets/demo/demo.css";
//import "../src/assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from '../assets/images/logo/logo.png'
 
import todo11 from '../assets/images/todo/1/1.jpg'
import promovideo from '../assets/images/promo-video/2.png'
import togo21 from '../assets/images/todo/single/2/1.jpg'


import mobillogo from '../assets/images/logo/mobile-logo.png'
//assets/images/todo/single/2/1.jpg

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="container">

        <header class="site-header header-style-one header-style-one">

          <div class="site-navigation">
            <div class="container-fluid">
              <div class="row">
                <div class="col-12">
                  <div class="navbar navbar-expand-lg navigation-area">
                    <div class="site-logo-block">
                      <a class="navbar-brand site-logo" href="index.html">
 
                         <img src={logo} alt="logo" />
 
                      </a>
                    </div>

                    <div class="mainmenu-area">
                      <nav class="menu">
                        <ul id="nav">




                          <li><a href="#">Track Booking</a></li>
                          <li><a href="#">Offers</a></li>
                          <li><a href="#">Celebrities</a></li>
                          <li><a href="#">En</a></li>
                        </ul>
                      </nav>
                    </div>

                    <div class="header-navigation-right">



                      <div class="search-wrap">
                        <div class="search-btn" data-toggle="modal" data-target="#header_search_model">
                          <span class="icon icon-search32"></span>
                          <span class="text">Search</span>
                        </div>
                      </div>


                      <div class="user-registration-area dropdown">
                        <a class="user-reg-btn" href="#" data-toggle="modal" data-target="#reg_form_model">
                          <span class="icon icon-user-1"></span>
                          <span class="text">Login/Signup</span>
                        </a>
                      </div>
                      <div class="add-listing-area">
                        <a class="btn btn-default" href="#">Enrool as Celeb</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="mobile-menu">
            <a class="mobile-logo" href="index.html">
              <img src={mobillogo} alt="logo" />
            </a>
          </div>
        </header>

        <div id="sticky-header"></div>

        <div class="site-content">

          <div class="listing-todo-thumbnail-area style-two">
            <div class="todo-thumb bg-image" style={{backgroundImage: `url("http://vidyovi.madilink.net/assets/images/todo/single/2/1.jpg")`}}></div>

            <div class="listing-todo-header">
              <div class="container">
                <div class="row">
                  <div class="col-12">
                    <div class="listing-todo-content text-white">
                      <div class="content-left">

                        <div class="info">
                          <h3 class="title" style={{ color:"#cf202e"}}/* style="color:#cf202e;" */>Biz bir arada olduğumuzda <span class="text2" style={{ color:"#cf202e"}}>keyifliyiz.</span></h3>
                          <h4 class="sub-title" style={{ color:"#cf202e"}}>Biz bir arada olduğumuzda eğlenceliyiz.</h4>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="listing-todo-feature">
              <div class="container">
                <div class="row">
                  <div class="col-12">
                    <div class="listing-todo-feature-list">
                      <a href="#" class="single-list">
                        <span class="icon-video"></span>
                        <span class="text">Video Shoutout</span>
                      </a>
                      <a href="#" class="single-list">
                        <span class="icon-instagram"></span>
                        <span class="text">DM On Instagram</span>
                      </a>
                      <a href="#" class="single-list">
                        <span class=" icon-star"></span>
                        <span class="text">Star Hour</span>
                      </a>
                      <a href="#" class="single-list">
                        <span class="icon-bookmark1"></span>
                        <span class="text">Icons for Change</span>
                      </a>
                      <a href="#" class="single-list">
                        <span class="icon-flag1"></span>
                        <span class="text">Brand Enquiry</span>
                      </a>
                      <a href="#" class="single-list">
                        <span class="icon-camera"></span>
                        <span class="text">Live On</span>
                      </a>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="popular-categories-section popular-categories-style-two pb-100 pt-50 text-center">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <div class="section-header text-center">
                    <h2 class="section-title">Popular Category <span class="text2">Celebrity </span></h2>
                    <p>Make every moment special with a personalized message from your favorite celebrity</p>
                    <div class="divider">
                    </div>
                  </div></div>

                <div class="col-12">

                  <a class="btn btn-default" href="#">Video Calls</a> <a class="btn btn-default" href="#">Featured</a> <a class="btn btn-default" href="#">Trending</a>
                  <a class="btn btn-default" href="#">Movie Star</a> <a class="btn btn-default" href="#">Singer</a> <a class="btn btn-default" href="#">Dancer</a>
                  <a class="btn btn-default" href="#">Chef</a>  <a class="btn btn-default" href="#">Charity</a>
                </div>
              </div>
            </div>
          </div>





          <section class="popular-todos-section pb-00">
            <div class="container">
              <div class="row">

                <div class="col-lg-8">
                  <div class="section-header">
                    <h2 class="section-title">Featured <span class="text2">Celebrities</span></h2>
                    <p>Make every moment special with a personalized message from your favorite celebrity</p>
                    <div class="divider">
                    </div>
                  </div>
                </div>


              </div>
            </div>



            <div class="sz_video_003_wrapper">
              <div class="sz_video_003_trig">

                <div class="row">

                  <div class="col-xs-12 col-sm-4 col-md-2" style={{marginTop:"-20px"}} /* style={{"margin-top:-20px;"}} */>
                    <div class="sz_video_003_trig_wrap">
                      <div class="sz_video_003_trig_img">
                        <img src={todo11} alt="Thmubnail" />




                      </div>
                      <div class="sz_video_003_trig_txt">
                        <h3 class="title"><a href="#">Enrique Arce</a></h3>
                        <span>
                          by:<a href="#">Author's Name</a>
                        </span>

                      </div>
                    </div>
                  </div>

                  <div class="col-xs-12 col-sm-4 col-md-2">
                    <div class="sz_video_003_trig_wrap">
                      <div class="sz_video_003_trig_img">
                        <img src={todo11} alt="Thmubnail" />



                      </div>
                      <div class="sz_video_003_trig_txt">
                        <h3 class="title"><a href="#">Enrique Arce</a></h3>
                        <span>
                          by:<a href="#">Author's Name</a>
                        </span>

                      </div>
                    </div>
                  </div>


                  <div class="col-xs-12 col-sm-4 col-md-2" style={{marginTop:"-20px"}}>
                    <div class="sz_video_003_trig_wrap">

                      <div class="sz_video_003_trig_img">
                      <img src={todo11} alt="Thmubnail" />




                      </div>

                      <div class="sz_video_003_trig_txt">
                        <h3 class="title"><a href="#">Enrique Arce</a></h3>
                        <span>
                          by:<a href="#">Author's Name</a>
                        </span>

                      </div>
                    </div>
                  </div>

                  <div class="col-xs-12 col-sm-4 col-md-2">
                    <div class="sz_video_003_trig_wrap">
                      <div class="sz_video_003_trig_img">
                        <img  src={todo11} alt="Thmubnail" />



                      </div>
                      <div class="sz_video_003_trig_txt">
                        <h3 class="title"><a href="#">Enrique Arce</a></h3>
                        <span>
                          by:<a href="#">Author's Name</a>
                        </span>

                      </div>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-4 col-md-2" style={{marginTop:"-20px"}}>
                    <div class="sz_video_003_trig_wrap">
                      <div class="sz_video_003_trig_img">
                        <img  src={todo11} alt="Thmubnail" />



                      </div>
                      <div class="sz_video_003_trig_txt">
                        <h3 class="title"><a href="#">Enrique Arce</a></h3>
                        <span>
                          by:<a href="#">Author's Name</a>
                        </span>

                      </div>
                    </div>
                  </div>

                  <div class="col-xs-12 col-sm-4 col-md-2">
                    <div class="sz_video_003_trig_wrap">
                      <div class="sz_video_003_trig_img">
                        <img  src={todo11} alt="Thmubnail" />



                      </div>
                      <div class="sz_video_003_trig_txt">
                        <h3 class="title"><a href="#">Enrique Arce</a></h3>
                        <span>
                          by:<a href="#">Author's Name</a>
                        </span>

                      </div>
                    </div>
                  </div>

                </div>

                <div class="row">

                  <div class="col-xs-12 col-sm-4 col-md-2" style={{marginTop:"-20px"}}>
                    <div class="sz_video_003_trig_wrap">
                      <div class="sz_video_003_trig_img">
                        <img  src={todo11} alt="Thmubnail" />



                      </div>
                      <div class="sz_video_003_trig_txt">
                        <h3 class="title"><a href="#">Enrique Arce</a></h3>
                        <span>
                          by:<a href="#">Author's Name</a>
                        </span>

                      </div>
                    </div>
                  </div>

                  <div class="col-xs-12 col-sm-4 col-md-2">
                    <div class="sz_video_003_trig_wrap">
                      <div class="sz_video_003_trig_img">
                        <img  src={todo11} alt="Thmubnail" />



                      </div>
                      <div class="sz_video_003_trig_txt">
                        <h3 class="title"><a href="#">Enrique Arce</a></h3>
                        <span>
                          by:<a href="#">Author's Name</a>
                        </span>

                      </div>
                    </div>
                  </div>

                  <div class="col-xs-12 col-sm-4 col-md-2" style={{marginTop:"-20px"}}>
                    <div class="sz_video_003_trig_wrap">
                      <div class="sz_video_003_trig_img">
                        <img  src={todo11} alt="Thmubnail" />



                      </div>
                      <div class="sz_video_003_trig_txt">
                        <h3 class="title"><a href="#">Enrique Arce</a></h3>
                        <span>
                          by:<a href="#">Author's Name</a>
                        </span>

                      </div>
                    </div>
                  </div>

                  {/* 	{/* 	<!--  10th Box --> */}
                  <div class="col-xs-12 col-sm-4 col-md-2">
                    <div class="sz_video_003_trig_wrap">
                      {/* 	<!-- Image --> */}
                      <div class="sz_video_003_trig_img">
                        <img  src={todo11} alt="Thmubnail" />
                        {/* 	<!-- Trigger Button --> */}



                      </div>
                      {/* 	<!-- Trigger Text --> */}
                      <div class="sz_video_003_trig_txt">
                        <h3 class="title"><a href="#">Enrique Arce</a></h3>
                        <span>
                          by:<a href="#">Author's Name</a>
                        </span>

                      </div>
                    </div>{/* 	{/* 	<!-- /.sz_video_003_trig_wrap --> */}
                  </div>{/* 	{/* 	<!-- /1st Box --> */}

                  {/* 	<!-- 11th Box --> */}
                  <div class="col-xs-12 col-sm-4 col-md-2" style={{marginTop:"-20px"}}>
                    <div class="sz_video_003_trig_wrap">
                      {/* 	<!-- Image --> */}
                      <div class="sz_video_003_trig_img">
                        <img  src={todo11} alt="Thmubnail" />
                        {/* 	<!-- Trigger Button --> */}



                      </div>
                      {/* 	<!-- Trigger Text --> */}
                      <div class="sz_video_003_trig_txt">
                        <h3 class="title"><a href="#">Enrique Arce</a></h3>
                        <span>
                          by:<a href="#">Author's Name</a>
                        </span>

                      </div>
                    </div>{/* 	{/* 	<!-- /.sz_video_003_trig_wrap --> */}
                  </div>{/* 	{/* 	<!-- /1st Box --> */}

                  {/* 	<!-- 12th Box --> */}
                  <div class="col-xs-12 col-sm-4 col-md-2">
                    <div class="sz_video_003_trig_wrap">
                      {/* 	<!-- Image --> */}
                      <div class="sz_video_003_trig_img">
                        <img  src={todo11} alt="Thmubnail" />
                        {/* 	<!-- Trigger Button --> */}



                      </div>
                      {/* 	<!-- Trigger Text --> */}
                      <div class="sz_video_003_trig_txt">
                        <h3 class="title"><a href="#">Enrique Arce</a></h3>
                        <span>
                          by:<a href="#">Author's Name</a>
                        </span>

                      </div>
                    </div>{/* 	{/* 	<!-- /.sz_video_003_trig_wrap --> */}
                  </div>{/* 	{/* 	<!-- /1st Box --> */}

                </div>{/* 	{/* 	<!-- /End of 2nd Row --> */}

              </div>
            </div>


          </section>                     








	   <section class="promo-video-section promo-video-style-two bg-image bg-fixed pt-100 pb-50 mb-100"
     style={{backgroundImage: `url("http://vidyovi.madilink.net/assets/images/bg/promo-bg2.jpg)`}}> 
      
            <div class="container">
              <div class="row">
                <div class="col-lg-8">
                  <div class="section-header">
                    <h2 class="section-title"style={{ color:"#cf202e"}}>Star <span class="text2">Hours</span></h2>
                    <p>Make every moment special with a personalized message from your favorite celebrity</p>
                    <div class="divider">
                    </div>
                  </div>
                </div>


              </div>
            </div>



            <div class="sz_video_003_wrapper">
              <div class="sz_video_003_trig">

                {/* 	<!-- 1st Row --> */}
                <div class="row">

                  {/* 	<!-- 1st Box --> */}
                  <div class="col-xs-12 col-sm-4 col-md-2"  style={{marginTop:"-20px;"}} /* style="margin-top:-20px;" */>
                    <div class="sz_video_003_trig_wrap">
                      {/* 	<!-- Image --> */}
                      <div class="sz_video_003_trig_img">
                        <img  src={todo11} alt="Thmubnail" />
                        {/* 	<!-- Trigger Button --> */}



                      </div>
                      {/* 	<!-- Trigger Text --> */}
                      <div class="sz_video_003_trig_txt">
                        <h3 class="title"style={{ color:"#fff"}}><a href="#">Enrique Arce</a></h3>
                        <span style={{ color:"#fff"}}>
                          by:<a href="#" style={{ color:"#fff"}}/* style="color:#fff;" */>Author's Name</a>
                        </span>

                      </div>
                    </div>{/* 	{/* 	<!-- /.sz_video_003_trig_wrap --> */}
                  </div>{/* 	{/* 	<!-- /1st Box --> */}

                  {/* 	<!-- 2nd Box --> */}
                  <div class="col-xs-12 col-sm-4 col-md-2">
                    <div class="sz_video_003_trig_wrap">
                      {/* 	<!-- Image --> */}
                      <div class="sz_video_003_trig_img">
                        <img  src={todo11} alt="Thmubnail" />
                        {/* 	<!-- Trigger Button --> */}



                      </div>
                      {/* 	<!-- Trigger Text --> */}
                      <div class="sz_video_003_trig_txt">
                        <h3 class="title"style={{ color:"#ffff"}}><a href="#">Enrique Arce</a></h3>
                        <span /* style="color:#fff;" */>
                          by:<a href="#" /* style="color:#fff;" */>Author's Name</a>
                        </span>

                      </div>
                    </div>{/* 	{/* 	<!-- /.sz_video_003_trig_wrap --> */}
                  </div>{/* 	{/* 	<!-- /1st Box --> */}

                  {/* 	<!-- 3rd Box --> */}
                  <div class="col-xs-12 col-sm-4 col-md-2" /* style="margin-top:-20px;" */>
                    <div class="sz_video_003_trig_wrap">
                      {/* 	<!-- Image --> */}
                      <div class="sz_video_003_trig_img">
                        <img  src={todo11} alt="Thmubnail" />
                        {/* 	<!-- Trigger Button --> */}



                      </div>
                      {/* 	<!-- Trigger Text --> */}
                      <div class="sz_video_003_trig_txt">
                        <h3 class="title" style={{ color:"#fffff"}}><a href="#">Enrique Arce</a></h3>
                        <span style={{ color:"#fffff"}}>
                          by:<a href="#" style={{ color:"#ffff"}}>Author's Name</a>
                        </span>

                      </div>
                    </div>{/* 	{/* 	<!-- /.sz_video_003_trig_wrap --> */}
                  </div>{/* 	{/* 	<!-- /1st Box --> */}

                  {/* 	<!-- 4th Box --> */}
                  <div class="col-xs-12 col-sm-4 col-md-2">
                    <div class="sz_video_003_trig_wrap">
                      {/* 	<!-- Image --> */}
                      <div class="sz_video_003_trig_img">
                        <img  src={todo11} alt="Thmubnail" />
                        {/* 	<!-- Trigger Button --> */}



                      </div>
                      {/* 	<!-- Trigger Text --> */}
                      <div class="sz_video_003_trig_txt">
                        <div class="sz_video_003_trig_txt">
                        <h3 class="title" style={{ color:"#fffff"}}><a href="#">Enrique Arce</a></h3>
                        <span style={{ color:"#fffff"}}>
                          by:<a href="#" style={{ color:"#ffff"}}>Author's Name</a>
                        </span>

                      </div>

                      </div>
                    </div>{/* 	{/* 	<!-- /.sz_video_003_trig_wrap --> */}
                  </div>{/* 	{/* 	<!-- /1st Box --> */}

                  {/* 	<!-- 5th Box --> */}
                  <div class="col-xs-12 col-sm-4 col-md-2" /* style="margin-top:-20px;" */>
                    <div class="sz_video_003_trig_wrap">
                      {/* 	<!-- Image --> */}
                      <div class="sz_video_003_trig_img">
                        <img  src={todo11} alt="Thmubnail" />
                        {/* 	<!-- Trigger Button --> */}



                      </div>
                      {/* 	<!-- Trigger Text --> */}
                      <div class="sz_video_003_trig_txt">
                      <h3 class="title" style={{ color:"#fffff"}}><a href="#">Enrique Arce</a></h3>
                        <span style={{ color:"#fffff"}}>
                          by:<a href="#" style={{ color:"#ffff"}}>Author's Name</a>
                        </span>

                      </div>
                    </div>{/* 	{/* 	<!-- /.sz_video_003_trig_wrap --> */}
                  </div>{/* 	{/* 	<!-- /1st Box --> */}

                  {/* 	<!-- 6th Box --> */}
                  <div class="col-xs-12 col-sm-4 col-md-2">
                    <div class="sz_video_003_trig_wrap">
                      {/* 	<!-- Image --> */}
                      <div class="sz_video_003_trig_img">
                        <img  src={todo11} alt="Thmubnail" />
                        {/* 	<!-- Trigger Button --> */}



                      </div>
                      {/* 	<!-- Trigger Text --> */}
                      <div class="sz_video_003_trig_txt">
                      <h3 class="title" style={{ color:"#fffff"}}><a href="#">Enrique Arce</a></h3>
                        <span style={{ color:"#fffff"}}>
                          by:<a href="#" style={{ color:"#ffff"}}>Author's Name</a>
                        </span>

                      </div>
                    </div> 
                  </div> 

                </div> 




              </div>
            </div>


          </section>                     
 


        <section class="popular-todos-section ptb-00">
            <div class="container">
              <div class="row">
                <div class="col-lg-8">
                  <div class="section-header">
                    <h2 class="section-title">International <span class="text2">Stars</span></h2>
                    <p>Make every moment special with a personalized message from your favorite celebrity</p>
                    <div class="divider">
                    </div>
                  </div>
                </div>


              </div>
            </div>

            <div class="tab-content filter-tab-content">
              <div class="tab-pane fade show active" id="todo_latest" role="tabpanel">
                <div class="todo-items-carousel owl-carousel carousel-nav-text">

                  <div class="popular-todo-item">
                    <div class="todo-thumbnail-area">
                      <figure class="item-thumb">
                        <img  src={todo11} alt="Thmubnail" />
                      </figure>
                      <div class="todo-overlay-info">
                        <h4 class="todo-type rated">top rated</h4>
                        <div class="todo-meta-bottom">
                          <a href="#" class="save">
                            <i class="fa fa-heart"></i>
                                            Like
                                        </a>


                        </div>
                      </div>
                    </div>
                    <div class="todo-content">
                      <h3 class="title"><a href="#">Enrique Arce</a></h3>
                      <div class="todo-rating">
                        <div class="rating-value">
                          <span>4.8</span>16 Ratings
                                    </div>
                        <div class="rating-icon">
                          <ul>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li>$</li>
                          </ul>
                        </div>
                      </div>




                    </div>


                  </div>

                  <div class="popular-todo-item">
                    <div class="todo-thumbnail-area">
                      <figure class="item-thumb">
                        <img  src={todo11} alt="Thmubnail" />
                      </figure>
                      <div class="todo-overlay-info">
                        <h4 class="todo-type rated">top rated</h4>
                        <div class="todo-meta-bottom">
                          <a href="#" class="save">
                            <i class="fa fa-heart"></i>
                                            Like
                                        </a>


                        </div>
                      </div>
                    </div>
                    <div class="todo-content">
                      <h3 class="title"><a href="#">Enrique Arce</a></h3>
                      <div class="todo-rating">
                        <div class="rating-value">
                          <span>4.8</span>16 Ratings
                                    </div>
                        <div class="rating-icon">
                          <ul>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li>$</li>
                          </ul>
                        </div>
                      </div> 




                    </div> 


                  </div>

                  <div class="popular-todo-item">
                    <div class="todo-thumbnail-area">
                      <figure class="item-thumb">
                        <img src={"./src/assets/images/todo/1/1.jpg"} alt="Thmubnail" />
                      </figure> 
                      <div class="todo-overlay-info">
                        <h4 class="todo-type rated">top rated</h4>
                        <div class="todo-meta-bottom">
                          <a href="#" class="save">
                            <i class="fa fa-heart"></i>
                                            Like
                                        </a>


                        </div>
                      </div>{/*<!--./ section-header --> */}
                    </div>{/*<!--./ todo-overlay-info --> */}
                    <div class="todo-content">
                      <h3 class="title"><a href="#">Enrique Arce</a></h3>
                      <div class="todo-rating">
                        <div class="rating-value">
                          <span>4.8</span>16 Ratings
                                    </div>
                        <div class="rating-icon">
                          <ul>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li>$</li>
                          </ul>
                        </div>
                      </div>{/*<!--./ todo-rating --> */}




                    </div>{/*<!--./ todo-content --> */}


                  </div>

                  <div class="popular-todo-item">
                    <div class="todo-thumbnail-area">
                      <figure class="item-thumb">
                        <img  src={todo11} alt="Thmubnail" />
                      </figure>{/*<!--./ item-thumb --> */}
                      <div class="todo-overlay-info">
                        <h4 class="todo-type rated">top rated</h4>
                        <div class="todo-meta-bottom">
                          <a href="#" class="save">
                            <i class="fa fa-heart"></i>
                                            Like
                                        </a>


                        </div>
                      </div>{/*<!--./ section-header --> */}
                    </div>{/*<!--./ todo-overlay-info --> */}
                    <div class="todo-content">
                      <h3 class="title"><a href="#">Enrique Arce</a></h3>
                      <div class="todo-rating">
                        <div class="rating-value">
                          <span>4.8</span>16 Ratings
                                    </div>
                        <div class="rating-icon">
                          <ul>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li>$</li>
                          </ul>
                        </div>
                      </div>{/*<!--./ todo-rating --> */}




                    </div>{/*<!--./ todo-content --> */}


                  </div>

                  <div class="popular-todo-item">
                    <div class="todo-thumbnail-area">
                      <figure class="item-thumb">
                        <img  src={todo11} alt="Thmubnail" />
                      </figure>{/*<!--./ item-thumb --> */}
                      <div class="todo-overlay-info">
                        <h4 class="todo-type rated">top rated</h4>
                        <div class="todo-meta-bottom">
                          <a href="#" class="save">
                            <i class="fa fa-heart"></i>
                                            Like
                                        </a>


                        </div>
                      </div>{/*<!--./ section-header --> */}
                    </div>{/*<!--./ todo-overlay-info --> */}
                    <div class="todo-content">
                      <h3 class="title"><a href="#">Enrique Arce</a></h3>
                      <div class="todo-rating">
                        <div class="rating-value">
                          <span>4.8</span>16 Ratings
                                    </div>
                        <div class="rating-icon">
                          <ul>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li>$</li>
                          </ul>
                        </div>
                      </div>{/*<!--./ todo-rating --> */}




                    </div>{/*<!--./ todo-content --> */}


                  </div>

                  <div class="popular-todo-item">
                    <div class="todo-thumbnail-area">
                      <figure class="item-thumb">
                        <img  src={todo11} alt="Thmubnail" />
                      </figure>{/*<!--./ item-thumb --> */}
                      <div class="todo-overlay-info">
                        <h4 class="todo-type rated">top rated</h4>
                        <div class="todo-meta-bottom">
                          <a href="#" class="save">
                            <i class="fa fa-heart"></i>
                                            Like
                                        </a>


                        </div>
                      </div>{/*<!--./ section-header --> */}
                    </div>{/*<!--./ todo-overlay-info --> */}
                    <div class="todo-content">
                      <h3 class="title"><a href="#">Enrique Arce</a></h3>
                      <div class="todo-rating">
                        <div class="rating-value">
                          <span>4.8</span>16 Ratings
                                    </div>
                        <div class="rating-icon">
                          <ul>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li>$</li>
                          </ul>
                        </div>
                      </div>{/*<!--./ todo-rating --> */}




                    </div>{/*<!--./ todo-content --> */}


                  </div>
                </div>
              </div>





            </div>
          </section>



          <section class="popular-todos-section ptb-00">
            <div class="container">
              <div class="row">

                <div class="col-lg-8">
                  <div class="section-header">
                    <h2 class="section-title">Easy <span class="text2">On Packet</span></h2>
                    <p>Make every moment special with a personalized message from your favorite celebrity</p>
                    <div class="divider">
                    </div>
                  </div>
                </div>{/*<!--./ section-header --> */}


              </div>
            </div>

            <div class="tab-content filter-tab-content">

              <div class="tab-pane fade show active" id="todo_latest" role="tabpanel">
                <div class="todo-items-carousel owl-carousel carousel-nav-text">


                  <div class="popular-todo-item">
                    <div class="todo-thumbnail-area">
                      <figure class="item-thumb">
                        <img  src={todo11} alt="Thmubnail" />
                      </figure>{/*<!--./ item-thumb --> */}
                      <div class="todo-overlay-info">
                        <h4 class="todo-type rated">top rated</h4>
                        <div class="todo-meta-bottom">
                          <a href="#" class="save">
                            <i class="fa fa-heart"></i>
                                            Like
                                        </a>


                        </div>
                      </div>{/*<!--./ section-header --> */}
                    </div>{/*<!--./ todo-overlay-info --> */}
                    <div class="todo-content">
                      <h3 class="title"><a href="#">Enrique Arce</a></h3>
                      <div class="todo-rating">
                        <div class="rating-value">
                          <span>4.8</span>16 Ratings
                                    </div>
                        <div class="rating-icon">
                          <ul>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li>$</li>
                          </ul>
                        </div>
                      </div>{/*<!--./ todo-rating --> */}




                    </div>{/*<!--./ todo-content --> */}


                  </div>


                  <div class="popular-todo-item">
                    <div class="todo-thumbnail-area">
                      <figure class="item-thumb">
                        <img  src={todo11} alt="Thmubnail" />
                      </figure>{/*<!--./ item-thumb --> */}
                      <div class="todo-overlay-info">
                        <h4 class="todo-type rated">top rated</h4>
                        <div class="todo-meta-bottom">
                          <a href="#" class="save">
                            <i class="fa fa-heart"></i>
                                            Like
                                        </a>


                        </div>
                      </div>{/*<!--./ section-header --> */}
                    </div>{/*<!--./ todo-overlay-info --> */}
                    <div class="todo-content">
                      <h3 class="title"><a href="#">Enrique Arce</a></h3>
                      <div class="todo-rating">
                        <div class="rating-value">
                          <span>4.8</span>16 Ratings
                                    </div>
                        <div class="rating-icon">
                          <ul>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li>$</li>
                          </ul>
                        </div>
                      </div>{/*<!--./ todo-rating --> */}




                    </div>{/*<!--./ todo-content --> */}


                  </div>


                  <div class="popular-todo-item">
                    <div class="todo-thumbnail-area">
                      <figure class="item-thumb">
                        <img  src={todo11} alt="Thmubnail" />
                      </figure>{/*<!--./ item-thumb --> */}
                      <div class="todo-overlay-info">
                        <h4 class="todo-type rated">top rated</h4>
                        <div class="todo-meta-bottom">
                          <a href="#" class="save">
                            <i class="fa fa-heart"></i>
                                            Like
                                        </a>


                        </div>
                      </div>{/*<!--./ section-header --> */}
                    </div>{/*<!--./ todo-overlay-info --> */}
                    <div class="todo-content">
                      <h3 class="title"><a href="#">Enrique Arce</a></h3>
                      <div class="todo-rating">
                        <div class="rating-value">
                          <span>4.8</span>16 Ratings
                                    </div>
                        <div class="rating-icon">
                          <ul>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li>$</li>
                          </ul>
                        </div>
                      </div>{/*<!--./ todo-rating --> */}




                    </div>{/*<!--./ todo-content --> */}


                  </div>


                  <div class="popular-todo-item">
                    <div class="todo-thumbnail-area">
                      <figure class="item-thumb">
                        <img  src={todo11} alt="Thmubnail" />
                      </figure>{/*<!--./ item-thumb --> */}
                      <div class="todo-overlay-info">
                        <h4 class="todo-type rated">top rated</h4>
                        <div class="todo-meta-bottom">
                          <a href="#" class="save">
                            <i class="fa fa-heart"></i>
                                            Like
                                        </a>


                        </div>
                      </div>{/*<!--./ section-header --> */}
                    </div>{/*<!--./ todo-overlay-info --> */}
                    <div class="todo-content">
                      <h3 class="title"><a href="#">Enrique Arce</a></h3>
                      <div class="todo-rating">
                        <div class="rating-value">
                          <span>4.8</span>16 Ratings
                                    </div>
                        <div class="rating-icon">
                          <ul>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li>$</li>
                          </ul>
                        </div>
                      </div>{/*<!--./ todo-rating --> */}




                    </div>{/*<!--./ todo-content --> */}


                  </div>


                  <div class="popular-todo-item">
                    <div class="todo-thumbnail-area">
                      <figure class="item-thumb">
                        <img  src={todo11} alt="Thmubnail" />
                      </figure>{/*<!--./ item-thumb --> */}
                      <div class="todo-overlay-info">
                        <h4 class="todo-type rated">top rated</h4>
                        <div class="todo-meta-bottom">
                          <a href="#" class="save">
                            <i class="fa fa-heart"></i>
                                            Like
                                        </a>


                        </div>
                      </div>{/*<!--./ section-header --> */}
                    </div>{/*<!--./ todo-overlay-info --> */}
                    <div class="todo-content">
                      <h3 class="title"><a href="#">Enrique Arce</a></h3>
                      <div class="todo-rating">
                        <div class="rating-value">
                          <span>4.8</span>16 Ratings
                                    </div>
                        <div class="rating-icon">
                          <ul>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li>$</li>
                          </ul>
                        </div>
                      </div>{/*<!--./ todo-rating --> */}




                    </div>{/*<!--./ todo-content --> */}


                  </div>


                  <div class="popular-todo-item">
                    <div class="todo-thumbnail-area">
                      <figure class="item-thumb">
                        <img  src={todo11} alt="Thmubnail" />
                      </figure>{/*<!--./ item-thumb --> */}
                      <div class="todo-overlay-info">
                        <h4 class="todo-type rated">top rated</h4>
                        <div class="todo-meta-bottom">
                          <a href="#" class="save">
                            <i class="fa fa-heart"></i>
                                            Like
                                        </a>


                        </div>
                      </div>{/*<!--./ section-header --> */}
                    </div>{/*<!--./ todo-overlay-info --> */}
                    <div class="todo-content">
                      <h3 class="title"><a href="#">Enrique Arce</a></h3>
                      <div class="todo-rating">
                        <div class="rating-value">
                          <span>4.8</span>16 Ratings
                                    </div>
                        <div class="rating-icon">
                          <ul>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li>$</li>
                          </ul>
                        </div>
                      </div>{/*<!--./ todo-rating --> */}




                    </div>{/*<!--./ todo-content --> */}


                  </div>
                </div>
              </div>                      {/*<!--~ end tab pane /* ~--> */} */





            </div>                      {/*<!--~ end filter tab content area /* ~--> */} */
        </section>                      {/*<!--~End popular todos section /* ~--> */} */





		<section class="popular-todos-section ptb-00">
            <div class="container">
              <div class="row">
                <div class="col-lg-8">
                  <div class="section-header">
                    <h2 class="section-title"> <span class="text2">Trending</span></h2>
                    <p>Make every moment special with a personalized message from your favorite celebrity</p>
                    <div class="divider">
                    </div>
                  </div>
                </div>{/*<!--./ section-header --> */}


              </div>
            </div>

            <div class="tab-content filter-tab-content">
              <div class="tab-pane fade show active" id="todo_latest" role="tabpanel">
                <div class="todo-items-carousel owl-carousel carousel-nav-text">
                  <div class="popular-todo-item">
                    <div class="todo-thumbnail-area">
                      <figure class="item-thumb">
                        <img  src={todo11} alt="Thmubnail" />
                      </figure>{/*<!--./ item-thumb --> */}
                      <div class="todo-overlay-info">
                        <h4 class="todo-type rated">top rated</h4>
                        <div class="todo-meta-bottom">
                          <a href="#" class="save">
                            <i class="fa fa-heart"></i>
                                            Like
                                        </a>


                        </div>
                      </div>{/*<!--./ section-header --> */}
                    </div>{/*<!--./ todo-overlay-info --> */}
                    <div class="todo-content">
                      <h3 class="title"><a href="#">Enrique Arce</a></h3>
                      <div class="todo-rating">
                        <div class="rating-value">
                          <span>4.8</span>16 Ratings
                                    </div>
                        <div class="rating-icon">
                          <ul>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li>$</li>
                          </ul>
                        </div>
                      </div>{/*<!--./ todo-rating --> */}




                    </div>{/*<!--./ todo-content --> */}


                  </div>

                  <div class="popular-todo-item">
                    <div class="todo-thumbnail-area">
                      <figure class="item-thumb">
                        <img  src={todo11} alt="Thmubnail" />
                      </figure>{/*<!--./ item-thumb --> */}
                      <div class="todo-overlay-info">
                        <h4 class="todo-type rated">top rated</h4>
                        <div class="todo-meta-bottom">
                          <a href="#" class="save">
                            <i class="fa fa-heart"></i>
                                            Like
                                        </a>


                        </div>
                      </div>{/*<!--./ section-header --> */}
                    </div>{/*<!--./ todo-overlay-info --> */}
                    <div class="todo-content">
                      <h3 class="title"><a href="#">Enrique Arce</a></h3>
                      <div class="todo-rating">
                        <div class="rating-value">
                          <span>4.8</span>16 Ratings
                                    </div>
                        <div class="rating-icon">
                          <ul>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li>$</li>
                          </ul>
                        </div>
                      </div>{/*<!--./ todo-rating --> */}




                    </div>{/*<!--./ todo-content --> */}


                  </div>

                  <div class="popular-todo-item">
                    <div class="todo-thumbnail-area">
                      <figure class="item-thumb">
                        <img  src={todo11} alt="Thmubnail" />
                      </figure>{/*<!--./ item-thumb --> */}
                      <div class="todo-overlay-info">
                        <h4 class="todo-type rated">top rated</h4>
                        <div class="todo-meta-bottom">
                          <a href="#" class="save">
                            <i class="fa fa-heart"></i>
                                            Like
                                        </a>


                        </div>
                      </div>{/*<!--./ section-header --> */}
                    </div>{/*<!--./ todo-overlay-info --> */}
                    <div class="todo-content">
                      <h3 class="title"><a href="#">Enrique Arce</a></h3>
                      <div class="todo-rating">
                        <div class="rating-value">
                          <span>4.8</span>16 Ratings
                                    </div>
                        <div class="rating-icon">
                          <ul>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li>$</li>
                          </ul>
                        </div>
                      </div>{/*<!--./ todo-rating --> */}




                    </div>{/*<!--./ todo-content --> */}


                  </div>

                  <div class="popular-todo-item">
                    <div class="todo-thumbnail-area">
                      <figure class="item-thumb">
                        <img  src={todo11} alt="Thmubnail" />
                      </figure>{/*<!--./ item-thumb --> */}
                      <div class="todo-overlay-info">
                        <h4 class="todo-type rated">top rated</h4>
                        <div class="todo-meta-bottom">
                          <a href="#" class="save">
                            <i class="fa fa-heart"></i>
                                            Like
                                        </a>


                        </div>
                      </div>{/*<!--./ section-header --> */}
                    </div>{/*<!--./ todo-overlay-info --> */}
                    <div class="todo-content">
                      <h3 class="title"><a href="#">Enrique Arce</a></h3>
                      <div class="todo-rating">
                        <div class="rating-value">
                          <span>4.8</span>16 Ratings
                                    </div>
                        <div class="rating-icon">
                          <ul>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li>$</li>
                          </ul>
                        </div>
                      </div>{/*<!--./ todo-rating --> */}




                    </div>{/*<!--./ todo-content --> */}


                  </div>

                  <div class="popular-todo-item">
                    <div class="todo-thumbnail-area">
                      <figure class="item-thumb">
                        <img  src={todo11} alt="Thmubnail" />
                      </figure>{/*<!--./ item-thumb --> */}
                      <div class="todo-overlay-info">
                        <h4 class="todo-type rated">top rated</h4>
                        <div class="todo-meta-bottom">
                          <a href="#" class="save">
                            <i class="fa fa-heart"></i>
                                            Like
                                        </a>


                        </div>
                      </div>{/*<!--./ section-header --> */}
                    </div>{/*<!--./ todo-overlay-info --> */}
                    <div class="todo-content">
                      <h3 class="title"><a href="#">Enrique Arce</a></h3>
                      <div class="todo-rating">
                        <div class="rating-value">
                          <span>4.8</span>16 Ratings
                                    </div>
                        <div class="rating-icon">
                          <ul>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li>$</li>
                          </ul>
                        </div>
                      </div>{/*<!--./ todo-rating --> */}




                    </div>{/*<!--./ todo-content --> */}


                  </div>

                  <div class="popular-todo-item">
                    <div class="todo-thumbnail-area">
                      <figure class="item-thumb">
                        <img  src={todo11} alt="Thmubnail" />
                      </figure>{/*<!--./ item-thumb --> */}
                      <div class="todo-overlay-info">
                        <h4 class="todo-type rated">top rated</h4>
                        <div class="todo-meta-bottom">
                          <a href="#" class="save">
                            <i class="fa fa-heart"></i>
                                            Like
                                        </a>


                        </div>
                      </div>{/*<!--./ section-header --> */}
                    </div>{/*<!--./ todo-overlay-info --> */}
                    <div class="todo-content">
                      <h3 class="title"><a href="#">Enrique Arce</a></h3>
                      <div class="todo-rating">
                        <div class="rating-value">
                          <span>4.8</span>16 Ratings
                                    </div>
                        <div class="rating-icon">
                          <ul>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li>$</li>
                          </ul>
                        </div>
                      </div>{/*<!--./ todo-rating --> */}




                    </div>{/*<!--./ todo-content --> */}


                  </div>
                </div>
              </div>                      {/*<!--~ end tab pane /* ~--> */} */





            </div>                      {/*<!--~ end filter tab content area /* ~--> */} */
        </section>                      {/*<!--~End popular todos section /* ~--> */} */








		<section class="popular-todos-section ptb-00">
            <div class="container">
              <div class="row">
                <div class="col-lg-8">
                  <div class="section-header">
                    <h2 class="section-title"> <span class="text2">Models</span></h2>
                    <p>Make every moment special with a personalized message from your favorite celebrity</p>
                    <div class="divider">
                    </div>
                  </div>
                </div>{/*<!--./ section-header --> */}


              </div>
            </div>

            <div class="tab-content filter-tab-content">
              <div class="tab-pane fade show active" id="todo_latest" role="tabpanel">
                <div class="todo-items-carousel owl-carousel carousel-nav-text">
                  <div class="popular-todo-item">
                    <div class="todo-thumbnail-area">
                      <figure class="item-thumb">
                        <img  src={todo11} alt="Thmubnail" />
                      </figure>{/*<!--./ item-thumb --> */}
                      <div class="todo-overlay-info">
                        <h4 class="todo-type rated">top rated</h4>
                        <div class="todo-meta-bottom">
                          <a href="#" class="save">
                            <i class="fa fa-heart"></i>
                                            Like
                                        </a>


                        </div>
                      </div>{/*<!--./ section-header --> */}
                    </div>{/*<!--./ todo-overlay-info --> */}
                    <div class="todo-content">
                      <h3 class="title"><a href="#">Enrique Arce</a></h3>
                      <div class="todo-rating">
                        <div class="rating-value">
                          <span>4.8</span>16 Ratings
                                    </div>
                        <div class="rating-icon">
                          <ul>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li>$</li>
                          </ul>
                        </div>
                      </div>{/*<!--./ todo-rating --> */}




                    </div>{/*<!--./ todo-content --> */}


                  </div>

                  <div class="popular-todo-item">
                    <div class="todo-thumbnail-area">
                      <figure class="item-thumb">
                        <img  src={todo11} alt="Thmubnail" />
                      </figure>{/*<!--./ item-thumb --> */}
                      <div class="todo-overlay-info">
                        <h4 class="todo-type rated">top rated</h4>
                        <div class="todo-meta-bottom">
                          <a href="#" class="save">
                            <i class="fa fa-heart"></i>
                                            Like
                                        </a>


                        </div>
                      </div>{/*<!--./ section-header --> */}
                    </div>{/*<!--./ todo-overlay-info --> */}
                    <div class="todo-content">
                      <h3 class="title"><a href="#">Enrique Arce</a></h3>
                      <div class="todo-rating">
                        <div class="rating-value">
                          <span>4.8</span>16 Ratings
                                    </div>
                        <div class="rating-icon">
                          <ul>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li>$</li>
                          </ul>
                        </div>
                      </div>{/*<!--./ todo-rating --> */}




                    </div>{/*<!--./ todo-content --> */}


                  </div>

                  <div class="popular-todo-item">
                    <div class="todo-thumbnail-area">
                      <figure class="item-thumb">
                        <img  src={todo11} alt="Thmubnail" />
                      </figure>{/*<!--./ item-thumb --> */}
                      <div class="todo-overlay-info">
                        <h4 class="todo-type rated">top rated</h4>
                        <div class="todo-meta-bottom">
                          <a href="#" class="save">
                            <i class="fa fa-heart"></i>
                                            Like
                                        </a>


                        </div>
                      </div>{/*<!--./ section-header --> */}
                    </div>{/*<!--./ todo-overlay-info --> */}
                    <div class="todo-content">
                      <h3 class="title"><a href="#">Enrique Arce</a></h3>
                      <div class="todo-rating">
                        <div class="rating-value">
                          <span>4.8</span>16 Ratings
                                    </div>
                        <div class="rating-icon">
                          <ul>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li>$</li>
                          </ul>
                        </div>
                      </div>{/*<!--./ todo-rating --> */}




                    </div>{/*<!--./ todo-content --> */}


                  </div>

                  <div class="popular-todo-item">
                    <div class="todo-thumbnail-area">
                      <figure class="item-thumb">
                        <img  src={todo11} alt="Thmubnail" />
                      </figure>{/*<!--./ item-thumb --> */}
                      <div class="todo-overlay-info">
                        <h4 class="todo-type rated">top rated</h4>
                        <div class="todo-meta-bottom">
                          <a href="#" class="save">
                            <i class="fa fa-heart"></i>
                                            Like
                                        </a>


                        </div>
                      </div>{/*<!--./ section-header --> */}
                    </div>{/*<!--./ todo-overlay-info --> */}
                    <div class="todo-content">
                      <h3 class="title"><a href="#">Enrique Arce</a></h3>
                      <div class="todo-rating">
                        <div class="rating-value">
                          <span>4.8</span>16 Ratings
                                    </div>
                        <div class="rating-icon">
                          <ul>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li>$</li>
                          </ul>
                        </div>
                      </div>{/*<!--./ todo-rating --> */}




                    </div>{/*<!--./ todo-content --> */}


                  </div>

                  <div class="popular-todo-item">
                    <div class="todo-thumbnail-area">
                      <figure class="item-thumb">
                        <img  src={todo11} alt="Thmubnail" />
                      </figure>{/*<!--./ item-thumb --> */}
                      <div class="todo-overlay-info">
                        <h4 class="todo-type rated">top rated</h4>
                        <div class="todo-meta-bottom">
                          <a href="#" class="save">
                            <i class="fa fa-heart"></i>
                                            Like
                                        </a>


                        </div>
                      </div>{/*<!--./ section-header --> */}
                    </div>{/*<!--./ todo-overlay-info --> */}
                    <div class="todo-content">
                      <h3 class="title"><a href="#">Enrique Arce</a></h3>
                      <div class="todo-rating">
                        <div class="rating-value">
                          <span>4.8</span>16 Ratings
                                    </div>
                        <div class="rating-icon">
                          <ul>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li>$</li>
                          </ul>
                        </div>
                      </div>{/*<!--./ todo-rating --> */}




                    </div>{/*<!--./ todo-content --> */}


                  </div>

                  <div class="popular-todo-item">
                    <div class="todo-thumbnail-area">
                      <figure class="item-thumb">
                        <img  src={todo11} alt="Thmubnail" />
                      </figure>{/*<!--./ item-thumb --> */}
                      <div class="todo-overlay-info">
                        <h4 class="todo-type rated">top rated</h4>
                        <div class="todo-meta-bottom">
                          <a href="#" class="save">
                            <i class="fa fa-heart"></i>
                                            Like
                                        </a>


                        </div>
                      </div>{/*<!--./ section-header --> */}
                    </div>{/*<!--./ todo-overlay-info --> */}
                    <div class="todo-content">
                      <h3 class="title"><a href="#">Enrique Arce</a></h3>
                      <div class="todo-rating">
                        <div class="rating-value">
                          <span>4.8</span>16 Ratings
                                    </div>
                        <div class="rating-icon">
                          <ul>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li>$</li>
                          </ul>
                        </div>
                      </div>{/*<!--./ todo-rating --> */}




                    </div>{/*<!--./ todo-content --> */}


                  </div>
                </div>
              </div>                      {/*<!--~ end tab pane /* ~--> */} */





            </div>                      {/*<!--~ end filter tab content area /* ~--> */} */
        </section>                      {/*<!--~End popular todos section /* ~--> */} */



		<section class="popular-todos-section ptb-00">
            <div class="container">
              <div class="row">
                <div class="col-lg-8">
                  <div class="section-header">
                    <h2 class="section-title"> Now on <span class="text2">TV</span></h2>
                    <p>Make every moment special with a personalized message from your favorite celebrity</p>
                    <div class="divider">
                    </div>
                  </div>
                </div>{/*<!--./ section-header --> */}


              </div>
            </div>

            <div class="tab-content filter-tab-content">
              <div class="tab-pane fade show active" id="todo_latest" role="tabpanel">
                <div class="todo-items-carousel owl-carousel carousel-nav-text">
                  <div class="popular-todo-item">
                    <div class="todo-thumbnail-area">
                      <figure class="item-thumb">
                        <img  src={todo11} alt="Thmubnail" />
                      </figure>{/*<!--./ item-thumb --> */}
                      <div class="todo-overlay-info">
                        <h4 class="todo-type rated">top rated</h4>
                        <div class="todo-meta-bottom">
                          <a href="#" class="save">
                            <i class="fa fa-heart"></i>
                                            Like
                                        </a>


                        </div>
                      </div>{/*<!--./ section-header --> */}
                    </div>{/*<!--./ todo-overlay-info --> */}
                    <div class="todo-content">
                      <h3 class="title"><a href="#">Enrique Arce</a></h3>
                      <div class="todo-rating">
                        <div class="rating-value">
                          <span>4.8</span>16 Ratings
                                    </div>
                        <div class="rating-icon">
                          <ul>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li>$</li>
                          </ul>
                        </div>
                      </div>{/*<!--./ todo-rating --> */}




                    </div>{/*<!--./ todo-content --> */}


                  </div>

                  <div class="popular-todo-item">
                    <div class="todo-thumbnail-area">
                      <figure class="item-thumb">
                        <img  src={todo11} alt="Thmubnail" />
                      </figure>{/*<!--./ item-thumb --> */}
                      <div class="todo-overlay-info">
                        <h4 class="todo-type rated">top rated</h4>
                        <div class="todo-meta-bottom">
                          <a href="#" class="save">
                            <i class="fa fa-heart"></i>
                                            Like
                                        </a>


                        </div>
                      </div>{/*<!--./ section-header --> */}
                    </div>{/*<!--./ todo-overlay-info --> */}
                    <div class="todo-content">
                      <h3 class="title"><a href="#">Enrique Arce</a></h3>
                      <div class="todo-rating">
                        <div class="rating-value">
                          <span>4.8</span>16 Ratings
                                    </div>
                        <div class="rating-icon">
                          <ul>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li>$</li>
                          </ul>
                        </div>
                      </div>{/*<!--./ todo-rating --> */}




                    </div>{/*<!--./ todo-content --> */}


                  </div>

                  <div class="popular-todo-item">
                    <div class="todo-thumbnail-area">
                      <figure class="item-thumb">
                        <img  src={todo11} alt="Thmubnail" />
                      </figure>{/*<!--./ item-thumb --> */}
                      <div class="todo-overlay-info">
                        <h4 class="todo-type rated">top rated</h4>
                        <div class="todo-meta-bottom">
                          <a href="#" class="save">
                            <i class="fa fa-heart"></i>
                                            Like
                                        </a>


                        </div>
                      </div>{/*<!--./ section-header --> */}
                    </div>{/*<!--./ todo-overlay-info --> */}
                    <div class="todo-content">
                      <h3 class="title"><a href="#">Enrique Arce</a></h3>
                      <div class="todo-rating">
                        <div class="rating-value">
                          <span>4.8</span>16 Ratings
                                    </div>
                        <div class="rating-icon">
                          <ul>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li>$</li>
                          </ul>
                        </div>
                      </div>{/*<!--./ todo-rating --> */}




                    </div>{/*<!--./ todo-content --> */}


                  </div>

                  <div class="popular-todo-item">
                    <div class="todo-thumbnail-area">
                      <figure class="item-thumb">
                        <img  src={todo11} alt="Thmubnail" />
                      </figure>{/*<!--./ item-thumb --> */}
                      <div class="todo-overlay-info">
                        <h4 class="todo-type rated">top rated</h4>
                        <div class="todo-meta-bottom">
                          <a href="#" class="save">
                            <i class="fa fa-heart"></i>
                                            Like
                                        </a>


                        </div>
                      </div>{/*<!--./ section-header --> */}
                    </div>{/*<!--./ todo-overlay-info --> */}
                    <div class="todo-content">
                      <h3 class="title"><a href="#">Enrique Arce</a></h3>
                      <div class="todo-rating">
                        <div class="rating-value">
                          <span>4.8</span>16 Ratings
                                    </div>
                        <div class="rating-icon">
                          <ul>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li>$</li>
                          </ul>
                        </div>
                      </div>{/*<!--./ todo-rating --> */}




                    </div>{/*<!--./ todo-content --> */}


                  </div>

                  <div class="popular-todo-item">
                    <div class="todo-thumbnail-area">
                      <figure class="item-thumb">
                        <img  src={todo11} alt="Thmubnail" />
                      </figure>{/*<!--./ item-thumb --> */}
                      <div class="todo-overlay-info">
                        <h4 class="todo-type rated">top rated</h4>
                        <div class="todo-meta-bottom">
                          <a href="#" class="save">
                            <i class="fa fa-heart"></i>
                                            Like
                                        </a>


                        </div>
                      </div>{/*<!--./ section-header --> */}
                    </div>{/*<!--./ todo-overlay-info --> */}
                    <div class="todo-content">
                      <h3 class="title"><a href="#">Enrique Arce</a></h3>
                      <div class="todo-rating">
                        <div class="rating-value">
                          <span>4.8</span>16 Ratings
                                    </div>
                        <div class="rating-icon">
                          <ul>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li>$</li>
                          </ul>
                        </div>
                      </div>{/*<!--./ todo-rating --> */}




                    </div>{/*<!--./ todo-content --> */}


                  </div>

                  <div class="popular-todo-item">
                    <div class="todo-thumbnail-area">
                      <figure class="item-thumb">
                        <img  src={todo11} alt="Thmubnail" />
                      </figure>{/*<!--./ item-thumb --> */}
                      <div class="todo-overlay-info">
                        <h4 class="todo-type rated">top rated</h4>
                        <div class="todo-meta-bottom">
                          <a href="#" class="save">
                            <i class="fa fa-heart"></i>
                                            Like
                                        </a>


                        </div>
                      </div>{/*<!--./ section-header --> */}
                    </div>{/*<!--./ todo-overlay-info --> */}
                    <div class="todo-content">
                      <h3 class="title"><a href="#">Enrique Arce</a></h3>
                      <div class="todo-rating">
                        <div class="rating-value">
                          <span>4.8</span>16 Ratings
                                    </div>
                        <div class="rating-icon">
                          <ul>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li class="yellow">$</li>
                            <li>$</li>
                          </ul>
                        </div>
                      </div>




                    </div>


                  </div>
                </div>
              </div>





            </div>
          </section>



        </div>

        <div class="promo-video-section promo-video-style-two bg-image bg-fixed ptb-100 mt-100" 
             style={{backgroundImage: `url("http://vidyovi.madilink.net/assets/images/bg/promo-bg.jpg)`}}> 

           <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="promo-video-thumb">
                  <img src={promovideo} alt="thumb" />

                </div>
              </div>

              
              <div class="col-lg-6">
                <div class="promo-video-content text-white">
                  <h2>India's Largest Celebrity <span class="text2" style={{ color:"#fffff"}}>>Engagement Platform</span></h2>
                  <p>With over 4000+ celebrities and counting…</p>
                  <p><span class="text2">#Movie Star #Singer #Sportsperson # Dancer #Model #Influencers #Athletes #Public fiures #Writer #Author #Producers #TikTok Stars and many more</span></p>
                  <a class="btn btn-default" href="#">Enrool As Celebrities</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section id="testimonials" class="testimonial-section bg-fixed bg-overlay-image pt-60 pb-100" 
             style={{backgroundImage: `url("http://vidyovi.madilink.net/assets/images/bg/promo-bg.jpg)`}}> 

           <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-12 text-center text-white">
                <div class="section-header">
                  <h2 class="section-title"> <span class="text2">Loved by the People</span></h2>
                  <p>Hear all about it straight from our customers, used tring to make every moment special and hey you can make yours too:)</p>
                  <div class="divider">
                  </div>
                </div>
              </div> 
              <div class="col-lg-8">
                <div id="testimonial-carousel" class="owl-carousel carousel-nav-dots">
                  <div class="single-testimonial text-center">
                    <div class="quote-icon">
                      <img src="./src/assets/images/icon/quote.png" alt="thumb" />
                    </div>
                    <div class="client-thumb">
                      <img  src={todo11} alt="thumb" />
                    </div>
                    <div class="info text-white">
                      <p>Thank you so much Neha for your lovely wishes, it means a lot to us. This has been the best anniversary present we've received. Your video surely made this anniversary the most memorable one.</p>
                      <h5 class="name">Dimple  Ashish</h5>
                    </div>
                  </div>                     




                        </div>
              </div>
            </div>
          </div>
        </section>                  

        <div class="promo-video-section promo-video-style-two bg-image bg-fixed ptb-100" 
     style={{backgroundImage: `url("http://vidyovi.madilink.net/assets/images/bg/promo-bg2.jpg)`}}> 
     <div class="container">
            <div class="row align-items-center">

              <div class="container">
                <h2 style={{ color:"#fffff"}}><span class="text2">Frequently Asked Questions</span></h2>
                <div class="accordion">
                  <div class="accordion-item">
                    <button id="accordion-button-1" aria-expanded="false"><span class="accordion-title">What are the engagement and connection services offered by Tring?
</span><span class="icon" aria-hidden="true"></span></button>
                    <div class="accordion-content">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <button id="accordion-button-2" aria-expanded="false"><span class="accordion-title">What is the process to book a Tring video?</span><span class="icon" aria-hidden="true"></span></button>
                    <div class="accordion-content">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <button id="accordion-button-3" aria-expanded="false"><span class="accordion-title">How much time does it take for my request to get delivered?</span><span class="icon" aria-hidden="true"></span></button>
                    <div class="accordion-content">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <button id="accordion-button-4" aria-expanded="false"><span class="accordion-title">Are the prices visible on the website also applicable for brand/ corporate orders?</span><span class="icon" aria-hidden="true"></span></button>
                    <div class="accordion-content">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <button id="accordion-button-5" aria-expanded="false"><span class="accordion-title">Why did my order get declined?</span><span class="icon" aria-hidden="true"></span></button>
                    <div class="accordion-content">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
                    </div>
                  </div>
                </div>
              </div>



            </div>
          </div>
        </div>

        <div class="popular-brands-section bg-white pt-50">
          <div class="container">
            <div class="row">
              <div class="col-12">

                <div class="brands-carousel owl-carousel">
                  <div class="brands-link">
                       <img src={logo}/>

                   </div>
                  <div class="brands-link">
                    <img src="./logo2.png" alt="logo" />
                  </div>
                  <div class="brands-link">
                    <img src="./src/assets/images/logo3.png" alt="logo" />
                  </div>
                  <div class="brands-link">
                    <img src="./src/assets/images/logo4.png" alt="logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="promo-video-section promo-video-style-two bg-image bg-fixed ptb-100">
          <div class="container">
            <div class="row align-items-center">

              <div class="instagram-widget-area pb-00">
                <div class="container">
                  <div class="row">
                    <div class="col-12">
                      <div class="widget bt-instafeed-widget">
                        <ul id="instafeed">
                          <li class="feed-item">
                            <a href="#">
                              <img src="./src/assets/images/widget/instagram/1/1.jpg" alt="#" />
                            </a>
                          </li>
                          <li class="feed-item">
                            <a href="#">
                              <img src="./src/assets/images/widget/instagram/1/1.jpg" alt="#" />
                            </a>
                          </li>
                          <li class="feed-item">
                            <a href="#">
                              <img src="./src/assets/images/widget/instagram/1/1.jpg" alt="#" />
                            </a>
                          </li>
                          <li class="feed-item">
                            <a href="#">
                              <img src="./src/assets/images/widget/instagram/1/1.jpg" alt="#" />
                            </a>
                          </li>
                          <li class="feed-item">
                            <a href="#">
                              <img src="./src/assets/images/widget/instagram/1/1.jpg" alt="#" />
                            </a>
                          </li>
                          <li class="feed-item">
                            <a href="#">
                              <img src="./src/assets/images/widget/instagram/1/1.jpg" alt="#" />
                            </a>
                          </li>
                          <li class="feed-item">
                            <a href="#">
                              <img src="./src/assets/images/widget/instagram/1/1.jpg" alt="#" />
                            </a>
                          </li>
                          <li class="feed-item">
                            <a href="#">
                              <img src="./src/assets/images/widget/instagram/1/1.jpg" alt="#" />
                            </a>
                          </li>

                        </ul>

                        <ul id="instafeed">
                          <li class="feed-item">
                            <a href="#">
                              <img src="./src/assets/images/widget/instagram/1/1.jpg" alt="#" />
                            </a>
                          </li>
                          <li class="feed-item">
                            <a href="#">
                              <img src="./src/assets/images/widget/instagram/1/1.jpg" alt="#" />
                            </a>
                          </li>
                          <li class="feed-item">
                            <a href="#">
                              <img src="./src/assets/images/widget/instagram/1/1.jpg" alt="#" />
                            </a>
                          </li>
                          <li class="feed-item">
                            <a href="#">
                              <img src="./src/assets/images/widget/instagram/1/1.jpg" alt="#" />
                            </a>
                          </li>
                          <li class="feed-item">
                            <a href="#">
                              <img src="./src/assets/images/widget/instagram/1/1.jpg" alt="#" />
                            </a>
                          </li>
                          <li class="feed-item">
                            <a href="#">
                              <img src="./src/assets/images/widget/instagram/1/1.jpg" alt="#" />
                            </a>
                          </li>
                          <li class="feed-item">
                            <a href="#">
                              <img src="./src/assets/images/widget/instagram/1/1.jpg" alt="#" />
                            </a>
                          </li>
                          <li class="feed-item">
                            <a href="#">
                              <img src="./src/assets/images/widget/instagram/1/1.jpg" alt="#" />
                            </a>
                          </li>

                        </ul>

                        <div class="instafeed-heading">
                          <div class="heading">
                            <h4>Follow Us <span>#vidyovi</span></h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div> 

      </div>






    );
  }
}