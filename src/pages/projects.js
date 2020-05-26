import React from "react";
import Layout from "../components/layout";


export default function Projects() {


  return (
    <Layout>
        <div class="slider">
              <a href="#slide-1">Market2Table</a>              
            <a href="#slide-2">Top Movies</a>
            <a href="#slide-3">Euro Slider</a>
            <div class="slides">
                <div id="slide-1" >
                </div>
                <div id="slide-2">
                </div>
                <div id="slide-3">
                </div>
            </div>
          </div>
          <div class="production-links">
            <a href="https://market2table.herokuapp.com/">Market2Table Production Site</a>              
            <a href="https://limitless-bastion-36006.herokuapp.com/">Top Movies Production Site</a>
            <a href="https://morning-headland-35296.herokuapp.com/">Euro SliderProduction Site</a>
          </div>
    </Layout>
  )
}