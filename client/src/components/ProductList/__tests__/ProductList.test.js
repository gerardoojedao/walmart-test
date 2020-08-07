import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ProductList from '../';
import { COMPONENT_PRODUCT_LIST } from '../../../constants/componentIdentifiers'

afterEach(cleanup)

const setupComponent = ()  => {

    const componentRender = render(<ProductList products={[]} query={''}/>)

    return {
        ...componentRender
    }
}

describe('<ProductCard /> unit testing', () => {

    it('should render', () => {
        const { getByTestId } = setupComponent();
        const linkElement = getByTestId(COMPONENT_PRODUCT_LIST);
        expect(linkElement).not.toBeNull();
    })

})
