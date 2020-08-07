import React from 'react';
import { render, wait, fireEvent, cleanup } from '@testing-library/react';
import { Pagination } from '../../index';
import { COMPONENT_PAGINATION } from '../../../constants/componentIdentifiers'

afterEach(cleanup)

const setupComponent = ()  => {
    const onClick = jest.fn()
    const componentRender = render(
        <Pagination
            totalPages={10}
            currentPage={1}
            onSelectPage={onClick}
        />)

    return {
        onClick,
        ...componentRender
    }

}
describe('<Pagination /> unit testing', () => {

    it('should render', () => {
        const { getByTestId } = setupComponent();
        const linkElement = getByTestId(COMPONENT_PAGINATION);
        expect(linkElement).not.toBeNull();
    })

    it('should click next button', async () => {
        const { onClick, getByLabelText } = setupComponent();

        const secondPageButton = getByLabelText('Go to page 2')
        expect(secondPageButton).not.toBeNull()

        await wait(() => {
            fireEvent.click(secondPageButton)
        })

        await wait(() => {
            expect(onClick).toBeCalled()
        })
    })
})
