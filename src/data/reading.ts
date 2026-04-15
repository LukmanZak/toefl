import { Category } from '../types';

export const READING_CATEGORY: Category = {
  id: 'reading',
  title: 'Reading Comprehension',
  icon: 'book',
  lessons: [
    {
      id: 'r-1',
      title: 'The Industrial Revolution',
      description: 'Analyzing a historical passage about technological change.',
      tips: [
        "Identify the main idea of each paragraph.",
        "Look for cause-and-effect relationships.",
        "Pay attention to dates and key figures.",
        "Understand the meaning of words in context.",
        "Identify the author's purpose."
      ],
      readingPassage: `The Industrial Revolution, which began in Great Britain during the late eighteenth century, represented a fundamental shift in the way goods were produced and how people lived. Before this period, most manufacturing was done in people's homes, using hand tools or basic machines. The transition to new manufacturing processes included the move from hand production methods to machines, new chemical manufacturing and iron production processes, the improved efficiency of water power, the increasing use of steam power, and the development of machine tools. It also included the change from wood and other bio-fuels to coal.

The textile industry was the first to be transformed by these new methods. Inventions such as the flying shuttle, the spinning jenny, and the power loom revolutionized the production of cloth. These machines allowed for much faster production than could be achieved by hand, leading to the rise of the factory system. Factories were often located near rivers to utilize water power, but the invention of the steam engine by James Watt meant that factories could be built anywhere.

The impact of the Industrial Revolution was not limited to technology. It led to significant socioeconomic changes. Urbanization occurred at an unprecedented rate as people moved from rural areas to cities in search of work in the new factories. This rapid growth often led to overcrowded and unsanitary living conditions. Furthermore, the nature of work changed; instead of working according to the seasons or daylight, workers were required to follow strict factory schedules. While the Industrial Revolution eventually led to an overall increase in the standard of living, the initial period was marked by harsh working conditions, long hours, and the use of child labor.`,
      questions: [
        {
          id: 'r1-1',
          text: 'According to the passage, what was the primary method of manufacturing before the Industrial Revolution?',
          options: ['Factory-based production', 'Home-based production with hand tools', 'Chemical manufacturing processes', 'Large-scale iron production'],
          correctAnswer: 1,
          explanation: 'The passage states that "most manufacturing was done in people\'s homes, using hand tools or basic machines" before this period.'
        },
        {
          id: 'r1-2',
          text: 'Which industry was the pioneer in adopting new manufacturing methods?',
          options: ['The iron industry', 'The chemical industry', 'The textile industry', 'The coal industry'],
          correctAnswer: 2,
          explanation: 'The passage explicitly mentions that "The textile industry was the first to be transformed by these new methods."'
        },
        {
          id: 'r1-3',
          text: 'What was the significance of James Watt\'s invention?',
          options: ['It improved the flying shuttle.', 'It allowed factories to be located away from rivers.', 'It led to the discovery of coal.', 'It revolutionized the chemical manufacturing process.'],
          correctAnswer: 1,
          explanation: 'The passage states that the steam engine "meant that factories could be built anywhere," not just near rivers.'
        },
        {
          id: 'r1-4',
          text: 'The word "unprecedented" in the third paragraph is closest in meaning to:',
          options: ['Slow and steady', 'Never seen before', 'Expected', 'Negative'],
          correctAnswer: 1,
          explanation: '"Unprecedented" means something that has never happened or been known before.'
        },
        {
          id: 'r1-5',
          text: 'What was a major socioeconomic consequence of the Industrial Revolution mentioned in the text?',
          options: ['A return to rural living', 'The abolition of child labor', 'Rapid urbanization', 'A decrease in the standard of living for everyone'],
          correctAnswer: 2,
          explanation: 'The passage mentions that "Urbanization occurred at an unprecedented rate as people moved from rural areas to cities."'
        },
        {
          id: 'r1-6',
          text: 'How did the nature of work change for laborers during this period?',
          options: ['They worked fewer hours.', 'They followed strict factory schedules.', 'They worked according to the seasons.', 'They had more autonomy over their tasks.'],
          correctAnswer: 1,
          explanation: 'The text says "workers were required to follow strict factory schedules" instead of seasonal or daylight patterns.'
        },
        {
          id: 'r1-7',
          text: 'Which of the following was NOT a technological change mentioned in the passage?',
          options: ['New iron production processes', 'Development of machine tools', 'Use of steam power', 'Invention of the internal combustion engine'],
          correctAnswer: 3,
          explanation: 'The internal combustion engine is not mentioned; the passage focuses on steam power and machine tools.'
        },
        {
          id: 'r1-8',
          text: 'The author mentions "unsanitary living conditions" to illustrate:',
          options: ['The benefits of the factory system', 'The negative effects of rapid urbanization', 'The reasons why people moved to cities', 'The efficiency of new chemical processes'],
          correctAnswer: 1,
          explanation: 'This is mentioned as a result of the "rapid growth" of cities due to urbanization.'
        },
        {
          id: 'r1-9',
          text: 'What does the passage imply about the initial period of the Industrial Revolution?',
          options: ['It was a time of immediate prosperity for all.', 'It was characterized by social challenges despite technological progress.', 'It had little impact on the average person.', 'It was primarily a cultural movement.'],
          correctAnswer: 1,
          explanation: 'The passage notes that while it led to a higher standard of living eventually, the initial period had "harsh working conditions" and "child labor".'
        },
        {
          id: 'r1-10',
          text: 'The transition to new processes included a shift from wood to:',
          options: ['Oil', 'Electricity', 'Coal', 'Natural gas'],
          correctAnswer: 2,
          explanation: 'The passage mentions the "change from wood and other bio-fuels to coal."'
        }
      ]
    },
    {
      id: 'r-2',
      title: 'The Impact of Volcanism on Climate',
      description: 'Understanding how natural events affect global temperatures.',
      tips: [
        "Look for scientific explanations and evidence.",
        "Identify the relationship between volcanic eruptions and temperature.",
        "Pay attention to specific examples (e.g., Mount Pinatubo).",
        "Understand the role of aerosols in the atmosphere.",
        "Identify the long-term vs. short-term effects."
      ],
      readingPassage: `Volcanic eruptions are among the most powerful natural events on Earth, capable of altering the global climate for years. When a large volcano erupts, it injects massive quantities of ash and gases into the stratosphere. While ash falls out relatively quickly, gases like sulfur dioxide (SO2) have a more lasting impact. Sulfur dioxide reacts with water vapor in the stratosphere to form tiny droplets of sulfuric acid, known as sulfate aerosols.

These aerosols act like a giant mirror, reflecting a portion of incoming solar radiation back into space. This reduction in the amount of sunlight reaching the Earth's surface leads to a phenomenon known as "volcanic cooling." The 1991 eruption of Mount Pinatubo in the Philippines is a classic example; it released approximately 20 million tons of sulfur dioxide, resulting in a global temperature decrease of about 0.5 degrees Celsius that lasted for nearly three years.

Historically, even more dramatic events have occurred. The 1815 eruption of Mount Tambora in Indonesia was so massive that 1816 became known as the "Year Without a Summer" in the Northern Hemisphere. Crops failed in Europe and North America due to unseasonable frosts and snow in June and July, leading to widespread famine. While the cooling effect is temporary, it demonstrates the profound sensitivity of the Earth's climate system to atmospheric composition changes.`,
      questions: [
        {
          id: 'r2-1',
          text: 'What is the primary substance responsible for long-term climate cooling after an eruption?',
          options: ['Volcanic ash', 'Sulfur dioxide', 'Carbon dioxide', 'Water vapor'],
          correctAnswer: 1,
          explanation: 'The passage states that while ash falls quickly, sulfur dioxide has a more lasting impact by forming aerosols.'
        },
        {
          id: 'r2-2',
          text: 'How do sulfate aerosols cause the Earth\'s surface to cool?',
          options: ['By absorbing heat from the ground', 'By reflecting solar radiation back into space', 'By increasing cloud cover', 'By reacting with greenhouse gases'],
          correctAnswer: 1,
          explanation: 'The text explains that these aerosols "reflect a portion of incoming solar radiation back into space."'
        },
        {
          id: 'r2-3',
          text: 'The eruption of Mount Pinatubo resulted in a temperature drop of:',
          options: ['0.1 degrees Celsius', '0.5 degrees Celsius', '1.0 degrees Celsius', '2.0 degrees Celsius'],
          correctAnswer: 1,
          explanation: 'The passage mentions a "global temperature decrease of about 0.5 degrees Celsius."'
        },
        {
          id: 'r2-4',
          text: 'Why was 1816 called the "Year Without a Summer"?',
          options: ['Because of a solar eclipse', 'Because of the eruption of Mount Tambora', 'Because of extreme global warming', 'Because of a shift in the Earth\'s orbit'],
          correctAnswer: 1,
          explanation: 'The passage links the "Year Without a Summer" to the 1815 eruption of Mount Tambora.'
        },
        {
          id: 'r2-5',
          text: 'The word "injects" in the first paragraph is closest in meaning to:',
          options: ['Removes', 'Forces into', 'Cleans', 'Absorbs'],
          correctAnswer: 1,
          explanation: 'In this context, "injects" means to force or discharge substances into the atmosphere.'
        },
        {
          id: 'r2-6',
          text: 'What happens when sulfur dioxide reacts with water vapor in the stratosphere?',
          options: ['It creates volcanic ash.', 'It forms sulfate aerosols.', 'It produces oxygen.', 'It causes immediate rain.'],
          correctAnswer: 1,
          explanation: 'The passage says SO2 reacts with water vapor to "form tiny droplets of sulfuric acid, known as sulfate aerosols."'
        },
        {
          id: 'r2-7',
          text: 'Which of the following was a consequence of the Mount Tambora eruption in Europe?',
          options: ['Record-breaking heatwaves', 'Widespread famine due to crop failure', 'Increased agricultural productivity', 'A decrease in sulfur dioxide levels'],
          correctAnswer: 1,
          explanation: 'The text states that "Crops failed in Europe... leading to widespread famine."'
        },
        {
          id: 'r2-8',
          text: 'The author mentions "unseasonable frosts" to highlight:',
          options: ['The beauty of winter', 'The severity of the climate disruption', 'The benefits of volcanic soil', 'The location of Mount Tambora'],
          correctAnswer: 1,
          explanation: 'Frosts in June and July are used to show how severely the climate was disrupted.'
        },
        {
          id: 'r2-9',
          text: 'What does the passage imply about the cooling effect of volcanoes?',
          options: ['It is a permanent change.', 'It is a temporary but significant disruption.', 'It only affects the area near the volcano.', 'It is caused primarily by ash blocking the sun.'],
          correctAnswer: 1,
          explanation: 'The passage states "While the cooling effect is temporary, it demonstrates the profound sensitivity of the Earth\'s climate system."'
        },
        {
          id: 'r2-10',
          text: 'How much sulfur dioxide was released by Mount Pinatubo?',
          options: ['5 million tons', '10 million tons', '20 million tons', '50 million tons'],
          correctAnswer: 2,
          explanation: 'The passage mentions "approximately 20 million tons of sulfur dioxide."'
        }
      ]
    },
    {
      id: 'r-3',
      title: 'The Development of Early Writing Systems',
      description: 'Exploring the origins of written communication.',
      tips: [
        "Identify the different types of early writing (e.g., cuneiform, hieroglyphics).",
        "Understand the purpose of early writing (e.g., record-keeping).",
        "Pay attention to the materials used (e.g., clay tablets, papyrus).",
        "Identify the civilizations associated with each system.",
        "Look for the transition from pictograms to abstract symbols."
      ],
      readingPassage: `The transition from oral to written communication was a pivotal moment in human history, allowing for the preservation of knowledge across generations. The earliest known writing systems emerged independently in several regions, with the most prominent being Mesopotamia and Egypt around 3200 BCE. In Mesopotamia, the Sumerians developed cuneiform, a system characterized by wedge-shaped marks pressed into wet clay tablets using a reed stylus.

Initially, cuneiform was used primarily for mundane administrative tasks, such as tracking grain shipments and livestock inventories. However, as the system became more sophisticated, it was adapted for recording complex literature, religious texts, and legal codes, such as the famous Code of Hammurabi. The durability of clay tablets has allowed thousands of these records to survive to the present day, providing invaluable insights into ancient life.

In Egypt, a parallel development led to the creation of hieroglyphics. Unlike the abstract symbols of late cuneiform, hieroglyphics were highly pictorial, representing objects, ideas, and even specific sounds. While hieroglyphics were often carved into stone for monumental purposes, the Egyptians also developed papyrus, a paper-like material made from reeds, for more portable records. Both systems eventually gave way to alphabetic scripts, which were easier to learn and use, but their legacy as the foundations of literacy remains undisputed.`,
      questions: [
        {
          id: 'r3-1',
          text: 'What was the primary initial purpose of cuneiform in Mesopotamia?',
          options: ['Recording epic poetry', 'Administrative and accounting tasks', 'Writing religious laws', 'Communicating with other civilizations'],
          correctAnswer: 1,
          explanation: 'The passage states it was "used primarily for mundane administrative tasks, such as tracking grain shipments."'
        },
        {
          id: 'r3-2',
          text: 'How was cuneiform physically created?',
          options: ['Carving into stone with metal tools', 'Painting on papyrus with brushes', 'Pressing a reed stylus into wet clay', 'Engraving on wood blocks'],
          correctAnswer: 2,
          explanation: 'The text describes it as "wedge-shaped marks pressed into wet clay tablets using a reed stylus."'
        },
        {
          id: 'r3-3',
          text: 'Which of the following is mentioned as a later use of cuneiform?',
          options: ['Personal letters', 'Legal codes', 'Scientific diagrams', 'Maps of the stars'],
          correctAnswer: 1,
          explanation: 'The passage mentions it was adapted for "legal codes, such as the famous Code of Hammurabi."'
        },
        {
          id: 'r3-4',
          text: 'The word "pivotal" in the first paragraph is closest in meaning to:',
          options: ['Minor', 'Crucial', 'Confusing', 'Ancient'],
          correctAnswer: 1,
          explanation: '"Pivotal" means of crucial importance in relation to the development or success of something else.'
        },
        {
          id: 'r3-5',
          text: 'What was a key difference between hieroglyphics and late cuneiform?',
          options: ['Hieroglyphics were more abstract.', 'Hieroglyphics were highly pictorial.', 'Cuneiform was used for stone carvings.', 'Hieroglyphics were developed much later.'],
          correctAnswer: 1,
          explanation: 'The passage states that "Unlike the abstract symbols of late cuneiform, hieroglyphics were highly pictorial."'
        },
        {
          id: 'r3-6',
          text: 'What material did Egyptians develop for portable writing?',
          options: ['Clay tablets', 'Stone slabs', 'Papyrus', 'Vellum'],
          correctAnswer: 2,
          explanation: 'The text says Egyptians "developed papyrus... for more portable records."'
        },
        {
          id: 'r3-7',
          text: 'Why have so many cuneiform records survived?',
          options: ['Because they were kept in secret vaults.', 'Because clay tablets are highly durable.', 'Because they were copied by later civilizations.', 'Because they were written on stone.'],
          correctAnswer: 1,
          explanation: 'The passage credits the "durability of clay tablets" for the survival of thousands of records.'
        },
        {
          id: 'r3-8',
          text: 'The author mentions the "Code of Hammurabi" to provide an example of:',
          options: ['An early administrative record', 'A complex legal code recorded in cuneiform', 'An Egyptian religious text', 'A Sumerian poem'],
          correctAnswer: 1,
          explanation: 'It is used as an example of cuneiform being used for "legal codes".'
        },
        {
          id: 'r3-9',
          text: 'What eventually replaced both cuneiform and hieroglyphics?',
          options: ['Oral tradition', 'Pictographic symbols', 'Alphabetic scripts', 'Digital communication'],
          correctAnswer: 2,
          explanation: 'The passage states that "Both systems eventually gave way to alphabetic scripts."'
        },
        {
          id: 'r3-10',
          text: 'According to the passage, writing systems emerged independently in:',
          options: ['Only Mesopotamia', 'Only Egypt', 'Several regions', 'Only Greece'],
          correctAnswer: 2,
          explanation: 'The text says "The earliest known writing systems emerged independently in several regions."'
        }
      ]
    },
    {
      id: 'r-4',
      title: 'The Theory of Continental Drift',
      description: 'Analyzing the scientific debate over the movement of continents.',
      tips: [
        "Identify the key scientist (Alfred Wegener).",
        "Understand the evidence for the theory (e.g., fossil matches, coastline fit).",
        "Identify why the theory was initially rejected.",
        "Look for the connection to plate tectonics.",
        "Identify the main conclusion of the passage."
      ],
      readingPassage: `The theory of continental drift, proposed by Alfred Wegener in 1912, fundamentally challenged the prevailing geological view that the Earth's continents were fixed in place. Wegener hypothesized that all the continents had once been part of a single supercontinent, which he named Pangaea. Over millions of years, this massive landmass broke apart, and the resulting continents drifted to their current positions.

To support his bold claim, Wegener provided several lines of evidence. First, he noted the remarkable "jigsaw-fit" of the coastlines of South America and Africa. Second, he pointed to identical fossil remains of plants and animals found on continents now separated by vast oceans. For instance, fossils of the Mesosaurus, a freshwater reptile, were found in both Brazil and South Africa. Finally, he observed matching geological features, such as mountain ranges and rock strata, that appeared to continue across oceanic divides.

Despite this compelling evidence, the scientific community of the early 20th century largely rejected Wegener's theory. The primary criticism was that he could not provide a plausible mechanism for how solid continents could move through the ocean floor. Wegener suggested that centrifugal force or tidal pull might be responsible, but physicists quickly proved these forces were far too weak. It was not until the 1960s, with the discovery of seafloor spreading and the development of plate tectonics, that Wegener's vision was finally vindicated.`,
      questions: [
        {
          id: 'r4-1',
          text: 'What was the core hypothesis of Alfred Wegener\'s theory?',
          options: ['The Earth\'s core is liquid.', 'Continents are fixed in their positions.', 'All continents were once a single supercontinent.', 'The oceans are expanding faster than continents.'],
          correctAnswer: 2,
          explanation: 'Wegener hypothesized that "all the continents had once been part of a single supercontinent."'
        },
        {
          id: 'r4-2',
          text: 'The name "Pangaea" refers to:',
          options: ['A type of fossilized plant', 'The process of seafloor spreading', 'The original supercontinent', 'A mountain range in South America'],
          correctAnswer: 2,
          explanation: 'The passage states he named the supercontinent "Pangaea".'
        },
        {
          id: 'r4-3',
          text: 'Which of the following was NOT used by Wegener as evidence?',
          options: ['The fit of continental coastlines', 'Identical fossils on separate continents', 'Matching rock strata', 'Measurements of current continental movement'],
          correctAnswer: 3,
          explanation: 'Wegener used coastline fit, fossils, and rock strata; he did not have tools to measure current movement at the time.'
        },
        {
          id: 'r4-4',
          text: 'The Mesosaurus is mentioned in the passage to demonstrate:',
          options: ['The diversity of ancient reptiles', 'Evidence of continental connection through fossils', 'The harsh climate of ancient Brazil', 'The speed of continental drift'],
          correctAnswer: 1,
          explanation: 'Fossils of the Mesosaurus found in Brazil and South Africa supported the idea that these lands were once connected.'
        },
        {
          id: 'r4-5',
          text: 'Why did most scientists initially reject Wegener\'s theory?',
          options: ['They believed the fossils were fakes.', 'He lacked a plausible mechanism for movement.', 'His data on coastlines was inaccurate.', 'They preferred the theory of plate tectonics.'],
          correctAnswer: 1,
          explanation: 'The text says the primary criticism was that "he could not provide a plausible mechanism for how solid continents could move."'
        },
        {
          id: 'r4-6',
          text: 'The word "prevailing" in the first paragraph is closest in meaning to:',
          options: ['Ancient', 'Current or widespread', 'Incorrect', 'Hidden'],
          correctAnswer: 1,
          explanation: '"Prevailing" means existing at a particular time; current or widespread.'
        },
        {
          id: 'r4-7',
          text: 'What forces did Wegener incorrectly suggest might move the continents?',
          options: ['Volcanic eruptions and earthquakes', 'Centrifugal force and tidal pull', 'Ocean currents and wind', 'Magnetic attraction'],
          correctAnswer: 1,
          explanation: 'The passage mentions he suggested "centrifugal force or tidal pull," which were proven too weak.'
        },
        {
          id: 'r4-8',
          text: 'When was continental drift finally accepted by the scientific community?',
          options: ['1912', '1930', '1960s', '1990s'],
          correctAnswer: 2,
          explanation: 'The passage states it was accepted in the 1960s with the development of plate tectonics.'
        },
        {
          id: 'r4-9',
          text: 'The author mentions "seafloor spreading" as:',
          options: ['A reason why Wegener was wrong', 'A key discovery that supported continental movement', 'A dangerous geological phenomenon', 'The cause of the extinction of Mesosaurus'],
          correctAnswer: 1,
          explanation: 'Seafloor spreading provided the mechanism that Wegener was missing, leading to the theory\'s acceptance.'
        },
        {
          id: 'r4-10',
          text: 'The word "vindicated" in the last paragraph is closest in meaning to:',
          options: ['Proven wrong', 'Ignored', 'Proven right', 'Forgotten'],
          correctAnswer: 2,
          explanation: '"Vindicated" means to be cleared of blame or suspicion, or in this context, to be proven correct.'
        }
      ]
    },
    {
      id: 'r-5',
      title: 'The Silk Road',
      description: 'Understanding the importance of ancient trade routes.',
      tips: [
        "Identify the regions connected by the Silk Road.",
        "Understand the types of goods traded (not just silk).",
        "Identify the cultural and technological exchanges that occurred.",
        "Look for the impact on civilizations along the route.",
        "Identify the reasons for the decline of the Silk Road."
      ],
      readingPassage: `The Silk Road was not a single highway but rather a vast network of interconnected trade routes that linked the Mediterranean world with East Asia. Spanning over 4,000 miles, it facilitated the exchange of goods, ideas, and cultures for more than 1,500 years. While the name suggests that silk was the primary commodity, the routes were used to transport a wide variety of items, including spices, precious metals, glassware, and livestock.

The Silk Road's significance extended far beyond commerce. It served as a vital channel for cultural and religious diffusion. Buddhism, for example, spread from its origins in India to China and eventually to Japan and Korea along these paths. Similarly, Islam and Christianity found their way into Central Asia and China. The exchange of knowledge was equally impactful; technologies such as papermaking, gunpowder, and the compass moved from China to the West, eventually sparking the European Renaissance and the Age of Discovery.

However, the Silk Road was not without its perils. Travelers faced harsh climates, treacherous terrain, and the constant threat of bandits. The decline of the Silk Road began in the 14th century, primarily due to the rise of maritime trade routes. Sea travel was often faster, safer, and capable of carrying larger volumes of goods. Additionally, political instability in the Mongol Empire, which had previously provided security for the routes, made overland travel increasingly dangerous. Despite its eventual decline, the legacy of the Silk Road as the first "global" network remains a cornerstone of world history.`,
      questions: [
        {
          id: 'r5-1',
          text: 'What does the author mean by stating the Silk Road was "not a single highway"?',
          options: ['It was a series of disconnected paths.', 'It was a complex network of multiple routes.', 'It was primarily a water-based route.', 'It was only used by one civilization.'],
          correctAnswer: 1,
          explanation: 'The passage describes it as a "vast network of interconnected trade routes."'
        },
        {
          id: 'r5-2',
          text: 'Which of the following was NOT a primary commodity traded on the Silk Road?',
          options: ['Silk', 'Spices', 'Steam engines', 'Glassware'],
          correctAnswer: 2,
          explanation: 'Steam engines are modern technology and were not part of ancient trade.'
        },
        {
          id: 'r5-3',
          text: 'How did Buddhism reach China according to the passage?',
          options: ['Through maritime trade', 'Via the Silk Road from India', 'It originated in China.', 'Through military conquest'],
          correctAnswer: 1,
          explanation: 'The text states Buddhism "spread from its origins in India to China... along these paths."'
        },
        {
          id: 'r5-4',
          text: 'The word "diffusion" in the second paragraph is closest in meaning to:',
          options: ['Concentration', 'Spreading or scattering', 'Destruction', 'Confusion'],
          correctAnswer: 1,
          explanation: '"Diffusion" refers to the spreading of something more widely.'
        },
        {
          id: 'r5-5',
          text: 'What was a major western impact of Chinese technologies like papermaking?',
          options: ['The decline of the Silk Road', 'The European Renaissance', 'The rise of the Mongol Empire', 'The invention of silk'],
          correctAnswer: 1,
          explanation: 'The passage notes these technologies "eventually sparking the European Renaissance."'
        },
        {
          id: 'r5-6',
          text: 'What led to the decline of the Silk Road in the 14th century?',
          options: ['A lack of goods to trade', 'The rise of maritime trade routes', 'The invention of the airplane', 'A global cooling event'],
          correctAnswer: 1,
          explanation: 'The decline was "primarily due to the rise of maritime trade routes."'
        },
        {
          id: 'r5-7',
          text: 'Why did sea travel become more popular than overland travel?',
          options: ['It was slower but cheaper.', 'It was faster, safer, and could carry more goods.', 'Bandits were only on land.', 'The Mongol Empire banned land travel.'],
          correctAnswer: 1,
          explanation: 'The text says sea travel was "often faster, safer, and capable of carrying larger volumes of goods."'
        },
        {
          id: 'r5-8',
          text: 'The author mentions the "Mongol Empire" to explain:',
          options: ['The origin of silk', 'A period of security that aided trade', 'The end of maritime exploration', 'The birth of Buddhism'],
          correctAnswer: 1,
          explanation: 'The Mongol Empire "had previously provided security for the routes," and its instability made travel dangerous.'
        },
        {
          id: 'r5-9',
          text: 'The word "perils" in the third paragraph is closest in meaning to:',
          options: ['Opportunities', 'Dangers', 'Rewards', 'Travelers'],
          correctAnswer: 1,
          explanation: '"Perils" means serious and immediate dangers.'
        },
        {
          id: 'r5-10',
          text: 'The Silk Road is described as the first _______ network.',
          options: ['Digital', 'Global', 'Military', 'Religious'],
          correctAnswer: 1,
          explanation: 'The passage concludes by calling it the first "global" network.'
        }
      ]
    },
    {
      id: 'r-6',
      title: 'The Psychology of Memory',
      description: 'Exploring how the human brain stores and retrieves information.',
      tips: [
        "Identify the different types of memory (sensory, short-term, long-term).",
        "Understand the processes of encoding, storage, and retrieval.",
        "Look for factors that influence memory (e.g., attention, repetition).",
        "Identify common causes of forgetting.",
        "Understand the concept of 'working memory'."
      ],
      readingPassage: `Memory is a complex psychological process that involves the encoding, storage, and retrieval of information. Psychologists typically distinguish between three main stages of memory: sensory memory, short-term memory, and long-term memory. Sensory memory is the earliest stage, acting as a buffer for stimuli received through the five senses. This information is held for a very brief period, usually less than a second, before it is either passed to short-term memory or discarded.

Short-term memory, often referred to as working memory, has a limited capacity and can hold information for about 20 to 30 seconds. Most people can hold approximately seven items (plus or minus two) in their short-term memory at one time. To move information from short-term to long-term memory, a process known as encoding must occur, which often requires active attention and repetition.

Long-term memory has a seemingly infinite capacity and can store information for years or even a lifetime. It is further divided into explicit memory, which involves conscious recollection of facts and events, and implicit memory, which involves unconscious skills and habits, such as riding a bicycle. The process of retrieval—bringing stored information back into conscious awareness—can be influenced by various factors, including emotional state and the presence of retrieval cues. Forgetting, while often seen as a failure of memory, is actually a necessary process that allows the brain to filter out irrelevant information and prioritize what is important.`,
      questions: [
        {
          id: 'r6-1',
          text: 'What is the primary function of sensory memory?',
          options: ['Long-term storage of facts', 'Acting as a buffer for sensory stimuli', 'Encoding complex skills', 'Retrieving forgotten information'],
          correctAnswer: 1,
          explanation: 'The passage describes sensory memory as "acting as a buffer for stimuli received through the five senses."'
        },
        {
          id: 'r6-2',
          text: 'How long does information typically stay in short-term memory without rehearsal?',
          options: ['Less than a second', '20 to 30 seconds', 'Several minutes', 'Indefinitely'],
          correctAnswer: 1,
          explanation: 'The text states that short-term memory "can hold information for about 20 to 30 seconds."'
        },
        {
          id: 'r6-3',
          text: 'The "seven plus or minus two" rule refers to:',
          options: ['The duration of sensory memory', 'The capacity of short-term memory', 'The number of senses used in encoding', 'The years information stays in long-term memory'],
          correctAnswer: 1,
          explanation: 'The passage mentions that "Most people can hold approximately seven items (plus or minus two) in their short-term memory."'
        },
        {
          id: 'r6-4',
          text: 'What is required to transfer information to long-term memory?',
          options: ['Discarding sensory stimuli', 'Active attention and repetition', 'Unconscious habits', 'Emotional suppression'],
          correctAnswer: 1,
          explanation: 'The text says moving information to long-term memory "often requires active attention and repetition."'
        },
        {
          id: 'r6-5',
          text: 'Which type of memory involves the conscious recollection of facts?',
          options: ['Implicit memory', 'Sensory memory', 'Explicit memory', 'Working memory'],
          correctAnswer: 2,
          explanation: 'The passage defines explicit memory as that which "involves conscious recollection of facts and events."'
        },
        {
          id: 'r6-6',
          text: 'Riding a bicycle is an example of which type of memory?',
          options: ['Explicit memory', 'Implicit memory', 'Sensory memory', 'Short-term memory'],
          correctAnswer: 1,
          explanation: 'The text uses riding a bicycle as an example of implicit memory, which involves "unconscious skills and habits."'
        },
        {
          id: 'r6-7',
          text: 'The word "discarded" in the first paragraph is closest in meaning to:',
          options: ['Saved', 'Thrown away', 'Organized', 'Retrieved'],
          correctAnswer: 1,
          explanation: 'In this context, "discarded" means the information is not kept and is lost.'
        },
        {
          id: 'r6-8',
          text: 'What is the author\'s view on "forgetting"?',
          options: ['It is a sign of brain damage.', 'It is a necessary filtering process.', 'It should be avoided at all costs.', 'It only happens to explicit memories.'],
          correctAnswer: 1,
          explanation: 'The author states that forgetting "is actually a necessary process that allows the brain to filter out irrelevant information."'
        },
        {
          id: 'r6-9',
          text: 'The word "infinite" in the third paragraph is closest in meaning to:',
          options: ['Very small', 'Limited', 'Endless', 'Confusing'],
          correctAnswer: 2,
          explanation: '"Infinite" means limitless or endless.'
        },
        {
          id: 'r6-10',
          text: 'What is the final stage of the memory process mentioned in the first sentence?',
          options: ['Encoding', 'Storage', 'Retrieval', 'Forgetting'],
          correctAnswer: 2,
          explanation: 'The first sentence lists "encoding, storage, and retrieval" as the three parts of the process.'
        }
      ]
    },
    {
      id: 'r-7',
      title: 'The Mystery of the Maya Collapse',
      description: 'Analyzing theories about the decline of a great civilization.',
      tips: [
        "Identify the time period and location of the Maya civilization.",
        "Understand the different theories for the collapse (e.g., drought, warfare, overpopulation).",
        "Look for evidence supporting each theory.",
        "Identify the complexity of the collapse (likely multiple factors).",
        "Understand the current scientific consensus."
      ],
      readingPassage: `The Classic Maya civilization, renowned for its sophisticated writing system, advanced mathematics, and precise astronomical observations, flourished in the tropical lowlands of Central America for over six centuries. However, between 800 and 1000 CE, this vibrant culture experienced a dramatic decline. Major cities were abandoned, trade networks collapsed, and the population plummeted. This event, known as the Classic Maya collapse, remains one of the most enduring mysteries in archaeology.

Numerous theories have been proposed to explain the collapse. Some scholars suggest that internal factors, such as endemic warfare between rival city-states, led to social instability and the breakdown of central authority. Others point to overpopulation and environmental degradation, arguing that the Maya's intensive agricultural practices exhausted the soil and depleted natural resources. A more recent and widely supported theory emphasizes the role of climate change. Paleoclimatic data, derived from lake sediments and stalagmites, indicate that the region suffered from a series of severe and prolonged droughts during the 9th and 10th centuries.

It is likely that the collapse was not caused by a single event but was the result of a complex interplay of these factors. A severe drought would have led to crop failures and famine, which in turn could have sparked social unrest and intensified existing warfare. The inability of the Maya kings, who were seen as divine intermediaries responsible for bringing rain, to solve the crisis likely undermined their authority and led to the abandonment of the ceremonial centers. While the Maya people did not disappear—their descendants still live in the region today—the sophisticated political and social structures of the Classic period were lost forever.`,
      questions: [
        {
          id: 'r7-1',
          text: 'What is the "Classic Maya collapse"?',
          options: ['The invention of their writing system', 'The abandonment of major cities between 800 and 1000 CE', 'A massive earthquake that destroyed the temples', 'The arrival of European explorers'],
          correctAnswer: 1,
          explanation: 'The passage defines it as the period when "Major cities were abandoned, trade networks collapsed, and the population plummeted."'
        },
        {
          id: 'r7-2',
          text: 'Which of the following was NOT mentioned as a Maya achievement?',
          options: ['Advanced mathematics', 'Sophisticated writing system', 'Precise astronomical observations', 'Development of steam power'],
          correctAnswer: 3,
          explanation: 'Steam power is not mentioned; the others are listed in the first sentence.'
        },
        {
          id: 'r7-3',
          text: 'What does the "endemic warfare" theory suggest about the collapse?',
          options: ['It was caused by a foreign invasion.', 'It led to social instability and breakdown of authority.', 'It was the primary cause of the droughts.', 'It helped the Maya expand their territory.'],
          correctAnswer: 1,
          explanation: 'The text says warfare "led to social instability and the breakdown of central authority."'
        },
        {
          id: 'r7-4',
          text: 'The word "plummeted" in the first paragraph is closest in meaning to:',
          options: ['Increased slowly', 'Stayed the same', 'Dropped sharply', 'Moved to another location'],
          correctAnswer: 2,
          explanation: '"Plummeted" means to fall or drop straight down at high speed.'
        },
        {
          id: 'r7-5',
          text: 'According to recent paleoclimatic data, what environmental factor was significant?',
          options: ['Widespread flooding', 'Severe and prolonged droughts', 'A sudden drop in temperature', 'A series of volcanic eruptions'],
          correctAnswer: 1,
          explanation: 'The passage mentions data indicating "a series of severe and prolonged droughts during the 9th and 10th centuries."'
        },
        {
          id: 'r7-6',
          text: 'How did the droughts affect the authority of Maya kings?',
          options: ['It made them more powerful.', 'It undermined their authority because they were expected to bring rain.', 'It had no effect on their status.', 'It led them to move the capital to the coast.'],
          correctAnswer: 1,
          explanation: 'Maya kings were "seen as divine intermediaries responsible for bringing rain," so their failure to do so undermined them.'
        },
        {
          id: 'r7-7',
          text: 'The author suggests the collapse was likely caused by:',
          options: ['A single catastrophic event', 'A complex interplay of multiple factors', 'Only environmental degradation', 'Only internal warfare'],
          correctAnswer: 1,
          explanation: 'The text states it was "likely... the result of a complex interplay of these factors."'
        },
        {
          id: 'r7-8',
          text: 'The word "renowned" in the first paragraph is closest in meaning to:',
          options: ['Unknown', 'Famous', 'Hidden', 'Ancient'],
          correctAnswer: 1,
          explanation: '"Renowned" means known or talked about by many people; famous.'
        },
        {
          id: 'r7-9',
          text: 'What happened to the Maya people after the Classic period?',
          options: ['They completely disappeared.', 'Their descendants still live in the region.', 'They migrated to Europe.', 'They became a maritime civilization.'],
          correctAnswer: 1,
          explanation: 'The passage notes that "their descendants still live in the region today."'
        },
        {
          id: 'r7-10',
          text: 'The word "depleted" in the second paragraph is closest in meaning to:',
          options: ['Increased', 'Used up', 'Protected', 'Found'],
          correctAnswer: 1,
          explanation: '"Depleted" means to use up the supply or resources of.'
        }
      ]
    },
    {
      id: 'r-8',
      title: 'The History of the Internet',
      description: 'Tracing the evolution of the global network.',
      tips: [
        "Identify the origins of the internet (ARPANET).",
        "Understand the role of key technologies (e.g., TCP/IP, World Wide Web).",
        "Identify the transition from military/academic use to public use.",
        "Look for the impact of the internet on society.",
        "Identify the difference between the 'Internet' and the 'World Wide Web'."
      ],
      readingPassage: `The internet, a global system of interconnected computer networks, has its roots in the late 1960s. The precursor to the modern internet was ARPANET (Advanced Research Projects Agency Network), a project funded by the U.S. Department of Defense. Its primary goal was to create a decentralized communication network that could withstand a partial failure, such as one caused by a military attack. Initially, ARPANET connected only a few research institutions and universities, allowing them to share data and computing resources.

The 1970s saw the development of the Transmission Control Protocol and Internet Protocol (TCP/IP), which provided a standardized language for different networks to communicate with each other. This was a crucial step, as it allowed for the creation of a "network of networks," which is the literal definition of the internet. Throughout the 1980s, the network expanded beyond military and academic circles, but it remained largely text-based and difficult for the average person to navigate.

The most significant turning point came in 1989, when British scientist Tim Berners-Lee invented the World Wide Web. He introduced the concept of hypertext, which allowed users to navigate between documents using clickable links. He also developed the first web browser and the Hypertext Transfer Protocol (HTTP). The introduction of the Web made the internet accessible to a much broader audience, leading to its rapid commercialization in the 1990s. Today, the internet has transformed almost every aspect of modern life, from how we communicate and work to how we access information and entertainment.`,
      questions: [
        {
          id: 'r8-1',
          text: 'What was the original primary goal of ARPANET?',
          options: ['To provide free email to everyone', 'To create a decentralized network resistant to failure', 'To sell commercial products online', 'To replace traditional television'],
          correctAnswer: 1,
          explanation: 'The passage states the goal was "to create a decentralized communication network that could withstand a partial failure."'
        },
        {
          id: 'r8-2',
          text: 'The acronym TCP/IP refers to:',
          options: ['A type of early computer', 'Standardized communication protocols', 'The first web browser', 'A military research agency'],
          correctAnswer: 1,
          explanation: 'The text describes TCP/IP as "standardized language for different networks to communicate."'
        },
        {
          id: 'r8-3',
          text: 'What is the literal definition of the "internet" according to the passage?',
          options: ['A fast computer', 'A network of networks', 'A system of clickable links', 'A military database'],
          correctAnswer: 1,
          explanation: 'The passage defines it as a "network of networks."'
        },
        {
          id: 'r8-4',
          text: 'How did the internet change in the 1980s?',
          options: ['It became highly commercialized.', 'It expanded beyond military and academic circles.', 'It was replaced by the World Wide Web.', 'It became primarily image-based.'],
          correctAnswer: 1,
          explanation: 'The text says that in the 1980s, "the network expanded beyond military and academic circles."'
        },
        {
          id: 'r8-5',
          text: 'What was Tim Berners-Lee\'s major contribution?',
          options: ['The invention of the first computer', 'The creation of ARPANET', 'The invention of the World Wide Web', 'The development of TCP/IP'],
          correctAnswer: 2,
          explanation: 'The passage credits him with inventing the World Wide Web in 1989.'
        },
        {
          id: 'r8-6',
          text: 'The word "precursor" in the first paragraph is closest in meaning to:',
          options: ['Successor', 'Forerunner or predecessor', 'Competitor', 'Replacement'],
          correctAnswer: 1,
          explanation: 'A precursor is something that comes before another of the same kind.'
        },
        {
          id: 'r8-7',
          text: 'What does "hypertext" allow users to do?',
          options: ['Type faster', 'Navigate between documents using links', 'Print documents more easily', 'Send encrypted emails'],
          correctAnswer: 1,
          explanation: 'The passage says hypertext "allowed users to navigate between documents using clickable links."'
        },
        {
          id: 'r8-8',
          text: 'When did the internet become rapidly commercialized?',
          options: ['1960s', '1970s', '1980s', '1990s'],
          correctAnswer: 3,
          explanation: 'The text mentions "rapid commercialization in the 1990s."'
        },
        {
          id: 'r8-9',
          text: 'The word "decentralized" in the first paragraph implies that the network:',
          options: ['Was controlled by a single computer', 'Had no single point of control', 'Was only available in one city', 'Was very expensive to run'],
          correctAnswer: 1,
          explanation: 'A decentralized network is one where control is distributed rather than centralized.'
        },
        {
          id: 'r8-10',
          text: 'What does HTTP stand for according to the context?',
          options: ['High Tech Text Process', 'Hypertext Transfer Protocol', 'Home Terminal Transfer Page', 'Hyperlink Tool Task Program'],
          correctAnswer: 1,
          explanation: 'The passage explicitly mentions "Hypertext Transfer Protocol (HTTP)."'
        }
      ]
    },
    {
      id: 'r-9',
      title: 'The Great Barrier Reef',
      description: 'Analyzing an environmental passage about marine biology.',
      tips: [
        "Identify the location and size of the reef.",
        "Understand the role of coral polyps.",
        "Identify the threats to the reef.",
        "Look for the importance of biodiversity.",
        "Identify the impact of climate change."
      ],
      readingPassage: `The Great Barrier Reef, stretching over 1,400 miles off the northeastern coast of Australia, is the world's largest and most complex coral reef ecosystem. It is so vast that it can be seen from outer space. This natural wonder is not a single continuous structure but is composed of over 2,900 individual reefs and 900 islands. The reef is built by billions of tiny organisms known as coral polyps, which secrete calcium carbonate to form a hard skeleton. Over thousands of years, these skeletons accumulate to create the massive structures we see today.

The reef is a hotspot of biodiversity, supporting thousands of species of fish, mollusks, sea turtles, and marine mammals. It also serves as a critical breeding ground for many species, including humpback whales. Beyond its ecological importance, the Great Barrier Reef is a significant economic asset for Australia, contributing billions of dollars annually through tourism and fishing. It also provides a natural barrier that protects the coastline from the damaging effects of large waves and tropical storms.

However, the Great Barrier Reef is currently facing unprecedented challenges. The most significant threat is climate change, which has led to rising ocean temperatures. When water becomes too warm, corals undergo a stress response known as bleaching. During bleaching, corals expel the symbiotic algae (zooxanthellae) that live in their tissues and provide them with food and their vibrant colors. Without the algae, the corals turn white and can eventually die if the stress persists. Other threats include water pollution from agricultural runoff, overfishing, and outbreaks of the crown-of-thorns starfish, a predator that feeds on coral polyps. Conservation efforts are underway, but the future of this magnificent ecosystem remains uncertain.`,
      questions: [
        {
          id: 'r9-1',
          text: 'What is the primary biological building block of the Great Barrier Reef?',
          options: ['Seaweed', 'Coral polyps', 'Volcanic rock', 'Sandstone'],
          correctAnswer: 1,
          explanation: 'The passage states the reef is built by "billions of tiny organisms known as coral polyps."'
        },
        {
          id: 'r9-2',
          text: 'How do coral polyps create the reef structure?',
          options: ['By weaving together sea grass', 'By secreting calcium carbonate', 'By trapping sand in their tentacles', 'By growing on top of sunken ships'],
          correctAnswer: 1,
          explanation: 'The text explains that polyps "secrete calcium carbonate to form a hard skeleton."'
        },
        {
          id: 'r9-3',
          text: 'The reef is described as a "hotspot of biodiversity" because:',
          options: ['It is very warm.', 'It supports thousands of different species.', 'It is located near the equator.', 'It is visible from space.'],
          correctAnswer: 1,
          explanation: 'Biodiversity refers to the variety of life, and the passage mentions it supports "thousands of species."'
        },
        {
          id: 'r9-4',
          text: 'What is a major economic benefit of the reef for Australia?',
          options: ['Mining of precious metals', 'Tourism and fishing', 'Oil and gas extraction', 'Agriculture'],
          correctAnswer: 1,
          explanation: 'The passage mentions the reef contributes "billions of dollars annually through tourism and fishing."'
        },
        {
          id: 'r9-5',
          text: 'What happens during the process of coral bleaching?',
          options: ['Corals grow at an accelerated rate.', 'Corals expel the algae living in their tissues.', 'Corals change color to blend in with the sand.', 'Corals produce more calcium carbonate.'],
          correctAnswer: 1,
          explanation: 'Bleaching is a process where "corals expel the symbiotic algae (zooxanthellae) that live in their tissues."'
        },
        {
          id: 'r9-6',
          text: 'Why are zooxanthellae important to corals?',
          options: ['They protect corals from predators.', 'They provide corals with food and color.', 'They help corals move to new locations.', 'They clean the water around the reef.'],
          correctAnswer: 1,
          explanation: 'The algae "live in their tissues and provide them with food and their vibrant colors."'
        },
        {
          id: 'r9-7',
          text: 'Which of the following is NOT mentioned as a threat to the reef?',
          options: ['Climate change', 'Water pollution', 'Underwater earthquakes', 'Overfishing'],
          correctAnswer: 2,
          explanation: 'Earthquakes are not mentioned; the others are listed as significant threats.'
        },
        {
          id: 'r9-8',
          text: 'The crown-of-thorns starfish is mentioned as:',
          options: ['An endangered species in the reef', 'A predator that feeds on coral polyps', 'A beautiful tourist attraction', 'A source of medicine'],
          correctAnswer: 1,
          explanation: 'The text describes it as "a predator that feeds on coral polyps."'
        },
        {
          id: 'r9-9',
          text: 'The word "unprecedented" in the third paragraph is closest in meaning to:',
          options: ['Expected', 'Never seen before', 'Minor', 'Historical'],
          correctAnswer: 1,
          explanation: '"Unprecedented" means never done or known before.'
        },
        {
          id: 'r9-10',
          text: 'What role does the reef play in protecting the coastline?',
          options: ['It prevents beach erosion by trapping sand.', 'It acts as a barrier against large waves and storms.', 'It provides a home for coastal birds.', 'It filters salt out of the ocean water.'],
          correctAnswer: 1,
          explanation: 'The passage says it "provides a natural barrier that protects the coastline from the damaging effects of large waves and tropical storms."'
        }
      ]
    },
    {
      id: 'r-10',
      title: 'The Solar System',
      description: 'Analyzing a scientific passage about astronomy.',
      tips: [
        "Identify the components of the solar system.",
        "Understand the difference between inner and outer planets.",
        "Identify the role of the Sun.",
        "Look for the composition of different planets.",
        "Identify the gravitational force mentioned."
      ],
      readingPassage: `Our solar system is a vast and complex neighborhood in space, centered around a single star: the Sun. The Sun's immense gravity holds the system together, keeping everything from the largest planets to the smallest debris in orbit. The system is divided into two main regions: the inner solar system and the outer solar system, separated by the asteroid belt.

The inner solar system contains the four terrestrial planets: Mercury, Venus, Earth, and Mars. These planets are relatively small and are composed primarily of rock and metal. They have solid surfaces and few, if any, moons. In contrast, the outer solar system is home to the four gas giants: Jupiter, Saturn, Uranus, and Neptune. These planets are much larger than the terrestrial planets and are composed mostly of hydrogen, helium, and ices. They lack solid surfaces and are surrounded by extensive systems of rings and numerous moons. Jupiter, the largest planet, is so massive that it contains more than twice the mass of all the other planets combined.

Beyond the orbit of Neptune lies the Kuiper Belt, a region of icy bodies that includes dwarf planets like Pluto. Even further out is the Oort Cloud, a theoretical sphere of icy debris that is thought to be the source of long-period comets. While the Sun provides the energy that sustains life on Earth, the study of other bodies in the solar system helps scientists understand the origins and evolution of our planetary neighborhood. Space missions, such as the Voyager probes and the Mars rovers, continue to provide invaluable data, revealing the incredible diversity and dynamic nature of the worlds beyond our own.`,
      questions: [
        {
          id: 'r10-1',
          text: 'What force keeps the components of the solar system in orbit?',
          options: ['Magnetic attraction', 'The Sun\'s gravity', 'Centrifugal force', 'Solar wind'],
          correctAnswer: 1,
          explanation: 'The passage states that "The Sun\'s immense gravity holds the system together."'
        },
        {
          id: 'r10-2',
          text: 'What separates the inner and outer solar system?',
          options: ['The Kuiper Belt', 'The Oort Cloud', 'The asteroid belt', 'The orbit of Mars'],
          correctAnswer: 2,
          explanation: 'The text says the regions are "separated by the asteroid belt."'
        },
        {
          id: 'r10-3',
          text: 'Which of the following is a characteristic of terrestrial planets?',
          options: ['They are composed mostly of gas.', 'They have extensive ring systems.', 'They are primarily composed of rock and metal.', 'They are much larger than gas giants.'],
          correctAnswer: 2,
          explanation: 'The terrestrial planets are "composed primarily of rock and metal."'
        },
        {
          id: 'r10-4',
          text: 'How does the mass of Jupiter compare to other planets?',
          options: ['It is smaller than Earth.', 'It is about the same as Saturn.', 'It is more than twice the mass of all other planets combined.', 'It is the same as the Sun.'],
          correctAnswer: 2,
          explanation: 'The passage states Jupiter "contains more than twice the mass of all the other planets combined."'
        },
        {
          id: 'r10-5',
          text: 'The outer planets are primarily composed of:',
          options: ['Rock and metal', 'Hydrogen, helium, and ices', 'Liquid water', 'Carbon dioxide'],
          correctAnswer: 1,
          explanation: 'The gas giants are "composed mostly of hydrogen, helium, and ices."'
        },
        {
          id: 'r10-6',
          text: 'Where is the Kuiper Belt located?',
          options: ['Between Mars and Jupiter', 'Inside the Sun', 'Beyond the orbit of Neptune', 'Near the Earth\'s moon'],
          correctAnswer: 2,
          explanation: 'The text says it "lies beyond the orbit of Neptune."'
        },
        {
          id: 'r10-7',
          text: 'What is the Oort Cloud thought to be the source of?',
          options: ['Dwarf planets', 'Long-period comets', 'Asteroids', 'New stars'],
          correctAnswer: 1,
          explanation: 'The Oort Cloud is "thought to be the source of long-period comets."'
        },
        {
          id: 'r10-8',
          text: 'The word "terrestrial" in the second paragraph refers to planets that are:',
          options: ['Giant and gaseous', 'Earth-like and rocky', 'Icy and cold', 'Far from the Sun'],
          correctAnswer: 1,
          explanation: 'Terrestrial planets (like Earth) are small and composed of rock and metal.'
        },
        {
          id: 'r10-9',
          text: 'Which of the following was NOT mentioned as a source of data about the solar system?',
          options: ['Voyager probes', 'Mars rovers', 'Space telescopes', 'Deep sea submersibles'],
          correctAnswer: 3,
          explanation: 'Deep sea submersibles are used for ocean exploration, not space.'
        },
        {
          id: 'r10-10',
          text: 'The word "immense" in the first paragraph is closest in meaning to:',
          options: ['Very small', 'Weak', 'Extremely large', 'Invisible'],
          correctAnswer: 2,
          explanation: '"Immense" means extremely large or great.'
        }
      ]
    }
  ]
};
