import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Modal } from './Modal';

describe('Modal', () => {
  const defaultProps = {
    header: 'Modal header',
    content: 'Content header',
    buttonLabel: 'ok',
    onClose: () => null,
  };
  test('renders without errors and matches snapshot', () => {
    const {
      container: { firstChild },
    } = render(<Modal {...defaultProps} />);

    expect(firstChild).toMatchSnapshot();
  });

  test('should display content', () => {
    const { getByText } = render(<Modal {...defaultProps} />);
    getByText(/Content/i);
  });

  test('should handle click event and call on close on button click', () => {
    const onCloseMock = jest.fn();
    const { getByText } = render(
      <Modal {...defaultProps} onClose={onCloseMock} />
    );
    const button = getByText('ok');
    button && fireEvent.click(button);

    expect(onCloseMock).toBeCalled();
  });

  test('should handle click event and call on close on close icon click', () => {
    const onCloseMock = jest.fn();
    const { getByLabelText } = render(
      <Modal {...defaultProps} onClose={onCloseMock} />
    );
    const close = getByLabelText('close modal');
    close && fireEvent.click(close);

    expect(onCloseMock).toBeCalled();
  });

  test('should call on close if click outside of modal', () => {
    const onCloseMock = jest.fn();
    const { container } = render(
      <Modal {...defaultProps} onClose={onCloseMock} />
    );
    fireEvent.click(document);
    expect(onCloseMock).toBeCalled();
  });

  describe('Confirmation Modal', () => {
    test('should display confirmation button', () => {
      const { getByText } = render(
        <Modal
          {...defaultProps}
          isConfirmationModal={true}
          confirmationButtonLabel='confirm'
          onConfirm={() => null}
        />
      );
      getByText(/confirm/i);
    });

    test('should handle click event and call on confirm on confirmation button click', () => {
      const onConfirmMock = jest.fn();
      const { getByText } = render(
        <Modal
          {...defaultProps}
          isConfirmationModal={true}
          confirmationButtonLabel='confirm'
          onConfirm={onConfirmMock}
        />
      );
      const button = getByText('confirm');
      button && fireEvent.click(button);

      expect(onConfirmMock).toBeCalled();
    });
  });
});
