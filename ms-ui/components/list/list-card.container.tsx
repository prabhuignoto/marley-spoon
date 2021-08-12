import { gql, useQuery } from "@apollo/client";
import { ListCard } from "./list-card";

const Query = gql`
  query Query($id: String) {
    getAssetById(id: $id) {
      id
      title
      url
      size
      fileName
      width
      height
      contentType
    }
  }
`;

interface ListCardContainerModel {
  title: string;
  description: string;
  photoId: string;
  calories: number;
  id: string;
  chefId: string;
  tags: string[];
}

const ListCardContainer: React.FunctionComponent<ListCardContainerModel> = ({
  photoId,
  description,
  title,
  calories,
  id
}) => {
  try {
    const { data, loading, error } = useQuery(Query, {
      variables: {
        id: photoId,
      },
    });

    if (error) {
      return null;
    }

    return (
      <ListCard
        description={description}
        imageUrl={data ? data.getAssetById.url : ""}
        title={title}
        calories={calories}
        id={id}
      />
    );
  } catch (error) {
    console.log(error);
  }
};

export { ListCardContainer };
