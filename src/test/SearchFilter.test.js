import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchFilter from '../components/SearchFilter/SearchFilter';



describe('<SearchFilter />', () => {
  test('Deberia renderizar su correcto funcionamiento', () => {
    render(<SearchFilter />);
    let searchEventElement = screen.getByRole('searchEvent');
    expect(searchEventElement).toBeInTheDocument();
  });
});

// test('Se debería buscar el texto indicado al darle click', () => { 




//                       render(<SearchFilter />);
//                       let buttonEventElement = screen.getByRole('searchEvent');
//                                                fireEvent.click(buttonEventElement)
                                            
//                                               let searchEventElement = screen.ByText("arab")
                      

// })



// Simula una función de manejo de cambio
// const handleInputChange = jest.fn();

// test('SearchFilter component should update input value', () => {
//   const eventName = 'initial value';

//   render(<SearchFilter eventName={eventName} handleInputChange={handleInputChange} />);

//   const inputElement = screen.getByRole('searchEvent');
//   const buttonElement = screen.getByRole('buttonEvent');

//   // Verificar que el valor inicial del campo de entrada sea correcto
//   expect(inputElement).toHaveValue('initial value');

//   // Simular un cambio en el campo de entrada
//   fireEvent.change(inputElement, { target: { value: 'New Value' } });

//   // Verificar que el manejador de cambio se haya llamado con el nuevo valor
//   expect(handleInputChange).toHaveBeenCalledWith('New Value');

//   // Verificar que el valor del campo de entrada se haya actualizado
//   expect(inputElement).toHaveValue('New Value');
// });









