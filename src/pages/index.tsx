import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import { ErrorBoundary } from "react-error-boundary";
import { useTranslation } from "next-i18next";
import { Collections, ErrorFallback, Footer, Header } from "~/components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { fetchCategories, fetchCollections, fetchProducts } from "~/api";
import { Category, Collection, Product } from "~/types";
import { createContext } from "react";

type HomePageProps = {
  collections: Collection[];
  categories: Category[];
  products: Product[];
};

export const HomePageContext = createContext<HomePageProps>({
  products: [],
  categories: [],
  collections: [],
});

const Home: NextPage<HomePageProps> = ({
  collections,
  products,
  categories,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { t } = useTranslation();

  return (
    <HomePageContext.Provider value={{ collections, products, categories }}>
      <Head>
        <title>Fable store</title>
        <meta name="description" content="Fable store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <h1 className="sr-only">{t("fable")}</h1>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Collections />
        </ErrorBoundary>
      </main>
      <Footer />
    </HomePageContext.Provider>
  );
};

export const getServerSideProps: GetServerSideProps<HomePageProps> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en")),
    collections: await fetchCollections(),
    categories: await fetchCategories(),
    products: await fetchProducts(),
  },
});

export default Home;
