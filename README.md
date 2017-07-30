

# Scheduled AWS Lambda function to stop RDS instances based on tags

This function that runs as a cron job using the serverless schedule event. For more information on schedule event check out the Serverless docs on schedule.

Schedule events use the rate or cron syntax.

## Cron syntax

```pseudo
cron(Minutes Hours Day-of-month Month Day-of-week Year)
```

All fields are required and time zone is UTC only.

| Field         | Values         | Wildcards     |
| ------------- |:--------------:|:-------------:|
| Minutes       | 0-59           | , - * /       |
| Hours         | 0-23           | , - * /       |
| Day-of-month  | 1-31           | , - * ? / L W |
| Month         | 1-12 or JAN-DEC| , - * /       |
| Day-of-week   | 1-7 or SUN-SAT | , - * ? / L # |
| Year          | 1970-2199      | , - * /       |

Read the [AWS cron expression syntax](http://docs.aws.amazon.com/lambda/latest/dg/tutorial-scheduled-events-schedule-expressions.html) docs for more info on how to setup cron


**The function is scheduled to execute at 8AM MON-FRI (UTC time)**

## Setup

Run `nvm use` to get the correct version of node

* Install yarn `curl -o- -L https://yarnpkg.com/install.sh | bash`
* Install serverless globally `npn install -g serverless`

## Building
Run `yarn` after

## Deploying

In order to deploy the function run:

`yarn deploy:full`

There is no additional step required. Your defined schedule becomes active right away after deployment.

## Usage

To test function locally and view the results run:

`yarn invoke`


### Update dependencies

`yarn upgrade-interactive`
