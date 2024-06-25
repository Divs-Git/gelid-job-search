import { render, screen } from '@testing-library/vue';
import MainNav from '@/components/MainNav.vue';
import { expect } from 'vitest';

describe('MainNav', () => {
  it('displays company name', () => {
    render(MainNav); // accepts component to render

    // Not recommended as we are getting close to implementation
    // render(MainNav, {
    //   data() {
    //     return {
    //       company: 'Carry Careers'
    //     };
    //   }
    // });

    // screen.debug(); // give us representation of virtual DOM
    const companyName = screen.getByText('Gelid Careers');
    expect(companyName).toBeInTheDocument();
  });
});
