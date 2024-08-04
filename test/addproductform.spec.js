import { createLocalVue, mount } from '@vue/test-utils'
import addproductform from '@components/addproduct/form.vue'
import { BootstrapVue } from 'bootstrap-vue'


// handle uncaught errors during component render function and watchers.
const errorHandler = (err, vm, info) => {
    expect(err).toBeInstanceOf(Error)
}

//Vue class for you to add components, mixins and install plugins without polluting the global Vue class.
const localVue = createLocalVue({
    errorHandler
})

localVue.use(BootstrapVue)

describe('Product Order Form Testing', () => {
    const wrapper = mount(addproductform, {
        localVue
    })


    test('chect product class properties initial state is empty', () => {
        expect(wrapper.vm.product.name).toBe('')
        expect(wrapper.vm.product.quantity).toBe('')
    })

    test('chect Loader initial state is false', () => {
        expect(wrapper.vm.isLoading).toBe(false)
    })

    test('check product name value updating', async()=> {
        const textInput = wrapper.find('#productName')
        await textInput.setValue('Laptop')

        expect(wrapper.vm.product.name).toBe('Laptop')
    })

    test('check product quantity value updating', async()=> {
        const textInput = wrapper.find('#productQuantity')
        await textInput.setValue('8')

        expect(wrapper.vm.product.quantity).toBe('8')
    })

    


    

    test('Empty the order form when click clear button', async () => {

        await wrapper.setData({
            product: {
                name: 'Laptop',
                quantity: '8'
            }
        })
        const clearButton = wrapper.find('button.clear')

        await clearButton.trigger('click')

        expect(wrapper.vm.product.name).toBe('')
        expect(wrapper.vm.product.quantity).toBe('')
    })

})
