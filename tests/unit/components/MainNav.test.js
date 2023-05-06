import {render, screen} from '@testing-library/vue'

import MainNav from '@/components/MainNav.vue'

describe('MainNav', () => {
  it('displays company name', () => {
    render(MainNav)
    const companyName = screen.getByText('Trishten Tech')
    expect(companyName).toBeInTheDocument()
  })

  it("displays menu items for navigation", () => {
    render(MainNav)
    const navigationMenuItems = screen.getAllByRole("listitem");
    const navigationMenuText = navigationMenuItems.map( item => item.textContent)

    expect(navigationMenuText).toEqual([
        "Teams",
        "Locations",
        "Life at Trishten Tech",
        "How we hire",
        "Students",
        "Jobs"
    ])
  })
})
