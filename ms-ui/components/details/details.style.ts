import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1200px;
  margin: 0 auto;
  box-shadow: 0 0 15px 4px rgba(0,0,0,0.2);
  border-radius: 4px;
  padding: 0 2rem 1rem;
  font-family: Open Sans, Arial, Helvetica, sans-serif;
  margin: 1rem 0;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e8e8e8;
  padding: 1rem 0;
  `;

export const Title = styled.h4`
  align-self: flex-start;
  margin-left: 2rem;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0;
  margin: 0;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const Description = styled.p`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 90%;
  font-size: 1.2rem;
  padding: 1rem;
  font-weight: 400;
  border-radius: 6px;
  background: #f5f5f5;
`;

export const Chef = styled.div`
  padding: 1rem;
  font-weight: 600;
`
