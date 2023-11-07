import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
//Esto  se hace porque el Header tiene un nav dentro y este nav tiene links

describe('<Header/>', () => {
  test('se debería comprobar si se renderiza correctamente el componente nav que está dentro del Header', () => {
    //con el render quiero renderizar un elemento y con screen quiero ver si tiene Home adentro ese elemento
    render(
      <Router>
        <nav aria-label={'main navegation'}  />
      </Router>
    );
    let titleElement = screen.getByRole('navigation'); //Busca el texto"Home" y con la i es indistinto mayusculas y minusculas tambien se puede poner Home solo. Esto lo guardo en una variable let.Tambien puede ser let titleElement = screen.getByRole("titulo") y se pone "Role" dentro de la etiqueta h1

    //Ahora ponemos lo que se espera . El expect es de jest. Lo anterior es de testing library

    expect(titleElement).toBeInTheDocument()
    //@example

{/* <svg data-testid="svg-element"></svg>

expect(queryByTestId('svg-element')).toBeInTheDocument()
expect(queryByTestId('does-not-exist')).not.toBeInTheDocument()
@see — testing-library/jest-dom#tobeinthedocument */}


    //ver en la libreria toHaveFormValues, esta bueno!
  });
});
