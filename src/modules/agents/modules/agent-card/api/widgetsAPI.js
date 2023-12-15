import { UserHelperServiceApiFactory } from 'webitel-sdk';
import applyTransform, { snakeToCamel, notify } from '@webitel/ui-sdk/src/api/transformers';
import instance from '../../../../../app/api/instance';
import configuration from '../../../../../app/api/utils/openAPIConfig';

const userHelperService = new UserHelperServiceApiFactory(configuration, '', instance);

const getWidgets = async () => {
  try {
    const response = await userHelperService.activityWorkspaceWidget();
    return applyTransform(response.data, [
      snakeToCamel(),
    ]);
  } catch (err) {
    throw applyTransform(err, [
      notify,
    ]);
  }
};

const widgetsAPI = {
  getWidgets,
};

export default widgetsAPI;
