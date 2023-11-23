import {
  getDefaultGetParams,
} from '@webitel/ui-sdk/src/api/defaults';
import applyTransform, {
  merge, mergeEach, notify, snakeToCamel,
  starToSearch, log,
} from '@webitel/ui-sdk/src/api/transformers';
import convertDuration from '@webitel/ui-sdk/src/scripts/convertDuration';
import { AgentServiceApiFactory } from 'webitel-sdk';
// import { SdkGetterApiConsumer } from 'webitel-sdk/esm2015/api-consumers';
import instance from '../../../../../app/api/instance';
import configuration from '../../../../../app/api/utils/openAPIConfig';

const agentService = new AgentServiceApiFactory(configuration, '', instance);

// const defaultSingleObject = {
//   statusDuration: 0,
//   online: 0,
//   offline: 0,
//   pause: 0,
// };

// const itemResponseHandler = (item) => ({
//   ...item,
//   statusDuration: convertDuration(item.statusDuration),
//   online: convertDuration(item.online),
//   offline: convertDuration(item.offline),
//   pause: convertDuration(item.pause),
// });

// const _getAgent = (get) => function ({
//                                        itemId,
//                                        from = new Date().setHours(0, 0, 0, 0),
//                                        to = new Date().setHours(23, 59, 59, 999),
//                                      }) {
//   const params = [itemId, from, to];
//   return get(params);
// };

// const sdkGetterApiConsumer = new SdkGetterApiConsumer(agentService.searchAgentStatusStatisticItem, {
//   defaultSingleObject,
//   itemResponseHandler,
// }).setGetMethod(_getAgent);

const getAgent = async (params) => {
  const defaultObject = {
    from: new Date().setHours(0, 0, 0, 0),
    to: new Date().setHours(23, 59, 59, 999),
    statusDuration: 0,
    online: 0,
    offline: 0,
    pause: 0,
  };

  const itemHandler = (item) => ({
    ...defaultObject,
    ...item,
    statusDuration: convertDuration(item.statusDuration),
    online: convertDuration(item.online),
    offline: convertDuration(item.offline),
    pause: convertDuration(item.pause),
  });

  const {
    itemId,
    from,
    to,
  } = applyTransform(params, [
    merge(getDefaultGetParams()),
    starToSearch('search'),
  ]);

  try {
    const response = await agentService.searchAgentStatusStatisticItem(itemId, from, to);
    return applyTransform(response.data, [
      snakeToCamel(),
      itemHandler,
    ]);
  } catch (err) {
    throw applyTransform(err, [
      notify,
    ]);
  }
};

export default {
  get: getAgent,
};
