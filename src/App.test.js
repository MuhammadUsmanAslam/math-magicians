import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

test("render App component", () => {
	const tree = renderer
		.create(
			<Router>
				<App></App>
			</Router>
		)
		.toJSON();

	expect(tree).toMatchSnapshot();
});
