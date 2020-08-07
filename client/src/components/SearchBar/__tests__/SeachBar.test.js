import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { SearchBar } from '../../index';
import { COMPONENT_SEARCH_BAR } from '../../../constants/componentIdentifiers'

afterEach(cleanup)

const setupComponent = ()  => {
    const onSearch = jest.fn()
    const componentRender = render(
        <SearchBar onSearch={onSearch}/>)

    return {
        onSearch,
        ...componentRender
    }

}
describe('<SearchBar /> unit testing', () => {

    it('should render', () => {
        const { getByTestId } = setupComponent();
        const linkElement = getByTestId(COMPONENT_SEARCH_BAR);
        expect(linkElement).not.toBeNull();
    })
})
