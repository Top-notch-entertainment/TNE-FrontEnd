import React from "react";
import "./css/about.css";
import Card from 'react-bootstrap/Card';
import TriciaPic from './profile-images/tricia.png';
import TimPic from './profile-images/tim.png';
import BryanPic from './profile-images/bryan.png';




class AboutUs extends React.Component {
  render() {
    return (
      <>
        <h1 className="about-title">About Us</h1>

        <Card className="cards">
          <section className="tricia-card">
            <div className="text-tricia">
              <Card.Title className="card-title-tricia">Tricia Sawyer</Card.Title>
              <Card.Body>
                <Card.Text className="pitch">My name is Tricia Sawyer and I am currently a student at DeltaV code school, studying
                  software development, which I will graduate in July of 2023.Before that, I was a college
                  student at Kirkwood Community College where I received my associates of Liberal Arts.
                  Software development is something I chose to do right after I graduated, as I took some
                  classes in tech and grew an interest.Along the way, I have gained experience using
                  programming languages such as Javascript, CSS, and HTML and with that, I plan to pursue a
                  career in web development or mobile app creation. Through my educational experience, I have
                  refined my skills in problem solving, collaboration, and time management.</Card.Text>
              </Card.Body>
            </div>
            <Card.Img className="tricia-img"
              variant="top"
              src={TriciaPic}
              alt="Tricia's profile" />
          </section>

          <section className="tim-card">
            <div className="text-tim">
              <Card.Title className="card-title-tim">Tim Maupin</Card.Title>
              <Card.Body>
                <Card.Text className="pitch-tim">Hello, my name is Tim Maupin and before I decided to pursue a career in Software Development I was playing professional rugby in the US and previously in Ireland. The reason that I chose this skill to acquire is because I wanted something that was more sustainable than the job I was doing and also less physically demanding.I have also loved playing video games and was even a video game tester in college, so the idea of understanding the back end of development has also been something that I've been limitedly interested in for a while. I would love to work in a environment that is team orientated because I am naturally good working with other people and I enjoy the daily interactions, also it would be really cool and fun to work in a studio that worked on games or shows/movies! The skills I bring is a very long and comprehensive knowledge of front end gaming, I have played games in genres from MOBAs, fps, mmorpgs, argps, rogue-likes, sports games and many more....as I did testing for a handful of games like this before!</Card.Text>
              </Card.Body>
            </div>
            <Card.Img className="tim-img"
              variant="top"
              src={TimPic}
              alt="Tim's profile" />
          </section>

          <section className="bryan-card">
            <div className="text-bryan">
              <Card.Title className="card-title-bryan">Bryan Gonazalez</Card.Title>
              <Card.Body>
                <Card.Text className="pitch">Hello, I'm Bryan Garduno Gonzalez. Most of my woork experience has been in healthcare. When I graduated highschool in 2014, I was sure I would end up working in a hospital. I worked at the ER  for a few years until I decided to attend nursing school at Kirkwood. I quickly realized that the medical field was not for me.
                  I decided to pursue a career in software development bcausse it genuinely ignited a passion and curiosity I had never experienced beforen The field's dynamic and ever-evolviing nature is fascinating. I want to lar about every facet of technological advancements. The prosppect of creating innovative solutions and contributing to ongoing digital advancements greatly appealed to me. I believe this career not only aligns with my intellectual curiossity but also offers the opportunity to make a significant impact on business and society, which further solidifies my commitment to this field.</Card.Text>
              </Card.Body>
            </div>
            <Card.Img className="bryan-img"
              variant="top"
              src={BryanPic}
              alt="Bryan's profile" />
          </section>
        </Card>


        <section id="languages">
          <h1 className="section-title"> Programming Languages </h1>
          <div className="icons">
          <div className="bootstrap-icon">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" alt="Bootstrap Icon" height={60} width={60}/>
          </div>
          <div className="react-icon">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="React Icon" height={60} width={60}/>
          </div>

          <div className="node-icon">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node JS Icon" height={60} width={60}/>
          </div>

          <div className="javascript-icon">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt="JavaScript Icon" height={60} width={60}/>
          </div>
          </div>
        </section>
      </>
    );
  }
}

export default AboutUs;
