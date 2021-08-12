import React from "react";
import {
  Chef,
  Description,
  Header,
  Image,
  ImageWrapper,
  Title,
  Wrapper,
} from "./details.style";

interface DetailsModel {
  title: string;
  description: string;
  url: string;
  chef: string;
}

const Details: React.FunctionComponent<DetailsModel> = ({
  title,
  description,
  url,
  chef,
}) => {
  return (
    <Wrapper>
      <Header>
        <Title>{title}</Title>
      </Header>
      <ImageWrapper>
        <Image src={url} />
      </ImageWrapper>
      <Description>{description}</Description>
      {chef && <Chef>{`Chef: ${chef}`}</Chef>}
    </Wrapper>
  );
};

export { Details };
