### Width and Height

1. What will happen if you set `width: 600px;` and `max-width: 500px;` on a `div` element?

-   The element will be `500px` wide.

2. If you set `min-height: 200px` and `height: 150px` on an element, what will be the `height` of the element?

-   `200px`

3. Which of the following units can be used to set the `width` or `height` of an element?

-   `px`, `%`, and `em`.

### Different Types of CSS Combinators

1. Which CSS rule will style all `span` elements that are inside `div` elements, regardless of how deeply they are nested?

```css
div span {
	color: red;
}
```

2. Which CSS rule will style only the direct child `li` elements of `ul` elements?

```css
ul > li {
	font-weight: bold;
}
```

3. Which CSS rule will style the first `p` element that immediately follows any `h1` element?

```css
h1 + p {
	margin-top: 0;
}
```

### Difference Between Inline and Block-Level Elements

1. What is the default behavior of block-level elements in CSS?

-   They take up the full width of their container and start on a new line.

2. Which of the following is an example of an inline element?

-   span

3. How can you change the behavior of a block-level element to behave like an inline element?

-   Apply `display: inline;`

### Inline-Block vs Inline and Block Elements

1. What is the key characteristic of an inline-block element that distinguishes it from an inline element?

-   Inline-block elements allow setting of height and width, unlike inline elements.

2. Which scenario is best suited for using inline-block elements over inline or block elements?

-   When you want an element to remain inline but need to adjust its size.

3. In what situation would an element with display: inline-block; behave differently than one with display: block;?

-   When you want the element to flow alongside text and other inline elements.

### Margins and Padding

1. Which CSS property would you use to create space between the border of an element and its neighboring elements?

-   `margin`

2. Which CSS property would you use to create space between the content of an element and its border?

-   `padding`

3. What is the correct order of values when using the shorthand property for margin or padding with four values?

-   `top`, `right`, `bottom`, `left`.
