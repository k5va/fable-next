import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import { ErrorBoundary } from "react-error-boundary";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { z } from "zod";
import {
  ErrorFallback,
  Footer,
  Header,
  ProductCardFull,
  Container,
} from "~/components";
import { fetchProduct } from "~/api";
import { Product } from "~/types";

type ProductPageProps = {
  product: Product;
};

const Product: NextPage<ProductPageProps> = ({
  product,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="grid min-h-screen grid-rows-[auto,1fr,auto]">
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
            <ProductCardFull product={product} />
          </Container>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<ProductPageProps> = async ({
  locale,
  query,
}) => {
  //TODO: requests error handling?
  const productId = await z.string().parseAsync(query.id);
  const product = await fetchProduct(productId);

  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en")),
      product,
    },
  };
};

export default Product;
