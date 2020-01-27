# sfdx-retrieve README

Salesforce DX extension for retrieving Metadata using the active credentials.
The extension includes a commands for different Metadata types, popping up a Selections menu in the Palette.
There is no need to use a package.xml to perform the retrieve.

![SFDX Retrieve Demo](demo/sfdx-retrieve-demo.gif)

## Features

This extension sends the following command to the Terminal: sfdx force:source:retrieve -m META_TYPE.
It has support for the following Metadata types: ApexClass, ApexTrigger, LightningComponentBundle, ApexPage and StaticResource.

## Requirements

SFDX CLI is required and you have to be in a SDFX project folder to use this extension.
It will perform best if the DX project context is already loaded (you can see the any of the SFDX CLI extension components, like the connection to the default Org in the blue tab on the bottom)

## Repository
https://github.com/aojedo/sfdx-retrieve.git


### 1.0.0

Added a Selections menu in the Palette. Now there is just one comand 
