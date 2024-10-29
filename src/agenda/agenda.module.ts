import { Module } from '@nestjs/common';
import { AgendaController } from './controllers/agenda.controller';
import { AgendaService } from './services/agenda.service';

@Module({
  controllers: [AgendaController],
  providers: [AgendaService],
  exports: [AgendaService],
})
export class AgendaModule {}
