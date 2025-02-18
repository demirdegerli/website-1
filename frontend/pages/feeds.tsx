import { FEED_NEW_URL, FEED_RECENTLY_UPDATED_URL } from "../src/env"
import { NextSeo } from "next-seo"
import { Trans, useTranslation } from "next-i18next"
import { GetStaticProps } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import ButtonLink from "src/components/ButtonLink"
import Link from "next/link"

const Feeds = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <>
      <NextSeo title={t("rss-feeds")} description={t("rss-description")} />
      <div className="max-w-11/12 mx-auto my-0 w-11/12 2xl:w-[1400px] 2xl:max-w-[1400px]">
        <h1 className="my-8">{t("rss-feeds")}</h1>
        <p>{t("rss-feeds-description")}</p>
        <h3>{t("new-apps")}</h3>
        <div className="flex flex-col pb-4">
          <p>{t("new-apps-description")}</p>
          <ButtonLink className="w-52" href={FEED_NEW_URL} passHref>
            {t("subscribe")}
          </ButtonLink>
        </div>
        <h3>{t("new-and-updated-apps")}</h3>
        <div className="flex flex-col pb-4">
          <p>{t("new-and-updated-apps-description")}</p>
          <ButtonLink
            className="w-52"
            href={FEED_RECENTLY_UPDATED_URL}
            passHref
          >
            {t("subscribe")}
          </ButtonLink>
        </div>

        <h6 className="mt-2">
          <Trans i18nKey={"common:rss-applications"}>
            Do you need an RSS application? We have excellent ones in Flathub.
            Find them{" "}
            <Link
              className="no-underline hover:underline"
              href="/apps/search/rss"
            >
              here
            </Link>
          </Trans>
        </h6>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  }
}

export default Feeds
