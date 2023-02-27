import { fireEvent, getByPlaceholderText, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Testing in <GifExpertApp>", () => {
  test("Should be add a new category that don´t exist ", () => {

    render(<GifExpertApp/>);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input,{target: {value: 'Wolf'}});
    fireEvent.submit(form);

    expect(screen.getByText('Wolf')).toBeTruthy();
  
    expect(screen.getByPlaceholderText("Search Gifs...")).toBeTruthy();

  });

  test("Should be not  add a new category that exist ", () => {

    render(<GifExpertApp/>);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input,{target: {value: 'Wolf'}});
    fireEvent.submit(form);
  
    expect(screen.getAllByText('Wolf').length).toBe(1);

  });
});
