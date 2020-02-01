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
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('EventBookClubs', null, {});
  },
};
