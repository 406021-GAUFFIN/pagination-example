import { EntityBase } from './entityBase.model';
import { FineStatusEnum } from './fineStatus.enum';
import { Infraction } from './infraction.model';
import { SanctionType } from './sanctionType.model';

export interface Fine extends EntityBase {
  plotId: number;
  fineState: FineStatusEnum;
  sanctionType: SanctionType;
  infractions: Infraction[];
}
