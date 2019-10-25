import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="http://7geese.com/wp-content/uploads/2019/01/7Geese_performance_management__meta-image-copy-43.png">
        <h1>ORKs & Performance Management</h1>
        <h2>Embrace a new era of people management</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To 7Geese!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              71 percent of passionate workers find themselves working extra
              hours even though they are not required, according to
              psychologist, Mihaly Csikszentmihalyi. Of this group, 89 percent
              report feeling focused, immersed, and energized in their work.
              Putting them in a what Deloitte Insights dubs a “flow state”
              Individuals feel that what they are doing makes life meaningful
              and is worth doing independent of remuneration or reward. When
              employers use eNPS surveys, they take the first step to building a
              highly engaged and high-performing teams. The eNPS score is a
              simple indicator that measures employee engagement with this one
              question: “How likely are you to recommend this company as a place
              to work to a friend?”.
            </p>
            <p>
              But the benefits of eNPS surveys extend far beyond measuring
              employee engagement levels today. eNPS empowers employees to voice
              their feedback so that HR and leadership teams have actionable
              data to fuel positive changes at work. That’s why we’ve released
              7Geese eNPS surveys, to help HR leaders measure employee
              engagement with ease, diagnose opportunities for change and build
              higher performing teams.
            </p>
            <p>
              As responses are collected, 7Geese auto-generates the eNPS score
              in real-time. That means you get the eNPS survey results you need
              to help foster employee engagement without having to deal with
              processing responses manually. As responses are collected, 7Geese
              auto-generates the eNPS score in real-time. Responses given can be
              found under a simple Summary View. That means you can spend more
              time reviewing responses instead of tabulating data in
              spreadsheets and processing responses manually. Gone are the days
              of importing employee emails into an external tool. Customize
              templates with additional questions Customize your surveys with
              follow-up questions as you see fit. Tailor the question to
              different teams or add additional questions to dive into the ‘why’
              behind the eNPS score.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
