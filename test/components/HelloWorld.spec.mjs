 
import { mount } from '@vue/test-utils'

import HelloWorld from '../../src/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders a greeting', () => {
    const wrapper = mount(HelloWorld, {
      data() {
        return {
          message: 'world'
        }
      }
    })
  
    expect(wrapper.html()).toContain('Hello world')
  })
  it('renders a count', () => {
    const wrapper = mount(HelloWorld, {
      props: {
        count: 5
      },
      data() {
        return {
          message: 'world'
        }
      }
    })
  
    expect(wrapper.html()).toContain('Count: 5')
  })
})