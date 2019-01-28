const mockData = {
  products: {
    '13243': { id: '13243', name: 'Rabbit 1' },
    '53465': { id: '53465', name: 'Product 2' },
    '85685': { id: '85685', name: 'Seal 3' },
    '53432': { id: '53432', name: 'Product 4' },
    '31271': { id: '31271', name: 'Penguin 5' },
    '13531': { id: '13531', name: 'Product 6' },
    '14641': { id: '14641', name: 'Bear 7' },
    '87531': { id: '87531', name: 'Product 8' },
    '53132': { id: '53132', name: 'Product 9' },
    '31245': { id: '31245', name: 'Product 10' },
    '17123': { id: '17123', name: 'Product 11' },
    '32345': { id: '32345', name: 'Product 12' },
    '85654': { id: '85654', name: 'Product 13' },
    '35678': { id: '35678', name: 'Product 14' },
    '87645': { id: '87645', name: 'Product 15' },
    '42312': { id: '42312', name: 'Product 16' },
    '15781': { id: '15781', name: 'Product 17' }
  },

  columns: {
    column1: {
      id: 'column1',
      productIds: ['13243', '53465', '85685', '53432', '15781']
    },
    column2: {
      id: 'column2',
      productIds: ['31271', '13531', '14641', '87531']
    },
    column3: {
      id: 'column3',
      productIds: ['53132', '31245', '17123', '32345']
    },
    column4: {
      id: 'column4',
      productIds: ['85654', '35678', '87645', '42312']
    }
  },
  columnOrder: ['column1', 'column2', 'column3', 'column4']
};

export default mockData;
