const { mainAPI } = require("../server/src/utils")
const Sequelize = require('sequelize');

test('1 is 1', () => {
    expect(mainAPI.getUserPastEvents(1)).toEqual({

    });
})