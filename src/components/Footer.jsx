import React from "react";



function Footer(){
    let year=new Date().getFullYear();
    return <footer><p>Copyright © {year} BadalSherpa</p></footer>
}
export default Footer;