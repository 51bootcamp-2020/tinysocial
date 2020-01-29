const {EventSchedule} = require('../../resolvers');
const {mockContext} = require('../mockContext');

const {getAttributeOfSchedule} = mockContext.dataSources.eventAPI;

describe('[EventScheduleResolver]', () => {
  test('returns startDateTime', async () => {
    getAttributeOfSchedule.mockReturnValueOnce('2020-12-31 12:12:12');
    const res = await EventSchedule.startDateTime({id: 1}, {}, mockContext);
    expect(res).toBe('2020-12-31 12:12:12');
  })
  test('returns endDateTime', async () => {
    getAttributeOfSchedule.mockReturnValueOnce(new Date('2020-12-31 12:12:12'));
    const res = await EventSchedule.endDateTime({id: 1}, {}, mockContext);
    expect(res).toEqual(new Date('2020-12-31 12:12:12'));
  })
  test('returns address', async () => {
    getAttributeOfSchedule.mockReturnValueOnce('ThisIsScheduleAddress1');
    const res = await EventSchedule.address({id: 1}, {}, mockContext);
    expect(res).toBe('ThisIsScheduleAddress1');
  })
  test('returns latitude', async () => {
    getAttributeOfSchedule.mockReturnValueOnce(1.111111);
    const res = await EventSchedule.latitude({id: 1}, {}, mockContext);
    expect(res).toBe(1.111111);
  })
  test('returns longitude', async () => {
    getAttributeOfSchedule.mockReturnValueOnce(1.111111);
    const res = await EventSchedule.longitude({id: 1}, {}, mockContext);
    expect(res).toBe(1.111111);
  })
})