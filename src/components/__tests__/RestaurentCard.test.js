import { render, screen } from "@testing-library/react";
import RestaurentCard from "../RestaurentCard";
import MOCK_DATA from "../Mocks/resDataMock.json";
import "@testing-library/jest-dom";

it("should render restaurent card component with props data", () => {
  render(<RestaurentCard resData={MOCK_DATA} />);
  const name = screen.getByText("Pizza Hut");
  expect(name).toBeInTheDocument();
});
