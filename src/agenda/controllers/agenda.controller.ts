import { Controller, Get } from '@nestjs/common';
import { AgendaService } from '../services/agenda.service';
import { AgendasDto } from '../dtos/agenda.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Agendas')
@Controller('agendas')
export class AgendaController {
  constructor(private readonly agendaService: AgendaService) {}

  @Get()
  @ApiOperation({ summary: 'Obter agendas e horários dos médicos' })
  @ApiResponse({
    status: 200,
    description: 'Lista de médicos com suas agendas.',
    type: AgendasDto,
  })
  getAgendas(): AgendasDto {
    const medicos = this.agendaService.getAgendas();
    return { medicos };
  }
}
