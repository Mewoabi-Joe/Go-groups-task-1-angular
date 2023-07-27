import { StringToFormattedDatePipe } from './string-to-formatted-date.pipe';

describe('StringToFormattedDatePipe', () => {
  it('create an instance', () => {
    const pipe = new StringToFormattedDatePipe();
    expect(pipe).toBeTruthy();
  });
});
