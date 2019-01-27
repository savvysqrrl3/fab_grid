const mockData = {
  products: {
    '13243': { id: '13243', name: 'Product 1' },
    '53465': { id: '53465', name: 'Product 2' },
    '85685': { id: '85685', name: 'Product 3' },
    '53432': { id: '53432', name: 'Product 4' },
    '31271': { id: '31271', name: 'Product 5' }
  },

  columns: {
    column1: {
      id: 'column1',
      productIds: ['13243', '53465', '85685', '53432', '31271']
    }
  },
  columnOrder: ['column1']
};

export default mockData;
