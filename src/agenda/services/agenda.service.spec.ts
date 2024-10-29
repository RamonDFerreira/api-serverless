import { Test, TestingModule } from '@nestjs/testing';
import { AgendaService } from '../services/agenda.service';

describe('AgendaService', () => {
  let service: AgendaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgendaService],
    }).compile();

    service = module.get<AgendaService>(AgendaService);
  });

  it('deve retornar a lista de médicos', () => {
    const medicos = service.getAgendas();
    expect(medicos).toBeDefined();
    expect(medicos.length).toBeGreaterThan(0);
  });

  it('deve retornar um médico por ID', () => {
    const medico = service.getMedicoById(1);
    expect(medico).toBeDefined();
    expect(medico?.id).toEqual(1);
  });

  it('deve retornar undefined para médico inexistente', () => {
    const medico = service.getMedicoById(999);
    expect(medico).toBeUndefined();
  });
});
