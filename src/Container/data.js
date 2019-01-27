const mockData = {
  products: {
    '13243': { id: '13243', name: 'Rabbit 1' },
    '53465': { id: '53465', name: 'Product 2' },
    '85685': { id: '85685', name: 'Seal 3' },
    '53432': { id: '53432', name: 'Product 4' },
    '31271': { id: '31271', name: 'Penguin 5' },
    '13531': { id: '13531', name: 'Product 6' },
    '14641': { id: '14641', name: 'Bear 7' },
    '87531': { id: '87531', name: 'Product 8' }
  },

  columns: {
    column1: {
      id: 'column1',
      productIds: [
        '13243',
        '53465',
        '85685',
        '53432',
        '31271',
        '13531',
        '14641',
        '87531'
      ]
    }
  },
  columnOrder: ['column1']
};

export default mockData;
