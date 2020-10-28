# endor

[Scrum board](https://gusalmjok.atlassian.net/)

## Running our project

### Dependencies

1. Install [nodejs](https://nodejs.org/en/download/)
2. install [yarn](https://classic.yarnpkg.com/en/docs/install)
3. Navigate to app/ inside the repo
4. `yarn upgrade`
5. (for production build) `npm i -g serve`

### Testing (Inside of app/)

`yarn test --env jest-environment-jsdom-sixteen`

### Running (Inside of app/)

#### Development build

`yarn start`

#### Production build

`serve -s build -l [port]`
