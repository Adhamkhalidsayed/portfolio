import React from "react";
import styled from "styled-components";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
`;

const Image = styled.img`
  height: 50px;
  border-radius: 10px;
  margin-top: 4px;

  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 99};

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Institution = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Authors = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 90};
  margin-top: 5px;

  b {
    font-weight: 600;
  }

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Skills = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
`;

const Skill = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const ResourceLink = styled.div`
  font-size: 25px;
  font-weight: 500;
  color: ${({ theme }) => theme.linkColor};
  text-align: center;
  margin-top: 10px;
  cursor: pointer;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.linkColor};
  }

  &:hover a {
    text-decoration: underline;
  }
`;

const OrcidLink = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.linkColor};
  margin-top: 5px;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.linkColor};
  }

  &:hover a {
    text-decoration: underline;
  }
`;

const ResearchCard = ({ research }) => {
  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={research.institution}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={research.img}
        />
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "#1d1836",
        color: "#fff",
        boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
        backgroundColor: "rgba(17, 25, 40, 0.83)",
        border: "1px solid rgba(255, 255, 255, 0.125)",
        borderRadius: "6px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid  rgba(255, 255, 255, 0.3)",
      }}
      date={research.date}
    >
      <Top>
        <Image src={research.img} />
        <Body>
          <Title>{research.title}</Title>
          <Institution>{research.institution}</Institution>
          {research.authors && (
            <Authors>
              <b>Authors:</b> {research.authors.join(", ")}
            </Authors>
          )}
          <Date>{research.date}</Date>
        </Body>
      </Top>
      <Description>
        {research?.desc && <div>{research?.desc}</div>}
        {research?.skills && (
          <Skills>
            <b>Skills:</b>
            {research?.skills?.map((skill, index) => (
              <Skill key={index}>• {skill}</Skill>
            ))}
          </Skills>
        )}
        {research?.paperLink && (
          <ResourceLink>
            <a href={research.paperLink} target="_blank" rel="noopener noreferrer">
              View Paper
            </a>
          </ResourceLink>
        )}
        {research?.resourcesLink && (
          <ResourceLink>
            <a href={research.resourcesLink} target="_blank" rel="noopener noreferrer">
              Resources
            </a>
          </ResourceLink>
        )}
        {research?.orcid && (
          <OrcidLink>
            <a href={research.orcid} target="_blank" rel="noopener noreferrer">
              ORCID: {research.orcid}
            </a>
          </OrcidLink>
        )}
      </Description>
    </VerticalTimelineElement>
  );
};

export default ResearchCard;