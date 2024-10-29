import { ApiProperty } from '@nestjs/swagger';

export class MedicoDto {
  @ApiProperty({ example: 1 })
  id!: number;

  @ApiProperty({ example: 'Dr. João Silva' })
  nome!: string;

  @ApiProperty({ example: 'Cardiologista' })
  especialidade!: string;

  @ApiProperty({ example: ['2024-10-05 09:00', '2024-10-05 10:00'] })
  horarios_disponiveis!: string[];
}

export class AgendasDto {
  @ApiProperty({ type: [MedicoDto] })
  medicos!: MedicoDto[];
}
