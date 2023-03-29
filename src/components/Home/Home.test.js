import renderer from "react-test-renderer";
import Home from "./Home";

test("renders Home component", () => {
	const tree = renderer.create(<Home></Home>).toJSON();

	expect(tree).toMatchSnapshot();
});
