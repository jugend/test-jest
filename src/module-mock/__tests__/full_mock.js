
import defaultExport, {apple, strawberry} from '../fruit';

it('does a full mock', () => {
  expect(defaultExport()).toBe(undefined);
  expect(apple).toBe('apple');
  expect(strawberry()).toBe(undefined);
});

/**
 * This file illustrates a full mock of a module.
 * Automatically hoisted to the top of code block, use doMock
 * to mock module differently within the same file.
 *
 * Putting it at the bottom to show the hoisting
 */
jest.mock('../fruit');
