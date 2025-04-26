import React from "react";
import { render,screen } from "@testing-library/react";
import TestGreeting from "./testGreeting";

describe("Greeting Component",()=>{

    // renders correct greeting
    test('render greeting with the correct name', () => {
        render(<TestGreeting name="sai"/>)
        const greetingElement = screen.getByText(/hello,sai!/i)
        expect(greetingElement).toBeInTheDocument()
  
    })

    // render empty greeting

    test('displays a generic greeting when no name is provided',()=>{
        render(<TestGreeting name=''/>)
        const greetingElement = screen.getByText(/hello,!/i)
        expect(greetingElement).toBeInTheDocument()
    })

})

