import { useStore } from '@nanostores/solid';
import { counter, increment, decrement} from '../stores/counter';
import { gp} from '../stores/destinyPlayerData'

export default function() {

    const $number = useStore(counter);

    return (<>
        <h2>Solid Counter</h2>
        <button onClick={decrement}>-</button>
        <span>{$number()}</span>
        <button onClick={increment}>+</button>
        <button onClick={gp}>tt</button>
    </>);
}