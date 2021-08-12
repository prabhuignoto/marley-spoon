import { gql } from "@apollo/client";
import client from "../apollo-client";
import { FooterView } from "../components/common/footer";
import { HeaderView } from "../components/common/header";
import { Layout } from "../components/common/styles";
import { List } from "../components/list/list";
import styles from "../styles/Home.module.css";
import Head from "../components/common/head";

export default function Home({ recipes }) {
  return (
    <div className={styles.container}>
      <Layout>
        <Head/>
        <HeaderView />
        <List items={recipes} />
        <FooterView />
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Recipes {
        getAllRecipes {
          calories
          createdAt
          description
          id
          photoId
          title
          updatedAt
        }
      }
    `,
  });

  return {
    props: {
      recipes: data.getAllRecipes,
    },
  };
}
