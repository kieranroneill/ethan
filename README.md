# Ethan

Ethan is your know-it-all buddy when it comes to all things Ethereum.

## Features

* Get real-time ethereum prices.
* ...and much more!

[![CircleCI](https://circleci.com/gh/kieranroneill/ethan/tree/master.svg?style=shield&circle-token=ea97ae777bee8f3533765f922792316b7227a233)](https://circleci.com/gh/kieranroneill/ethan/tree/master)

## Development

### 1. Local

* Install [Node.js v6.10.2+](https://nodejs.org/en/)
* Install [Yarn](https://yarnpkg.com/lang/en/docs/install)
* Install [Serverless](https://serverless.com/) `yarn global add serverless`
* Install dependencies `yarn install`

## Testing

## Deployment
    
### 1. CircleCI

To setup CircleCI, the following environment variables are needed for deployment to AWS Lambda:

| Name | Description |
| :--- | :--- |
| `AWS_ACCESS_KEY_ID` | The access key ID for the AWS IAM user that has access to the S3 bucket |
| `AWS_SECRET_ACCESS_KEY` | The secret access key for the AWS IAM user that has access to the S3 bucket |
| `AWS_REGION` | The aws region |
