import { render, screen } from "@testing-library/react";
import About from "../About";
import "@testing-library/jest-dom";

test("should load About us page", () => {
  render(<About />);
  const aboutHeading = screen.getByText("About Us");
  expect(aboutHeading).toBeInTheDocument();

  const welcomeHeading = screen.getByText("Welcome to our site");
  expect(welcomeHeading).toBeInTheDocument();
});
