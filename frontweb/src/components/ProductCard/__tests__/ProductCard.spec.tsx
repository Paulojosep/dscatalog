import { render, screen } from '@testing-library/react';
import { Product } from '../../../types/product';
import ProductCard from '../index';

test('should render ProductCard', () => {
    const product: Product ={
        name: "Computador",
        imgUrl:"https://google.com",
        price: 10,
    } as Product;

    render(<ProductCard product={product} />);

    expect(screen.getByText(product.name)).toBeInTheDocument();
    expect(screen.getByText("R$")).toBeInTheDocument();
    expect(screen.getByText("10,00")).toBeInTheDocument();
    expect(screen.getByAltText(product.name)).toBeInTheDocument();
});