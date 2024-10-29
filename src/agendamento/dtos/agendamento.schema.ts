import { IsNumber, IsString } from 'class-validator';

export class CriarAgendamentoDto {
  @IsNumber()
  medico_id!: number;

  @IsString()
  paciente_nome!: string;

  @IsString()
  data_horario!: string;
}
