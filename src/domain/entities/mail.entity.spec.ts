import {Mail} from './mail.entity';

describe('Mail', () => {
  it('should be able to create a mail', () => {
    const mail = new Mail({
      title: 'title',
      content: 'content',
      userId: '1',
      sendAt: new Date(),
      to: 'user@mail.com',
    });

    expect(mail).toBeInstanceOf(Mail);
    expect(mail.title).toBe('title');
  });
});
