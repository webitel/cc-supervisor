import convertDuration from '@webitel/ui-sdk/src/scripts/convertDuration';
import { CallServiceApiFactory } from 'webitel-sdk';
import { SdkListGetterApiConsumer } from 'webitel-sdk/esm2015/api-consumers';
import instance from '../../../app/api/instance';
import configuration from '../../../app/api/utils/openAPIConfig';

const callService = new CallServiceApiFactory(configuration, '', instance);

const listResponseHandler = (response) => {
  const items = response.items.map((item) => ({
    ...item,
    duration: convertDuration(item.duration),
    createdAt: new Date(+item.createdAt).toLocaleTimeString(),
  }));
  return {
    ...response,
    items,
  };
};

const defaultListObject = {
  duration: 0,
};

const _getActiveCallsList = (getList) => function ({
                                                     page = 1,
                                                     size = 10,
                                                     search = '',
                                                     fields,
                                                     queue,
                                                     team,
                                                     agent,
                                                     supervisor,
                                                     sort,
                                                     direction,
                                                     user,
                                                     gateway,
                                                   }) {
  const params = [page, size, search, sort, fields, undefined, undefined, user, agent, queue, team,
    undefined, gateway, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, direction, undefined, undefined, undefined, undefined, undefined,
    supervisor];
  return getList(params);
};

const listGetter = new SdkListGetterApiConsumer(callService.searchActiveCall,
  {
    listResponseHandler,
    defaultListObject,
  })
.setGetListMethod(_getActiveCallsList);

export const getActiveCallList = (params) => listGetter.getList(params);

export default {
  getList: getActiveCallList,
};
