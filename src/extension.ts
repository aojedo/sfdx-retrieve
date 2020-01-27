// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "sfdx-retrieve" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let classes = vscode.commands.registerCommand('extension.sfdx-retrieve-classes', () => {
		// The code you place here will be executed every time your command is executed
		let activeTerminal = setupTerminal();
		if (activeTerminal) {
			activeTerminal.sendText('sfdx force:source:retrieve -m ApexClass');
		}

		// Display a message box to the user
		vscode.window.showInformationMessage('Retrieve Apex Classes executed!');
	});

	context.subscriptions.push(classes);

	let triggers = vscode.commands.registerCommand('extension.sfdx-retrieve-triggers', () => {
		// The code you place here will be executed every time your command is executed
		let activeTerminal = setupTerminal();
		if (activeTerminal) {
			activeTerminal.sendText('sfdx force:source:retrieve -m ApexTrigger');
		}

		// Display a message box to the user
		vscode.window.showInformationMessage('Retrieve Apex Triggers executed!');
	});

	context.subscriptions.push(triggers);

	let webComponents = vscode.commands.registerCommand('extension.sfdx-retrieve-lwc', () => {
		// The code you place here will be executed every time your command is executed
		let activeTerminal = setupTerminal();
		if (activeTerminal) {
			activeTerminal.sendText('sfdx force:source:retrieve -m LightningComponentBundle');
		}

		// Display a message box to the user
		vscode.window.showInformationMessage('Retrieve Lightning Web Components executed!');
	});

	context.subscriptions.push(webComponents);

	let visualforce = vscode.commands.registerCommand('extension.sfdx-retrieve-pages', () => {
		// The code you place here will be executed every time your command is executed
		let activeTerminal = setupTerminal();
		if (activeTerminal) {
			activeTerminal.sendText('sfdx force:source:retrieve -m ApexPage');
		}

		// Display a message box to the user
		vscode.window.showInformationMessage('Retrieve Visualforce Pages executed!');
	});

	context.subscriptions.push(visualforce);
}

// this method is called when your extension is deactivated
export function deactivate() {}


export function setupTerminal(): vscode.Terminal {
	let activeTerminal;
	if(ensureTerminalExists()){
		activeTerminal = vscode.window.terminals[0];
		if(activeTerminal){
			activeTerminal.show(true);
		}
	} else {
		// Create Terminal via VScode API
		activeTerminal = vscode.window.createTerminal('SFDX Retrieve Terminal');
		activeTerminal.show(true);
	}
	return activeTerminal;
}

export function ensureTerminalExists(): boolean {
	if ((<any>vscode.window).terminals.length === 0) {
		return false;
	}
	return true;
}
