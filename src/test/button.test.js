/* eslint-disable no-undef */
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Button from '../components/Button';


describe('<Button />', () => {
    
    
        test('testeo Botón', ()=> {
    
            render(
            <Router>
                <Button/>
            </Router>
            )
            let buttonElement = screen.getByRole("buttonElement")
            expect(buttonElement).toBeInTheDocument()
        })
    });