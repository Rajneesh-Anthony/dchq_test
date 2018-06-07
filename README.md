## Features

* An attractive & easy to use interface with integrated authentication
* Point of sale
* Full product/catalogue management
* Purchase orders
* Stock control
* Tax management
* Event management with online booking engine
* Equipment servicing and rental

## Getting Started

Dive Centre HQ provides the core framework for the store. It's a Rails-based application that can run in the cloud, bare-metal or virtual servers. The easiest way to get started is to use the Deploy to Heroku option to get up and running in minutes with no technical expertise required.

### Installing into a new Rails application

To get up and running with Dive Centre HQ is simple. Just follow the
instructions below and you'll be up and running in minutes.


    cd dchq-core
    bundle install
    bundle exec rake db:schema:load db:migrate db:seed
    bundle exec puma

## Contribution

If you'd like to help with this project, please get in touch by creating an issue.

## Issues

### Xero Integration

This code base is written to use the ‘Partner’ API which is not portable for single installations and refactoring is required ( Work in progress ). The initial approach will be to make use of a Xero Public Developer API and progress to date has allowed this to work for 30 mins until the session expires but the application then fails and does not renew the auth session. Work underway to handle session expiry by re-authenticating the user through Xero. 


