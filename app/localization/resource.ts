import english from "../../resources/locales/en/common.json"
import spanish from "../../resources/locales/es/common.json"

const languages = ["en", "es"] as const
export const supportedLanguages = [...languages]
export type Language = (typeof languages)[number]

type Resource = {
	common: typeof english
}

export type Namespace = keyof Resource

export const resources: Record<Language, Resource> = {
	en: {
		common: english,
	},
	es: {
		common: spanish,
	},
}

declare module "i18next" {
	export interface CustomTypeOptions {
		defaultNS: "common"
		fallbackNS: "common"
		// custom resources type
		resources: Resource
	}
}
