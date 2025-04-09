import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Hero from '../src/components/Hero'
 
describe('Hero', () => {
  it('renders a heading', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
  })

  it('renders a subheading', () => {
    render(<Hero />)
    const subHeadings = [
      screen.queryByRole('heading', { level: 2 }),
      screen.queryByRole('heading', { level: 3 }), 
      screen.queryByRole('heading', { level: 4 }), 
      screen.queryByRole('paragraph'),     
    ];
    expect(subHeadings[0] || subHeadings[1] || subHeadings[2] || subHeadings[3]).toBeInTheDocument()
  })

  it('renders a call-to-action', () => {
    render(<Hero />)
    const CTA = screen.getByRole('button')
    expect(CTA).toBeInTheDocument()
  })

  it('renders a hero visual', () => {
    render(<Hero />)
    const visual = screen.getByTestId('hero')
    expect(visual).toBeInTheDocument()
  })
})