# timobermeier.github.io

Personal academic website, built with Jekyll and hosted on GitHub Pages.

## Updating the site

| To change…                         | Edit                                   |
|------------------------------------|----------------------------------------|
| Papers, links, abstracts           | `_data/papers.yml`                     |
| Name, position, email, fields      | `_config.yml` (under `author:`)        |
| About text, student meetings       | `index.html`                           |
| CV                                 | replace `cv.pdf`                       |
| Photo                              | replace `photo.jpg`                    |
| Colours, fonts, spacing            | `assets/css/site.css`                  |

GitHub rebuilds the site automatically about a minute after each commit to `master`.

## Preview locally (optional)

```sh
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.
