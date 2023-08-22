import PillCounter from './PillCounter';
import FunMoney from './FunMoney';

export function getUtilities(category='') {
    const financial = [{
            id: '1',
            title: 'Fun Money Calculator',
            description: 'Calculate how much fun money will be on a paycheck before getting paid.',
            routePath: <FunMoney />,
            url: '/fun-money'
        }]
        
    const health = [{
            id: '2',
            title: 'Pill Counter',
            description: 'Display how many days/pills left before requiring a refill',
            routePath: <PillCounter />,
            url: '/pill-counter'
        }]

    if (category == 'health') {
        return health
    } else if (category == 'financial') {
        return financial
    } else {
        return [...financial, ...health]
    }
};

export default getUtilities