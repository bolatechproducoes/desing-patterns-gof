import { SmartHouseCommand } from './smart-house-command';
import { SmartHouseLight } from './smart-house-lights';

export class LightPowerCommand implements SmartHouseCommand {
  constructor(private readonly light: SmartHouseLight) {}
  execute(): void {
    this.light.on();
  }
  undo(): void {
    this.light.off();
  }
}
