import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";




describe('Testing in <AddCategory>', () => {
    test('Should be change the value of the text´s box ', () => {
        
        render (<AddCategory onNewCategory = {() => {}}/>)
       
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target:{value: 'Wolf'}});

        expect(input.value).toBe('Wolf');
     
    });

    test('Should be call  onNewCategory if the input have a value ', () => {
        
        const inputValue = 'Wolf';
        const onNewCategory = jest.fn();
        render (<AddCategory onNewCategory = {onNewCategory}/>) 
               
        const input = screen.getByRole('textbox'); 
        const form = screen.getByRole('form');

        fireEvent.input( input, { target:{value: inputValue}});
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('Should not call onnewCategory if the input is empty ', () => {
      
        const onNewCategory = jest.fn();
        render (<AddCategory onNewCategory = {onNewCategory}/>) 

       
        const form = screen.getByRole('form');

  
        fireEvent.submit(form);
     
   

        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
       
    });
});  