import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Details from '../pages/Details';

const mockEventos = [
  {
    _id: '1',
    name: 'Evento 1',
    date: '2023-11-30',
    place: 'Lugar 1',
    description: 'Descripción del evento 1',
    category: 'Categoría 1',
    price: 10,
    image: 'imagen1.png',
  },
];

describe('<Details />', () => {
  test('testeo Details con evento existente', () => {
    
    render(
      <Router>
        <Details eventos={mockEventos} />
      </Router>
    );

   
    const detailsElement = screen.getByRole('detailsElement');
    expect(detailsElement).toBeInTheDocument();

  });

  test('testeo Details sin evento existente', () => {
    
    render(
      <Router>
        <Details eventos={mockEventos} />
      </Router>
    );

    
    expect(screen.getByText('Evento no encontrado.')).toBeInTheDocument();
  });
});

