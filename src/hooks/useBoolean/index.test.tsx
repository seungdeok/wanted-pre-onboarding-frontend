import { render, fireEvent } from '@testing-library/react';
import { useBoolean } from './useBoolean';

const INITIAL_VALUE = false;
const LABEL_TEST_ID = 'label';
const BUTTON1_TEST_ID = 'ture';
const BUTTON2_TEST_ID = 'false';
const BUTTON3_TEST_ID = 'toggle';

const TestComponent = () => {
  const [value, setTrue, setFalse, toggle] = useBoolean(INITIAL_VALUE);

  return (
    <div>
      <p data-testid={LABEL_TEST_ID}>{value.toString()}</p>
      <button data-testid={BUTTON1_TEST_ID} type="button" onClick={setTrue}>
        true
      </button>
      <button data-testid={BUTTON2_TEST_ID} type="button" onClick={setFalse}>
        false
      </button>
      <button data-testid={BUTTON3_TEST_ID} type="button" onClick={toggle}>
        toggle
      </button>
    </div>
  );
};

describe('[unit] useBoolean', () => {
  it('Returns initial value correctly', () => {
    const { getByTestId } = render(<TestComponent />);
    const p = getByTestId(LABEL_TEST_ID) as HTMLInputElement;
    expect(p.textContent).toBe(INITIAL_VALUE.toString());
  });

  it('Updates boolean value with onClick true correctly', () => {
    const { getByTestId } = render(<TestComponent />);
    const p = getByTestId(LABEL_TEST_ID) as HTMLInputElement;
    const btn = getByTestId(BUTTON1_TEST_ID);
    fireEvent.click(btn);
    expect(p.textContent).toBe('true');
  });

  it('Updates boolean value with onClick false correctly', () => {
    const { getByTestId } = render(<TestComponent />);
    const p = getByTestId(LABEL_TEST_ID) as HTMLInputElement;
    const btn = getByTestId(BUTTON2_TEST_ID);
    fireEvent.click(btn);
    expect(p.textContent).toBe('false');
  });

  it('Updates boolean value with onClick toggle correctly', () => {
    const { getByTestId } = render(<TestComponent />);
    const p = getByTestId(LABEL_TEST_ID) as HTMLInputElement;
    const prev = p.textContent;
    const btn = getByTestId(BUTTON3_TEST_ID);
    fireEvent.click(btn);
    expect(p.textContent).toBe(prev === 'true' ? 'false' : 'true');
  });
});
