import React from "react"
import Layout from "../components/layout"

const Home =() =>{
  return (
    <Layout>
      <h1>Hi! I'm a Software Developer based in Denver, Colorado</h1>
      <div>
        <div style={{marginBottom:'50px'}}>
            <a href='https://github.com/foster55f' style={{marginRight:'100px'}}>My GitHub</a>
            <a href='https://www.linkedin.com/in/foster-taylor-455aa9192/'>My Linkedin</a>            
        </div>
        <div>
            <p>
            My career started in finance, before I moved on to find a more challenging and 
            rewarding career at the Turing School of Software and Design. Turing provided 
            me with strong experience developing applications with React, JavaScript, and 
            Agile. At Turing, I was passionate about learning and collaborating with team 
            members, and through Agile development we were able to come together as a team 
            at the start of every sprint. My teams were continuously able to break down large 
            problems into small chunks and reflect on goals in our retros. At Turing, I also 
            developed great relationships with mentors and found great benefit from listening 
            and learning from others. 

            I’m dedicated to continuous self-growth. Since graduating, I have 
            continued coding every day to keep my skills fresh, but also to 
            incorporate new technologies including Java, Swift, and Gatsby. My next 
            goal is to get my AWS Cloud Practitioner certification. I believe that my 
            continuous curiosity, along with my entrepreneurial spirit, passion for inclusion 
            and transparency, drive, and teamwork will serve me in a way that will make me successful 
            on any team.
            </p>
        </div>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
        </div>
    </Layout>
  );
}

export default Home
