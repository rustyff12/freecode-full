### How Do Background Image Size, Repeat, Position, and Attachment Work?

1. Which `background-size` value would you use to ensure the entire background image is visible without any cropping, even if it doesn't cover the whole element?

-   `contain`

2. If you want a background image to repeat horizontally but not vertically, which `background-repeat` value would you use?

-   `repeat-x`

3. Which `background-attachment` value would you use to make a background image stay in place when the user scrolls the page?

-   `fixed`

### Background Gradient

What does the `circle` keyword specify in a `radial-gradient()` function?

-   The gradient will have a circular shape.

2. What does the `farthest-corner` keyword do in the size parameter of a `radial-gradient()` function?

-   It makes the gradient extend to the farthest corner of the element.

3. In the `radial-gradient(circle at center, red, yellow 50%, green)` function, where is the gradient's center located?

-   At the center of the element.

### What Are Some Accessibility Considerations for Backgrounds?

1. Why is it important to maintain sufficient contrast between text and background?

-   To make the text more readable for all users.

2. Which of the following should be avoided when placing text over a background?

-   Using a busy or complex background without any overlay.

3. What is the issue with using color as the only indicator of information, such as showing an error message in red?

-   It can be problematic for users with color blindness.

### What Are the Different Ways You Can Add Borders Around Images?

1. Which CSS property allows you to create a border that doesn't affect the element's dimensions?

-   `outline`

2. How would you create a 3-pixel wide, dashed, red border only on the left side of an image?

```css
img {
	border-left: 3px dashed red;
}
```

3. Which CSS property would you use to round the corners of a border?

-   `border-radius`
