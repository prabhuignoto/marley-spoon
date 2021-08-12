import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 1px solid #e8e8e8;
  background-color: #f5f5f5;
  border-radius: 4px;
  font-family: Open Sans, Arial, Helvetica, sans-serif;

  &:hover {
    background: #e8e8e8;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 300px;
  padding: 1rem;
`;

export const Image = styled.img`
  max-height: 100%;
  min-width: 100%;
  box-shadow: 0 0 20px 5px rgba(0,0,0,0.1);
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
  justify-content: flex-start;
  padding: 0.5rem;
`;

export const Header = styled.header``;

export const Title = styled.h3`
  margin: 0;
  font-weight: 600;
`;

export const Description = styled.p`
  font-weight: 400;
`;

export const Calories = styled.span`
  border-radius: 20px;
  background: #000;
  color: #fff;
  padding: 0.25rem 0.5rem;
  display: block;
  width: 120px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  align-self: flex-end;
  margin-left: auto;
`;


export const BottomBar = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  width: 100%;
`;
