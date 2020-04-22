# Advanced CSS and Intro JavaScript Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **advanced CSS and introductory JavaScript concepts**. During this sprint, you studied **preprocessing, JavaScript syntax, conditionals, loops, arrays, and objects**. In your challenge this week, you will demonstrate your mastery of these skills by styling a static web page and manipulating JavaScript data.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL if you need direction. 

_You have **three hours** to complete this challenge. Plan your time accordingly._


## Introduction

In this challenge, you will use a data set of influential artists to build a "influential artists" webpage. This data comes from a set of "50 influential artists" on [kaggle](https://www.kaggle.com/ikarus777/best-artworks-of-all-time). We have reduced the data to just 20 artists to make it slightly easier to work with. You can work with the full dataset as a stretch goal.

In meeting the minimum viable product (MVP) specifications listed below, your project should look like the solution examples below:

 [Sample Screenshot](design/Desktop.png)

### Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead as the evaluate your solution.

## Interview Questions

> List out the topics covered that students should study and review to be prepared for the questions asked in the TL interview. You can use the list of learning objectives that should be covered by the interview as a start.

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.


1. How would you describe preprocessing to someone new to CSS?

2. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?

3. How would you explain the concept of a variable to someone new to programming?

4. What is the purpose of using functions in code?

5. What is a JSON data?

You are expected to be able to answer questions in these areas. Your responses contribute to your Sprint Challenge grade. 

## Instructions

Follow these steps to set up your project:

### Task 1: Project Set up

#### Git Set up

- [ ] Create a forked copy of this project.
- [ ] Add your Team Lead as collaborator on Github.
- [ ] Clone your OWN version of the repository (Not Lambda's by mistake!).
- [ ] Create a new branch: git checkout -b `<firstName-lastName>`.

#### Preprocessor Set up

* [ ] Verify that you have LESS installed correctly by running `lessc -v` in your terminal, if you don't get a version message back, reach out to your project manager for help.
* [ ] In your project's root folder, run the following command `less-watch-compiler less css index.less`
* [ ] Verify your compiler is working correctly by changing the `background-color` on the `body` selector to `red` in your `index.less` file.

### Task 2: Project Requirements

Your finished project should include all of the following requirements. 

### Task 2a:  Minimum Viable Product - PreProcessing

#### Import LESS Files

* [ ] Navigate to your `index.less` file. Notice the file is blank. You have been asked to use a certain import order. That order is as follows:

```markdown
1.variables.less
2.mixins.less
3.reset.less
4.general.less
5.navigation.less
6.main.less
7.cta.less
```

_You will know everything is working properly when you see the styles enabled for the provided content._  

#### Home Page - Desktop HTML & LESS

* [ ] Take 10 minutes to review the code that has already been provided for you. Take time to see how the home page was built.
* [ ] Add a viewport meta tag to the head of your index.html page
* [ ] [Review the provided home desktop design file](design/Desktop.png). You are to build the missing navigation system and header image. You have been provided all content necessary in the [index.html file](index.html)
* [ ] Navigation Styles: Use the `navigation.less` file for styling.
* [ ] Main Content Styles: Use the `main.less` file for styling
* [ ] LESS Mixins: Create and use 2 different mixins to aid your styling. Use the `mixins.less` file for your mixins
* [ ] LESS Parametric Mixin: create a parametric mixin that is used to create the `contact us` button styles.
* [ ] Use at least 2 parameters to create your button
* [ ] Create a hover state that changes the opacity of images to 80%
* [ ] Use good coding practices including adding responsive breakpoints to your code with media queries

### Task 2b: Minimum Viable Product - JavaScript

Navigate to `index.js` and complete the MVP challenges. Note that you need to scroll past data (or collapse data in VScode) to find the challenges.

In your solution, it is essential that you follow best practices and produce clean and professional results. You will be scored on your adherence to proper code style and good organization. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 3: Stretch Goals 

> Include stretch goals in this section. These are additional things the student can do go beyond basic proficiency, and push their scores on the challenge up to a 3. Be clear that these are *not* required. Completing all of the tasks in the required section must be sufficient to  demonstrate proficiency of all sprint objectives, and earn a score of '2. 

> Example stretch goals below:

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

* [ ] Build a page of your choosing from the navigation items.  Come up with content and images that fit the theme.  
* [ ] Introduce CSS animations to your site.
* [ ] Build a contact page and create a form with several inputs of your choosing

## Submission format

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo). **Please don't merge your own pull request**
- [ ] Add your team lead as a reviewer on the pull-request
- [ ] Your team lead will count the project as complete after receiving your pull-request


