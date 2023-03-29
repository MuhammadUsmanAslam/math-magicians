import renderer from "react-test-renderer";
import Quotes from "./Quotes";

test("render quote component", () => {
	const tree = renderer.create(<Quotes></Quotes>).toJSON();

	expect(tree).toMatchSnapshot();
});
