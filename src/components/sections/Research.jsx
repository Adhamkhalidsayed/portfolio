import React from "react";
import styled from "styled-components";
import { researchData } from "../../data/constants"; // Assuming research data is in the same constants file
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ResearchCard from "../cards/ResearchCard";

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Research = () => {
  return (
    <Container id="Research">
      <Wrapper>
        <Title>Research</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          My research work and contributions, including publications and resources.
        </Desc>

        <VerticalTimeline>
          {researchData.map((research, index) => (
            <ResearchCard
              key={`research-${index}`}
              research={research}
            />
          ))}
        </VerticalTimeline>
      </Wrapper>
    </Container>
  );
};

export default Research;