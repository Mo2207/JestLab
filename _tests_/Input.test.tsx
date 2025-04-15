
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from '../src/components/Input';
import '@testing-library/jest-dom';

// BUTTON TESTS
describe('Input tests', () => {

  // RENDER TEST
  test('Render test', () => {
    render(<Input value="text" onChange={() => {}} />); // render input in virtual DOM
    
    const InputElement = screen.getByDisplayValue('text'); // get input element by text
    
    expect(InputElement).toBeInTheDocument(); // check if input is in the virtual DOM
  })

  // CHANGE TEST
  test('Change test', () => {
    const handleChange = jest.fn(); // mock function
    render(<Input value="text" onChange={handleChange} />); // render input in virtual DOM
    
    const InputElement = screen.getByDisplayValue('text'); // get input element by text
    fireEvent.change(InputElement, { target: { value: 'new text' } }); // simulate user typing
    
    expect(handleChange).toHaveBeenCalledTimes(1); // check if function was called
    expect(handleChange).toHaveBeenCalledWith('new text'); // check if function was called with new text
  })

  // DISABLED TEST
  test('Disabled test', () => {
    const handleChange = jest.fn(); // mock function
    render(<Input value="text" onChange={handleChange} disabled={true} />); // render input in virtual DOM
    
    const InputElement = screen.getByDisplayValue('text'); // get input element by text
    
    expect(InputElement).toBeDisabled(); // check if input is disabled
    expect(handleChange).not.toHaveBeenCalled(); // check that function was not called
  })

  // PLACEHOLDER TEST
  test('Placeholder test', () => {
    render(<Input value="" onChange={() => {}} placeholder="Enter text" />); // render input in virtual DOM
    
    const InputElement = screen.getByPlaceholderText('Enter text'); // get input element by placeholder
    
    expect(InputElement).toBeInTheDocument(); // check if input is in the virtual DOM
  })
  
});