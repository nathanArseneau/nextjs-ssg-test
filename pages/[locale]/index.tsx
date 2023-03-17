import { useTranslation } from "next-i18next";
import Head from "next/head";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";

const Homepage = () => {
  const { t } = useTranslation(["common", "footer"]);

  return (
    <>
      <Head>
        <title>{t("index.seo.title")}</title>
        <meta name="description" content={t("index.seo.description") || ""} />
      </Head>
      <main>
        <h1>{t("index.welcome")}</h1>
      </main>
    </>
  );
};

export default Homepage;

const getStaticProps = makeStaticProps(["common"]);
export { getStaticPaths, getStaticProps };
