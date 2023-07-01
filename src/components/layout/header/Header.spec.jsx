import { screen } from '@testing-library/react';
import {renderWithProviders} from "../../../test/helpers/Helpers";
import Header from "./Header";
describe('Header component', () => {
    const authClientStub = createAuthClientStub();

    it('should link to /home when pressing the Home button', () => {
        renderWithProviders(<Header />, authClientStub);
        const homeButton = screen.getByText('Home');
        expect(homeButton.pathname).toBe('/');
    });



    function createAuthClientStub() {
        return {
            init: jest.fn().mockResolvedValue(true),
            createLogoutUrl: jest.fn(),
            createLoginUrl: jest.fn(),
        };
    }
});