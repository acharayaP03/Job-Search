import {render, screen} from '@testing-library/vue'
import userEvent from "@testing-library/user-event";

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
  });

  describe("when the user logs in", () => {
      it("displays user profile picture", async () => {
          render(MainNav);
          let profileImage = screen.queryByRole('img', {
              name: /Profile Image/i
          });

          expect(profileImage).not.toBeInTheDocument();

          const loginButton = screen.getByRole("button", {
              name: /sign in/i
          });
          await userEvent.click(loginButton)

          profileImage = screen.getByRole('img', {
              name: /Profile Image/i
          });

          expect(profileImage).toBeInTheDocument();
      })
  })
})
