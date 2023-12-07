import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "../Header";

const mockedState = {
  user: {
    isAuth: true,
    name: "Test Name",
  },
  courses: [],
  authors: [],
};

const mockedStore = {
  getState: () => mockedState,
  subscribe: jest.fn(),
  dispatch: jest.fn(),
};

const mockedUseDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockedUseDispatch,
}));

describe("Header Component", () => {
  test("renders logo and user's name", () => {
    render(
      <Provider store={mockedStore}>
        <Router>
          <Header />
        </Router>
      </Provider>
    );

    test("logo should be rendered", () => {
      expect(screen.getByRole("svg")).toBeInTheDocument();
    });

    test("user name should be rendered", () => {
      expect(screen.getByText("Test Name")).toBeInTheDocument();
    });
  });
});
