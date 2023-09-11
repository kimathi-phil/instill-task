import { render, fireEvent, waitFor } from "@testing-library/react";
import App from "../App";
import * as movieAPI from "../data/movieAPI";

jest.mock("../data/movieAPI");

test("searches for movies and displays them", async () => {
  (movieAPI.fetchMovies as jest.Mock).mockResolvedValue([
    { Title: "The Matrix", Year: "1999" },
    { Title: "Spider Man", Year: "2001" },
  ]);

  const { getByPlaceholderText, getByText } = render(<App />);
  const input = getByPlaceholderText("Search for movies...");

  fireEvent.change(input, { target: { value: "Star" } });

  await waitFor(() => {
    expect(getByText("The Matrix (1999)")).toBeInTheDocument();
    expect(getByText("Spider Man (2001)")).toBeInTheDocument();
  });
});
