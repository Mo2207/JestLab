
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../src/components/Button';
import '@testing-library/jest-dom';

// BUTTON TESTS
describe('Button tests', () => {

  // RENDER TEST
  test('Render test', () => {
    render(<Button label="Click me" onClick={() => {}} />); // render button in virtual DOM

    const buttonElement = screen.getByText('Click me'); // get button element by text

    expect(buttonElement).toBeInTheDocument(); // check if button is in the virtual DOM
  })

  // CLICK TEST
  test('Click test', () => {
    const handleClick = jest.fn(); // mock function
    render(<Button label="Click me" onClick={handleClick} />); // render button with mock function

    fireEvent.click(screen.getByText('Click me')); // simulate click event

    expect(handleClick).toHaveBeenCalledTimes(1); // check if mock function was called
  });

  // DISABLED TEST
  test('Disabled test', () => {
    const handleClick = jest.fn(); // mock function
    render(<Button label='Click me' onClick={handleClick} disabled={true}/>); // render button with disabled prop

    fireEvent.click(screen.getByText('Click me')); // simulate click event
    
    expect(handleClick).toHaveBeenCalledTimes(0); // check if mock function was not called
  });

});