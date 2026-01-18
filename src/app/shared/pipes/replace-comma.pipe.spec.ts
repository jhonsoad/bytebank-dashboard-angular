import { ReplaceCommaPipe } from './replace-comma.pipe';

describe('ReplaceCommaPipe', () => {
  let pipe: ReplaceCommaPipe;

  beforeEach(() => {
    pipe = new ReplaceCommaPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should replace dot with comma in a string', () => {
    const result = pipe.transform('10.50');
    expect(result).toBe('10,50');
  });

  it('should return the same string if there is no dot', () => {
    const result = pipe.transform('1000');
    expect(result).toBe('1000');
  });

  it('should convert number to string and replace dot with comma', () => {
    const result = pipe.transform(123.45);
    expect(result).toBe('123,45');
  });
});
