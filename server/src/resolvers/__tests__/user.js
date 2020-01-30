const {User} = require('../../resolvers');
const {mockContext} = require('../mockContext');

const {getAttributeOfUser, getAgeOfUser, } = mockContext.dataSources.userAPI;
const {getParticipatedEventIdsOfUser, getHostedEventIdsOfUser} = mockContext.dataSources.eventAPI;
describe('[UserResolver]', () => {
  test('returns firstName', async () => {
    getAttributeOfUser.mockReturnValueOnce('ThisIsUserFirstName1');
    const res = await User.firstName({id: 1}, {}, mockContext);
    expect(res).toBe('ThisIsUserFirstName1');
  });
  test('returns lastName', async () => {
    getAttributeOfUser.mockReturnValueOnce('ThisIsUserLastName1');
    const res = await User.lastName({id: 1}, {}, mockContext);
    expect(res).toBe('ThisIsUserLastName1');
  });
  test('returns email', async () => {
    getAttributeOfUser.mockReturnValueOnce('ThisIsUserEmail1');
    const res = await User.email({id: 1}, {}, mockContext);
    expect(res).toBe('ThisIsUserEmail1');
  });
  test('returns address', async () => {
    getAttributeOfUser.mockReturnValueOnce('ThisIsUseraddress1');
    const res = await User.address({id: 1}, {}, mockContext);
    expect(res).toBe('ThisIsUseraddress1');
  });
  test('returns phone', async () => {
    getAttributeOfUser.mockReturnValueOnce('ThisIsUserPhone1');
    const res = await User.phone({id: 1}, {}, mockContext);
    expect(res).toBe('ThisIsUserPhone1');
  });
  test('returns age', async () => {
    getAgeOfUser.mockReturnValueOnce(22);
    const res = await User.age({id: 1}, {}, mockContext);
    expect(res).toBe(22);
  });
  test('returns selfDescription', async () => {
    getAttributeOfUser.mockReturnValueOnce('ThisIsUserSelfDescription1');
    const res = await User.selfDescription({id: 1}, {}, mockContext);
    expect(res).toBe('ThisIsUserSelfDescription1');
  });
  test('returns hostedEvents', async () => {
    getHostedEventIdsOfUser.mockReturnValueOnce([{id: 1}, {id: 2}]);
    const res = await User.hostedEvents({id: 1}, {}, mockContext);
    expect(res).toEqual([{id: 1}, {id: 2}]);
  });
  test('returns participatedEvents', async () => {
    getParticipatedEventIdsOfUser.mockReturnValueOnce([{id: 1, eventId:2}, {id: 2, eventId:1}]);
    const res = await User.participatedEvents({id: 1}, {}, mockContext);
    expect(res).toEqual([{id: 1, eventId:2}, {id: 2, eventId:1}]);
  });
  test('returns birthday', async () => {
    getAttributeOfUser.mockReturnValueOnce(new Date('1996-04-22 12:45:00'));
    const res = await User.birthday({id: 1}, {}, mockContext);
    expect(res).toEqual(new Date('1996-04-22 12:45:00'));
  });
  test('returns registrationDate', async () => {
    getAttributeOfUser.mockReturnValueOnce(new Date('1996-04-22 12:45:00'));
    const res = await User.registrationDate({id: 1}, {}, mockContext);
    expect(res).toEqual(new Date('1996-04-22 12:45:00'));
  });
  test('returns profileImgUrl', async () => {
    getAttributeOfUser.mockReturnValueOnce('profileImgUrl');
    const res = await User.profileImgUrl({id: 1}, {}, mockContext);
    expect(res).toBe('profileImgUrl');
  });
});
