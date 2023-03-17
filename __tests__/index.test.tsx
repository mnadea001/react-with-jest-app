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

  it('method "add" really adds numbers into result constant', ()=> {
    render(<Home/>)
    // Check logic Controller
  } 
  )


});
