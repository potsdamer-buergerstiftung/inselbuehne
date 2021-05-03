import { PageTitle } from "@components/core"
import { Default } from "@components/layouts"
import { MotionPageTransition } from "@components/motion";
import { NextSeo } from "next-seo";

export default function Events() {
  return (
    <MotionPageTransition>
      <NextSeo title="Veranstaltungen" />
      <PageTitle title="Es geht los" heading="Veranstaltungen" />
    </MotionPageTransition>
  )
}

Events.Layout = Default;
