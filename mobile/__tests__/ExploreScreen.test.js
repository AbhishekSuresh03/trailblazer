import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import OpeningScreen from '../components/OpeningScreen';

describe('OpeningScreen', () => {
    it('renders the OpeningScreen correctly', () => {
        const { getByText } = render(<OpeningScreen navigation={{ navigate: jest.fn() }} />);

        // Check if "Welcome to Trailblazer" text is rendered
        expect(getByText('Welcome to Trailblazer')).toBeTruthy();

        // Check if "Login" and "Create Account" buttons are rendered
        expect(getByText('Login')).toBeTruthy();
        expect(getByText('Create Account')).toBeTruthy();
    });

    it('handles user interactions', () => {
        const mockNavigate = jest.fn();
        const { getByText } = render(<OpeningScreen navigation={{ navigate: mockNavigate }} />);

        // Simulate press on "Login" button
        fireEvent.press(getByText('Login'));
        expect(mockNavigate).toHaveBeenCalledWith('Login');

        // Simulate press on "Create Account" button
        fireEvent.press(getByText('Create Account'));
        expect(mockNavigate).toHaveBeenCalledWith('CreateAccount');
    });
});
