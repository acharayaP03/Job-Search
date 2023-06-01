import {render, screen} from '@testing-library/vue'
import userEvent from "@testing-library/user-event";
import { RouterLinkStub } from "@vue/test-utils";
import MainNav from '@/components/Navigation/MainNav.vue'
import { createTestingPinia } from "@pinia/testing";


describe('MainNav', () => {
    const $route = {
        name: "Home"
    }
    const renderMainNav = () => {
        const pinia = createTestingPinia({ stubActions: false})
        render(MainNav, {
            global: {
                plugins: [pinia],
                mocks: {
                    $route,
                },
                stubs: {
                    FontAwesomeIcon: true,
                    RouterLink: RouterLinkStub
                }
            },
        })
    }
  it('displays company name', () => {
      renderMainNav();
    const companyName = screen.getByText('Devs Finder')
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
              name: /profile image/i
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
