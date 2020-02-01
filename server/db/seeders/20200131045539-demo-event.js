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
    },
    {
      hostId: 1,
      title: 'Sihyun\'s birthday party',
      description: 'We invite you!',
      price: 1000,
      type: 0,
      thumbnailUrl: 'http://rodrigocorral.com/uploads/projects/Area-X-1415742492.jpg',
      maxParticipantNum: 50,
      createdAt: new Date(2020, 12, 14),
      updatedAt: new Date(2020, 12, 14),
    },
    {
      hostId: 1,
      title: 'Deep Reinforcement Learning Hands-On: Apply modern RL methods, with deep Q-networks, value iteration, policy gradients, TRPO, AlphaGo Zero and more',
      description: 'This practical guide will teach you how deep learning (DL) can be used to solve complex real-world problems.\n' +
        '\n' +
        'Key Features Explore deep reinforcement learning (RL), from the first principles to the latest algorithms Evaluate high-profile RL methods, including value iteration, deep Q-networks, policy gradients, TRPO, PPO, DDPG, D4PG, evolution strategies and genetic algorithms Keep up with the very latest industry developments, including AI-driven chatbots Book Description\n' +
        'Recent developments in reinforcement learning (RL), combined with deep learning (DL), have seen unprecedented progress made towards training agents to solve complex problems in a human-like way. Google\'s use of algorithms to play and defeat the well-known Atari arcade games has propelled the field to prominence, and researchers are generating new ideas at a rapid pace.\n' +
        '\n' +
        'Deep Reinforcement Learning Hands-On is a comprehensive guide to the very latest DL tools and their limitations. You will evaluate methods including Cross-entropy and policy gradients, before applying them to real-world environments. Take on both the Atari set of virtual games and family favorites such as Connect4. The book provides an introduction to the basics of RL, giving you the know-how to code intelligent learning agents to take on a formidable array of practical tasks. Discover how to implement Q-learning on \'grid world\' environments, teach your agent to buy and trade stocks, and find out how natural language models are driving the boom in chatbots.\n' +
        '\n' +
        'What you will learn Understand the DL context of RL and implement complex DL models Learn the foundation of RL: Markov decision processes Evaluate RL methods including Cross-entropy, DQN, Actor-Critic, TRPO, PPO, DDPG, D4PG and others Discover how to deal with discrete and continuous action spaces in various environments Defeat Atari arcade games using the value iteration method Create your own OpenAI Gym environment to train a stock trading agent Teach your agent to play Connect4 using AlphaGo Zero Explore the very latest deep RL research on topics including AI-driven chatbots Who This Book Is For\n' +
        'Some fluency in Python is assumed. Basic deep learning (DL) approaches should be familiar to readers and some practical experience in DL will be helpful. This book is an introduction to deep reinforcement learning (RL) and requires no background in RL.\n' +
        '\n' +
        'Table of Contents What is Reinforcement Learning? OpenAI Gym Deep Learning with PyTorch The Cross-Entropy Method Tabular Learning and the Bellman Equation Deep Q-Networks DQN Extensions Stocks Trading Using RL Policy Gradients – An Alternative The Actor-Critic Method Asynchronous Advantage Actor-Critic Chatbots Training with RL Web Navigation Continuous Action Space Trust Regions – TRPO, PPO, and ACKTR Black-Box Optimization in RL Beyond Model-Free – Imagination AlphaGo Zero',
      price: 100,
      type: 0,
      thumbnailUrl: 'http://rodrigocorral.com/uploads/projects/Area-X-1415742492.jpg',
      maxParticipantNum: 50,
      createdAt: new Date(2020, 11, 17),
      updatedAt: new Date(2020, 11, 17),
    },
    {
      hostId: 2,
      title: 'Life 3.0: Being Human in the Age of Artificial Intelligence',
      description: 'How will Artificial Intelligence affect crime, war, justice, jobs, society and our very sense of being human? The rise of AI has the potential to transform our future more than any other technology--and there\'s nobody better qualified or situated to explore that future than Max Tegmark, an MIT professor who\'s helped mainstream research on how to keep AI beneficial.\n' +
        '\n' +
        'How can we grow our prosperity through automation without leaving people lacking income or purpose? What career advice should we give today\'s kids? How can we make future AI systems more robust, so that they do what we want without crashing, malfunctioning or getting hacked? Should we fear an arms race in lethal autonomous weapons? Will machines eventually outsmart us at all tasks, replacing humans on the job market and perhaps altogether? Will AI help life flourish like never before or give us more power than we can handle?\n' +
        '\n' +
        'What sort of future do you want? This book empowers you to join what may be the most important conversation of our time. It doesn\'t shy away from the full range of viewpoints or from the most controversial issues--from superintelligence to meaning, consciousness and the ultimate physical limits on life in the cosmos.',
      price: 100,
      type: 0,
      thumbnailUrl: 'http://rodrigocorral.com/uploads/projects/Area-X-1415742492.jpg',
      maxParticipantNum: 50,
      createdAt: new Date(2020, 11, 17),
      updatedAt: new Date(2020, 11, 17),
    },
    {
      hostId: 2,
      title: 'Our Mathematical Universe: My Quest for the Ultimate Nature of Reality',
      description: 'Our Mathematical Universe is a journey to explore the mysteries uncovered by cosmology and to discover the nature of reality. Our Big Bang, our distant future, parallel worlds, the sub-atomic and intergalactic - none of them are what they seem. But there is a way to understand this immense strangeness - mathematics. Seeking an answer to the fundamental puzzle of why our universe seems so mathematical, Tegmark proposes a radical idea: that our physical world not only is described by mathematics, but that it is mathematics. This may offer answers to our deepest questions: How large is reality? What is everything made of? Why is our universe the way it is?',
      price: 100,
      type: 0,
      thumbnailUrl: 'http://rodrigocorral.com/uploads/projects/Area-X-1415742492.jpg',
      maxParticipantNum: 50,
      createdAt: new Date(2020, 11, 17),
      updatedAt: new Date(2020, 11, 17),
    },
    {
      hostId: 2,
      title: 'Human Compatible: Artificial Intelligence and the Problem of Control',
      description: 'A leading artificial intelligence researcher lays out a new approach to AI that will enable us to coexist successfully with increasingly intelligent machines\n' +
        '\n' +
        'In the popular imagination, superhuman artificial intelligence is an approaching tidal wave that threatens not just jobs and human relationships, but civilization itself. Conflict between humans and machines is seen as inevitable and its outcome all too predictable.\n' +
        '\n' +
        'In this groundbreaking book, distinguished AI researcher Stuart Russell argues that this scenario can be avoided, but only if we rethink AI from the ground up. Russell begins by exploring the idea of intelligence in humans and in machines. He describes the near-term benefits we can expect, from intelligent personal assistants to vastly accelerated scientific research, and outlines the AI breakthroughs that still have to happen before we reach superhuman AI. He also spells out the ways humans are already finding to misuse AI, from lethal autonomous weapons to viral sabotage.\n' +
        '\n' +
        'If the predicted breakthroughs occur and superhuman AI emerges, we will have created entities far more powerful than ourselves. How can we ensure they never, ever, have power over us? Russell suggests that we can rebuild AI on a new foundation, according to which machines are designed to be inherently uncertain about the human preferences they are required to satisfy. Such machines would be humble, altruistic, and committed to pursue our objectives, not theirs. This new foundation would allow us to create machines that are provably deferential and provably beneficial.\n' +
        '\n' +
        'In a 2014 editorial co-authored with Stephen Hawking, Russell wrote, "Success in creating AI would be the biggest event in human history. Unfortunately, it might also be the last." Solving the problem of control over AI is not just possible; it is the key that unlocks a future of unlimited promise.',
      price: 100,
      type: 0,
      thumbnailUrl: 'http://rodrigocorral.com/uploads/projects/Area-X-1415742492.jpg',
      maxParticipantNum: 50,
      createdAt: new Date(2020, 11, 17),
      updatedAt: new Date(2020, 11, 17),
    },
    {
      hostId: 2,
      title: '21 Lessons for the 21st Century',
      description: 'In Sapiens, he explored our past. In Homo Deus, he looked to our future. Now, one of the most innovative thinkers on the planet turns to the present to make sense of today\'s most pressing issues.\n' +
        '\n' +
        'How do computers and robots change the meaning of being human? How do we deal with the epidemic of fake news? Are nations and religions still relevant? What should we teach our children?\n' +
        '\n' +
        'Yuval Noah Harari\'s 21 Lessons for the 21st Century is a probing and visionary investigation into today\'s most urgent issues as we move into the uncharted territory of the future. As technology advances faster than our understanding of it, hacking becomes a tactic of war, and the world feels more polarized than ever, Harari addresses the challenge of navigating life in the face of constant and disorienting change and raises the important questions we need to ask ourselves in order to survive.\n' +
        '\n' +
        'In twenty-one accessible chapters that are both provocative and profound, Harari builds on the ideas explored in his previous books, untangling political, technological, social, and existential issues and offering advice on how to prepare for a very different future from the world we now live in: How can we retain freedom of choice when Big Data is watching us? What will the future workforce look like, and how should we ready ourselves for it? How should we deal with the threat of terrorism? Why is liberal democracy in crisis?\n' +
        '\n' +
        'Harari\'s unique ability to make sense of where we have come from and where we are going has captured the imaginations of millions of readers. Here he invites us to consider values, meaning, and personal engagement in a world full of noise and uncertainty. When we are deluged with irrelevant information, clarity is power. Presenting complex contemporary challenges clearly and accessibly, 21 Lessons for the 21st Century is essential reading. ',
      price: 100,
      type: 0,
      thumbnailUrl: 'http://rodrigocorral.com/uploads/projects/Area-X-1415742492.jpg',
      maxParticipantNum: 50,
      createdAt: new Date(2020, 11, 17),
      updatedAt: new Date(2020, 11, 17),
    },
    {
      hostId: 1,
      title: 'Why We Sleep: Unlocking the Power of Sleep and Dreams',
      description: 'The first sleep book by a leading scientific expert—Professor Matthew Walker, Director of UC Berkeley’s Sleep and Neuroimaging Lab—reveals his groundbreaking exploration of sleep, explaining how we can harness its transformative power to change our lives for the better.\n' +
        '\n' +
        'Sleep is one of the most important but least understood aspects of our life, wellness, and longevity. Until very recently, science had no answer to the question of why we sleep, or what good it served, or why we suffer such devastating health consequences when we don\'t sleep. Compared to the other basic drives in life—eating, drinking, and reproducing—the purpose of sleep remained elusive.\n' +
        '\n' +
        'An explosion of scientific discoveries in the last twenty years has shed new light on this fundamental aspect of our lives. Now, preeminent neuroscientist and sleep expert Matthew Walker gives us a new understanding of the vital importance of sleep and dreaming. Within the brain, sleep enriches our ability to learn, memorize, and make logical decisions. It recalibrates our emotions, restocks our immune system, fine-tunes our metabolism, and regulates our appetite. Dreaming mollifies painful memories and creates a virtual reality space in which the brain melds past and present knowledge to inspire creativity.\n' +
        '\n' +
        'Walker answers important questions about sleep: how do caffeine and alcohol affect sleep? What really happens during REM sleep? Why do our sleep patterns change across a lifetime? How do common sleep aids affect us and can they do long-term damage? Charting cutting-edge scientific breakthroughs, and synthesizing decades of research and clinical practice, Walker explains how we can harness sleep to improve learning, mood, and energy levels; regulate hormones; prevent cancer, Alzheimer’s, and diabetes; slow the effects of aging; increase longevity; enhance the education and lifespan of our children, and boost the efficiency, success, and productivity of our businesses. Clear-eyed, fascinating, and accessible, Why We Sleep is a crucial and illuminating book.',
      price: 100,
      type: 0,
      thumbnailUrl: 'http://rodrigocorral.com/uploads/projects/Area-X-1415742492.jpg',
      maxParticipantNum: 50,
      createdAt: new Date(2020, 11, 17),
      updatedAt: new Date(2020, 11, 17),
    },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {});
  },
};
