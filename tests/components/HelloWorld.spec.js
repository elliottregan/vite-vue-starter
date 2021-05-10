 
import { mount } from '@vue/test-utils'

import HelloWorld from '../../src/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders a greeting', () => {
    const wrapper = mount(HelloWorld, {
      props: { count: 5 },
      data() {
        return {
          message: 'world'
        }
      }
    })
  
    expect(wrapper.html()).toContain('Hello world')
  })
  
  it('returns a single prop applied to a component and renders', () => {
    const wrapper = mount(HelloWorld, { props: { count: 5 } })
    expect(wrapper.props('count')).toEqual(5)
  })

})