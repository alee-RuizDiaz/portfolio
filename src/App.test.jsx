import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App.jsx';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(document.getElementById('root')).toBeDefined();
  });
});
