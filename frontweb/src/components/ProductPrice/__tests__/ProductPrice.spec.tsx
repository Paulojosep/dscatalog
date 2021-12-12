import { render, screen } from '@testing-library/react';
import ProductPrice from '../index';

test('should render ProductPrice', () => {
    const price = 10;
    const Texto = "R$";

    render(<ProductPrice price={price} />);

    expect(screen.getByText(Texto)).toBeInTheDocument();
    expect(screen.getByText("10,00")).toBeInTheDocument();
});