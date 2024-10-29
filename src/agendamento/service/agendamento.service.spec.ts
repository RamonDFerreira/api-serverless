import { Test, TestingModule } from '@nestjs/testing';
import { AgendamentoService } from './agendamento.service';
import { AgendaService } from '../../agenda/services/agenda.service';
import { NotFoundException } from '@nestjs/common';

describe('AgendamentoService', () => {
  let service: AgendamentoService;
  let agendaService: AgendaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgendamentoService, AgendaService],
    }).compile();

    service = module.get<AgendamentoService>(AgendamentoService);
    agendaService = module.get<AgendaService>(AgendaService);
  });

  it('deve criar um agendamento com sucesso', () => {
    const dto = {
      medico_id: 1,
      paciente_nome: 'Carlos Almeida',
      data_horario: '2024-10-05 09:00',
    };

    const result = service.criarAgendamento(dto);

    expect(result).toEqual({
      mensagem: 'Agendamento realizado com sucesso',
      agendamento: {
        medico: 'Dr. João Silva',
        paciente: 'Carlos Almeida',
        data_horario: '2024-10-05 09:00',
      },
    });

    // Verifica se o horário foi removido dos horários disponíveis
    const medico = agendaService.getMedicoById(1);
    expect(medico?.horarios_disponiveis).not.toContain('2024-10-05 09:00');
  });

  it('deve lançar exceção se o médico não for encontrado', () => {
    const dto = {
      medico_id: 999,
      paciente_nome: 'Carlos Almeida',
      data_horario: '2024-10-05 09:00',
    };

    expect(() => service.criarAgendamento(dto)).toThrow(NotFoundException);
  });

  it('deve lançar exceção se o horário não estiver disponível', () => {
    const dto = {
      medico_id: 1,
      paciente_nome: 'Carlos Almeida',
      data_horario: '2024-10-05 15:00',
    };

    expect(() => service.criarAgendamento(dto)).toThrow(NotFoundException);
  });
});
