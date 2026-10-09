# Editing the research story

The homepage's research card opens `research.html`. Its appearance and interactions are in `research.css` and `research.js`.

## Add your second study

Edit the `studyTwo` object in `research-content.js`:

- `status`: publication status, such as `Not yet published` or `Published · 2027`.
- `title` and `intro`: the study's title and the story connecting it to Study 01.
- `question`, `approach`, `finding`, and `nextQuestion`: the four narrative fields.
- `doi`: enter just the DOI, such as `10.1234/example`, after a DOI is available. The page creates the link automatically. Leave it empty while unpublished.
- `note`: a disclosure or status note appropriate to what you choose to share.

Empty fields display `To be added.` No unpublished result has been invented. The possible future questions in `questions` are drawn from the scope and limitations of Study 01; replace them with your actual research progression as appropriate.

The carbon pathway and evidence selectors also use `research-content.js`. The broader narrative and first paper's reference are in `research.html`.

## Homepage

Edit `interests` in `profile.js` to change the story card. A local `.html` `href` makes a topic clickable. The first publication has also been updated from a placeholder to the real 2026 paper.

## Scientific scope

Study 01 uses a potato-starch model system, not mixed food waste. The page explicitly distinguishes the model from the broader research theme and describes GH15 as supported by combined evidence rather than a purified-enzyme or knockout validation.

Source: Li, Z., Zhang, Q., Yu, I.K.M. (2026). Chemical Engineering Journal 528, 172420. https://doi.org/10.1016/j.cej.2025.172420
