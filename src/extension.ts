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

	vscode.commands.registerCommand('extension.sfdx-retrieve', async () => {
		let items = ["Apex Classes", "Apex Triggers", "VF Pages", "Lightning Components", "Static Resources"];
		let activeTerminal = setupTerminal();
		vscode.window.showQuickPick(items, {
			onDidSelectItem: (item) => {
			}
		}).then((selection) => {
			// User made final selection
			if (!selection) {
				return
			}
			else {
				if (selection == "Apex Classes") {
					activeTerminal.sendText('sfdx force:source:retrieve -m ApexClass');
				}
				if (selection == "Apex Triggers") {
					activeTerminal.sendText('sfdx force:source:retrieve -m ApexTrigger');
				}
				if (selection == "VF Pages") {
					activeTerminal.sendText('sfdx force:source:retrieve -m ApexPage');
				}
				if (selection == "Lightning Components") {
					activeTerminal.sendText('sfdx force:source:retrieve -m LightningComponentBundle');
				}
				if (selection == "Static Resources") {
					activeTerminal.sendText('sfdx force:source:retrieve -m StaticResource');
				}
			}
		})
	})
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
