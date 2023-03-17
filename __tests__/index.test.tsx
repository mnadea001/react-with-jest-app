import Home from '@/pages/index'
import { render, screen, fireEvent } from '@testing-library/react'

describe('Home', () => {
  xit('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})


describe('Calculator', () => {

  it('renders a calculator', () => {
    render(<Home />)
    // Check if all components are displayed 

    expect(screen.getByTestId("result")).toBeInTheDocument();
  });

  it('renders a number1', () => {
    render(<Home />)
    // Check if all components are displayed 
    expect(screen.getByTestId("number1")).toBeInTheDocument();
  });
  it('renders a number2', () => {
    render(<Home />)
    expect(screen.getByTestId("number2")).toBeInTheDocument();
  });

  it('renders a add', () => {
    render(<Home />)
    expect(screen.getByTestId("add")).toBeInTheDocument();
  });
  it('renders a substract', () => {
    render(<Home />)
    expect(screen.getByTestId("substract")).toBeInTheDocument();
  });
  it('renders a multiply', () => {
    render(<Home />)
    expect(screen.getByTestId("multiply")).toBeInTheDocument();
  });

  it('renders a divide', () => {
    render(<Home />)
    expect(screen.getByTestId("divide")).toBeInTheDocument();
  });

  it('method "add" really adds numbers into result constant', () => {
    render(<Home />)
    // Check logic Controller

    const number1Input = screen.getByTestId("number1");
    const number2Input = screen.getByTestId("number2");
    const resultOutput = screen.getByTestId("result");

    fireEvent.change(number1Input, { target: { value: 123 } });
    fireEvent.change(number2Input, { target: { value: 543 } });
    // console.log('number1Input:', number1Input.value)
    fireEvent.click(screen.getByTestId("add"));

    expect(resultOutput).toHaveTextContent("666");
  });

  it('method "substract" really adds numbers into result constant', () => {
    render(<Home />)
    // Check logic Controller

    const number1Input = screen.getByTestId("number1");
    const number2Input = screen.getByTestId("number2");
    const resultOutput = screen.getByTestId("result");

    fireEvent.change(number1Input, { target: { value: 200 } });
    fireEvent.change(number2Input, { target: { value: 100 } });
    // console.log('number1Input:', number1Input.value)
    fireEvent.click(screen.getByTestId("substract"));

    expect(resultOutput).toHaveTextContent("100");
  });

  it('method "multiply" really adds numbers into result constant', () => {
    render(<Home />)
    // Check logic Controller

    const number1Input = screen.getByTestId("number1");
    const number2Input = screen.getByTestId("number2");
    const resultOutput = screen.getByTestId("result");

    fireEvent.change(number1Input, { target: { value: 200 } });
    fireEvent.change(number2Input, { target: { value: 2 } });
    // console.log('number1Input:', number1Input.value)
    fireEvent.click(screen.getByTestId("multiply"));

    expect(resultOutput).toHaveTextContent("400");
  });

  it('method "divide" really adds numbers into result constant', () => {
    render(<Home />)
    // Check logic Controller

    const number1Input = screen.getByTestId("number1");
    const number2Input = screen.getByTestId("number2");
    const resultOutput = screen.getByTestId("result");

    fireEvent.change(number1Input, { target: { value: 200 } });
    fireEvent.change(number2Input, { target: { value: 2 } });
    // console.log('number1Input:', number1Input.value)
    fireEvent.click(screen.getByTestId("divide"));

    expect(resultOutput).toHaveTextContent("100");
  });

});
