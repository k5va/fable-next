import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { ErrorBoundary } from "react-error-boundary";
import { useTranslation } from "next-i18next";
import { Collections, ErrorFallback, Footer, Header } from "~/components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

type Props = {
  // Add custom props here
};

const Home: NextPage = (
  _props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const { t } = useTranslation();

  return (
    <>
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
    </>
  );
};

// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en")),
  },
});

export default Home;
