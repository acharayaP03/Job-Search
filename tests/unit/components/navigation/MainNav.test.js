import {render, screen} from '@testing-library/vue'
import userEvent from "@testing-library/user-event";

import MainNav from '../../../../src/components/Navigation/MainNav.vue'

describe('MainNav', () => {
    const renderMainNav = () => {
        render(MainNav, {
            global: {
                stubs: {
                    FontAwesomeIcon: true
                }
            },
        })
    }
  it('displays company name', () => {
      renderMainNav();
    const companyName = screen.getByText('Trishten Tech')
    expect(companyName).toBeInTheDocument()
  })

  it("displays menu items for navigation", () => {
      renderMainNav()
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
          renderMainNav();
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
