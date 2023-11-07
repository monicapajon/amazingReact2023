import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header';
//import { Router } from 'react-router-dom';
import Footer from '../components/Footer/footer';
//import { BrowserRouter as Router } from 'react-router-dom';
//Esto  se hace porque el Header tiene un nav dentro y este nav tiene links

describe('Se testeará el elemento Footer', () => {
  test('Verificar que el Footer se renderice correctamente', () => {

    render(<Footer aria-label="footer presentation" />);
    
    let titleElement = screen.getByRole('presentation');
    // let titleElement = screen.getByText('/Cohort/i') no funciona x text
    expect(titleElement).toBeInTheDocument();



  });
});
