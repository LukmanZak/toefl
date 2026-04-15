import { Category } from '../types';

export const FULL_TEST_CATEGORY: Category = {
  id: 'full-test',
  title: 'Full Proficiency Test',
  icon: 'clipboard-check',
  lessons: [
    {
      id: 'test-1',
      title: 'Diagnostic Test',
      description: 'A comprehensive test covering all four skills to assess your current level.',
      tips: [
        "Treat this like a real exam - find a quiet place and time yourself.",
        "Review your mistakes carefully to identify areas for improvement."
      ],
      questions: [
        {
          id: 'ft-1',
          text: 'The results of the study _______ that the new treatment is effective.',
          options: ['indicates', 'indicate', 'indicating', 'has indicated'],
          correctAnswer: 1,
          explanation: 'The subject "results" is plural, so it requires the plural verb "indicate".'
        },
        {
          id: 'ft-2',
          text: 'Choose the synonym for "Meticulous":',
          options: ['Careless', 'Thorough', 'Fast', 'Lazy'],
          correctAnswer: 1,
          explanation: '"Meticulous" means showing great attention to detail; very careful and precise.'
        },
        {
          id: 'ft-3',
          text: 'Not only _______ the project on time, but they also stayed under budget.',
          options: ['they finished', 'did they finish', 'they did finish', 'finished they'],
          correctAnswer: 1,
          explanation: 'When a sentence starts with a negative expression like "Not only", inversion of the subject and auxiliary verb is required.'
        },
        {
          id: 'ft-4',
          readingPassage: `The concept of "sustainable development" emerged in the late 20th century as a response to growing concerns about environmental degradation and resource depletion. It is defined as development that meets the needs of the present without compromising the ability of future generations to meet their own needs. This principle requires a balance between three pillars: economic growth, social equity, and environmental protection.

One of the primary challenges to sustainable development is the global reliance on fossil fuels. The combustion of coal, oil, and natural gas releases greenhouse gases, primarily carbon dioxide, into the atmosphere, contributing to global climate change. Transitioning to renewable energy sources, such as solar, wind, and hydroelectric power, is essential for reducing carbon emissions. However, this transition faces significant economic and political hurdles, including the high initial cost of infrastructure and the influence of established energy industries.

Furthermore, sustainable development involves addressing social inequalities. Poverty and lack of access to education and healthcare can lead to unsustainable practices, such as over-exploitation of local forests or water sources. Therefore, international cooperation and policies that promote fair trade and social welfare are integral to achieving global sustainability goals.`,
          text: 'According to the passage, what are the three pillars of sustainable development?',
          options: ['Technology, economy, and politics', 'Economic growth, social equity, and environmental protection', 'Education, healthcare, and infrastructure', 'Fossil fuels, renewable energy, and climate change'],
          correctAnswer: 1,
          explanation: 'The passage explicitly states: "This principle requires a balance between three pillars: economic growth, social equity, and environmental protection."'
        },
        {
          id: 'ft-5',
          readingPassage: `The concept of "sustainable development" emerged in the late 20th century as a response to growing concerns about environmental degradation and resource depletion. It is defined as development that meets the needs of the present without compromising the ability of future generations to meet their own needs. This principle requires a balance between three pillars: economic growth, social equity, and environmental protection.

One of the primary challenges to sustainable development is the global reliance on fossil fuels. The combustion of coal, oil, and natural gas releases greenhouse gases, primarily carbon dioxide, into the atmosphere, contributing to global climate change. Transitioning to renewable energy sources, such as solar, wind, and hydroelectric power, is essential for reducing carbon emissions. However, this transition faces significant economic and political hurdles, including the high initial cost of infrastructure and the influence of established energy industries.

Furthermore, sustainable development involves addressing social inequalities. Poverty and lack of access to education and healthcare can lead to unsustainable practices, such as over-exploitation of local forests or water sources. Therefore, international cooperation and policies that promote fair trade and social welfare are integral to achieving global sustainability goals.`,
          text: 'The word "hurdles" in the second paragraph is closest in meaning to:',
          options: ['Benefits', 'Obstacles', 'Solutions', 'Inventions'],
          correctAnswer: 1,
          explanation: 'In this context, "hurdles" refers to the economic and political challenges or obstacles faced during the transition to renewable energy.'
        },
        {
          id: 'ft-6',
          readingPassage: `The concept of "sustainable development" emerged in the late 20th century as a response to growing concerns about environmental degradation and resource depletion. It is defined as development that meets the needs of the present without compromising the ability of future generations to meet their own needs. This principle requires a balance between three pillars: economic growth, social equity, and environmental protection.

One of the primary challenges to sustainable development is the global reliance on fossil fuels. The combustion of coal, oil, and natural gas releases greenhouse gases, primarily carbon dioxide, into the atmosphere, contributing to global climate change. Transitioning to renewable energy sources, such as solar, wind, and hydroelectric power, is essential for reducing carbon emissions. However, this transition faces significant economic and political hurdles, including the high initial cost of infrastructure and the influence of established energy industries.

Furthermore, sustainable development involves addressing social inequalities. Poverty and lack of access to education and healthcare can lead to unsustainable practices, such as over-exploitation of local forests or water sources. Therefore, international cooperation and policies that promote fair trade and social welfare are integral to achieving global sustainability goals.`,
          text: 'Why does the author mention poverty in the third paragraph?',
          options: ['To show that economic growth is more important than social equity', 'To explain how social issues can lead to environmental problems', 'To argue against international cooperation', 'To highlight the success of current fair trade policies'],
          correctAnswer: 1,
          explanation: 'The author states that "Poverty... can lead to unsustainable practices," linking social issues to environmental degradation.'
        },
        {
          id: 'ft-7',
          readingPassage: `The concept of "sustainable development" emerged in the late 20th century as a response to growing concerns about environmental degradation and resource depletion. It is defined as development that meets the needs of the present without compromising the ability of future generations to meet their own needs. This principle requires a balance between three pillars: economic growth, social equity, and environmental protection.

One of the primary challenges to sustainable development is the global reliance on fossil fuels. The combustion of coal, oil, and natural gas releases greenhouse gases, primarily carbon dioxide, into the atmosphere, contributing to global climate change. Transitioning to renewable energy sources, such as solar, wind, and hydroelectric power, is essential for reducing carbon emissions. However, this transition faces significant economic and political hurdles, including the high initial cost of infrastructure and the influence of established energy industries.

Furthermore, sustainable development involves addressing social inequalities. Poverty and lack of access to education and healthcare can lead to unsustainable practices, such as over-exploitation of local forests or water sources. Therefore, international cooperation and policies that promote fair trade and social welfare are integral to achieving global sustainability goals.`,
          text: 'What can be inferred about the transition to renewable energy?',
          options: ['It is purely a technological problem.', 'It is supported by all major energy industries.', 'It is complicated by financial and political factors.', 'It has already been completed in most developed nations.'],
          correctAnswer: 2,
          explanation: 'The passage mentions "significant economic and political hurdles" and the "influence of established energy industries," implying complexity beyond just technology.'
        },
        {
          id: 'ft-8',
          text: 'The manager insisted that the report _______ by Friday.',
          options: ['is finished', 'be finished', 'was finished', 'will be finished'],
          correctAnswer: 1,
          explanation: 'This is the subjunctive mood, used after verbs of insisting, suggesting, or recommending. "Insisted that [subject] [base form verb]".'
        },
        {
          id: 'ft-9',
          text: 'Which word is an antonym of "Ambiguous"?',
          options: ['Unclear', 'Vague', 'Precise', 'Obscure'],
          correctAnswer: 2,
          explanation: '"Ambiguous" means open to more than one interpretation; not having one obvious meaning. "Precise" is its opposite.'
        },
        {
          id: 'ft-10',
          text: 'By the time the sun sets, we _______ for eight hours.',
          options: ['will walk', 'will have been walking', 'are walking', 'have walked'],
          correctAnswer: 1,
          explanation: 'The future perfect continuous tense is used to describe an action that will be in progress up to a point in the future.'
        },
        {
          id: 'ft-11',
          text: 'The word "Ubiquitous" is most similar in meaning to:',
          options: ['Rare', 'Ever-present', 'Hidden', 'Temporary'],
          correctAnswer: 1,
          explanation: '"Ubiquitous" means present, appearing, or found everywhere.'
        },
        {
          id: 'ft-12',
          text: 'If I _______ you, I would take the opportunity.',
          options: ['am', 'was', 'were', 'be'],
          correctAnswer: 2,
          explanation: 'In second conditional sentences, "were" is used for all subjects in the "if" clause.'
        },
        {
          id: 'ft-13',
          text: 'The hypothesis was _______ by the experimental data.',
          options: ['corroborated', 'contradicted', 'ignored', 'forgotten'],
          correctAnswer: 0,
          explanation: '"Corroborated" means confirmed or gave support to (a statement, theory, or finding).'
        },
        {
          id: 'ft-14',
          text: 'Hardly _______ the room when the phone rang.',
          options: ['I had entered', 'had I entered', 'I entered', 'did I entered'],
          correctAnswer: 1,
          explanation: 'Similar to "Not only", "Hardly" at the beginning of a sentence requires subject-auxiliary inversion.'
        },
        {
          id: 'ft-15',
          text: 'The committee _______ still debating the proposal.',
          options: ['is', 'are', 'be', 'were'],
          correctAnswer: 0,
          explanation: 'Collective nouns like "committee" are treated as singular units when they act together.'
        }
      ]
    }
  ]
};
