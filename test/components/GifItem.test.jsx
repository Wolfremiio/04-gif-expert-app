import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";




describe('Testing in <GifItem>', () => {

  const title= "Wolf";
  const url = "http://gifmixapp.com/";

  test('Should be make match with the snapshot ', () => {
    const {container}= render (<GifItem url={ url } title={ title}/>)

    expect(container).toMatchSnapshot();
  });

  test('Should be show the picture with the URL and  correspondent Alt  ', () => {
    render (<GifItem url={ url } title={ title}/>)
   //screen.debug();
    //expect(screen.getByRole('img').src).toBe(url); ---> Documentacion, como hacerlo de otra forma, pero me decanté por una mas clara y escalable.
    
      const {src,alt} = screen.getByRole('img');
      expect(src).toBe(url);
      expect(alt).toBe(alt);
   
  
  });
  test('Should be show the title in the component', () => {
    render (<GifItem url={ url } title={ title}/>) 

    expect(screen.getByText(title)).toBeTruthy();
  });
})


  