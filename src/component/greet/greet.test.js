import Greet from "./greet"
import { render, screen, fireEvent } from '@testing-library/react';

test('render a button and handleClick Event',()=>{
    
    render(<Greet/>)
    const buttonElement = screen.getByText("Click mee")
    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement)
    expect(screen.getByText("Button Clicked")).toBeInTheDocument();
    
})