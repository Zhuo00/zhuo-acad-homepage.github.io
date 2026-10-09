# Selected publications

Each publication uses:

```js
{
  title: 'Paper title',
  authors: 'Author names',
  venue: 'Journal / conference · year',
  paper: 'https://doi.org/10.xxxx/your-doi',
  image: 'your-graphical-abstract.svg',
  imageAlt: 'A short description of the abstract image',
  highlights: [
    'First owner-provided highlight.',
    'Second owner-provided highlight.',
    'Third owner-provided highlight.'
  ]
}
```

Add entries to `publications` in `profile.js` and upload their images to the repository. The title opens the DOI directly. The graphical abstract can be opened at full size. On phones, the image sits above the text. The renderer italicizes `Galdieria sulphuraria` automatically; extend the scientific-name formatting in `app.js` when adding other species.

For each new selected publication, ask Zhuo for its image and 2–3 short introductory highlights unless already supplied. Do not add project, citation, or BibTeX controls.
