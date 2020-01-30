const Users = [
  {
    firstName: 'Sihyun',
    lastName: 'Lee',
    googleId: 'lsh9034@kookmin.ac.kr',
    birthday: new Date('1999-12-14'),
    profileImgUrl: 'https://fimg4.pann.com/new/download.jsp?FileID=49592267',
    address: '31 El Camino RealBurlingame, CA 94010',
    phone: '+821084277033',
    selfDescription: 'Sihyun is stupid',
    lastInteractionTime: new Date(), // To refresh JWT token
  },
  {
    firstName: 'Yunhyeok',
    lastName: 'Kwak',
    facebookId: 'Yunhyeok facebookId',
    profileImgUrl: 'https://i.ytimg.com/vi/KEgC50mX8ho/maxresdefault.jpg',
    birthday: new Date('1997-9-6'),
    address: '338 South Fremont Street, San Mateo, CA',
    phone: '+1234567890',
    selfDescription: 'Yunhyeok is babo',
    lastInteractionTime: new Date(), // To refresh JWT token
  },
  {
    firstName: 'Seongjae',
    lastName: 'Song',
    profileImgUrl: 'https://m.soonsoobeauty.com/web/upload/NNEditor/20190220/ECB0B8EC9DB4EC8AAC.jpg',
    password: 'qwer1234!',
    email: 'Seongjae@naver.com',
    birthday: new Date('1996-4-22'),
    // TODO(yun-kwak): Split the address into street address,
    // additional street address, city, state, zip code
    address: '50 E 3rd Ave, San Mateo, CA 94401',
    phone: '+1029384756',
    selfDescription: 'Seongjae is big man',
    lastInteractionTime: new Date(), // To refresh JWT token
  },
];

const Events = [
  {
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
  },
  {
    hostId: 1,
    title: 'War and Peace Event',
    description: 'Tolstoy’s epic masterpiece intertwines the lives of private and public individuals during the time of the Napoleonic wars and the French invasion of Russia. The fortunes of the Rostovs and the Bolkonskys, of Pierre, Natasha, and Andrei, are intimately connected with the national history that is played out in parallel with their lives. Balls and soirees alternate with councils of war and the machinations of statesmen and generals, scenes of violent battles with everyday human passions in a work whose extraordinary imaginative power has never been surpassed.\nThe prodigious cast of characters, seem to act and move as if connected by threads of destiny as the novel relentlessly questions ideas of free will, fate, and providence. Yet Tolstoy’s portrayal of marital relations and scenes of domesticity is as truthful and poignant as the grand themes that underlie them.',
    price: 100,
    type: 0,
    thumbnailUrl: 'http://rodrigocorral.com/uploads/projects/Area-X-1415742492.jpg',
    maxParticipantNum: 50,
  },
];

const Schedule = [
  {
    startDateTime: new Date('2020-1-20 12:00'),
    endDateTime: new Date('2020-1-20 13:15'),
    address: '120 S Ellsworth Ave San Mateo, CA 94401',
    latitude: 37.566269,
    longitude: -122.324986,
    eventId: 1
  },
  {
    startDateTime: new Date('2020-2-5 13:30'),
    endDateTime: new Date('2020-2-5 14:45'),
    address: '120 S Ellsworth Ave San Mateo, CA 94401',
    latitude: 37.566269,
    longitude: -122.324986,
    eventId: 1
  },
  {
    startDateTime: new Date('2020-2-10 15:00'),
    endDateTime: new Date('2020-2-5 16:15'),
    address: '1 Baldwin Ave San Mateo, CA 94401',
    latitude: 37.565898,
    longitude: -122.327813,
    eventId: 1
  },
  {
    startDateTime: new Date('2020-1-5 12:00'),
    endDateTime: new Date('2020-1-5 13:15'),
    address: 'Carlstrom Productions, Inc., 204 2nd Ave Suite 129, San Mateo, CA 94401',
    latitude: 37.565773,
    longitude: -122.323952,
    eventId: 2,
  },
  {
    startDateTime: new Date('2020-1-13 12:00'),
    endDateTime: new Date('2020-1-13 13:15'),
    address: 'Carlstrom Productions, Inc., 204 2nd Ave Suite 129, San Mateo, CA 94401',
    latitude: 37.565773,
    longitude: -122.323952,
    eventId: 2,
  },
  {
    startDateTime: new Date('2020-4-22 00:00'),
    endDateTime: new Date('2020-4-22 23:15'),
    address: 'Kokko, 509 2nd Ave, San Mateo, CA 94401',
    latitude: 37.567726,
    longitude: -122.321456,
    eventId: 3,
  },
  {
    startDateTime: new Date('2020-2-25 10:00'),
    endDateTime: new Date('2020-2-25 14:15'),
    address: 'San Mateo Public Library, 55 W 3rd Ave, San Mateo, CA 94402Kokko, 509 2nd Ave, San Mateo, CA 94401',
    latitude: 37.562245,
    longitude: -122.326853,
    eventId: 4,
  },
  {
    startDateTime: new Date('2020-1-1 00:00'),
    endDateTime: new Date('2020-1-1 24:00'),
    address: 'San Mateo Central Park, 50 E 5th Ave, San Mateo, CA 94401',
    latitude: 37.561321,
    longitude: -122.323487,
    eventId: 5,
  },
];

const EventParticipant = [
  {
    userId: 1,
    eventId: 1,
  },
  {
    userId: 2,
    eventId: 1,
  },
  {
    userId: 1,
    eventId: 2,
  },
  {
    userId: 2,
    eventId: 2,
  },
  {
    userId: 3,
    eventId: 2,
  },
  {
    userId: 3,
    eventId: 3,
  },
  {
    userId: 2,
    eventId: 4,
  },
  {
    userId: 1,
    eventId: 5,
  },
]

const Review = [
  {
    userId: 1,
    eventId: 2,
    title: 'This event was so funny!!',
    content: 'It was so funny but a little bit boring',
    isPublic: true,
  },
  {
    userId: 2,
    eventId: 1,
    title: 'It was terrible book.',
    content: 'The book is so biased. I think it\'s author is racist',
    isPublic: false,
  },
  {
    userId: 3,
    eventId: 2,
    title: 'Just common book and event',
    content: 'It was not interestd. But my friends Sihyun like this.',
    isPublic: false,
  },
]

const EventBookClubs = [
  {
    eventId: 1,
    bookTitle: 'The Brain: The Story of You',
    bookAuthor: 'David Eagleman',
    bookDescription: 'Locked in the silence and darkness of your skull,' +
            ' your brain fashions the rich narratives of your reality and your identity.' +
            ' Join renowned neuroscientist David Eagleman for a journey into the questions' +
            ' at the mysterious heart of our existence. What is reality? Who are “you”?' +
            ' How do you make decisions? Why does your brain need other people?' +
            ' How is technology poised to change what it means to be human?' +
            '  In the course of his investigations, Eagleman guides us through the world of extreme sports,' +
            ' criminal justice, facial expressions, genocide, brain surgery, gut feelings, robotics,' +
            ' and the search for immortality.  Strap in for a whistle-stop tour into the inner cosmos.' +
            ' In the infinitely dense tangle of billions of brain cells and their trillions of connections,' +
            ' something emerges that you might not have expected to see in there: you.',
    bookISBN: '1101870532',
    bookImageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81859vGIzWL.jpg',
  },
  {
    eventId: 2,
    bookTitle: 'Trail of Lightning (1) (The Sixth World)',
    bookAuthor: 'Rebecca Roanhorse',
    bookDescription: 'Nebula Award Finalist for Best Novel' +
        'One of Bustle’s Top 20 “landmark sci-fi and fantasy novels” of the decade' +
        '“Someone please cancel Supernatural already and give us at least five seasons of this badass' +
        ' indigenous monster-hunter and her silver-tongued sidekick.” —The New York Times',
    bookISBN: '1534413502',
    bookImageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81bdCVrK-xL.jpg',
  },
  {
    eventId: 3,
    bookTitle: 'National Geographic The Photo Ark: One Man\'s Quest to Document the World\'s Animals',
    bookAuthor: 'Joel Sartore',
    bookDescription: 'The lush and unique photography in this book represents National Geographic\'s' +
        ' Photo Ark, a major initiative and lifelong project by photographer Joel Sartore' +
        ' to make portra  its of the world\'s animals—especially those that are endangered.' +
        ' His powerful message, conveyed with humor, compassion, and art: to know these animals is to save them.',
    bookISBN: '1426217773',
    bookImageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81gwhSBg7%2BL.jpg',
  },
  {
    eventId: 4,
    bookTitle: 'The Complete Ketogenic Diet for Beginners: Your Essential Guide to Living the Keto Lifestyle',
    bookAuthor: 'Amy Ramos',
    bookDescription: 'The simple, easy and friendly way to start the ketogenic diet and lifestyle',
    bookISBN: '1623158087',
    bookImageUrl: 'https://images-na.ssl-images-amazon.com/images/I/91a%2B8xO4gJL.jpg',
  },
  {
    eventId: 5,
    bookTitle: 'The Ballad of Songbirds and Snakes (A Hunger Games Novel)',
    bookAuthor: 'Suzanne Collins',
    bookDescription: 'It is the morning of the reaping that will kick off the tenth annual Hunger Games.' +
        ' In the Capitol, eighteen-year-old Coriolanus Snow is preparing for his one shot at glory' +
        ' as a mentor in the Games. The once-mighty house of Snow has fallen on hard times,' +
        ' its fate hanging on the slender chance that Coriolanus will be able to outcharm, outwit,' +
        ' and outmaneuver his fellow students to mentor the winning tribute.',
    bookISBN: '1338635174',
    bookImageUrl: 'https://images-na.ssl-images-amazon.com/images/I/519EaLpjEHL._SX329_BO1,204,203,200_.jpg',
  },
];

const Tags = [
  {
    name: 'Science',
  },
  {
    name: 'Romance',
  },
  {
    name: 'History',
  },
  {
    name: 'Fiction',
  },
  {
    name: 'Business',
  },
  {
    name: 'Essay',
  },
  {
    name: 'Self Improvement',
  },
  {
    name: 'Art',
  },
  {
    name: 'Biography',
  },
  {
    name: 'Suspense',
  },
];

const EventTags = [
  {
    eventId: 1,
    tagId: 1,
  },
  {
    eventId: 1,
    tagId: 3,
  },
  {
    eventId: 2,
    tagId: 9,
  },
  {
    eventId: 2,
    tagId: 10,
  },
  {
    eventId: 2,
    tagId: 3,
  },
  {
    eventId: 3,
    tagId: 6,
  },
  {
    eventId: 4,
    tagId: 10,
  },
  {
    eventId: 4,
    tagId: 7,
  },
  {
    eventId: 5,
    tagId: 5,
  },
  {
    eventId: 5,
    tagId: 8,
  },
  {
    eventId: 5,
    tagId: 2,
  },
];
