
// import { IAPISheet } from '_core/utils/api';

const sheet = {
  path: '/node/nodeType',
  method: 'get',
  mockup: {
    result: '200',
    items: [
      {
        id: 1,
        text: "hello1",
      },
      {
        id: 2,
        text: "hello2",
      },
      {
        id: 3,
        text: "hello3",
      }
    ]
  }
};


export default sheet;
