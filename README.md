# Sprint Challenge: Advanced CSS and Intro to JavaScript - Influential Artists

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a concrete project. This Sprint explored advanced CSS and introductory JavaScript concepts. During this Sprint, you studied responsive web design, variable declaration, conditionals, loops, functions, arrays, and objects. In your challenge this week, you will demonstrate proficiency by creating a website of influential artists with data from an object.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. Your work reflects your proficiency in Responsive Design, and JavaScript Basics.


## Introduction

In this challenge, you will use a data set of artists to build an "influential artists" webpage. This data comes from a set of "50 influential artists" on [Kaggle](https://www.kaggle.com/ikarus777/best-artworks-of-all-time). We have reduced the data to just 20 artists to make it slightly easier to work with. You are free to work with the full data set as a stretch goal.

### Commits

Commit your code regularly and meaningfully. 

## Interview Questions
### (please edit this file and write your answer below each question. In addition, you may also review these questions with your mentor)

Please answer the following questions below, you may edit the readme file to include your answers below the question.

1. How would you describe acessibility on the web to someone new to programming?

It's good to design websites with all people in mind because there is a trickle-down of unintended benefits from accessibility.

2. Talk about 3 different things you can do to ensure your website is accessible. 

First, use scalable units... which means avoided hard pixels, using % whenever possible, using REM on font-sizes, and vh if height absolutely must have to be defined. 

Second, we must include the viewport meta tag in the head of our document to allow mobile browsers to read our media queries.  Without this, the mobile browsers will ignore our media queries and your site will not be responsive.

Finally, use media queries. It's best practice to start with mobile first and scale up through min-width. 

3. How would you explain the concept of a variable to someone new to programming?

Variables are containers for storing data values and this is important for advanced dynamic functionality. 

4. What is the purpose of using functions in code?

Reusable blocks of code that are like mini-programs (or sets of instructions) to perform a specific task. They are executed when someone invokes (aka calls) it.

You are expected to be able to answer questions in these areas. Your responses contribute to your Sprint Challenge grade. 

## Instructions

### Task 1: Project Set-Up

Follow these steps to set up your project:

1. Fork the repo
2. Clone your forked version of the repo
3. cd into your repo and create a branch with your first and last name
NOTE: Tests will run for the JavaScript portion of this challenge only
4. open the terminal in your vs code and type `npm install`
5. next type `npm run test:watch` in your terminal
6. Complete your work making regular commits, once you have all your tests passing and you are ready to submit your work please see canvas for instructions on how to submit

### Task 2a:  Minimum Viable Product - Responsive Design

*Before you jump in, take 10 minutes to review the code that has already been provided for you. Take time to see how the home page was built. During this time, [Review the provided design files](design/). You have been provided all content necessary in the [index.html file](index.html) and basic styling in the [index.css file](css/index.css).*

* [ ] Add a viewport meta tag to the head of your index.html page.
* [ ] Add responsive breakpoints to your code for 500px such that your styles match the [mobile design file](design/Mobile.png).

### Task 2b: Minimum Viable Product - JavaScript

Navigate to `index.js` and complete the MVP challenges. Note that you need to scroll past data (or collapse data in VScode) to find the challenges below.

### Task 3: Stretch Problems

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

* [ ] Website is responsive at multiple breakpoints and looks good in-between breakpoints because student is using responsive units of measurement where appropriate. Student is using most semantic HTML for each element on page and has included ARIA roles where applicable (More research may be required to implement ARIA roles)  
* [ ] Student demonstrates and can explain a deep understanding of basic programming concepts when walking Team Lead through the explanation of their code.
* [ ] Use advanced array methods (.map, .reduce, .filer) to refactor your MVP code (create an array of all artists born in the 1900s with .filter, for example) - do this seperate from your MVP tasks


## Resources

📚[Best Practices for Responsive Design](https://www.browserstack.com/guide/responsive-design-breakpoints)

🤝[W3 Schools - Responsive Design](https://www.w3schools.com/html/html_responsive.asp)

👀 [Styling with HTML and CSS](https://www.w3schools.com/html/html_css.asp)

## Submission format

Please see canvas for cohort specific submission instructions 
