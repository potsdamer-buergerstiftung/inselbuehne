import { FC } from "react";
import NextHead from "next/head";
import { DefaultSeo } from "next-seo";
import config from "@config/seo.json";

const Head: FC = () => {
  return (
    <>
      <DefaultSeo {...config} />
      <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          async
          defer
          data-domain="inselbuehne-potsdam.de"
          data-api="/api/insights/event"
          src="/js/insights.js"
        />
      </NextHead>
    </>
  );
};

export default Head;
