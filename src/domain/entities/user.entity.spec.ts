import {User} from './user.entity';

describe('User', () => {
  it('should be able to create a user', () => {
    const user = new User({
      firstname: 'Henrique',
      lastname: 'Vuolo',
      email: 'henriquevuolo@gmail.com',
      password: 'Senha@123',
    });

    expect(user).toBeTruthy();
    expect(user).toBeInstanceOf(User);
    expect(user.firstname).toBe('Henrique');
    expect(user.password).toBeTruthy();
  });

  it('should return password undefined when user.hidePassword is called', () => {
    const user = new User({
      firstname: 'Henrique',
      lastname: 'Vuolo',
      email: 'henriquevuolo@gmail.com',
      password: 'Senha@123',
    });

    user.hidePassword();

    expect(user).toBeTruthy();
    expect(user).toBeInstanceOf(User);
    expect(user.firstname).toBe('Henrique');
    expect(user.password).toBeFalsy();
  });
});
