import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");


describe('Testing in <GigGrid>', () => {

    const category = 'Wolf'

    test('Should be show the loading ', () => {
        
        useFetchGifs.mockReturnValue({
            images:[],
            isLoading: true,
        });
        
        render(<GifGrid category = { category }/>)

        expect(screen.getByText('Loading...'));
        expect(screen.getByText(category));
     
    });

    test('Should be show items when loading  the useFetchGif´s images  ', () => {
        const gifs= [{
            id: 'ABC',
            title: 'Wolf',
            url: 'https://localhost/Wolf.jpg',
        },

        {
            id: 'CBA',
            title: 'Snork',
            url: 'https://localhost/Snork.jpg',
        }]


        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });
        render(<GifGrid category = { category }/>)
        
        expect(screen.getAllByRole('img').length).toBe(2)
        //screen.debug();




    });
})