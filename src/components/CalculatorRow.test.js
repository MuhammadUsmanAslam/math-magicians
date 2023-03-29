import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import CalculatorRow from "./CalculatorRow";

describe("Calculator row", () => {
	let RowData;
	let inputData;
	let setInputData;

	beforeEach(() => {
		RowData = ["7", "8", "9", "x"];
		inputData = {
			total: null,
			next: null,
			operation: null,
		};

		setInputData = (data) => {
			inputData = data;
		};
	});

	test("render calculator row", () => {
		render(
			<CalculatorRow
				inputData={inputData}
				setInputData={setInputData}
				data={RowData}
			></CalculatorRow>
		);
		const buttonElements = screen.getAllByRole("button");

		expect(buttonElements.length).toEqual(RowData.length);
	});

	test("renders a number of seven", async () => {
		render(
			<CalculatorRow
				inputData={inputData}
				setInputData={setInputData}
				data={RowData}
			></CalculatorRow>
		);

		const buttonElement = screen.getByRole("button", {
			name: "7",
		});

		await user.click(buttonElement);

		expect(inputData.next).toBe("7");
	});
});
