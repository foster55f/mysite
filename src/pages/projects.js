import React from "react";
import Layout from "../components/layout";


export default function Projects() {
  return (
    <Layout>
      <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
        <article>
            <h1>Top Movies</h1>  
            <div className='movie-project'></div>
            <a href='https://limitless-bastion-36006.herokuapp.com/'>Top Movies site</a>   
        </article> 
        <article>
            <h1>Euro Slider</h1>   
            <div className='soccer-project'></div>   
            <a href='https://morning-headland-35296.herokuapp.com/'>Euro Slider site</a>        
        </article>
        <article>
            <h1 >Market2Table</h1> 
            <div className='market-project'></div>   
            <a href='https://market2table.herokuapp.com/'>Market2Table site</a>                     
        </article>
      </div>
    </Layout>
  )
}