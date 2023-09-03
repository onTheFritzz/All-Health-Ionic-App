import PillCounter from './PillCounter';
import FunMoney from './FunMoney';
import FastingCalculator from './FastingCalculator'
import BloodPressure from './BloodPressure';

export function getUtilities(category='') {
    const financial = [{
            id: 'func',
            title: 'Fun Money Calculator',
            description: 'Calculate how much fun money will be on a paycheck before getting paid.',
            routePath: <FunMoney />,
            url: '/fun-money'
        }]
        
    const health = [{
            id: 'pill',
            title: 'Pill Counter',
            description: 'Display how many days/pills left before requiring a refill',
            routePath: <PillCounter />,
            url: '/pill-counter'
        },{
            id: 'fast',
            title: 'Fasting Calculator',
            description: 'Use meal end time to determine when a fast ends',
            routePath: <FastingCalculator />,
            url: '/fasting-calculator'
        },{
            id: 'blud',
            title: 'Blood Pressure Logger',
            description: 'A blood pressure logger',
            routePath: <BloodPressure />,
            url: '/blood-pressure'
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