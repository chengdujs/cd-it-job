import Vue from 'vue';
import Hello from 'src/pages/Home';

describe('Home.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Hello)
    });
    expect(vm.$el.querySelector('.page-home h1').textContent)
      .to.equal('Home');
  });
})
