import React from "react";
import "./css/about.css";
// import Skills from '../Components/skills.json';
import Card from 'react-bootstrap/Card';

class AboutUs extends React.Component {
  render() {
    return (
      <>
        <h1 className="about-title">About Us</h1>

        <Card className="cards">
          <section className="tricia-card">
            <Card.Title>Tricia Sawyer</Card.Title>
            <Card.Img
              variant="top"
              src="../profile-images/tricia.png"
              alt="Tricia's profile" />
            <Card.Body>
              <Card.Text>Some quick example text for T.</Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </section>

          <section className="tim-card">
            <Card.Title>Tim Maupin</Card.Title>
            <Card.Img
              variant="top"
              src=""
              alt="Tim's profile" />
            <Card.Body>
              <Card.Text>Some quick example text.</Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </section>

          <section className="bryan-card">
            <Card.Title>Bryan Gonazalez</Card.Title>
            <Card.Img
              variant="top"
              src=""
              alt="Bryan's profile" />
            <Card.Body>
              <Card.Text>Some quick example text.</Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </section>
        </Card>


        <section id="languages">
          <h1 className="section-title">
            <span>Programming Languages</span>
          </h1>
          {/* <ul className="list-inline mx-auto skill-icon">[Skills]</ul> */}
        </section>
      </>
    );
  }
}

export default AboutUs;
