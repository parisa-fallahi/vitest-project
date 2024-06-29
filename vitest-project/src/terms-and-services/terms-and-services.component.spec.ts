import { it, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/angular'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/vitest'
import { TermsAndServicesComponent } from './terms-and-services.component'
import {userEvent} from '@testing-library/user-event'

describe('termsAndConditions', () => {
  it('should render the text correctly', async () => {
    await render(TermsAndServicesComponent);
  const heading = screen.getByRole('heading');
  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent('Terms & Conditions');
  expect(screen.getByRole('checkbox', { name: /I accept the terms and conditions./i })).toBeInTheDocument();
  expect(screen.getByRole('checkbox', { name: /I accept the terms and conditions./i })).not.toBeChecked();

  expect(screen.getByRole('button')).toBeInTheDocument();
  expect(screen.getByRole('button')).toHaveTextContent(/submit/i);
  expect(screen.getByRole('button')).toBeDisabled();

  }),
  it('should enable the button when the checkbox is enabled', async() => {
    await render(TermsAndServicesComponent);

    const checkbox = screen.getByRole('checkbox');
    const user = userEvent.setup();
    await user.click(checkbox);
    expect(screen.getByRole('button')).toBeEnabled();

  })
  it('should show the message when the button is clicked', async() => {
    await render(TermsAndServicesComponent);

    const button = screen.getByRole('button');
    const user = userEvent.setup();
    await user.click(button);
    const alertMsg = await screen.findByText('Form submitted successfully');
    expect(alertMsg).toBeInTheDocument()

  })
})
