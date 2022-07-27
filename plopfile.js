/* eslint-disable no-undef */
import fs from 'fs'

export default function (plop) {
  plop.setHelper('upperCase', (txt) => txt.toUpperCase())
  plop.setHelper('lowerCase', (txt) => txt.toLowerCase())

  plop.setHelper('leadingZeros', (text) => {
    if (text < 10) {
      return `00${text}`
    }

    if (text < 100) {
      return `0${text}`
    }

    return text
  })

  plop.setActionType('newFolder', (answers, config, plop) => {
    const target = plop.renderString(config.target, answers)
    fs.mkdir(target, (err) => {
      if (err) {
        console.log('Whoops! We had an issue copying the folder')
        return console.error(err)
      }
    })
  })

  // create your generators here
  plop.setGenerator('article', {
    description: 'this is a skeleton article page for Learn with Redwood',
    prompts: [
      {
        type: 'input',
        name: 'articleNumber',
        message: "What's the article number?",
      },
      {
        type: 'input',
        name: 'articleShortName',
        message: "What's the article short name?",
      },
      {
        type: 'input',
        name: 'title',
        message: "What's the article title?",
      },
      {
        type: 'input',
        name: 'slug',
        message: "What's the article slug?",
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'content/articles/{{leadingZeros articleNumber}}__{{lowerCase (dashCase articleShortName)}}/{{leadingZeros articleNumber}}__{{lowerCase (dashCase articleShortName)}}.mdx',
        templateFile: 'plop-templates/article.md.hbs',
        abortOnFail: true,
        skipIfExists: true,
      },
      {
        type: 'newFolder',
        target:
          'content/articles/{{leadingZeros articleNumber}}__{{lowerCase (dashCase articleShortName)}}/images',
      },
    ],
  })

  /*
  plop.setGenerator('livestream', {
    description: 'this is a skeleton plopfile',
    prompts: [], // array of inquirer prompts
    actions: [], // array of actions
  })

  plop.setGenerator('podcast', {
    description: 'this is a skeleton plopfile',
    prompts: [], // array of inquirer prompts
    actions: [], // array of actions
  })
  */

  plop.setGenerator('faq', {
    description: 'this is a skeleton faq for the landing page',
    prompts: [
      {
        type: 'input',
        name: 'faqNumber',
        message: 'FAQ number?',
      },
      {
        type: 'input',
        name: 'faqShortName',
        message: 'FAQ short name?',
      },
      {
        type: 'input',
        name: 'order',
        message: 'What order would you like this to appear in?',
      },
      {
        type: 'input',
        name: 'question',
        message: 'Question?',
      },
    ], // array of inquirer prompts
    actions: [
      {
        type: 'add',
        path: 'content/faqs/{{leadingZeros faqNumber}}__{{lowerCase (dashCase faqShortName)}}.mdx',
        templateFile: 'plop-templates/faq.md.hbs',
        abortOnFail: true,
        skipIfExists: true,
      },
    ], // array of actions
  })
}
