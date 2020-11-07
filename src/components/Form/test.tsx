import { renderWithTheme } from 'utils/tests/helpers'

import { FormLink, FormWrapper } from '.'

describe('<Form />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <FormWrapper>
        <FormLink>
          My nice <a href="#">link</a>
        </FormLink>
      </FormWrapper>
    )

    expect(container.parentElement).toMatchInlineSnapshot(`
      .c0 .sc-jSgupP {
        margin: 0.8rem 0;
      }

      .c0 .sc-iBPRYJ {
        margin: 3.2rem auto 1.6rem;
      }

      .c1 {
        font-size: 1.4rem;
        color: #000000;
        text-align: center;
      }

      .c1 a {
        color: #f5cb3b;
        -webkit-text-decoration: none;
        text-decoration: none;
        border-bottom: 0.1rem solid #f5cb3b;
        -webkit-transition: color,border,0.1s ease-in-out;
        transition: color,border,0.1s ease-in-out;
      }

      .c1 a:hover {
        color: #f1bd0c;
        border-bottom: 0.1rem solid #f1bd0c;
      }

      <body>
        <div>
          <main
            class="c0"
          >
            <div
              class="c1"
            >
              My nice 
              <a
                href="#"
              >
                link
              </a>
            </div>
          </main>
        </div>
      </body>
    `)
  })
})
