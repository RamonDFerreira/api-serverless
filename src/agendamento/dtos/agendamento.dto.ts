import { ApiProperty } from '@nestjs/swagger';

export class CriarAgendamentoDto {
  @ApiProperty({ example: 1 })
  medico_id!: number;

  @ApiProperty({ example: 'Carlos Almeida' })
  paciente_nome!: string;

  @ApiProperty({ example: '2024-10-05 09:00' })
  data_horario!: string;
}

export class AgendamentoRespostaDto {
  @ApiProperty({ example: 'Agendamento realizado com sucesso' })
  mensagem!: string;

  @ApiProperty({
    example: {
      medico: 'Dr. João Silva',
      paciente: 'Carlos Almeida',
      data_horario: '2024-10-05 09:00',
    },
  })
  agendamento!: {
    medico: string;
    paciente: string;
    data_horario: string;
  };
}
