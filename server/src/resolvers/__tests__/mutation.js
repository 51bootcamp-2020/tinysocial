const {Mutation} = require('../../resolvers');
const {mockContext} = require('../mockContext');

const {signInWithGoogle, signUpWithGoogle, signIn, signUp, emailValidate} = mockContext.dataSources.authAPI;
const {createOrModifyOfReview} = mockContext.dataSources.reviewAPI;

describe('[Mutation]', () => {
  test('signInWithGoogle', async () => {
    signInWithGoogle.mockReturnValueOnce({success: true, message: 'Success', token: 'TOKEN', user: {id: 1}});
    const res = await Mutation.signInWithGoogle({}, {googleId: "test@test.com"}, mockContext);
    expect(res).toEqual({success: true, message: 'Success', token: 'TOKEN', user: {id: 1}});
  });
  test('signUpWithGoogle', async () => {
    signUpWithGoogle.mockReturnValueOnce({success: true, message: 'Success', token: 'TOKEN', user: {id: 1}});
    const res = await Mutation.signUpWithGoogle({}, {googleId: "test@test.com"}, mockContext);
    expect(res).toEqual({success: true, message: 'Success', token: 'TOKEN', user: {id: 1}});
  });
  test('signIn', async () => {
    signIn.mockReturnValueOnce({success: true, message: 'Success', token: 'TOKEN', user: {id: 1}});
    const res = await Mutation.signIn({}, {email: 'test@test.com', pw: 'testpw'}, mockContext);
    expect(res).toEqual({success: true, message: 'Success', token: 'TOKEN', user: {id: 1}});
  });
  test('signUp', async () => {
    signUp.mockReturnValueOnce({success: true, message: 'Success'});
    const res = await Mutation.signUp({}, {email: 'test@test.com', firstName: 'firstname', lastName: 'lastname', pw: 'testpw', repw: 'testrepw'}, mockContext);
    expect(res).toEqual({success: true, message: 'Success'});
  });
  test('emailValidate', async () => {
    emailValidate.mockReturnValueOnce({success: true, message: 'Success', token: 'TOKEN', user: {id: 1}});
    const res = await Mutation.emailValidate({}, {token: 'TOKEN'}, mockContext);
    expect(res).toEqual({success: true, message: 'Success', token: 'TOKEN', user: {id: 1}});
  });
  test('logOut', async () => {
    expect(Mutation.logOut({}, {}, mockContext)).rejects.toThrow('Not implemented yet');
  });
  test('createOrModifyOfReview', async () => {
    createOrModifyOfReview.mockReturnValueOnce({userId: 1, eventId: 1});
    const res = await Mutation.createOrModifyReview({}, {eventId: 1, title: 'testTitle', content: 'testContent', isPublic: true}, mockContext);
    expect(res).toEqual({userId: 1, eventId: 1});
  });
})