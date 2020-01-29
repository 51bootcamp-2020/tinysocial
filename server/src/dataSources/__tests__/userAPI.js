const {UserAPI, userIdIsNotPassedMessage} = require('../userAPI');
const {mockStore} = require('./mockStore');

const userAPI = new UserAPI(mockStore);
userAPI.initialize({context: {userId: 1}});

describe('[UserAPI.getAttributeOfUser]', () => {
  test('throws error if userId is not passed', async () => {
    expect(userAPI.getAttributeOfUser()).rejects.toThrow(
        userIdIsNotPassedMessage);
  });

  test('returns null if non-existing user\'s Id is passed', async () => {
    mockStore.User.findOne.mockReturnValueOnce(null);
    const res = await userAPI.getAttributeOfUser('firstName', 42);
    expect(res).toEqual(null);
  });

  test('throws error if non-existing attributeName is passed ', async () => {
    mockStore.User.findOne.mockImplementationOnce(() => {
      throw new Error('Unknown column');
    });
    expect(userAPI.getAttributeOfUser('ids', 42)).rejects.
        toThrow('Unknown column');
  });

  test('returns age if existing user\'s id is passed', async () => {
    const birthday = new Date();
    const year = birthday.getFullYear();
    const month = birthday.getMonth();
    const day = birthday.getDate();
    birthday.setFullYear(year - 10);
    birthday.setMonth(month - 1);
    birthday.setDate(day - 1);

    mockStore.User.findOne.mockReturnValueOnce(
        {birthday});
    const res = await userAPI.getAttributeOfUser('age', 42);
    expect(res).toEqual(10);
  });

  test('returns first name if existing user\'s id is passed', async () => {
    mockStore.User.findOne.mockReturnValueOnce({firstName: 'YunHyeok'});
    const res = await userAPI.getAttributeOfUser('firstName', 42);
    expect(res).toEqual('YunHyeok');
  });

  test('returns last name if existing user\'s id is passed', async () => {
    mockStore.User.findOne.mockReturnValueOnce({lastName: 'Kwak'});
    const res = await userAPI.getAttributeOfUser('lastName', 42);
    expect(res).toEqual('Kwak');
  });

  test('returns profileImgUrl if existing user\'s id is passed', async () => {
    mockStore.User.findOne.mockReturnValueOnce(
        {profileImgUrl: 'https://via.placeholder.com/150'});
    const res = await userAPI.getAttributeOfUser('profileImgUrl', 42);
    expect(res).toEqual('https://via.placeholder.com/150');
  });

  test('returns email if existing user\'s id is passed', async () => {
    mockStore.User.findOne.mockReturnValueOnce({email: 'rev1c0sm0s@gmail.com'});
    const res = await userAPI.getAttributeOfUser('email', 42);
    expect(res).toEqual('rev1c0sm0s@gmail.com');
  });

  test('returns birthday if existing user\'s id is passed', async () => {
    mockStore.User.findOne.mockReturnValueOnce(
        {birthday: new Date('September 6, 1997 23:15:30 UTC')});
    const res = await userAPI.getAttributeOfUser('birthday', 42);
    expect(res).toEqual(new Date('September 6, 1997 23:15:30 UTC'));
  });

  test('returns address if existing user\'s id is passed', async () => {
    mockStore.User.findOne.mockReturnValueOnce({
      address:
        '31 El camino Real',
    });
    const res = await userAPI.getAttributeOfUser('address', 42);
    expect(res).toEqual('31 El camino Real');
  });

  test('returns phone if existing user\'s id is passed', async () => {
    mockStore.User.findOne.mockReturnValueOnce({
      phone:
        '301-333-3343',
    });
    const res = await userAPI.getAttributeOfUser('phone', 42);
    expect(res).toEqual('301-333-3343');
  });

  test('returns selfDescription if existing user\'s id is passed', async () => {
    mockStore.User.findOne.mockReturnValueOnce({
      selfDescription:
        'Hello.',
    });
    const res = await userAPI.getAttributeOfUser('selfDescription', 42);
    expect(res).toEqual('Hello.');
  });

  test('returns lastInteractionTime if existing user\'s id is passed',
      async () => {
        mockStore.User.findOne.mockReturnValueOnce({
          lastInteractionTime:
          new Date('September 6, 1997 23:15:30 UTC'),
        });
        const res = await userAPI.getAttributeOfUser('lastInteractionTime', 42);
        expect(res).toEqual(new Date('September 6, 1997 23:15:30 UTC'));
      });
});

describe('[UserAPI.getAgeOfUser]', () => {
  test('returns age of the user', async () => {
    const birthday = new Date();
    const year = birthday.getFullYear();
    const month = birthday.getMonth();
    const day = birthday.getDate();
    birthday.setFullYear(year - 10);
    birthday.setMonth(month - 1);
    birthday.setDate(day - 1);

    mockStore.User.findOne.mockReturnValueOnce(
        {birthday});
    const res = await userAPI.getAgeOfUser(42);
    expect(res).toEqual(10);
  });
});

describe('[UserAPI.getHostedEventIdsOfUser]', () => {
  test('returns empty array if user didn\'t host any  event', async () => {
    mockStore.Event.findAll.mockReturnValueOnce([]);
    const res = await userAPI.getHostedEventIdsOfUser({userId: 42});
    expect(res).toEqual([]);
  });

  test('returns array which contains event objects ' +
    'if user hosted events', async () => {
    mockStore.Event.findAll.mockReturnValueOnce([{id: 1}, {id: 2}]);
    const res = await userAPI.getHostedEventIdsOfUser({userId: 42});
    expect(res).toEqual([{id: 1}, {id: 2}]);
  });
});

describe('[UserAPI.getParticipatedEventIdsOfUser]', () => {
  test('returns empty array if user didn\'t participate any event',
      async () => {
        mockStore.EventParticipant.findAll.mockReturnValueOnce([]);
        const res = await userAPI.getParticipatedEventIdsOfUser({userId: 42});
        expect(res).toEqual([]);
      });

  test('returns array which contains event objects ' +
    'if user participated events', async () => {
    mockStore.EventParticipant.findAll.mockReturnValueOnce([{id: 1}, {id: 2}]);
    const res = await userAPI.getParticipatedEventIdsOfUser({userId: 42});
    expect(res).toEqual([{id: 1}, {id: 2}]);
  });
});
