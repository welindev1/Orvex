import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ProofsService } from './proofs.service';
import { CreateProofDto } from './dto/create-proof.dto';
import { UpdateProofDto } from './dto/update-proof.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('proofs')
export class ProofsController {
  constructor(private readonly proofsService: ProofsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createProofDto: CreateProofDto) {
    return this.proofsService.create(createProofDto);
  }

  // Public endpoint
  @Get()
  findAll() {
    return this.proofsService.findAll();
  }

  // Public endpoint
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.proofsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProofDto: UpdateProofDto) {
    return this.proofsService.update(id, updateProofDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proofsService.remove(id);
  }
}
