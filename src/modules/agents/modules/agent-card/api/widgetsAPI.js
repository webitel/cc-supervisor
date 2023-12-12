import { UserHelperServiceApiFactory } from 'webitel-sdk';
import { SdkGetterApiConsumer } from 'webitel-sdk/esm2015/api-consumers';
import applyTransform, { snakeToCamel } from '@webitel/ui-sdk/src/api/transformers';
import instance from '../../../../../app/api/instance';
import configuration from '../../../../../app/api/utils/openAPIConfig';

const userHelperService = new UserHelperServiceApiFactory(configuration, '', instance);

const itemResponseHandler = (stats) => ({
  ...stats,
  scoreRequiredAvg: `${stats.scoreRequiredAvg.toFixed(2)}`,
});

const defaultSingleObject = {
  scoreCount: 0,
  scoreRequiredAvg: 0,
};

const getter = new SdkGetterApiConsumer(userHelperService.activityWorkspaceWidget, {
  defaultSingleObject,
  itemResponseHandler,
});

const getWidgets = async () => {
  const response = await getter.getItem({});
  return applyTransform(response.data, [
    snakeToCamel(),
  ]);
};

const widgetsAPI = {
  getWidgets,
};

export default widgetsAPI;
