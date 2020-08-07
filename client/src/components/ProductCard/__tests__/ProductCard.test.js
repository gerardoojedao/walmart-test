import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ProductCard from '../';
import { COMPONENT_PRODUCT_CARD } from '../../../constants/componentIdentifiers'

afterEach(cleanup)

const setupComponent = ()  => {
    const mockProduct = {
        id: 1,
        brand: '',
        description:'',
        image:'',
        price:1,
        discount: 0
    }

    const componentRender = render(<ProductCard product={mockProduct}/>)

    return {
        ...componentRender
    }
}

describe('<ProductCard /> unit testing', () => {

    it('should render', () => {
        const { getByTestId } = setupComponent();
        const linkElement = getByTestId(COMPONENT_PRODUCT_CARD);
        expect(linkElement).not.toBeNull();
    })

})
