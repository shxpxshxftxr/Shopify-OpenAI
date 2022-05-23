export default function generatePrompt(theme) {
  const capitalizedTheme =
    theme[0].toUpperCase() + theme.slice(1).toLowerCase();
  return `A Haiku is a poem of three lines. There are five syllables in the first line, seven in the second, and five in the last. Write a Haiku.

  Theme: Frog
  Haiku:
  The silent old pond
  a mirror of ancient calm,
  a frog-leaps-in splash.
  Theme: Preciousness
  Haiku:
  Dew evaporates,
  and our world is dew... so dear,
  so fresh ...so fleeting.
  Theme: ${capitalizedTheme}
  Haiku:`;
}
