const { render } = require("@testing-library/react");
import Header from "../Header";
const { Provider } = require("react-redux");
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

test("should load header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
});
