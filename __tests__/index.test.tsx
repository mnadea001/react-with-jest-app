import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

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
    expect(screen.getByTestId("number1")).toBeInTheDocument();
    expect(screen.getByTestId("number2")).toBeInTheDocument();
    expect(screen.getByTestId("add")).toBeInTheDocument();
    expect(screen.getByTestId("substract")).toBeInTheDocument();
    expect(screen.getByTestId("multiply")).toBeInTheDocument();
    expect(screen.getByTestId("divide")).toBeInTheDocument();





  });

});
