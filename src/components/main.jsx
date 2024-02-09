import React from "react";

const Home = () => {
  return (
    <>
    <div>
      <div id="carousel-id" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
              <li data-target="#carousel-id" data-slide-to="0" class=""></li>
              <li data-target="#carousel-id" data-slide-to="1" class=""></li>
              <li data-target="#carousel-id" data-slide-to="2" class="active"></li>
          </ol>
          <div class="carousel-inner">
              <div class="item">
                  <img data-src="holder.js/900x500/auto/#777:#7a7a7a/text:First slide" alt="First slide" src="https://img.freepik.com/premium-vector/spring-fashion-sale-banner-design-template_2239-1180.jpg"/>
                  <div class="container">
                      <div class="carousel-caption">
                          <h1>Clothings</h1>
                      </div>
                  </div>
              </div>
              <div class="item">
                  <img data-src="holder.js/900x500/auto/#666:#6a6a6a/text:Second slide" alt="Second slide" src="https://img.freepik.com/free-vector/promotion-fashion-banner_1188-223.jpg"/>
                  <div class="container">
                      <div class="carousel-caption">
                          <h1>Apparels</h1>
                      </div>
                  </div>
              </div>
              <div class="item active">
                  <img data-src="holder.js/900x500/auto/#555:#5a5a5a/text:Third slide" alt="Third slide" src="https://img.freepik.com/free-vector/flat-design-fashion-trends-sale-banner_23-2150356527.jpg?w=740&t=st=1707287454~exp=1707288054~hmac=890f6344c63b73d78fa28fce77b6939c66fc098f05889921a8c40520da9eefb4"/>
                  <div class="container">
                      <div class="carousel-caption">
                          <h1>Accessories</h1>
                      </div>
                  </div>
              </div>
          </div>
          <a class="left carousel-control" href="#carousel-id" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a>
          <a class="right carousel-control" href="#carousel-id" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a>
      </div>
      
    </div>
    </>
  );
};

export default Home;