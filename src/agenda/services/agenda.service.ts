import { Injectable } from '@nestjs/common';
import { MedicoDto } from '../dtos/agenda.dto';
import { medicosMock } from '../mocks/agenda.mock';

@Injectable()
export class AgendaService {
  private medicos: MedicoDto[] = medicosMock;

  getAgendas(): MedicoDto[] {
    return this.medicos;
  }

  getMedicoById(id: number): MedicoDto | undefined {
    return this.medicos.find((medico) => medico.id === id);
  }

  atualizarHorariosMedico(id: number, horarios: string[]): void {
    const medico = this.getMedicoById(id);
    if (medico) {
      medico.horarios_disponiveis = horarios;
    }
  }
}
