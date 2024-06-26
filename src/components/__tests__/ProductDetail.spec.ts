import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import ProductDetails from '../Products/ProductDetail.vue' // Adjust the path as needed
import { auth0 } from '../../config/authConfig'

vi.mock('../../config/authConfig', () => ({
  auth0: {
    loginWithRedirect: vi.fn(),
    isAuthenticated: { value: false },
    logout: vi.fn(),
    user: {}
  }
}))

describe('ProductDetail.vue', () => {
  const course = {
    picture: 'course-image.jpg',
    title: 'Course Title',
    desc: 'Course Description',
    isFav: false
  }

  it('renders course details', () => {
    const wrapper = mount(ProductDetails, {
      props: { course }
    })

    expect(wrapper.find('h2').text()).toBe(course.title)
    expect(wrapper.find('p').text()).toBe(course.desc)
    expect(wrapper.find('img').attributes('src')).toBe(course.picture)
  })

  it('toggles favorite when authenticated', async () => {
    auth0.isAuthenticated.value = true
    const wrapper = mount(ProductDetails, {
      props: { course }
    })

    const favButton = wrapper.find('button')
    await favButton.trigger('click')

    expect(course.isFav).toBe(true)
  })

  it('calls loginWithRedirect when not authenticated and toggling favorite', async () => {
    auth0.isAuthenticated.value = false
    const wrapper = mount(ProductDetails, {
      props: { course }
    })

    const favButton = wrapper.find('button')
    await favButton.trigger('click')

    expect(auth0.loginWithRedirect).toHaveBeenCalled()
  })

  it('starts course when authenticated', async () => {
    auth0.isAuthenticated.value = true
    const wrapper = mount(ProductDetails, {
      props: { course }
    })

    const startButton = wrapper.find('button.mt-4')
    await startButton.trigger('click')
  })

  it('calls loginWithRedirect when not authenticated and starting course', async () => {
    auth0.isAuthenticated.value = false
    const wrapper = mount(ProductDetails, {
      props: { course }
    })

    const startButton = wrapper.find('button.mt-4')
    await startButton.trigger('click')

    expect(auth0.loginWithRedirect).toHaveBeenCalled()
  })
})
