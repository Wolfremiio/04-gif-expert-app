import { renderHook, screen } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Testing in the Hook useFetchGifs", () => {
  test("Should be return the initial state ", () => {
    const { result } = renderHook(() => useFetchGifs("Wolf"));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("Should be return a array of images and 'isLoading' in false  ", () => {
    const { result } = renderHook(() => useFetchGifs("Wolf"));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });
});
