import { shallowMount } from '@vue/test-utils'
import Banner from '@/components/Banner.vue'
import Promotion from '@/components/Promotion.vue'
import ResultCard from '@/components/ResultCard.vue'
import TeaserCard from '@/components/TeaserCard.vue'
/**
 * Testsuit for testing simple components.
 * Expect content of passed props to test if the component it rendered
 * Include fetched content from store (ResultCard)
 */
describe('Banner Component', () => {
  it('renders props when passed', () => {
    const title = 'Lightning-Lotto'
    const teaser = 'vom Blitz getroffen'
    const wrapper = shallowMount(Banner, {
      props: {title, teaser}
    })
    expect(wrapper.text()).toMatch(title)
    expect(wrapper.text()).toContain(teaser)
  })
})

describe('Promotion Component', () => {
  it('renders props when passed', () => {
    const teaser = 'bestOf Spielen'
    const wrapper = shallowMount(Promotion, {
      props: {teaser}
    })

    expect(wrapper.text()).toContain(teaser)
  })
})

describe('ResultCard Component', () => {
  it('renders props when passed', () => {
    const overline = 'Okt'
    const title = 'Eurojackpot'
    const description = ''
    const numbers: unknown[] = []
    const additionalNumbers: unknown[] = []
    const wrapper = shallowMount(ResultCard, {
      props: {overline, title, description, numbers, additionalNumbers}
    })

    expect(wrapper.text()).toContain(title)
    expect(wrapper.text()).toContain(overline)
    expect(numbers.length>=1)
    expect(additionalNumbers.length>=1)
  })
})

describe('TeaserCard Component', () => {
  it('renders props when passed', () => {
    const title = 'eurojackpot'
    const wrapper = shallowMount(TeaserCard, {
      props: {title}
    })

    expect(wrapper.text()).toMatch(title)
  })
})
