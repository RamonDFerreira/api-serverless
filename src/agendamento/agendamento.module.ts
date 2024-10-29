import { Module } from '@nestjs/common';
import { AgendamentoController } from './controllers/agendamento.controller';
import { AgendamentoService } from './service/agendamento.service';
import { AgendaModule } from '../agenda/agenda.module';

@Module({
  imports: [AgendaModule],
  controllers: [AgendamentoController],
  providers: [AgendamentoService],
})
export class AgendamentoModule {}
