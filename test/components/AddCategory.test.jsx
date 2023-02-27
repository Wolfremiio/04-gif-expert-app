import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";




describe('Testing in <AddCategory>', () => {
    test('Should be change the value of the text´s box ', () => {
        
        render (<AddCategory onNewCategory = {() => {}}/>)
       
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target:{value: 'Wolf'}});

        expect(input.value).toBe('Wolf');
     
    });
});  