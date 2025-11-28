import * as Module from "./home"

describe("Home route", () => {
	it("should render the home page text properly in english", async ({ renderStub }) => {
		const { getByText } = await renderStub({
			entries: [
				{
					id: "home",
					path: "/",
					Component: () => Module.default(),
				},
			],
		})

		expect(
			getByText("React Router is awesome!", {
				exact: false,
			})
		).not.toBeNull()
	})

	it("should render the home page text properly in spanish", async ({ renderStub }) => {
		const { getByText } = await renderStub({
			entries: [
				{
					id: "home",
					path: "/",

					Component: () => Module.default(),
				},
			],
			i18n: {
				lng: "es",
			},
		})

		expect(
			getByText("¡React Router es increíble!", {
				exact: false,
			})
		).not.toBeNull()
	})
})
