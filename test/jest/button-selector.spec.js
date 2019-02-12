/* eslint-disable */
/**
 * @jest-environment jsdom
 */

import { mount, createLocalVue } from '@vue/test-utils';
import Quasar, { QBtn, QCarousel } from 'quasar';
import { ButtonSelector as COMPONENT } from '@components/button-selector/index.js';


console.error = jest.fn(e => { throw new Error(e); });

describe('<button-selector>', () => {
  const localVue = createLocalVue();
  localVue.use(Quasar, { components: ['QBtn']});
  let wrapper, vm;

  beforeEach(() => {
    wrapper = mount(COMPONENT, {
        propsData: {
            name: 'circle',
        },
        localVue,
    });
    vm = wrapper.vm;
  });

  it('Loads successfully', () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it('Produces expected HTML', () => {
    expect(wrapper.vm.$el).toMatchSnapshot();
  });

});
