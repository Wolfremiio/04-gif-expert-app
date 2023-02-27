import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";




describe('Testing in <GigGrid>', () => {

    const category = 'Wolf'

    test('Should be show the loading ', () => {
        
        render(<GifGrid category = { category }/>)

        expect(screen.getByText('Loading...'));
        expect(screen.getByText(category));
     
    });
})