import { atom } from 'recoil';

export const totalAmountState = atom({
  key: 'totalAmountState',
  default: 0,
  
});

console.log(totalAmountState);

