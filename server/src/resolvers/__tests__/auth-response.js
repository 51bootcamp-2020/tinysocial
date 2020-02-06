const {AuthResponse} = require('../../resolvers');

describe('[AuthResponseResolver]', () => {
  test('returns success', async () => {
    const res = await AuthResponse.success({success: true});
    expect(res).toBe(true);
  });
  test('returns message', async () => {
    const res = await AuthResponse.message({message: 'Success'});
    expect(res).toBe('Success');
  });
  test('returns token', async () => {
    const res = await AuthResponse.token({token: 'Token1'});
    expect(res).toBe('Token1');
  });
  test('returns user', async () => {
    const res = await AuthResponse.user({id: 1});
    expect(res).toEqual({id: 1});
  });
});
