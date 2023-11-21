import { QueueServiceApiFactory } from 'webitel-sdk';
import {
  getDefaultGetListResponse,
  getDefaultGetParams,
} from '@webitel/ui-sdk/src/api/defaults';
import applyTransform, {
  camelToSnake,
  merge,
  mergeEach,
  notify,
  sanitize,
  snakeToCamel,
  starToSearch,
} from '@webitel/ui-sdk/src/api/transformers';
import instance from '../../../../app/api/instance';
import configuration from '../../../../app/api/utils/openAPIConfig';

const queueService = new QueueServiceApiFactory(configuration, '', instance);

// const listGetter = new SdkListGetterApiConsumer(queueService.searchQueue);

const getList = (params) => listGetter.getLookup(params);

export default getList;
