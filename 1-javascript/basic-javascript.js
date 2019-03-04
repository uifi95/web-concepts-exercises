//These exercises are for basic javascript concepts


/*1. Create an add function that will take 1 argument and return a function that gets the second argument,
     when that second function is called, it should return the sum of the 2 numbers, should work like this add function
     Use arrow functions https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions */

const addSimple = (a, b) => a + b;

/*2. In a single expression I want you to log to the console the first job of the third employee of the second company.
     Use the companies object below to do this https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
 */

const companies = [
  {
    name: 'Facebook',
    employees: [
      {
        name: 'Andrew',
        jobs: [
          'Interviewer',
          'Carpenter'
        ]
      },
      {
        name: 'Karen',
        jobs: [
          'Manager',
          'CEO'
        ]
      }
    ]
  },
  {
    name: 'Twitter',
    employees: [
      {
        name: 'Andrew',
        jobs: [
          'Assassin',
          'Tester'
        ]
      },
      {
        name: 'Liam',
        jobs: [
          'Product Owner',
          'Lunch Boy'
        ]
      },
      {
        name: 'Martha',
        jobs: [
          'Bartender',
          'Poker Cheater'
        ]
      }
    ]
  },
  {
    name: 'Google',
    employees: [
      {
        name: 'Michael',
        jobs: [
          'Milkman',
          'Sightseer'
        ]
      }
    ]
  }
];

/* 3. Using the data above, add a new employee to google, with name George and jobs "Football player' and 'Window washer'
      do this through code, not by modifying the object by hand. */