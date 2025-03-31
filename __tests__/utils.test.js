import { dateFormatter } from '../utils/utils';

describe('dateFormatter()', () => {
  let now;
  beforeEach(() => {
    now = new Date();
  });
  describe('should return the time difference between now and a date in the past formatted differently based on the length of time', () => {
    test('less than one minute: should return "a few seconds ago"', () => {
      const pastDate = new Date(now - 30000); // 30 seconds
      const result = dateFormatter(pastDate);
      expect(result).toBe('a few seconds ago');
    });
    test('between 1 and 59 mins: should return "n minutes ago"', () => {
      const pastDate = new Date(now - 1800000); // 30 mins
      const result = dateFormatter(pastDate);
      expect(result).toBe('30 minutes ago');
    });
    test('between 1 and 23 hours: should return "n hours ago"', () => {
      const pastDate = new Date(now - 36000000); // 10 hours
      const result = dateFormatter(pastDate);
      expect(result).toBe('10 hours ago');
    });
    test('between 1 and 28 days: should return "n days ago"', () => {
      const pastDate = new Date(now - 864000000); // 10 days
      const result = dateFormatter(pastDate);
      expect(result).toBe('10 days ago');
    });
  });
});
