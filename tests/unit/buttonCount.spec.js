import { shallowMount } from '@vue/test-utils'
import ButtonCount from '@/components/ButtonCount.vue'
describe('ButtonCount.vue', () => {
  const wrapper = shallowMount(ButtonCount)
  // checks value of the counter is zero initially
  it('count is initially zero', () => {
    expect(wrapper.vm.count).toBe(0)
  })
  // checks the button present or not
  it('is the button present', () => {
     const myButton= wrapper.find('#btn-increment');
     expect(myButton.exists()).toBe(true)
  })
  // checks the counter increment on clicking the button
  it('counter incremented or not', () => {
    expect(wrapper.vm.count).toBe(0)
    const button = wrapper.find('#btn-increment')
    button.trigger('click')
    expect(wrapper.vm.count).toBe(1)
  })
    // checks the counter reset on clicking the button
    it('reset functionality', () => {
      const button = wrapper.find('#btn-reset')
      button.trigger('click')
      expect(wrapper.vm.count).toBe(0)
    })
})
