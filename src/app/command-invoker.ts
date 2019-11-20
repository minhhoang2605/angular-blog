import { Command } from 'src/app/command';

export class CommandInvoker {
    private command: Command;

    public setCommand(command: Command) {
        this.command = command;
    }

    public doThing(): void {
        this.command.execute();
    }
}
