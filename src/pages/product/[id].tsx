import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import { ErrorBoundary } from "react-error-boundary";
import {
  ErrorFallback,
  Footer,
  Header,
  ProductCardFull,
  Container,
} from "~/components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { fetchCategory, fetchCollection, fetchProduct } from "~/api";
import { Product, Collection, Category } from "~/types";
import { createContext } from "react";

type ProductPageProps = {
  product: Product | null;
  collection: Collection | null;
  category: Category | null;
};

export const ProductPageContext = createContext<ProductPageProps>({
  product: null,
  collection: null,
  category: null,
});

const Product: NextPage<ProductPageProps> = ({
  product,
  collection,
  category,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="grid min-h-screen grid-rows-[auto,1fr,auto]">
      <ProductPageContext.Provider value={{ product, collection, category }}>
        {/* TODO: Extract Head? */}
        <Head>
          <title>Fable store</title>
          <meta name="description" content="Fable store" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main className="pb-6">
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Container>
              <ProductCardFull />
            </Container>
          </ErrorBoundary>
        </main>
        <Footer />
      </ProductPageContext.Provider>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<ProductPageProps> = async ({
  locale,
  query,
}) => {
  //TODO: requests error handling
  const productId = String(query.id);
  const product = await fetchProduct(productId);
  const collection = await fetchCollection(product.collectionId);
  const category = await fetchCategory(product.categoryId);

  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en")),
      product,
      collection,
      category,
    },
  };
};

export default Product;
