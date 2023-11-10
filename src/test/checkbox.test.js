


import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Checkbox from '../components/Checkbox';

describe('<Checkbox />', () => {
  test('testeo checkbox', () => {
    render(<Checkbox />);
    const checkboxElement = screen.getByRole('checkboxElement');
    expect(checkboxElement).toBeInTheDocument();

   
    const foodLabel = screen.getByText('Food');
    const booksLabel = screen.getByText('Books');
   
    expect(foodLabel).toBeInTheDocument();
    expect(booksLabel).toBeInTheDocument();
   
    const checkboxes = screen.getAllByRole('checkbox', { type: 'checkbox' });
    checkboxes.forEach((checkbox) => {
      expect(checkbox).not.toBeChecked();
    });
  });

  test('renderizo si funciona el onchange de checkbox', () => {
    const handleCategoryChange = jest.fn();
    render(<Checkbox handleCategoryChange={handleCategoryChange} />);

    const checkboxes = screen.getAllByRole('checkbox', { type: 'checkbox' });

   
    fireEvent.click(checkboxes[0]);

    
    expect(handleCategoryChange).toHaveBeenCalledWith(['Food']);

   
    fireEvent.click(checkboxes[0]);

  
    expect(handleCategoryChange).toHaveBeenCalledWith([]);
  });
});




