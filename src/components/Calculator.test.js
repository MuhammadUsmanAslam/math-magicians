import renderer from "react-test-renderer";
import Calculator from "./Calculator";

test("render calculator component", () => {
	const tree = renderer.create(<Calculator></Calculator>).toJSON();

	expect(tree).toMatchSnapshot();
});
