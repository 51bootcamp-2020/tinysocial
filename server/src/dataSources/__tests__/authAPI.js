require('dotenv').config({path: require('path').
    resolve(process.cwd(), './src/.env')});

const {AuthAPI} = require('../authAPI');
const {mockStore} = require('../mockStore');
const {
  scheduleIdIsNotPassedMessage,
  eventIdIsNotPassedMessage,
  userIdIsNotPassedMessage,
  tagIdIsNotPassedMessage,
  notValidValueMessage,
  userNotFoundMessage,
  googleIdNotPassedMessage,
} = require('../../errorMessages');

const authAPI = new AuthAPI(mockStore);
authAPI.initialize({context: {user: {id: 1}}});

describe('[authAPI.signInWithGoogle]', () => {
  test('throws error if googleId is not passed', async () => {
    expect(authAPI.signInWithGoogle({})).rejects.toThrow(
        googleIdNotPassedMessage);
  });

  test('returns null when passed invalid googleId', async () => {
    mockStore.User.findOne.mockReturnValueOnce(null);
    const res = await authAPI.signInWithGoogle({googleId: 987654321});
    expect(res).toEqual({
      success: false,
      message: userNotFoundMessage,
      token: null,
      user: null,
    });
  });

  test('looks up AuthResponse', async () => {
    mockStore.User.findOne.mockReturnValueOnce({id: 1});
    const res = await authAPI.signInWithGoogle({googleId: 1234});
    expect(res).toEqual({
      success: true,
      message: 'Success',
      token: res.token,
      user: 1,
    });
  });
});
//TODO(lsh9034): implement unit test.
describe('[authAPI.signUpWithGoogle]', () => {
  test('throws error if googleId is not passed', async () => {
    expect(authAPI.signUpWithGoogle({})).rejects.toThrow(
        googleIdNotPassedMessage);
  });
});
