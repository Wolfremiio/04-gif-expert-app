import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";


render

describe('Testing in <GifItem>', () => {

  const title= "Wolf";
  const url = "http://GifMixApp.com";

  test('Should make match with the snapshot ', () => {
    const {container}= render (<GifItem url={ url } title={ title}/>)

    expect(container).toMatchSnapshot();
  });
})


  