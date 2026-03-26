import React from "react";
import { Card, CardBody, Col, Button } from "reactstrap";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import { ProjectType } from "../types/sections";

const ProjectsCard = ({ name, desc, github, link, image }: ProjectType) => {
  return (
    <Col lg="6">
      <Card className="shadow-lg--hover shadow mt-4" style={{ overflow: "hidden" }}>
        {image && (
          <div style={{ position: "relative", width: "100%", height: "200px" }}>
            <Image
              src={image}
              alt={name}
              fill
              style={{ objectFit: "cover", objectPosition: "top" }}
            />
          </div>
        )}
        <CardBody>
          <div className="d-flex px-3">
            <div className="pl-4">
              <h3>{name}</h3>
              <p className="description mt-3">{desc}</p>
              {github ? (
                <Button
                  className="btn-icon"
                  color="github"
                  href={github}
                  target="_blank"
                  rel="noopener"
                  aria-label="Github"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-github" />
                  </span>
                </Button>
              ) : null}
              {link ? (
                <Button
                  className="btn-icon"
                  color="success"
                  href={link}
                  target="_blank"
                  rel="noopener"
                  aria-label="Visit"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-arrow-right mr-2" />
                  </span>
                  <span className="nav-link-inner--text ml-1">Visit</span>
                </Button>
              ) : null}
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProjectsCard;
