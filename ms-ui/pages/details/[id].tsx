import { gql } from "@apollo/client";
import client from "../../apollo-client";
import { Details as DetailsUI } from "../../components/details/details";
import Head from "../../components/common/head";
import { Layout } from "../../components/common/styles";
import { HeaderView } from "../../components/common/header";
import { FooterView } from "../../components/common/footer";

export default function Details({
  id,
  title,
  chefName,
  imageUrl,
  description,
}) {
  return (
    <Layout>
      <Head />
      <HeaderView />
      <DetailsUI
        title={title}
        chef={chefName}
        url={imageUrl}
        description={description}
      />
      <FooterView />
    </Layout>
  );
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query Recipes {
        getAllRecipes {
          id
        }
      }
    `,
  });

  const paths = data.getAllRecipes.map((recipe) => ({
    params: { id: recipe.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { data: recipeData } = await client.query({
    query: gql`
      query Recipe($id: String) {
        getRecipe(id: $id) {
          id
          chefId
          tags
          photoId
          description
          title
        }
      }
    `,
    variables: {
      id: params.id,
    },
  });

  const { data } = await client.query({
    query: gql`
      query Query($photoId: String, $chefId: String) {
        getAssetById(id: $photoId) {
          id
          url
          size
        }
        getChefName(id: $chefId)
      }
    `,
    variables: {
      photoId: recipeData.getRecipe.photoId,
      chefId: recipeData.getRecipe.chefId,
    },
  });

  return {
    props: {
      id: recipeData.getRecipe.id,
      title: recipeData.getRecipe.title,
      description: recipeData.getRecipe.description,
      chefName: data.getChefName,
      imageUrl: data.getAssetById.url,
    },
  };
}
