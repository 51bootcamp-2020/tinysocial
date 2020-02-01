'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('EventBookClubs', [
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
        bookTitle: 'Trail of Lightning(The Sixth World)',
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
      {
        eventId: 6,
        bookTitle: 'Harry Potter and the Sorcerer\'s Stone: The Illustrated Edition',
        bookAuthor: 'J.K. Rowling',
        bookDescription: 'The beloved first book of the Harry Potter series,' +
            ' now fully illustrated by award-winning artist Jim Kay.\n' +
            '\n' +
            'For the first time, J.K. Rowling\'s beloved Harry Potter books will be presented in lavishly' +
            ' illustrated full-color editions.' +
            ' Kate Greenaway-award-winning artist Jim Kay has created over 100 stunning illustrations,' +
            ' making this deluxe format a perfect gift as much for a child being introduced to the series,' +
            ' as for the dedicated fan.',
        bookISBN: '0545790352',
        bookImageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61Ddo7TSTCL._SX422_BO1,204,203,200_.jpg',
      },
      {
        eventId: 7,
        bookTitle: 'Belonging: A German Reckons with History and Home',
        bookAuthor: 'Nora Krug',
        bookDescription: 'This “ingenious reckoning with the past” (The New York Times),' +
            ' by award-winning artist Nora Krug investigates the hidden truths of her family’s wartime history in Nazi Germany.',
        bookISBN: '1476796629',
        bookImageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51PHWzGBrAL._SX360_BO1,204,203,200_.jpg',
      },
      {
        eventId: 8,
        bookTitle: 'Directorate S: The C.I.A. and America\'s Secret Wars in Afghanistan and Pakistan',
        bookAuthor: 'Steve Coll',
        bookDescription: 'This “ingenious reckoning with the past” (The New York Times),' +
            ' by award-winning artist Nora Krug investigates the hidden truths of her family’s wartime history in Nazi Germany.',
        bookISBN: '0143132504',
        bookImageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51PHWzGBrAL._SX360_BO1,204,203,200_.jpg',
      },
      {
        eventId: 9,
        bookTitle: 'Canned: The Rise and Fall of Consumer Confidence in the American Food Industry',
        bookAuthor: 'Anna Zeide',
        bookDescription: 'A century and a half ago, when the food industry was first taking root,' +
            ' few consumers trusted packaged foods. Americans had just begun to shift away from eating foods' +
            ' that they grew themselves or purchased from neighbors. With the advent of canning, consumers' +
            ' were introduced to foods produced by unknown hands and packed in corrodible metal that seemed' +
            ' to defy the laws of nature by resisting decay.',
        bookISBN: '0520290682',
        bookImageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51vHXBJGURL._SX327_BO1,204,203,200_.jpg',
      },
      {
        eventId: 10,
        bookTitle: 'The Overstory',
        bookAuthor: 'Richard Powers',
        bookDescription: '"The best novel ever written about trees, and really just one of the best novels, period." ―Ann Patchett',
        bookISBN: '039335668X',
        bookImageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51t47tHiewL._SX331_BO1,204,203,200_.jpg',
      },
      {
        eventId: 11,
        bookTitle: 'Milkman',
        bookAuthor: 'Anna Burns',
        bookDescription: '“Everything about this novel rings true. . . . Original, funny, disarmingly oblique and unique.”―The Guardian',
        bookISBN: '1644450003',
        bookImageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41eOX0cBT8L._SX331_BO1,204,203,200_.jpg',
      },
      {
        eventId: 12,
        bookTitle: 'There There',
        bookAuthor: 'Tommy Orange',
        bookDescription: 'One of the Best Books of the Year: The Washington Post, NPR,' +
            ' Time, O, The Oprah Magazine, San Francisco Chronicle, Entertainment Weekly,' +
            ' The Boston Globe, GQ, The Dallas Morning News, Buzzfeed, BookPage, Publishers Weekly,' +
            ' Library Journal, Kirkus Reviews   ',
        bookISBN: '0525520376',
        bookImageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51RuAbKH%2BtL._SX326_BO1,204,203,200_.jpg',
      },





    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('EventBookClubs', null, {});
  },
};
