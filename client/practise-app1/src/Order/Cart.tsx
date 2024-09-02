import { useRecoilValue } from 'recoil';
import { totalAmountState } from '../Store/totalState';
import { Payment } from './Payment';
import { toatalDisplayState } from '../Store/totalDisplayState';
import './Cart.css';

export const Cart = () => {
  const totalAmount = useRecoilValue(totalAmountState);
  const totalDisplayAmount = useRecoilValue(toatalDisplayState);

  const grandTotal = totalAmount + totalDisplayAmount

  return (
    <div>
      <br />
      <Payment/>
      <h3 className='total-bill'>Subtotal ₹{grandTotal}</h3>
    </div>
  );
};

export default Cart;

