import {Command} from './../../commands/base.command';
import {CommandPayload} from './../../commands/payloads/base.command.payload';

export class RPCCommand extends Command {
  _method: string;
  set method(value: any) {
    this._method = value;
    if (this._payload) {
      this._payload.appendPair('method', this._method);
    }
  }
  set payload(value: CommandPayload) {
    if (this._method) {
      value.appendPair('method', this._method);
    }
    this._payload = value;
  }
  get payload(): CommandPayload {
    return this._payload;
  }
}
