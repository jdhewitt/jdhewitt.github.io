import type { MetaFunction } from "react-router";
import { useTranslation } from "react-i18next";
import HewittBuildersLogo from "~/components/HewittBuildersLogo";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const { t } = useTranslation();
  return (
    <div>

			<HewittBuildersLogo />
      <h1>{t("hi")}</h1>
    </div>
  );
}
