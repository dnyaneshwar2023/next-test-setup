import { render, screen } from '@testing-library/react'
import Home from '../app/page'

describe('Home', () => {
    it('renders a heading', async () => {
        render(<Home />)

        const headline = await screen.findAllByText("Welcome to Next.js")

        expect(headline.length).toEqual(1)
        expect(headline[0]).toBeInTheDocument()
    })
})