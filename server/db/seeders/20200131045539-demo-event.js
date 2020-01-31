'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Events', [{
      hostId: 1,
      title: 'Support your brain health Event',
      description: 'A strong memory depends on the health and vitality of your brain.' +
        ' Whether you’re a student studying for final exams,' +
        ' a working professional interested in doing all you can to stay mentally sharp,' +
        ' or a senior looking to preserve and enhance your grey matter as you age,' +
        ' there’s lots you can do to improve your memory and mental performance',
      price: 30,
      type: 0,
      thumbnailUrl: 'https://content.fortune.com/wp-content/uploads/2020/01/Book-Review-Splendid-and-Vile-Uncanny-Valley-Ladys-Handbook.jpg',
      maxParticipantNum: 50,
      createdAt: new Date(2020, 1, 1),
      updatedAt: new Date(2020, 1, 1),
    },
    {
      hostId: 2,
      title: 'Mind uploading Event',
      description: 'The human brain contains, on average,' +
          ' about 86 billion nerve cells called neurons,' +
          ' each individually linked to other neurons by way of connectors called axons and dendrites.' +
          ' Signals at the junctures (synapses) of these connections are transmitted by the release' +
          ' and detection of chemicals known as neurotransmitters. The established neuroscientific' +
          ' consensus is that the human mind is largely an emergent property of the information processing of this neural network.',
      price: 40,
      type: 0,
      thumbnailUrl: 'https://assets.readitforward.com/wp-content/uploads/2019/11/RIF-Q4-Books-We-Cant-Wait-To-Read-2020-RJD-1200x90011-12-830x625.jpg',
      maxParticipantNum: 50,
      createdAt: new Date(2020, 2, 11),
      updatedAt: new Date(2020, 2, 11),
    },
    {
      hostId: 3,
      title: 'Superhuman Social Skills Event',
      description: 'The people we surround ourselves with may impact our lives more than any other factor,' +
          ' and yet most people leave their social lives to chance. What would happen if you treated social skills as though they were indeed skills,' +
          ' and became proactive about your social life?',
      price: 30,
      type: 0,
      thumbnailUrl: 'https://d7hftxdivxxvm.cloudfront.net/?resize_to=width&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2FFjHJr7y8AehClP2DtD8onQ%252Fbooks1.jpg&width=800&quality=80',
      maxParticipantNum: 50,
      createdAt: new Date(2020, 3, 13),
      updatedAt: new Date(2020, 3, 13),
    },
    {
      hostId: 2,
      title: 'A Dark and Bloody Ground: A True Story of Lust, Greed, and Murder in the Bluegrass State Event',
      description: 'Kentucky never deserved its Indian appellation “A Dark and Bloody Ground” more than when a small-town physician,' +
          ' seventy-seven-year-old Roscoe Acker, called in an emergency on a sweltering evening in August 1985.' +
          ' Acker’s own life hung in the balance, but it was already too late for his college-age daughter,' +
          ' Tammy, savagely stabbed eleven times and pinned by a kitchen knife to her bedroom floor.' +
          ' Three men had breached Dr. Acker’s alarm and security systems and made off with the fortune he had stashed away over his lifetime.' +
          '\n\nThe killers—part of a three-man, two-woman gang of the sort not seen since the Barkers—stopped counting the moldy bills when they reached $1.9 million.' +
          ' The cash came in handy soon after when they were caught and needed to lure Kentucky’s most flamboyant lawyer,' +
          ' the celebrated and corrupt Lester Burns, into representing them. Full of colorful characters and desperate deeds,' +
          ' A Dark and Bloody Ground is a “first-rate” true crime chronicle from the author of Murder in Little Egypt',
      price: 50,
      type: 0,
      thumbnailUrl: 'https://i.pinimg.com/originals/ca/32/30/ca3230ac0ba85141d8a6b09dd5f549f2.jpg',
      maxParticipantNum: 50,
      createdAt: new Date(2020, 9, 6),
      updatedAt: new Date(2020, 9, 6),
    },
    {
      hostId: 1,
      title: 'War and Peace Event',
      description: 'Tolstoy’s epic masterpiece intertwines the lives of private and public individuals during the time of the Napoleonic wars and the French invasion of Russia. The fortunes of the Rostovs and the Bolkonskys, of Pierre, Natasha, and Andrei, are intimately connected with the national history that is played out in parallel with their lives. Balls and soirees alternate with councils of war and the machinations of statesmen and generals, scenes of violent battles with everyday human passions in a work whose extraordinary imaginative power has never been surpassed.\nThe prodigious cast of characters, seem to act and move as if connected by threads of destiny as the novel relentlessly questions ideas of free will, fate, and providence. Yet Tolstoy’s portrayal of marital relations and scenes of domesticity is as truthful and poignant as the grand themes that underlie them.',
      price: 100,
      type: 0,
      thumbnailUrl: 'http://rodrigocorral.com/uploads/projects/Area-X-1415742492.jpg',
      maxParticipantNum: 50,
      createdAt: new Date(2020, 11, 17),
      updatedAt: new Date(2020, 11, 17),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {});
  },
};
