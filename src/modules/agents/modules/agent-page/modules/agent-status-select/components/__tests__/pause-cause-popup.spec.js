import { shallowMount } from '@vue/test-utils';
import PauseCausePopup from '../_internals/pause-cause-popup.vue';
import PauseCauseAPI from '../../api/pause-cause';

const pauseCauses = [{ name: 'jest1' }, { name: 'jest2' }];
const getListMock = jest.fn(() => ({ items: pauseCauses }));
jest.spyOn(PauseCauseAPI, 'getList').mockImplementation(getListMock);

describe('Pause cause popup', () => {
  beforeEach(() => {
    getListMock.mockClear();
  });
  it('renders a component', () => {
    const wrapper = shallowMount(PauseCausePopup);
    expect(wrapper.exists())
      .toBe(true);
  });
  it('pause cause popup initially loads pause causes', async () => {
    const pauseCauses = ['jest1', 'jest2'];
    const wrapper = shallowMount(PauseCausePopup);
    await wrapper.vm.$nextTick();
    expect(getListMock).toHaveBeenCalled();
    expect(wrapper.vm.pauseCauses).toEqual(pauseCauses);
  });
  it('at option input event, sets "selected" its value', () => {
    const radioValue = 'jest';
    const wrapper = shallowMount(PauseCausePopup, {
      data: () => ({ pauseCauses: [radioValue] }),
    });
    wrapper.findComponent({ name: 'wt-radio' }).vm.$emit('input');
    expect(wrapper.vm.selected).toEqual(radioValue);
  });
  it('at "ok" btn click, emits "change" with "selected" value', () => {
    const selected = 'jest';
    const wrapper = shallowMount(PauseCausePopup, {
      data: () => ({ selected }),
    });
    wrapper.findComponent({ name: 'wt-button' }).vm.$emit('click');
    expect(wrapper.emitted().change[0]).toEqual([selected]);
  });
});
