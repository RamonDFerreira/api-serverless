import { Controller, Post, Body } from '@nestjs/common';
import { AgendamentoService } from '../service/agendamento.service';
import {
  AgendamentoRespostaDto,
  CriarAgendamentoDto,
} from '../dtos/agendamento.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Agendamento')
@Controller('agendamento')
export class AgendamentoController {
  constructor(private readonly agendamentoService: AgendamentoService) {}

  @Post()
  @ApiOperation({ summary: 'Marcar agendamento do paciente' })
  @ApiResponse({
    status: 201,
    description: 'Agendamento criado com sucesso.',
    type: AgendamentoRespostaDto,
  })
  @ApiResponse({ status: 400, description: 'Requisição inválida.' })
  @ApiResponse({
    status: 404,
    description: 'Médico ou horário não encontrado.',
  })
  criarAgendamento(
    @Body() criarAgendamentoDto: CriarAgendamentoDto,
  ): AgendamentoRespostaDto {
    return this.agendamentoService.criarAgendamento(criarAgendamentoDto);
  }
}
