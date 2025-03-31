import { dateFormatter } from '../utils/utils';

describe('dateFormatter()', () => {
  let now;
  beforeEach(() => {
    now = new Date();
  });
  describe('should return the time difference between now and a date in the past formatted differently based on the length of time', () => {
    test('less than one minute: should return "a few seconds ago"', () => {
      const pastDate = new Date(now - 30 * 1000); // 30 seconds
      const result = dateFormatter(pastDate);
      expect(result).toBe('a few seconds ago');
    });
  });
});
