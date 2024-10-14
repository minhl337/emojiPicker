This interview test was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting started

- Clone the repo: `https://github.com/prophet-town/review-page-interview`
- Install dependencies: `npm i`
- Make sure the app runs: `npm run start`

## Frontend Test

### Dining review app

Design Reference: [Figma File](https://www.figma.com/design/yE81gOKvGkiFChMN9cCvhr/Review-page-interview-design?node-id=0-1&t=GrVqLg5fAhtn35CH-1)

![Dining App](/app.png)

1. **Dynamic inputs** - The Preview section on the right has static placeholder text. Wire up the app so that anything typed in both the feedback and party inputs updates the preview on the right.
2. **Refactor inputs** - Depending on how you wrote the first step, you may need to refactor the update method to only use a single method (instead of two) for updating each input. Make sure you're only passing a single method to both inputs. For example:
   ```
   update() {}
   <input onChange={update}>
   <input onChange={update}>
   ```
3. **Product decision** - We're a small team, so you may be asked to make recommendations based on a feature we're building. Code from scratch, modify a library, or use a best practice idea is often a decision we're confronted with. You'll be adding an emoji selector to the form on the left. In the [Figma File](https://www.figma.com/design/yE81gOKvGkiFChMN9cCvhr/Review-page-interview-design?node-id=0-1&t=GrVqLg5fAhtn35CH-1) we've added a few ideas, but we'd like to see your thinking around the best way to implement a feature which allows a user to express their emotions after dining somewhere.

4. **Add emoji selector** - Now implement your idea in code and render it on the right in the Preview section.
5. **Style preview card** - Based on the [Figma File](https://www.figma.com/design/yE81gOKvGkiFChMN9cCvhr/Review-page-interview-design?node-id=0-1&t=GrVqLg5fAhtn35CH-1), add CSS styling to the Preview area. In Figma you can click the "Code" tab in the upper right to get the relevant CSS values for each element you click.
6. **Responsive styling** - Now that your Preview is looking good, we need to make the app work for mobile users. We'd like the Preview section to be on top in mobile and everything to look similar to the Figma mockup. Don't worry about tablet styling for now, this is just for mobile.
