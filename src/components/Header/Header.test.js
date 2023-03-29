import renderer from "react-test-renderer";
import Header from "./Header";
import { BrowserRouter as Router } from "react-router-dom";

test("render header component correctly", () => {
	const tree = renderer
		.create(
			<Router>
				<Header></Header>
			</Router>
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
