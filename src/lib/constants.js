export const CONSTANT = {
  BEGIN_DATE: new Date('2024-01-01'),
  TODAY_DATE: new Date(),
  KEYLIST: [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    ],
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'],
    [
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
    ],
    [
      '#e96a6a',
      '#ffa07a',
      '#ece591',
      '#48d9f6',
      '#0798f1',
      '#7fffd4',
      '#34a79b',
      '#cd0a0e',
      '#9370db',
    ],
  ],
  MODES: {
    easy: {
      key: 'easy',
      name: 'Easy',
      value: [25, 40],
      mistakes: 4,
      hints: 5,
    },
    normal: {
      key: 'normal',
      name: 'Normal',
      value: [40, 60],
      mistakes: 3,
      hints: 4,
    },
    hard: {
      key: 'hard',
      name: 'Hard',
      value: [60, 70],
      mistakes: 2,
      hints: 3,
    },
    expert: {
      key: 'expert',
      name: 'Expert',
      value: [70, 80],
      mistakes: 2,
      hints: 3,
    },
  },
}
