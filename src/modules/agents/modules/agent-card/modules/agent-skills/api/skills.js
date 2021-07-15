import { SkillServiceApiFactory } from 'webitel-sdk';
import { SdkListGetterApiConsumer } from 'webitel-sdk/esm2015/api-consumers';
import instance from '../../../../../../../app/api/instance';
import configuration from '../../../../../../../app/api/utils/openAPIConfig';

const skillService = new SkillServiceApiFactory(configuration, '', instance);

const listGetter = new SdkListGetterApiConsumer(skillService.searchSkill);

export const getSkillsList = (params) => listGetter.getList(params);

export default {
  getList: getSkillsList,
};
