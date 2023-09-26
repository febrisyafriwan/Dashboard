import { faker } from '@faker-js/faker';
import {fTime} from '../../utils/formatTime'

const TOTAL_CASE = 'TOTAL_CASE';

const trafficSchema =
{
    totalCase: {
        name: 'Total Case',
        type: TOTAL_CASE,
        updatedAt: faker.date.past(),
        data: {
            timewindow: [...Array(30)].map(() => (fTime(faker.date.past()))),
            count: [...Array(30)].map(() => (faker.datatype.number())),
        },
        loading: false,
        isError: false,
        action: null
    }
}


export default trafficSchema;