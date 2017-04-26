#!/usr/bin/env bash

###
# Configures the AWS CLI to use the credentials stored as environment variables.
#
# That file must set the following Environment variables:
# AWS_ACCESS_KEY_ID     : The access key ID given when you created a User on IAM.
# AWS_REGION            : The AWS region.
# AWS_SECRET_ACCESS_KEY : The secret access key given when you created a User on IAM.
###

##
# Configures the AWS CLI.
#
# @param string $1  the AWS access key id.
# @param string $2  the AWS secret access key.
# @param string $3  the AWS region.
##
function configure_aws_cli() {
	aws --version
	aws configure set aws_access_key_id $1
	aws configure set aws_secret_access_key $2
	aws configure set default.output json
	aws configure set default.region $3
}

##
# Main function
##
function main() {
    echo "$(date "+%Y-%m-%d %H:%M:%S") Configuring AWS CLI..."
    configure_aws_cli ${AWS_ACCESS_KEY_ID} ${AWS_SECRET_ACCESS_KEY} ${AWS_REGION}

    echo "$(date "+%Y-%m-%d %H:%M:%S") AWS successfully configured."
}

# And so, it begins...
main
exit 0
