import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { ContactForm } from '@/components/ContactForm';

function completeRequiredFields() {
  fireEvent.change(screen.getByLabelText('Full name'), {
    target: { value: 'Sarah Ahmed' }
  });
  fireEvent.change(screen.getByLabelText('Professional email'), {
    target: { value: 'sarah@example.nhs.uk' }
  });
  fireEvent.change(screen.getByLabelText('Organization / PCN name'), {
    target: { value: 'North Hub PCN' }
  });
  fireEvent.change(screen.getByLabelText('Message'), {
    target: { value: 'We want to review the request flow and assurance model.' }
  });
  fireEvent.click(screen.getByLabelText('I agree that Vecell can use this information to respond to my enquiry.'));
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('ContactForm', () => {
  it('shows a recoverable error when submission fails before a response is returned', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('network unavailable')));

    render(<ContactForm />);
    completeRequiredFields();

    const submitButton = screen.getByRole('button', { name: /Send enquiry/i });
    fireEvent.submit(submitButton.closest('form') as HTMLFormElement);

    await waitFor(() => {
      expect(screen.getByRole('alert')).toHaveTextContent(
        'The request could not be sent. Check your connection and try again.'
      );
    });
  });
});
