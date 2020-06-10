import React from "react";
import Layout from "../components/layout";


const Contact = () => {
  return (
    <Layout>
      <div style={{ display:'flex', flexDirection:'column',alignItems:'center', margin:'inherit'}}>
        <h1>I'd love to talk! Email me at the address below</h1>
        <p>
          <a href="mailto:fosterataylor@icloud.com">fosterataylor@icloud.com</a>
        </p>
      </div>
    </Layout>
  )
}

export default Contact