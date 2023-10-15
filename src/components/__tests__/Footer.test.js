import { render } from "@testing-library/react";
import Footer from "../Footer";
test("Footer should be present when we load our home page", () => {
  render(<Footer />);
});
