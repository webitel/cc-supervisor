// @ts-expect-error він там є!
import { fillIconsRepository } from '@webitel/ui-sdk';

import svEar from './sv-ear.svg?raw';
import ratedCalls from './rated-calls.svg?raw';
import totalScore from './total-score.svg?raw';
import deskTrack from './desk-track.svg?raw';

const icons = {
    'sv-ear': svEar,
    'rated-calls': ratedCalls,
    'total-score': totalScore,
    'desk-track': deskTrack,
};

fillIconsRepository({ icons: Object.entries(icons).map(([iconName, svg]) => ({ iconName, svg })) });

export default icons;
