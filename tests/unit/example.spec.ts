import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('Banner Component', () => {
  it('renders props when passed', () => {
    const title = 'Lightning-Lotto'
    const wrapper = shallowMount(HelloWorld, {
      props: { title }
    })
    expect(wrapper.text()).toMatch(title)
  })
})
