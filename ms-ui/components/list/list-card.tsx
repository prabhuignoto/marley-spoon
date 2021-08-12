import Link from "next/link";
import React from "react";
import {
  Calories,
  Description,
  DetailsWrapper,
  Header,
  Image,
  ImageWrapper,
  Title,
  Wrapper,
  BottomBar
} from "./list-card.style";

interface ListCardModel {
  title: string;
  description: string;
  imageUrl: string;
  calories: number;
  id: string;
}

const ListCard: React.FunctionComponent<ListCardModel> = ({
  title,
  description,
  imageUrl,
  calories,
  id,
}) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={imageUrl} />
      </ImageWrapper>
      <DetailsWrapper>
        <Header>
          <Title>{title}</Title>
        </Header>
        <DetailsWrapper>
          <Description>{description}</Description>
          <BottomBar>
            <Link href={`/details/${id}`}>Read More</Link>
            <Calories>{`calories: ${calories}`}</Calories>
          </BottomBar>
        </DetailsWrapper>
      </DetailsWrapper>
    </Wrapper>
  );
};

export { ListCard };
