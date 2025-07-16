### CSS, and What Is Its Role on the Web

1. What is the primary purpose of CSS in web development?

-   To separate the presentation of a document from its content.

2. How does CSS contribute to responsive web design?

-   By allowing adjustments to layout and styling based on device screen size.

3. What is meant by the "cascading" nature of CSS?

-   It allows styles to be inherited and overridden in a hierarchical manner.

### Basic Anatomy of a CSS Rule

1. What is the purpose of a selector in a CSS rule?

-   To determine which HTML elements the rule will apply to.

2. Which of the following CSS rules correctly changes the text color of all paragraph elements to blue?

```css
p {
	color: blue;
}
```

3. Given the following CSS rule, what will be the text size of the targeted HTML element?

```css
h1 {
	color: green;
	font-size: 24px;
}
```

-   24px

### Meta Viewport Element

1. What is the primary purpose of the `meta` `viewport` element?

-   To control page dimensions and scaling on different devices.

2. What does `width=device-width` in the `meta` `viewport` tag do?

-   It tells the browser to match the page width to the device's screen width.

3. Why is it generally recommended to avoid using `user-scalable=no` in the `meta` `viewport` tag?

-   It can create accessibility issues for users who need to zoom.

### Default Browser Styles Applied to HTML

1. What is the default style applied to heading tags (`h1` to `h6`) in most browsers?

-   They have varying sizes and weights, with `h1` being the largest and boldest.

2. What does the `hr` element typically look like by default in most browsers?

-   A thin horizontal line with spacing above and below.

3. How are anchor tags (`a`) typically styled by default in browsers?

-   `underline` and `blue`.

### Inline, Internal, and External CSS

1. When is it most appropriate to use inline CSS?

-   For overriding styles quickly on a single element.

2. Which type of CSS is best suited for applying styles to a single webpage only?

-   Internal CSS.

3. Why is external CSS preferred in larger projects?

-   It promotes separation of concerns and reusability across multiple pages.
