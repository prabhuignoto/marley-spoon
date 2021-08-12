import { ApolloProvider } from "@apollo/client";
import React from "react";
import client from "../../apollo-client";
import { Recipe } from "../../models/recipe";
import { ListCardContainer } from "./list-card.container";
import { ListItem, ListItems } from "./list.styles";

const List: React.FunctionComponent<{ items: Recipe[] }> = ({ items }) => {
  debugger;
  return (
    <ApolloProvider client={client}>
      <ListItems>
        {items.map(({ description, title, photoId, calories, id, chefId, tags }) => (
          <ListItem key={photoId}>
            <ListCardContainer
              description={description}
              title={title}
              photoId={photoId}
              calories={calories}
              id={id}
              tags={tags}
              chefId={chefId}
            />
          </ListItem>
        ))}
      </ListItems>
    </ApolloProvider>
  );
};

export { List };
