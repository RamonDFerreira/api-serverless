import { Module } from '@nestjs/common';
import { AgendaModule } from './agenda/agenda.module';
import { AgendamentoModule } from './agendamento/agendamento.module';

@Module({
  imports: [AgendaModule, AgendamentoModule],
})
export class AppModule {}
