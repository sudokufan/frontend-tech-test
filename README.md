# Moneyhub Tech Test - Property Details

This is a prototype of a new feature in Moneyhub
Customers will now be able to receive automatic value updates on their properties
and we would like to enhance the experience by summarizing their changes

Please read this whole document before starting

This prototype is built using NextJS and makes use of styled components

## Requirements

We would like you to:

----

**Required**: Add a "Valuation changes" section to the page. `design-mock-up.png` has been provided as a design reference for the page and `detail-design-mock-up.png` shows the specific feature to be added, including how it is styled responsively. Make use of existing fonts and styles to match the look and feel of the existing app rather than trying to match the mock up exactly.

 ```
  sincePurchase = `recentValuation - originalPurchasePrice`
  sincePurchasePercentage = `sincePurchase / originalPurchasePrice * 100`
  annualAppreciation =`sincePurchasePercentage / number of years since purchase`
  colours used for the positive change in the image are #c2f7e1 and #006b57
 ```

Consider what other data this component could take and how that might affect your theming and solution

Consider opportunities to reduce repetition in the code and increase legibility
- This could be creating new components, simplifying existing ones, extracting helper function to simplify code or styling
- Show us what you can do and implement a few of these if you have time

We also ask that you update the readme with answers to the following questions 

1. Given more time, what other changes you would have liked to make?
2. What UX or design improvements or alterations might you suggest? These can be to existing components or completely new ideas.

----

**Optional**: If you have time, show us some more by fetching the data from the api
  - Currently the property data is hardcoded in the component, but it is also avaible via a Next.js api route
  - Details of a property are located in the API at `/api/account`, use this endpoint to populate the app with data
  - Use whichever method or library you are comfortable with to fetch the data

----

Try to:

- Ensure markup is semantic and accessible
- Make use of a centralised theme
- Make effective use of Git

We prefer:

- Functional React components
- `styled-components` for styling
- `prop-types` for typechecking

----

**IMPORTANT**

Most of your work should take place inside the `components/` and `modules/` directory. There are some example components and styles available and the theme is defined in `theme/`. This task has been mocked up in Next.js to provide a full working environment and as such shouldn't be taken as a _complete_ application. We are interested in assessing your React frontend skills and are not testing your knowledge of Next.js, you should not need to make any changes in the `pages/` directory.

### Notes

We recommend working through the list of requirements above but don't expect you to finish all of them. We're more interested in seeing how you approach the problem than seeing a perfect example, please only spend a few hours working on it. 

On completion, email a link to your repository to your contact at Moneyhub, and ensure it is publicly accessible.

## Getting Started

Run the development server:

```bash
npm run dev
```

**NOTE**: If you have trouble starting your environment, you may need to downgrade your node version using nvm, volta or similar (I could not run on node 19 but could on node 14, for example)

Open [http://localhost:3333](http://localhost:3333) with your browser to see the result.

You can start by looking at `modules/property-details/index`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

### Q&A

## 1. Given more time, what other changes you would have liked to make?
I used the full amount of time to solve the problem as it took me a while to get my local environment running (I had to downgrade my npm version to get it working, waiting for it to install took a while!) - I’ve amended the readme above to reflect this. Thus, I didn't get the chance to hook up the API so am still working with hardcoded data, although I recently did the backend/api tech test for moneyhub [here](https://github.com/sudokufan/api-tech-test/pull/1) if you'd like to see evidence of that style of work.

I also got a type error on Safari when running the code - `TypeError: e is not a function. (In 'e()', 'e' is undefined)`. I didn't encounter this on Chrome and couldn't figure out how to fix the error in the time available, but would have liked to figure that one out.

I should also note that this is my first time using styled components and prop-types (in the past professionally I've used CSS Modules and Sass Variables to solve the same problems) so apologies if anything seems like it should be in a more useful place. I initially built the infoBubble component, for example, in with the modules and ended up moving it out to the components directory near the end of the task.

## 2. What UX or design improvements or alterations might you suggest? These can be to existing components or completely new ideas.
The banner is just a div element, and might be better as a header or h1, since this is better for accessibility to have semantic tags. The same is also true for the accountLabel elements heading each section, which should probably be h2s, and the estimated value reduced from an h3 to a div element. It makes it easier for screen readers on mobile devices if this is the case, to properly determine the order and flow of the content on the page.

I'd probably also think about pairing together some of these components instead of having one for the banner, one for the title, one for a line of text, etc - perhaps a generic 'infoBox' component could be made and imported in, saving a lot of this duplication. That said, again it's my first time with styled components so this approach might be intentional.

Beyond that I'm afraid I don't have much of an eye for design, I'd be lost without a design to work to, so there's not much that stands out beyond the banner title being pretty nondescript - a bit more boldness at the top of the page, bigger, larger font weight, with a background colour across the banner perhaps, etc, and making it sticky on mobile so it stays at the top of the page as you scroll down.