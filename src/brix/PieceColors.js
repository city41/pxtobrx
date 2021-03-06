import PieceDef from '../brix/PieceDef';

export default {
  White: {
    id: 1,
    officialName: 'White',
    commonName: 'White',
    color: 'rgb(255, 255, 255)',
    availablePieces: {
      brick: [
        new PieceDef({width: 1, height: 1, cost: 10}),
        new PieceDef({width: 2, height: 1, cost: 15}),
        new PieceDef({width: 3, height: 1, cost: 20}),
        new PieceDef({width: 4, height: 1, cost: 20}),
        new PieceDef({width: 6, height: 1, cost: 35}),
        new PieceDef({width: 8, height: 1, cost: 40}),
        new PieceDef({width: 10, height: 1, cost: 45}),
        new PieceDef({width: 12, height: 1, cost: 55}),
        new PieceDef({width: 16, height: 1, cost: 70})
      ],
      plate: [
        new PieceDef({width: 1, height: 1, cost: 10}),
        new PieceDef({width: 2, height: 1, cost: 10}),
        new PieceDef({width: 3, height: 1, cost: 10}),
        new PieceDef({width: 4, height: 1, cost: 15}),
        new PieceDef({width: 6, height: 1, cost: 20}),
        new PieceDef({width: 8, height: 1, cost: 25}),
        new PieceDef({width: 10, height: 1, cost: 25}),
        new PieceDef({width: 12, height: 1, cost: 35}),
        new PieceDef({width: 2, height: 2, cost: 15}),
        new PieceDef({width: 3, height: 2, cost: 20}),
        new PieceDef({width: 4, height: 2, cost: 20}),
        new PieceDef({width: 6, height: 2, cost: 25}),
        new PieceDef({width: 8, height: 2, cost: 35}),
        new PieceDef({width: 10, height: 2, cost: 35}),
        new PieceDef({width: 12, height: 2, cost: 40}),
        new PieceDef({width: 16, height: 2, cost: 70}),
        new PieceDef({width: 4, height: 4, cost: 30}),
        new PieceDef({width: 6, height: 4, cost: 60}),
        new PieceDef({width: 8, height: 4, cost: 65}),
        new PieceDef({width: 10, height: 4, cost: 75}),
        new PieceDef({width: 12, height: 4, cost: 80}),
        new PieceDef({width: 6, height: 6, cost: 70}),
        new PieceDef({width: 8, height: 6, cost: 85}),
        // rotated
        new PieceDef({height: 2, width: 1, cost: 10}),
        new PieceDef({height: 3, width: 1, cost: 10}),
        new PieceDef({height: 4, width: 1, cost: 15}),
        new PieceDef({height: 6, width: 1, cost: 20}),
        new PieceDef({height: 8, width: 1, cost: 25}),
        new PieceDef({height: 10, width: 1, cost: 25}),
        new PieceDef({height: 12, width: 1, cost: 35}),
        new PieceDef({height: 3, width: 2, cost: 20}),
        new PieceDef({height: 4, width: 2, cost: 20}),
        new PieceDef({height: 6, width: 2, cost: 25}),
        new PieceDef({height: 8, width: 2, cost: 35}),
        new PieceDef({height: 10, width: 2, cost: 35}),
        new PieceDef({height: 12, width: 2, cost: 40}),
        new PieceDef({height: 16, width: 2, cost: 70}),
        new PieceDef({height: 6, width: 4, cost: 60}),
        new PieceDef({height: 8, width: 4, cost: 65}),
        new PieceDef({height: 10, width: 4, cost: 75}),
        new PieceDef({height: 12, width: 4, cost: 80}),
        new PieceDef({height: 8, width: 6, cost: 85})
      ],
      flat: [
        new PieceDef({width: 1, height: 1, cost: 10}),
        new PieceDef({width: 2, height: 1, cost: 10}),
        new PieceDef({width: 3, height: 1, cost: 20}),
        new PieceDef({width: 4, height: 1, cost: 20}),
        new PieceDef({width: 6, height: 1, cost: 20}),
        new PieceDef({width: 8, height: 1, cost: 20}),
        new PieceDef({width: 2, height: 2, cost: 10}),
        new PieceDef({width: 4, height: 2, cost: 30}),
        // rotated
        new PieceDef({height: 2, width: 1, cost: 10}),
        new PieceDef({height: 3, width: 1, cost: 20}),
        new PieceDef({height: 4, width: 1, cost: 20}),
        new PieceDef({height: 6, width: 1, cost: 20}),
        new PieceDef({height: 8, width: 1, cost: 20}),
        new PieceDef({height: 2, width: 2, cost: 10}),
        new PieceDef({height: 4, width: 2, cost: 30})
      ]
    }
  },
  'Brick Yellow': {
    id: 5,
    officialName: 'Brick Yellow',
    commonName: 'Tan',
    color: 'rgb(217, 187, 123)',
    availablePieces: {
      brick: [
        new PieceDef({width: 1, height: 1, cost: 10}),
        new PieceDef({width: 2, height: 1, cost: 15}),
        new PieceDef({width: 3, height: 1, cost: 20}),
        new PieceDef({width: 4, height: 1, cost: 20}),
        new PieceDef({width: 6, height: 1, cost: 35}),
        new PieceDef({width: 8, height: 1, cost: 40}),
        new PieceDef({width: 10, height: 1, cost: 45})
      ],
      plate: [
        new PieceDef({width: 1, height: 1, cost: 10}),
        new PieceDef({width: 2, height: 1, cost: 10}),
        new PieceDef({width: 3, height: 1, cost: 10}),
        new PieceDef({width: 4, height: 1, cost: 15}),
        new PieceDef({width: 6, height: 1, cost: 20}),
        new PieceDef({width: 8, height: 1, cost: 25}),
        new PieceDef({width: 2, height: 2, cost: 15}),
        new PieceDef({width: 3, height: 2, cost: 20}),
        new PieceDef({width: 4, height: 2, cost: 20}),
        new PieceDef({width: 6, height: 2, cost: 25}),
        new PieceDef({width: 8, height: 2, cost: 35}),
        new PieceDef({width: 10, height: 2, cost: 35}),
        new PieceDef({width: 16, height: 2, cost: 70}),
        new PieceDef({width: 4, height: 4, cost: 30}),
        new PieceDef({width: 6, height: 4, cost: 60}),
        new PieceDef({width: 8, height: 4, cost: 65}),
        new PieceDef({width: 6, height: 6, cost: 70}),
        new PieceDef({width: 16, height: 8, cost: 215}),
        // rotated
        new PieceDef({height: 2, width: 1, cost: 10}),
        new PieceDef({height: 3, width: 1, cost: 10}),
        new PieceDef({height: 4, width: 1, cost: 15}),
        new PieceDef({height: 6, width: 1, cost: 20}),
        new PieceDef({height: 8, width: 1, cost: 25}),
        new PieceDef({height: 3, width: 2, cost: 20}),
        new PieceDef({height: 4, width: 2, cost: 20}),
        new PieceDef({height: 6, width: 2, cost: 25}),
        new PieceDef({height: 8, width: 2, cost: 35}),
        new PieceDef({height: 10, width: 2, cost: 35}),
        new PieceDef({height: 16, width: 2, cost: 70}),
        new PieceDef({height: 6, width: 4, cost: 60}),
        new PieceDef({height: 8, width: 4, cost: 65}),
        new PieceDef({height: 16, width: 8, cost: 215})
      ],
      flat: [
        new PieceDef({width: 1, height: 1, cost: 10}),
        new PieceDef({width: 2, height: 1, cost: 10}),
        new PieceDef({width: 4, height: 1, cost: 20}),
        new PieceDef({width: 6, height: 1, cost: 20}),
        new PieceDef({width: 2, height: 2, cost: 10}),
        // rotated
        new PieceDef({height: 2, width: 1, cost: 10}),
        new PieceDef({height: 4, width: 1, cost: 20}),
        new PieceDef({height: 6, width: 1, cost: 20})
      ]
    }
  },
  // Nougat: {
  //   id: 18,
  //   officialName: 'Nougat',
  //   commonName: 'Flesh',
  //   color: 'rgb(214, 114, 64)'
  // },
  'Bright Red': {
    id: 21,
    officialName: 'Bright Red',
    commonName: 'Red',
    color: 'rgb(222, 0, 13)',
    availablePieces: {
      brick: [
        new PieceDef({width: 1, height: 1, cost: 10}),//
        new PieceDef({width: 2, height: 1, cost: 15}),//
        new PieceDef({width: 3, height: 1, cost: 20}),//
        new PieceDef({width: 4, height: 1, cost: 20}),//
        new PieceDef({width: 6, height: 1, cost: 35}),//
        new PieceDef({width: 10, height: 1, cost: 45}),//
        new PieceDef({width: 12, height: 1, cost: 55})
      ],
      plate: [
        new PieceDef({width: 1, height: 1, cost: 10}),
        new PieceDef({width: 2, height: 1, cost: 10}),
        new PieceDef({width: 3, height: 1, cost: 10}),
        new PieceDef({width: 4, height: 1, cost: 15}),
        new PieceDef({width: 6, height: 1, cost: 20}),
        new PieceDef({width: 8, height: 1, cost: 25}),
        new PieceDef({width: 2, height: 2, cost: 15}),
        new PieceDef({width: 3, height: 2, cost: 20}),
        new PieceDef({width: 4, height: 2, cost: 20}),
        new PieceDef({width: 6, height: 2, cost: 25}),
        new PieceDef({width: 8, height: 2, cost: 35}),
        new PieceDef({width: 10, height: 2, cost: 35}),
        new PieceDef({width: 4, height: 4, cost: 30}),
        new PieceDef({width: 6, height: 4, cost: 60}),
        // rotated
        new PieceDef({height: 1, width: 1, cost: 10}),
        new PieceDef({height: 2, width: 1, cost: 10}),
        new PieceDef({height: 3, width: 1, cost: 10}),
        new PieceDef({height: 4, width: 1, cost: 15}),
        new PieceDef({height: 6, width: 1, cost: 20}),
        new PieceDef({height: 8, width: 1, cost: 25}),
        new PieceDef({height: 2, width: 2, cost: 15}),
        new PieceDef({height: 3, width: 2, cost: 20}),
        new PieceDef({height: 4, width: 2, cost: 20}),
        new PieceDef({height: 6, width: 2, cost: 25}),
        new PieceDef({height: 8, width: 2, cost: 35}),
        new PieceDef({height: 10, width: 2, cost: 35}),
        new PieceDef({height: 4, width: 4, cost: 30}),
        new PieceDef({height: 6, width: 4, cost: 60})
      ],
      flat: [
        new PieceDef({width: 1, height: 1, cost: 10}),
        new PieceDef({width: 2, height: 1, cost: 10}),
        new PieceDef({width: 3, height: 1, cost: 20}),
        new PieceDef({width: 4, height: 1, cost: 20}),
        new PieceDef({width: 6, height: 1, cost: 20}),
        new PieceDef({width: 8, height: 1, cost: 20}),
        new PieceDef({width: 2, height: 2, cost: 10}),
        new PieceDef({width: 4, height: 2, cost: 30}),
        // rotated
        new PieceDef({height: 2, width: 1, cost: 10}),
        new PieceDef({height: 3, width: 1, cost: 20}),
        new PieceDef({height: 4, width: 1, cost: 20}),
        new PieceDef({height: 6, width: 1, cost: 20}),
        new PieceDef({height: 8, width: 1, cost: 20}),
        new PieceDef({height: 2, width: 2, cost: 10}),
        new PieceDef({height: 4, width: 2, cost: 30})
      ]
    }
  },
  'Bright Blue': {
    id: 23,
    officialName: 'Bright Blue',
    commonName: 'Blue',
    color: 'rgb(0, 87, 168)',
    availablePieces: {
      brick: [
        new PieceDef({width: 1, height: 1, cost: 10}),//
        new PieceDef({width: 2, height: 1, cost: 15}),//
        new PieceDef({width: 3, height: 1, cost: 20}),//
        new PieceDef({width: 4, height: 1, cost: 20}),//
        new PieceDef({width: 6, height: 1, cost: 35}),//
        new PieceDef({width: 8, height: 1, cost: 40})
      ],
      plate: [
        new PieceDef({width: 1, height: 1, cost: 10}),//
        new PieceDef({width: 2, height: 1, cost: 10}),//
        new PieceDef({width: 3, height: 1, cost: 10}),//
        new PieceDef({width: 4, height: 1, cost: 15}),//
        new PieceDef({width: 6, height: 1, cost: 20}),//
        new PieceDef({width: 8, height: 1, cost: 25}),//
        new PieceDef({width: 2, height: 2, cost: 15}),//
        new PieceDef({width: 3, height: 2, cost: 20}),//
        new PieceDef({width: 4, height: 2, cost: 20}),//
        new PieceDef({width: 6, height: 2, cost: 25}),//
        new PieceDef({width: 8, height: 2, cost: 35}),//
        new PieceDef({width: 4, height: 4, cost: 30}),//
        new PieceDef({width: 6, height: 4, cost: 60}),//
        new PieceDef({width: 8, height: 4, cost: 65}),//
        new PieceDef({width: 6, height: 6, cost: 70}),//
        new PieceDef({width: 8, height: 6, cost: 85}),//
        // rotated
        new PieceDef({height: 1, width: 1, cost: 10}),//
        new PieceDef({height: 2, width: 1, cost: 10}),//
        new PieceDef({height: 3, width: 1, cost: 10}),//
        new PieceDef({height: 4, width: 1, cost: 15}),//
        new PieceDef({height: 6, width: 1, cost: 20}),//
        new PieceDef({height: 8, width: 1, cost: 25}),//
        new PieceDef({height: 2, width: 2, cost: 15}),//
        new PieceDef({height: 3, width: 2, cost: 20}),//
        new PieceDef({height: 4, width: 2, cost: 20}),//
        new PieceDef({height: 6, width: 2, cost: 25}),//
        new PieceDef({height: 8, width: 2, cost: 35}),//
        new PieceDef({height: 4, width: 4, cost: 30}),//
        new PieceDef({height: 6, width: 4, cost: 60}),//
        new PieceDef({height: 8, width: 4, cost: 65}),//
        new PieceDef({height: 6, width: 6, cost: 70}),//
        new PieceDef({height: 8, width: 6, cost: 85})
      ],
      flat: [
        new PieceDef({width: 1, height: 1, cost: 10}),//
        new PieceDef({width: 2, height: 1, cost: 10}),//
        new PieceDef({width: 4, height: 1, cost: 20}),//
        new PieceDef({width: 6, height: 1, cost: 20}),//
        new PieceDef({width: 8, height: 1, cost: 20}),//
        new PieceDef({width: 2, height: 2, cost: 10}),//
        new PieceDef({width: 4, height: 2, cost: 30}),//
        // rotated
        new PieceDef({height: 1, width: 1, cost: 10}),//
        new PieceDef({height: 2, width: 1, cost: 10}),//
        new PieceDef({height: 4, width: 1, cost: 20}),//
        new PieceDef({height: 6, width: 1, cost: 20}),//
        new PieceDef({height: 8, width: 1, cost: 20}),//
        new PieceDef({height: 2, width: 2, cost: 10}),//
        new PieceDef({height: 4, width: 2, cost: 30})
      ]
    }
  },
  'Bright Yellow': {
    id: 24,
    officialName: 'Bright Yellow',
    commonName: 'Yellow',
    color: 'rgb(254, 196, 0)',
    availablePieces: {
      brick: [
        new PieceDef({width: 1, height: 1, cost: 10}),//
        new PieceDef({width: 2, height: 1, cost: 15}),//
        new PieceDef({width: 3, height: 1, cost: 20}),//
        new PieceDef({width: 4, height: 1, cost: 20}),//
        new PieceDef({width: 6, height: 1, cost: 35}),//
        new PieceDef({width: 8, height: 1, cost: 40})
      ],
      plate: [
        new PieceDef({width: 1, height: 1, cost: 10}),//
        new PieceDef({width: 2, height: 1, cost: 10}),//
        new PieceDef({width: 3, height: 1, cost: 10}),//
        new PieceDef({width: 4, height: 1, cost: 15}),//
        new PieceDef({width: 6, height: 1, cost: 20}),//
        new PieceDef({width: 8, height: 1, cost: 25}),//
        new PieceDef({width: 2, height: 2, cost: 15}),//
        new PieceDef({width: 3, height: 2, cost: 20}),//
        new PieceDef({width: 4, height: 2, cost: 20}),//
        new PieceDef({width: 6, height: 2, cost: 25}),//
        new PieceDef({width: 8, height: 2, cost: 35}),//
        new PieceDef({width: 6, height: 4, cost: 60}),//
        // rotated
        new PieceDef({height: 1, width: 1, cost: 10}),//
        new PieceDef({height: 2, width: 1, cost: 10}),//
        new PieceDef({height: 3, width: 1, cost: 10}),//
        new PieceDef({height: 4, width: 1, cost: 15}),//
        new PieceDef({height: 6, width: 1, cost: 20}),//
        new PieceDef({height: 8, width: 1, cost: 25}),//
        new PieceDef({height: 2, width: 2, cost: 15}),//
        new PieceDef({height: 3, width: 2, cost: 20}),//
        new PieceDef({height: 4, width: 2, cost: 20}),//
        new PieceDef({height: 6, width: 2, cost: 25}),//
        new PieceDef({height: 8, width: 2, cost: 35}),//
        new PieceDef({height: 6, width: 4, cost: 60})
      ],
      flat: [
        new PieceDef({width: 1, height: 1, cost: 10}),//
        new PieceDef({width: 2, height: 1, cost: 10}),//
        new PieceDef({width: 3, height: 1, cost: 20}),//
        new PieceDef({width: 4, height: 1, cost: 20}),//
        new PieceDef({width: 6, height: 1, cost: 20}),//
        new PieceDef({width: 8, height: 1, cost: 20}),//
        new PieceDef({width: 2, height: 2, cost: 10}),//
        new PieceDef({width: 4, height: 2, cost: 30}),//
        // rotated
        new PieceDef({height: 2, width: 1, cost: 10}),
        new PieceDef({height: 3, width: 1, cost: 20}),
        new PieceDef({height: 4, width: 1, cost: 20}),
        new PieceDef({height: 6, width: 1, cost: 20}),
        new PieceDef({height: 8, width: 1, cost: 20}),
        new PieceDef({height: 2, width: 2, cost: 10}),
        new PieceDef({height: 4, width: 2, cost: 30})
      ]
    }
  },
  Black: {
    id: 26,
    officialName: 'Black',
    commonName: 'Black',
    color: 'rgb(0, 0, 0)',
    availablePieces: {
      brick: [
        new PieceDef({width: 1, height: 1, cost: 10}),//
        new PieceDef({width: 2, height: 1, cost: 15}),//
        new PieceDef({width: 3, height: 1, cost: 20}),//
        new PieceDef({width: 4, height: 1, cost: 20}),//
        new PieceDef({width: 6, height: 1, cost: 35}),//
        new PieceDef({width: 8, height: 1, cost: 40}),//
        new PieceDef({width: 10, height: 1, cost: 45}),//
        new PieceDef({width: 12, height: 1, cost: 55}),//
        new PieceDef({width: 16, height: 1, cost: 70})//
      ],
      plate: [
        new PieceDef({width: 1, height: 1, cost: 10}),//
        new PieceDef({width: 2, height: 1, cost: 10}),//
        new PieceDef({width: 3, height: 1, cost: 10}),//
        new PieceDef({width: 4, height: 1, cost: 15}),//
        new PieceDef({width: 6, height: 1, cost: 20}),//
        new PieceDef({width: 8, height: 1, cost: 25}),//
        new PieceDef({width: 10, height: 1, cost: 25}),//
        new PieceDef({width: 2, height: 2, cost: 15}),//
        new PieceDef({width: 3, height: 2, cost: 20}),//
        new PieceDef({width: 4, height: 2, cost: 20}),//
        new PieceDef({width: 6, height: 2, cost: 25}),//
        new PieceDef({width: 8, height: 2, cost: 35}),//
        new PieceDef({width: 10, height: 2, cost: 35}),//
        new PieceDef({width: 12, height: 2, cost: 40}),//
        new PieceDef({width: 16, height: 2, cost: 70}),//
        new PieceDef({width: 4, height: 4, cost: 30}),//
        new PieceDef({width: 6, height: 4, cost: 60}),//
        new PieceDef({width: 8, height: 4, cost: 65}),//
        new PieceDef({width: 10, height: 4, cost: 75}),//
        new PieceDef({width: 12, height: 4, cost: 80}),//
        new PieceDef({width: 6, height: 6, cost: 70}),//
        new PieceDef({width: 8, height: 6, cost: 85}),//
        // rotated
        new PieceDef({height: 2, width: 1, cost: 10}),
        new PieceDef({height: 3, width: 1, cost: 10}),
        new PieceDef({height: 4, width: 1, cost: 15}),
        new PieceDef({height: 6, width: 1, cost: 20}),
        new PieceDef({height: 8, width: 1, cost: 25}),
        new PieceDef({height: 10, width: 1, cost: 25}),
        new PieceDef({height: 2, width: 2, cost: 15}),
        new PieceDef({height: 3, width: 2, cost: 20}),
        new PieceDef({height: 4, width: 2, cost: 20}),
        new PieceDef({height: 6, width: 2, cost: 25}),
        new PieceDef({height: 8, width: 2, cost: 35}),
        new PieceDef({height: 10, width: 2, cost: 35}),
        new PieceDef({height: 12, width: 2, cost: 40}),
        new PieceDef({height: 16, width: 2, cost: 70}),
        new PieceDef({height: 4, width: 4, cost: 30}),
        new PieceDef({height: 6, width: 4, cost: 60}),
        new PieceDef({height: 8, width: 4, cost: 65}),
        new PieceDef({height: 10, width: 4, cost: 75}),
        new PieceDef({height: 12, width: 4, cost: 80}),
        new PieceDef({height: 6, width: 6, cost: 70}),
        new PieceDef({height: 8, width: 6, cost: 85})
      ],
      flat: [
        new PieceDef({width: 1, height: 1, cost: 10}),//
        new PieceDef({width: 2, height: 1, cost: 10}),//
        new PieceDef({width: 3, height: 1, cost: 20}),//
        new PieceDef({width: 4, height: 1, cost: 20}),//
        new PieceDef({width: 6, height: 1, cost: 20}),//
        new PieceDef({width: 8, height: 1, cost: 20}),//
        new PieceDef({width: 2, height: 2, cost: 10}),//
        new PieceDef({width: 4, height: 2, cost: 30}),//
        // rotated
        new PieceDef({height: 2, width: 1, cost: 10}),
        new PieceDef({height: 3, width: 1, cost: 20}),
        new PieceDef({height: 4, width: 1, cost: 20}),
        new PieceDef({height: 6, width: 1, cost: 20}),
        new PieceDef({height: 8, width: 1, cost: 20}),
        new PieceDef({height: 2, width: 2, cost: 10}),
        new PieceDef({height: 4, width: 2, cost: 30})
      ]
    }
  },
  'Dark Green': {
    id: 28,
    officialName: 'Dark Green',
    commonName: 'Green',
    color: 'rgb(0, 123, 40)',
    availablePieces: {
      brick: [
        new PieceDef({width: 1, height: 1, cost: 10}),//
        new PieceDef({width: 2, height: 1, cost: 15}),//
        new PieceDef({width: 4, height: 1, cost: 20}),//
        new PieceDef({width: 6, height: 1, cost: 35})//

      ],
      plate: [
        new PieceDef({width: 1, height: 1, cost: 10}),//
        new PieceDef({width: 2, height: 1, cost: 10}),//
        new PieceDef({width: 3, height: 1, cost: 10}),//
        new PieceDef({width: 4, height: 1, cost: 15}),//
        new PieceDef({width: 6, height: 1, cost: 20}),//
        new PieceDef({width: 8, height: 1, cost: 25}),//
        new PieceDef({width: 2, height: 2, cost: 15}),//
        new PieceDef({width: 3, height: 2, cost: 20}),//
        new PieceDef({width: 4, height: 2, cost: 20}),//
        new PieceDef({width: 6, height: 2, cost: 25}),//
        new PieceDef({width: 8, height: 2, cost: 35}),//
        new PieceDef({width: 4, height: 4, cost: 30}),//
        new PieceDef({width: 6, height: 4, cost: 60}),//
        new PieceDef({width: 8, height: 4, cost: 65}),//
        new PieceDef({width: 8, height: 6, cost: 85}),//
        new PieceDef({width: 8, height: 8, cost: 110}),//
        // rotated
        new PieceDef({height: 2, width: 1, cost: 10}),//
        new PieceDef({height: 3, width: 1, cost: 10}),//
        new PieceDef({height: 4, width: 1, cost: 15}),//
        new PieceDef({height: 6, width: 1, cost: 20}),//
        new PieceDef({height: 8, width: 1, cost: 25}),//
        new PieceDef({height: 2, width: 2, cost: 15}),//
        new PieceDef({height: 3, width: 2, cost: 20}),//
        new PieceDef({height: 4, width: 2, cost: 20}),//
        new PieceDef({height: 6, width: 2, cost: 25}),//
        new PieceDef({height: 8, width: 2, cost: 35}),//
        new PieceDef({height: 6, width: 4, cost: 60}),//
        new PieceDef({height: 8, width: 4, cost: 65}),//
        new PieceDef({height: 8, width: 6, cost: 85})
      ],
      flat: [
        new PieceDef({width: 1, height: 1, cost: 10}),//
        new PieceDef({width: 2, height: 1, cost: 10}),//
        new PieceDef({width: 4, height: 1, cost: 20}),//
        new PieceDef({width: 2, height: 2, cost: 10}),//
        // rotated
        new PieceDef({height: 1, width: 1, cost: 10}),//
        new PieceDef({height: 2, width: 1, cost: 10}),//
        new PieceDef({height: 4, width: 1, cost: 20}),//
        new PieceDef({height: 2, width: 2, cost: 10})
      ]
    }
  },
  'Bright Green': {
    id: 37,
    officialName: 'Bright Green',
    commonName: 'Bright Green',
    color: 'rgb(0, 150, 36)',
    availablePieces: {
      brick: [
      ],
      plate: [
        new PieceDef({width: 16, height: 16, cost: 425}),
        new PieceDef({width: 12, height: 6, cost: 200}),
        new PieceDef({width: 16, height: 8, cost: 215}),
        // rotated
        new PieceDef({height: 16, width: 16, cost: 425}),
        new PieceDef({height: 12, width: 6, cost: 200}),
        new PieceDef({height: 16, width: 8, cost: 215})
      ],
      flat: [
      ]
    }
  },
  // 'Dark Orange': {
  //   id: 38,
  //   officialName: 'Dark Orange',
  //   commonName: 'Dark Orange',
  //   color: 'rgb(168, 61, 21)'
  // },
  'Medium Blue': {
    id: 102,
    officialName: 'Medium Blue',
    commonName: 'Medium Blue',
    color: 'rgb(71, 140, 198)',
    availablePieces: {
      brick: [
        new PieceDef({width: 1, height: 1, cost: 10}),//
        new PieceDef({width: 2, height: 1, cost: 15}),//
        new PieceDef({width: 4, height: 1, cost: 20})//
      ],
      plate: [
        new PieceDef({width: 2, height: 1, cost: 10}),//
        new PieceDef({width: 4, height: 1, cost: 15}),//
        new PieceDef({width: 6, height: 1, cost: 20}),//
        new PieceDef({width: 4, height: 2, cost: 20}),//
        // rotated
        new PieceDef({height: 2, width: 1, cost: 10}),//
        new PieceDef({height: 4, width: 1, cost: 15}),//
        new PieceDef({height: 6, width: 1, cost: 20}),//
        new PieceDef({height: 4, width: 2, cost: 20})//
      ],
      flat: [
        new PieceDef({width: 2, height: 1, cost: 10}),//
        new PieceDef({width: 2, height: 2, cost: 10}),//
        // rotated
        new PieceDef({height: 2, width: 1, cost: 10})//
      ]
    }
  },
  'Bright Orange': {
    id: 106,
    officialName: 'Bright Orange',
    commonName: 'Orange',
    color: 'rgb(231, 99, 24)',
    availablePieces: {
      brick: [
        new PieceDef({width: 1, height: 1, cost: 10}),//
        new PieceDef({width: 2, height: 1, cost: 15}),//
        new PieceDef({width: 3, height: 1, cost: 20}),//
        new PieceDef({width: 4, height: 1, cost: 20})//
      ],
      plate: [
        new PieceDef({width: 1, height: 1, cost: 10}),//
        new PieceDef({width: 2, height: 1, cost: 10}),//
        new PieceDef({width: 4, height: 1, cost: 15}),//
        new PieceDef({width: 6, height: 1, cost: 20}),//
        new PieceDef({width: 2, height: 2, cost: 15}),//
        new PieceDef({width: 3, height: 2, cost: 20}),//
        new PieceDef({width: 4, height: 2, cost: 20}),//
        new PieceDef({width: 6, height: 2, cost: 25}),//
        // rotated
        new PieceDef({height: 2, width: 1, cost: 10}),//
        new PieceDef({height: 4, width: 1, cost: 15}),//
        new PieceDef({height: 6, width: 1, cost: 20}),//
        new PieceDef({height: 3, width: 2, cost: 20}),//
        new PieceDef({height: 4, width: 2, cost: 20}),//
        new PieceDef({height: 6, width: 2, cost: 25})//
      ],
      flat: [
        new PieceDef({width: 2, height: 1, cost: 10}),//
        new PieceDef({width: 2, height: 2, cost: 10}),//
        // rotated
        new PieceDef({height: 2, width: 1, cost: 10})//
      ]
    }
  },
  'Bright Yellowish-Green': {
    id: 119,
    officialName: 'Bright Yellowish-Green',
    commonName: 'Lime',
    color: 'rgb(149, 185, 11)',
    availablePieces: {
      brick: [
        new PieceDef({width: 1, height: 1, cost: 10}),//
        new PieceDef({width: 2, height: 1, cost: 15}),//
        new PieceDef({width: 4, height: 1, cost: 20})//
      ],
      plate: [
        new PieceDef({width: 2, height: 1, cost: 10}),//
        new PieceDef({width: 4, height: 1, cost: 15}),//
        new PieceDef({width: 2, height: 2, cost: 15}),//
        new PieceDef({width: 4, height: 2, cost: 20}),//
        new PieceDef({width: 6, height: 2, cost: 25}),//
        new PieceDef({width: 6, height: 6, cost: 70}),//
        // rotated
        new PieceDef({height: 2, width: 1, cost: 10}),//
        new PieceDef({height: 4, width: 1, cost: 15}),//
        new PieceDef({height: 4, width: 2, cost: 20}),//
        new PieceDef({height: 6, width: 2, cost: 25})//
      ],
      flat: [
        new PieceDef({width: 1, height: 1, cost: 10}),//
        new PieceDef({width: 2, height: 1, cost: 10}),//
        new PieceDef({width: 4, height: 1, cost: 20}),//
        // rotated
        new PieceDef({height: 1, width: 1, cost: 10}),//
        new PieceDef({height: 2, width: 1, cost: 10}),//
        new PieceDef({height: 4, width: 1, cost: 20})//
      ]
    }
  },
  'Bright Reddish Violet': {
    id: 124,
    officialName: 'Bright Reddish Violet',
    commonName: 'Magenta',
    color: 'rgb(156, 0, 107)',
    availablePieces: {
      brick: [
        new PieceDef({width: 1, height: 1, cost: 10}),//
        new PieceDef({width: 2, height: 1, cost: 15}),//
        new PieceDef({width: 4, height: 1, cost: 20}),//
        new PieceDef({width: 6, height: 1, cost: 35})//
      ],
      plate: [
      ],
      flat: [
        new PieceDef({width: 2, height: 1, cost: 10}),//
        new PieceDef({height: 2, width: 1, cost: 10})//
      ]
    }
  },
  // 'Sand Blue': {
  //   id: 135,
  //   officialName: 'Sand Blue',
  //   commonName: 'Sand Blue',
  //   color: 'rgb(94, 116, 140)'
  // },
  'Sand Yellow': {
    id: 138,
    officialName: 'Sand Yellow',
    commonName: 'Dark Tan',
    color: 'rgb(141, 116, 82)',
    availablePieces: {
      brick: [
        new PieceDef({width: 2, height: 1, cost: 15}),//
        new PieceDef({width: 4, height: 1, cost: 20}),//
        new PieceDef({width: 6, height: 1, cost: 35})//
      ],
      plate: [
        new PieceDef({width: 2, height: 1, cost: 10}),//
        new PieceDef({width: 4, height: 1, cost: 15}),//
        new PieceDef({width: 4, height: 2, cost: 20}),//
        new PieceDef({width: 6, height: 2, cost: 25}),//
        // rotated
        new PieceDef({height: 2, width: 1, cost: 10}),//
        new PieceDef({height: 4, width: 1, cost: 15}),//
        new PieceDef({height: 4, width: 2, cost: 20}),//
        new PieceDef({height: 6, width: 2, cost: 25})//
      ],
      flat: [
        new PieceDef({width: 2, height: 2, cost: 10})//
      ]
    }
  },
  'Earth Blue': {
    id: 140,
    officialName: 'Earth Blue',
    commonName: 'Dark Blue',
    color: 'rgb(0, 37, 65)',
    availablePieces: {
      brick: [
        new PieceDef({width: 2, height: 1, cost: 15}),//
        new PieceDef({width: 4, height: 1, cost: 20})//
      ],
      plate: [
        new PieceDef({width: 1, height: 1, cost: 10}),//
        new PieceDef({width: 2, height: 1, cost: 10}),//
        new PieceDef({width: 4, height: 1, cost: 15}),//
        new PieceDef({width: 6, height: 1, cost: 20}),//
        new PieceDef({width: 4, height: 2, cost: 20}),//
        // rotated
        new PieceDef({height: 2, width: 1, cost: 10}),//
        new PieceDef({height: 4, width: 1, cost: 15}),//
        new PieceDef({height: 6, width: 1, cost: 20}),//
        new PieceDef({height: 4, width: 2, cost: 20})//
      ],
      flat: [
      ]
    }
  },
  'Earth Green': {
    id: 141,
    officialName: 'Earth Green',
    commonName: 'Dark Green',
    color: 'rgb(0, 52, 22)',
    availablePieces: {
      brick: [
        new PieceDef({width: 2, height: 1, cost: 15}),//
        new PieceDef({width: 4, height: 1, cost: 20})//
      ],
      plate: [
        new PieceDef({width: 4, height: 1, cost: 15}),//
        new PieceDef({width: 6, height: 1, cost: 20}),//
        new PieceDef({width: 3, height: 2, cost: 20}),//
        new PieceDef({width: 4, height: 2, cost: 20}),//
        // rotated
        new PieceDef({height: 4, width: 1, cost: 15}),//
        new PieceDef({height: 6, width: 1, cost: 20}),//
        new PieceDef({height: 3, width: 2, cost: 20}),//
        new PieceDef({height: 4, width: 2, cost: 20})//
      ],
      flat: [
      ]
    }
  },
  // 'Sand Green': {
  //   id: 151,
  //   officialName: 'Sand Green',
  //   commonName: 'Sand Green',
  //   color: 'rgb(95, 130, 101)'
  // },
  'New Dark Red': {
    id: 154,
    officialName: 'New Dark Red',
    commonName: 'Dark Red',
    color: 'rgb(128, 8, 27)',
    availablePieces: {
      brick: [
        new PieceDef({width: 2, height: 1, cost: 15}),//
        new PieceDef({width: 6, height: 1, cost: 35})//
      ],
      plate: [
        new PieceDef({width: 2, height: 1, cost: 10}),//
        new PieceDef({width: 4, height: 1, cost: 15}),//
        new PieceDef({width: 6, height: 1, cost: 20}),//
        new PieceDef({width: 4, height: 2, cost: 20}),//
        // rotated
        new PieceDef({height: 2, width: 1, cost: 10}),//
        new PieceDef({height: 4, width: 1, cost: 15}),//
        new PieceDef({height: 6, width: 1, cost: 20}),//
        new PieceDef({height: 4, width: 2, cost: 20})//
      ],
      flat: [
        new PieceDef({width: 2, height: 1, cost: 10}),//
        // rotated
        new PieceDef({height: 2, width: 1, cost: 10})//
      ]
    }
  },
  'Flame Yellowish Orange': {
    id: 191,
    officialName: 'Flame Yellowish Orange',
    commonName: 'Bright Light Orange',
    color: 'rgb(244, 155, 0)',
    availablePieces: {
      brick: [
        new PieceDef({width: 2, height: 1, cost: 15}),//
        new PieceDef({width: 4, height: 1, cost: 20})//
      ],
      plate: [
        new PieceDef({height: 2, width: 2, cost: 15})
      ],
      flat: [
      ]
    }
  },
  'Reddish Brown': {
    id: 192,
    officialName: 'Reddish Brown',
    commonName: 'Reddish Brown',
    color: 'rgb(91, 28, 12)',
    availablePieces: {
      brick: [
        new PieceDef({width: 1, height: 1, cost: 10}),//
        new PieceDef({width: 2, height: 1, cost: 15}),//
        new PieceDef({width: 3, height: 1, cost: 20}),//
        new PieceDef({width: 4, height: 1, cost: 20}),//
        new PieceDef({width: 6, height: 1, cost: 35}),//
        new PieceDef({width: 8, height: 1, cost: 40})//
      ],
      plate: [
        new PieceDef({width: 1, height: 1, cost: 10}),//
        new PieceDef({width: 2, height: 1, cost: 10}),//
        new PieceDef({width: 3, height: 1, cost: 10}),//
        new PieceDef({width: 4, height: 1, cost: 15}),//
        new PieceDef({width: 6, height: 1, cost: 20}),//
        new PieceDef({width: 8, height: 1, cost: 25}),//
        new PieceDef({width: 10, height: 1, cost: 25}),//
        new PieceDef({width: 2, height: 2, cost: 15}),//
        new PieceDef({width: 3, height: 2, cost: 20}),//
        new PieceDef({width: 4, height: 2, cost: 20}),//
        new PieceDef({width: 6, height: 2, cost: 25}),//
        new PieceDef({width: 8, height: 2, cost: 35}),//
        new PieceDef({width: 4, height: 4, cost: 30}),//
        new PieceDef({width: 6, height: 4, cost: 60}),//
        new PieceDef({width: 8, height: 4, cost: 65}),//
        new PieceDef({width: 6, height: 6, cost: 70}),//
        // rotated
        new PieceDef({height: 1, width: 1, cost: 10}),//
        new PieceDef({height: 2, width: 1, cost: 10}),//
        new PieceDef({height: 3, width: 1, cost: 10}),//
        new PieceDef({height: 4, width: 1, cost: 15}),//
        new PieceDef({height: 6, width: 1, cost: 20}),//
        new PieceDef({height: 8, width: 1, cost: 25}),//
        new PieceDef({height: 10, width: 1, cost: 25}),//
        new PieceDef({height: 2, width: 2, cost: 15}),//
        new PieceDef({height: 3, width: 2, cost: 20}),//
        new PieceDef({height: 4, width: 2, cost: 20}),//
        new PieceDef({height: 6, width: 2, cost: 25}),//
        new PieceDef({height: 8, width: 2, cost: 35}),//
        new PieceDef({height: 4, width: 4, cost: 30}),//
        new PieceDef({height: 6, width: 4, cost: 60}),//
        new PieceDef({height: 8, width: 4, cost: 65}),//
        new PieceDef({height: 6, width: 6, cost: 70})//
      ],
      flat: [
        new PieceDef({width: 1, height: 1, cost: 10}),//
        new PieceDef({width: 2, height: 1, cost: 10}),//
        new PieceDef({width: 4, height: 1, cost: 20}),//
        new PieceDef({width: 6, height: 1, cost: 20}),//
        new PieceDef({width: 2, height: 2, cost: 10}),//
        new PieceDef({width: 4, height: 2, cost: 30}),//
        // rotated
        new PieceDef({height: 1, width: 1, cost: 10}),//
        new PieceDef({height: 2, width: 1, cost: 10}),//
        new PieceDef({height: 4, width: 1, cost: 20}),//
        new PieceDef({height: 6, width: 1, cost: 20}),//
        new PieceDef({height: 2, width: 2, cost: 10}),//
        new PieceDef({height: 4, width: 2, cost: 30})//
      ]
    }
  },
  'Medium Stone Grey': {
    id: 194,
    officialName: 'Medium Stone Grey',
    commonName: 'Light Grey',
    color: 'rgb(156, 146, 145)',
    availablePieces: {
      brick: [
        new PieceDef({width: 1, height: 1, cost: 10}),//
        new PieceDef({width: 2, height: 1, cost: 15}),//
        new PieceDef({width: 3, height: 1, cost: 20}),//
        new PieceDef({width: 4, height: 1, cost: 20}),//
        new PieceDef({width: 6, height: 1, cost: 35}),//
        new PieceDef({width: 8, height: 1, cost: 40})//
      ],
      plate: [
        new PieceDef({width: 1, height: 1, cost: 10}),//
        new PieceDef({width: 2, height: 1, cost: 10}),//
        new PieceDef({width: 3, height: 1, cost: 10}),//
        new PieceDef({width: 4, height: 1, cost: 15}),//
        new PieceDef({width: 6, height: 1, cost: 20}),//
        new PieceDef({width: 8, height: 1, cost: 25}),//
        new PieceDef({width: 10, height: 1, cost: 25}),//
        new PieceDef({width: 2, height: 2, cost: 15}),//
        new PieceDef({width: 3, height: 2, cost: 20}),//
        new PieceDef({width: 4, height: 2, cost: 20}),//
        new PieceDef({width: 6, height: 2, cost: 25}),//
        new PieceDef({width: 8, height: 2, cost: 35}),//
        new PieceDef({width: 10, height: 2, cost: 35}),//
        new PieceDef({width: 12, height: 2, cost: 40}),//
        new PieceDef({width: 16, height: 2, cost: 70}),//
        new PieceDef({width: 4, height: 4, cost: 30}),//
        new PieceDef({width: 6, height: 4, cost: 60}),//
        new PieceDef({width: 8, height: 4, cost: 65}),//
        new PieceDef({width: 10, height: 4, cost: 75}),//
        new PieceDef({width: 12, height: 4, cost: 80}),//
        new PieceDef({width: 6, height: 6, cost: 70}),//
        new PieceDef({width: 8, height: 6, cost: 85}),//
        new PieceDef({width: 10, height: 6, cost: 120}),//
        new PieceDef({width: 12, height: 6, cost: 200}),//
        new PieceDef({width: 16, height: 6, cost: 210}),//
        new PieceDef({width: 8, height: 8, cost: 110}),//
        // rotated
        new PieceDef({height: 2, width: 1, cost: 10}),//
        new PieceDef({height: 3, width: 1, cost: 10}),//
        new PieceDef({height: 4, width: 1, cost: 15}),//
        new PieceDef({height: 6, width: 1, cost: 20}),//
        new PieceDef({height: 8, width: 1, cost: 25}),//
        new PieceDef({height: 10, width: 1, cost: 25}),//
        new PieceDef({height: 3, width: 2, cost: 20}),//
        new PieceDef({height: 4, width: 2, cost: 20}),//
        new PieceDef({height: 6, width: 2, cost: 25}),//
        new PieceDef({height: 8, width: 2, cost: 35}),//
        new PieceDef({height: 10, width: 2, cost: 35}),//
        new PieceDef({height: 12, width: 2, cost: 40}),//
        new PieceDef({height: 16, width: 2, cost: 70}),//
        new PieceDef({height: 6, width: 4, cost: 60}),//
        new PieceDef({height: 8, width: 4, cost: 65}),//
        new PieceDef({height: 10, width: 4, cost: 75}),//
        new PieceDef({height: 12, width: 4, cost: 80}),//
        new PieceDef({height: 8, width: 6, cost: 85}),//
        new PieceDef({height: 10, width: 6, cost: 120}),//
        new PieceDef({height: 12, width: 6, cost: 200}),//
        new PieceDef({height: 16, width: 6, cost: 210})//
      ],
      flat: [
        new PieceDef({width: 1, height: 1, cost: 10}),//
        new PieceDef({width: 2, height: 1, cost: 10}),//
        new PieceDef({width: 3, height: 1, cost: 20}),//
        new PieceDef({width: 4, height: 1, cost: 20}),//
        new PieceDef({width: 6, height: 1, cost: 20}),//
        new PieceDef({width: 8, height: 1, cost: 20}),//
        new PieceDef({width: 2, height: 2, cost: 10}),//
        // rotated
        new PieceDef({height: 2, width: 1, cost: 10}),//
        new PieceDef({height: 3, width: 1, cost: 20}),//
        new PieceDef({height: 4, width: 1, cost: 20}),//
        new PieceDef({height: 6, width: 1, cost: 20}),//
        new PieceDef({height: 8, width: 1, cost: 20})//
      ]
    }
  },
  'Dark Stone Grey': {
    id: 199,
    officialName: 'Dark Stone Grey',
    commonName: 'Dark Grey',
    color: 'rgb(76, 81, 86)',
    availablePieces: {
      brick: [
        new PieceDef({width: 1, height: 1, cost: 10}),//
        new PieceDef({width: 2, height: 1, cost: 15}),//
        new PieceDef({width: 3, height: 1, cost: 20}),//
        new PieceDef({width: 4, height: 1, cost: 20}),//
        new PieceDef({width: 6, height: 1, cost: 35}),//
        new PieceDef({width: 8, height: 1, cost: 40}),//
        new PieceDef({width: 10, height: 1, cost: 45}),//
        new PieceDef({width: 12, height: 1, cost: 55})//
      ],
      plate: [
        new PieceDef({width: 1, height: 1, cost: 10}),//
        new PieceDef({width: 2, height: 1, cost: 10}),//
        new PieceDef({width: 3, height: 1, cost: 10}),//
        new PieceDef({width: 4, height: 1, cost: 15}),//
        new PieceDef({width: 6, height: 1, cost: 20}),//
        new PieceDef({width: 8, height: 1, cost: 25}),//
        new PieceDef({width: 2, height: 2, cost: 15}),//
        new PieceDef({width: 3, height: 2, cost: 20}),//
        new PieceDef({width: 4, height: 2, cost: 20}),//
        new PieceDef({width: 6, height: 2, cost: 25}),//
        new PieceDef({width: 8, height: 2, cost: 35}),//
        new PieceDef({width: 12, height: 2, cost: 40}),//
        new PieceDef({width: 16, height: 2, cost: 70}),//
        new PieceDef({width: 4, height: 4, cost: 30}),//
        new PieceDef({width: 6, height: 4, cost: 60}),//
        new PieceDef({width: 8, height: 4, cost: 65}),//
        new PieceDef({width: 6, height: 6, cost: 70}),//
        new PieceDef({width: 8, height: 6, cost: 85}),//
        new PieceDef({width: 10, height: 6, cost: 120}),//
        new PieceDef({width: 12, height: 6, cost: 200}),//
        new PieceDef({width: 14, height: 6, cost: 240}),//
        new PieceDef({width: 16, height: 6, cost: 210}),//
        new PieceDef({width: 8, height: 8, cost: 110}),//
        new PieceDef({height: 16, width: 16, cost: 425}),//
        // rotated
        new PieceDef({height: 2, width: 1, cost: 10}),//
        new PieceDef({height: 3, width: 1, cost: 10}),//
        new PieceDef({height: 4, width: 1, cost: 15}),//
        new PieceDef({height: 6, width: 1, cost: 20}),//
        new PieceDef({height: 8, width: 1, cost: 25}),//
        new PieceDef({height: 3, width: 2, cost: 20}),//
        new PieceDef({height: 4, width: 2, cost: 20}),//
        new PieceDef({height: 6, width: 2, cost: 25}),//
        new PieceDef({height: 8, width: 2, cost: 35}),//
        new PieceDef({height: 12, width: 2, cost: 40}),//
        new PieceDef({height: 16, width: 2, cost: 70}),//
        new PieceDef({height: 6, width: 4, cost: 60}),//
        new PieceDef({height: 8, width: 4, cost: 65}),//
        new PieceDef({height: 8, width: 6, cost: 85}),//
        new PieceDef({height: 10, width: 6, cost: 120}),//
        new PieceDef({height: 12, width: 6, cost: 200}),//
        new PieceDef({height: 14, width: 6, cost: 240}),//
        new PieceDef({height: 16, width: 6, cost: 210})//
      ],
      flat: [
        new PieceDef({width: 1, height: 1, cost: 10}),//
        new PieceDef({width: 2, height: 1, cost: 10}),//
        new PieceDef({width: 3, height: 1, cost: 20}),//
        new PieceDef({width: 4, height: 1, cost: 20}),//
        new PieceDef({width: 6, height: 1, cost: 20}),//
        new PieceDef({width: 8, height: 1, cost: 20}),//
        new PieceDef({width: 2, height: 2, cost: 10}),//
        // rotated
        new PieceDef({height: 1, width: 1, cost: 10}),//
        new PieceDef({height: 2, width: 1, cost: 10}),//
        new PieceDef({height: 3, width: 1, cost: 20}),//
        new PieceDef({height: 4, width: 1, cost: 20}),//
        new PieceDef({height: 6, width: 1, cost: 20}),//
        new PieceDef({height: 8, width: 1, cost: 20}),//
        new PieceDef({height: 2, width: 2, cost: 10})//
      ]
    }
  },
  // 'Very Light Grey': {
  //   id: 208,
  //   officialName: 'Light Stone Grey',
  //   commonName: 'Very Light Grey',
  //   color: 'rgb(228, 228, 218)'
  // },
  // 'Light Blue': {
  //   id: 212,
  //   officialName: 'Light Royal Blue',
  //   commonName: 'Light Blue',
  //   color: 'rgb(135, 192, 234)'
  // },
  'Bright Purple': {
    id: 221,
    officialName: 'Bright Purple',
    commonName: 'Bright Pink',
    color: 'rgb(222, 55, 139)',
    availablePieces: {
      brick: [
        new PieceDef({width: 2, height: 1, cost: 15}),//
        new PieceDef({width: 4, height: 1, cost: 20})//
      ],
      plate: [
        new PieceDef({width: 2, height: 1, cost: 10}),
        // rotated
        new PieceDef({width: 1, height: 2, cost: 10})
      ],
      flat: [
      ]
    }
  },
  'Light Purple': {
    id: 222,
    officialName: 'Light Purple',
    commonName: 'Light Pink',
    color: 'rgb(238, 157, 195)',
    availablePieces: {
      brick: [
        new PieceDef({width: 1, height: 1, cost: 10}),//
        new PieceDef({width: 2, height: 1, cost: 15}),//
        new PieceDef({width: 4, height: 1, cost: 20})//
      ],
      plate: [
        new PieceDef({width: 1, height: 1, cost: 10}),//
        new PieceDef({width: 2, height: 1, cost: 10}),//
        new PieceDef({width: 4, height: 1, cost: 15}),//
        new PieceDef({width: 6, height: 2, cost: 25}),//
        // rotated
        new PieceDef({height: 1, width: 1, cost: 10}),//
        new PieceDef({height: 2, width: 1, cost: 10}),//
        new PieceDef({height: 4, width: 1, cost: 15}),//
        new PieceDef({height: 6, width: 2, cost: 25})//
      ],
      flat: [
        new PieceDef({width: 2, height: 1, cost: 10}),//
        new PieceDef({width: 4, height: 1, cost: 20}),//
        new PieceDef({width: 2, height: 2, cost: 10}),//
        // rotated
        new PieceDef({height: 2, width: 1, cost: 10}),//
        new PieceDef({height: 4, width: 1, cost: 20}),//
        new PieceDef({height: 2, width: 2, cost: 10})//
      ]
    }
  },
  'Cool Yellow': {
    id: 226,
    officialName: 'Cool Yellow',
    commonName: 'Blonde',
    color: 'rgb(255, 255, 153)',
    availablePieces: {
      brick: [
        new PieceDef({width: 2, height: 1, cost: 15}),//
        new PieceDef({width: 4, height: 1, cost: 20})//
      ],
      plate: [],
      flat: []
    }
  },
  'Medium Lilac': {
    id: 268,
    officialName: 'Medium Lilac',
    commonName: 'Dark Purple',
    color: 'rgb(44, 21, 119)',
    availablePieces: {
      brick: [
        new PieceDef({width: 2, height: 1, cost: 15})//
      ],
      plate: [
        new PieceDef({width: 3, height: 2, cost: 20}),//
        // rotated
        new PieceDef({height: 3, width: 2, cost: 20})//
      ],
      flat: [
        new PieceDef({width: 2, height: 1, cost: 10}),//
        // rotated
        new PieceDef({height: 2, width: 1, cost: 10})//
      ]
    }
  },
  // 'Light Nougat': {
  //   id: 283,
  //   officialName: 'Light Nougat',
  //   commonName: 'Light Flesh',
  //   color: 'rgb(245, 193, 137)'
  // },
  'Dark Brown': {
    id: 308,
    officialName: 'Dark Brown',
    commonName: 'Dark Brown',
    color: 'rgb(48, 15, 6)',
    availablePieces: {
      brick: [
      ],
      plate: [
        new PieceDef({width: 8, height: 1, cost: 25}),//
        new PieceDef({width: 6, height: 2, cost: 25}),//
        // rotated
        new PieceDef({height: 8, width: 1, cost: 25}),//
        new PieceDef({height: 6, width: 2, cost: 25})//
      ],
      flat: [
        new PieceDef({width: 2, height: 1, cost: 10}),//
        new PieceDef({width: 4, height: 1, cost: 20}),//
        // rotated
        new PieceDef({height: 2, width: 1, cost: 10}),//
        new PieceDef({height: 4, width: 1, cost: 20})//
      ]
    }
  },
  // 'Medium Nougat': {
  //   id: 312,
  //   officialName: 'Medium Nougat',
  //   commonName: 'Medium Dark Flesh',
  //   color: 'rgb(170, 125, 85)'
  // },
  'Dark Azur': {
    id: 321,
    officialName: 'Dark Azur',
    commonName: 'Dark Azur',
    color: 'rgb(70, 155, 195)',
    availablePieces: {
      brick: [
        new PieceDef({width: 2, height: 1, cost: 15})//
      ],
      plate: [
        new PieceDef({width: 2, height: 1, cost: 10}),//
        // rotated
        new PieceDef({height: 2, width: 1, cost: 10})//
      ],
      flat: [
      ]
    }
  },
  'Medium Azur': {
    id: 322,
    officialName: 'Medium Azur',
    commonName: 'Azure',
    color: 'rgb(104, 195, 226)',
    availablePieces: {
      brick: [
        new PieceDef({width: 1, height: 1, cost: 10}),//
        new PieceDef({width: 2, height: 1, cost: 15}),//
        new PieceDef({width: 4, height: 1, cost: 20}),//
        new PieceDef({width: 6, height: 1, cost: 35})//
      ],
      plate: [
        new PieceDef({width: 4, height: 2, cost: 20}),//
        new PieceDef({width: 6, height: 4, cost: 60}),//
        // rotated
        new PieceDef({height: 4, width: 2, cost: 20}),//
        new PieceDef({height: 6, width: 4, cost: 60})//
      ],
      flat: [
        new PieceDef({width: 2, height: 1, cost: 10}),//
        new PieceDef({width: 4, height: 1, cost: 20}),//
        // rotated
        new PieceDef({height: 2, width: 1, cost: 10}),//
        new PieceDef({height: 4, width: 1, cost: 20})//
      ]
    }
  },
  // 'Unikitty Blue': {
  //   id: 323,
  //   officialName: 'Aqua',
  //   commonName: 'Unikitty Blue',
  //   color: 'rgb(211, 242, 234)'
  // },
  'Medium Lavender': {
    id: 324,
    officialName: 'Medium Lavender',
    commonName: 'Medium Lavender',
    color: 'rgb(160, 110, 185)',
    availablePieces: {
      brick: [
        new PieceDef({width: 1, height: 1, cost: 10}),//
        new PieceDef({width: 2, height: 1, cost: 15})//
      ],
      plate: [
        new PieceDef({width: 1, height: 1, cost: 10}),//
        new PieceDef({width: 2, height: 1, cost: 10}),//
        new PieceDef({width: 4, height: 1, cost: 15}),//
        new PieceDef({width: 4, height: 2, cost: 20}),//
        // rotated
        new PieceDef({height: 1, width: 1, cost: 10}),//
        new PieceDef({height: 2, width: 1, cost: 10}),//
        new PieceDef({height: 4, width: 1, cost: 15}),//
        new PieceDef({height: 4, width: 2, cost: 20})//
      ],
      flat: [
      ]
    }
  },
  // Lavender: {
  //   id: 325,
  //   officialName: 'Lavender',
  //   commonName: 'Lavender',
  //   color: 'rgb(205, 164, 222)'
  // },
  // 'White Glow': {
  //   id: 329,
  //   officialName: 'White Glow',
  //   commonName: 'Glow-in-the-dark',
  //   color: 'rgb(245, 243, 215)'
  // },
  // 'Bright Yellowish Green': {
  //   id: 326,
  //   officialName: 'Bright Yellowish Green',
  //   commonName: 'Unikitty Green',
  //   color: 'rgb(226, 249, 154)'
  // },
  'Olive Green': {
    id: 330,
    officialName: 'Olive Green',
    commonName: 'Olive Green',
    color: 'rgb(119, 119, 78)',
    availablePieces: {
      brick: [],
      plate: [
        new PieceDef({width: 2, height: 1, cost: 10}),//
        // rotated
        new PieceDef({height: 2, width: 1, cost: 10})//
      ],
      flat: []
    }
  }
  // 'Medium-Yellowish Green': {
  //   id: 331,
  //   officialName: 'Medium-Yellowish Green',
  //   commonName: 'Dark Lime; Medium Lime',
  //   color: 'rgb(150, 185, 59)'
  // }
  // 'Silver': {
  //   id: 131,
  //   officialName: 'Silver',
  //   commonName: 'Pearl Light Grey',
  //   color: 'rgb(141, 148, 150)'
  // },
  // 'Metallic Dark Grey': {
  //   id: 148,
  //   officialName: 'Metallic Dark Grey',
  //   commonName: 'Pearl Dark Grey',
  //   color: 'rgb(73, 63, 59)'
  // },
  // 'Phosphorescent Green': {
  //   id: 294,
  //   officialName: 'Phosphorescent Green',
  //   commonName: 'Glow In Dark Trans Green',
  //   color: 'rgb(254, 252, 213)'
  // },
  // 'Warm Gold': {
  //   id: 297,
  //   officialName: 'Warm Gold',
  //   commonName: 'Pearl Gold',
  //   color: 'rgb(170, 127, 46)'
  // }
  // 'Metalized Silver': {
  //   id: 309,
  //   officialName: 'Metalized Silver',
  //   commonName: 'Metalized Silver',
  //   color: 'rgb(206, 206, 206)'
  // },
  // 'Metalized Gold': {
  //   id: 310,
  //   officialName: 'Metalized Gold',
  //   commonName: 'Metalized Gold',
  //   color: 'rgb(223, 193, 118)'
  // },
  // 'Silver Metallic': {
  //   id: 315,
  //   officialName: 'Silver Metallic',
  //   commonName: 'Silver Metallic',
  //   color: 'rgb(140, 140, 140)'
  // },
  // 'Titanium Metallic': {
  //   id: 316,
  //   officialName: 'Titanium Metallic',
  //   commonName: 'Titanium Metallic',
  //   color: 'rgb(62, 60, 57)'
  // }
};
