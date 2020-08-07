import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { COMPONENT_LOADING } from '../../../constants/componentIdentifiers'
import Loading from '../';

afterEach(cleanup)

const setupComponent = ()  => {
    const componentRender = render(<Loading/>)

    return {
        ...componentRender
    }
}

describe('<Loading /> unit testing', () => {

    it('should render', () => {
        const { getByTestId } = setupComponent();
        const linkElement = getByTestId(COMPONENT_LOADING);
        expect(linkElement).not.toBeNull();
    })
})
