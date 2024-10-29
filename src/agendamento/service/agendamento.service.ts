import { Injectable, NotFoundException } from '@nestjs/common';
import {
  CriarAgendamentoDto,
  AgendamentoRespostaDto,
} from '../dtos/agendamento.dto';
import { AgendaService } from '../../agenda/services/agenda.service';

@Injectable()
export class AgendamentoService {
  constructor(private readonly agendaService: AgendaService) {}

  criarAgendamento(dto: CriarAgendamentoDto): AgendamentoRespostaDto {
    const medico = this.agendaService.getMedicoById(dto.medico_id);

    if (!medico) {
      throw new NotFoundException('Médico não encontrado');
    }

    if (!medico.horarios_disponiveis.includes(dto.data_horario)) {
      throw new NotFoundException('Horário não disponível');
    }

    // Remover o horário disponível após agendamento
    medico.horarios_disponiveis = medico.horarios_disponiveis.filter(
      (horario) => horario !== dto.data_horario,
    );

    return {
      mensagem: 'Agendamento realizado com sucesso',
      agendamento: {
        medico: medico.nome,
        paciente: dto.paciente_nome,
        data_horario: dto.data_horario,
      },
    };
  }
}
