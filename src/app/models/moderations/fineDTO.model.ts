import { EntityBase } from './entityBase.model';
import { FineStatusEnum } from './fineStatus.enum';
import { Infraction } from './infraction.model';
import { SanctionType } from './sanctionType.model';

export interface FineDTO {
  plotId: number | undefined;
  fineState: FineStatusEnum;
  sanctionType: SanctionType | undefined;
  infractions: Infraction[];
}
