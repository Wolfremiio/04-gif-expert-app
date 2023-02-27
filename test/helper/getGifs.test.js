import { render, screen } from "@testing-library/react";
import { string } from "prop-types";
import { getGifs } from "../../src/helpers/getGifs";

describe("Testing in <getGifs>", () => {
  test("Should be return a gifs Array  ", async () => {
    const gifs = await getGifs("Wolf");
    expect(gifs.length).toBeGreaterThan(0);

    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
