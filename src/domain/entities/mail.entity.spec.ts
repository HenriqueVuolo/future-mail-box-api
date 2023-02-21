import {Mail} from './mail.entity';

describe('Mail', () => {
  it('should be able to create a mail', () => {
    const mail = new Mail({
      subject: 'subject',
      content: 'content',
      userId: '1',
      sendAt: new Date(),
      to: 'user@mail.com',
    });

    expect(mail).toBeInstanceOf(Mail);
    expect(mail.subject).toBe('subject');
  });
});
