import React from 'react';
import { render, cleanup } from '@testing-library/react';
import EmptyResultList from '../';
import { COMPONENT_EMPTY_RESULT } from '../../../constants/componentIdentifiers'
import { DEFAULT_TITLE_EMPTY_RESULT } from '../../../constants/compoenetText'

afterEach(cleanup)

const setupComponent = ()  => {
    const componentRender = render(<EmptyResultList/>)

    return {
        ...componentRender
    }
}

describe('<EmptyResultList /> unit testing', () => {

    it('should render', () => {
        const { getByTestId } = setupComponent();
        const linkElement = getByTestId(COMPONENT_EMPTY_RESULT);
        expect(linkElement).not.toBeNull();
    })

    it('should have default text', () => {
        const { getByText } = setupComponent();
        const inputText = getByText(DEFAULT_TITLE_EMPTY_RESULT)
        expect(inputText).not.toBeNull()

    })
})
