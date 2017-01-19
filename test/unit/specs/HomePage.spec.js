import Vue from 'vue';
import { HomePage } from 'src/pages/home';

describe('home/HomePage.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(HomePage)
    });
    expect(vm.$el.className).to.equal('invite-hot');
  });
});
