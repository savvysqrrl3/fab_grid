const mockData = {
  products: {
    '13243': {
      id: '13243',
      name: 'Rooster Pitcher',
      price: '$49.95',
      url:
        'https://www.surlatable.com/product/PRO-4049219/Nova+Deruta+Rooster+Pitcher',
      img: 'src/Container/images/rooster_pitcher.jpg'
    },
    '53465': {
      id: '53465',
      name: 'Product 2',
      price: '$$',
      url: 'www.nowhere.com',
      img: 'null'
    },
    '85685': {
      id: '85685',
      name: 'Product 3',
      price: '$$',
      url: 'www.nowhere.com',
      img: 'null'
    },
    '53432': {
      id: '53432',
      name: 'Product 4',
      price: '$$',
      url: 'www.nowhere.com',
      img: 'null'
    },
    '31271': {
      id: '31271',
      name: 'Nova Deruta Dinnerware Set',
      price: '$195.96',
      url:
        'https://www.surlatable.com/product/PRO-4049342/Nova+Deruta+16+Piece+Dinnerware+Set',
      img: 'src/Container/images/nvderuta_dinnerware.jpg'
    },
    '13531': {
      id: '13531',
      name: 'Product 6',
      price: '$$',
      url: 'www.nowhere.com',
      img: 'null'
    },
    '14641': {
      id: '14641',
      name: 'Product 7',
      price: '$$',
      url: 'www.nowhere.com',
      img: 'null'
    },
    '87531': {
      id: '87531',
      name: 'Product 8',
      price: '$$',
      url: 'www.nowhere.com',
      img: 'null'
    },
    '53132': {
      id: '53132',
      name: 'Olive-wood Salt Keeper',
      price: '$30.00',
      url:
        'https://www.surlatable.com/product/PRO-2293421/Olivewood+Salt+Keeper',
      img: 'src/Container/images/olvwd_salt.jpg'
    },
    '31245': {
      id: '31245',
      name: 'Product 10',
      price: '$$',
      url: 'www.nowhere.com',
      img: 'null'
    },
    '17123': {
      id: '17123',
      name: 'Product 11',
      price: '$$',
      url: 'www.nowhere.com',
      img: 'null'
    },
    '32345': {
      id: '32345',
      name: 'Product 12',
      price: '$$',
      url: 'www.nowhere.com',
      img: 'null'
    },
    '85654': {
      id: '85654',
      name: 'AeroGarden Bounty Elite',
      price: '$159.96',
      url:
        'https://www.surlatable.com/product/PRO-3773132/AeroGarden+Bounty+Elite+with+Gourmet+Herbs+Seed+Pod+Kit',
      img: 'src/Container/images/aerogarden_elite.jpg'
    },
    '35678': {
      id: '35678',
      name: 'Product 14',
      price: '$$',
      url: 'www.nowhere.com',
      img: 'null'
    },
    '87645': {
      id: '87645',
      name: 'Product 15',
      price: '$$',
      url: 'www.nowhere.com',
      img: 'null'
    },
    '42312': {
      id: '42312',
      name: 'Product 16',
      price: '$$',
      url: 'www.nowhere.com',
      img: 'null'
    },
    '15781': {
      id: '15781',
      name: 'Product 17',
      price: '$$',
      url: 'www.nowhere.com',
      img: 'null'
    }
  },

  // items within columns will be displayed vertically, so additional items
  // can be added to the end of any array depending upon the desired layout.
  // The number of items in an array will grow and shrink as items are moved around.
  columns: {
    column1: {
      id: 'column1',
      productIds: ['13243', '53465', '85685', '53432']
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
      productIds: ['85654', '35678', '87645', '42312', '15781']
    }
  },
  columnOrder: ['column1', 'column2', 'column3', 'column4']
};

export default mockData;
