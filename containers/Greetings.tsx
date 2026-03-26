import React, { useEffect } from "react";
import { greetings } from "../portfolio";
import { Button, Container, Row, Col } from "reactstrap";
import SocialLinks from "../components/SocialLinks";
import Image from "next/image";

const Greetings = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement!.scrollTop = 0;
  });

  return (
    <main>
      <div className="position-relative">
        <section className="section section-lg section-shaped pb-250">
          <div className="shape shape-style-1 bg-gradient-info">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-lg-md d-flex">
            <div className="col px-0">
              <Row>
                <Col lg="6">
                  <h1 className="display-3 text-white">{greetings.title + " "}</h1>
                  <p className="lead text-white">{greetings.description}</p>
                  <SocialLinks />
                  <div className="btn-wrapper my-4" style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                    {greetings.resumeLink && (
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0"
                        color="default"
                        href={greetings.resumeLink}
                        target="_blank"
                        rel="noopener"
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-file" />
                        </span>
                        <span className="btn-inner--text">My Resume</span>
                      </Button>
                    )}
                    <Button
                      className="btn-icon mb-3 mb-sm-0 btn-whatsapp"
                      href="https://wa.me/2348119503680"
                      target="_blank"
                      rel="noopener"
                      style={{ background: "#25D366", borderColor: "#25D366", color: "#fff" }}
                    >
                      <span className="btn-inner--icon mr-1">
                        <i className="fa fa-whatsapp" />
                      </span>
                      <span className="btn-inner--text">Hire Me on WhatsApp</span>
                    </Button>
                  </div>
                </Col>
                <Col lg="6" className="d-flex align-items-center justify-content-center">
                  <Image
                    src="/img/my-picture-r.png"
                    alt="Michael Adeshina Martins"
                    width={300}
                    height={300}
                    className="hero-profile-img"
                    style={{ width: "100%", maxWidth: "300px", height: "300px", objectFit: "cover", objectPosition: "top" }}
                  />
                </Col>
              </Row>
            </div>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
        {/* 1st Hero Variation */}
      </div>
    </main>
  );
};

export default Greetings;
