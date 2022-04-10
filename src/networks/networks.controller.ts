import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NetworksService } from './networks.service';
import { CreateNetworkDto } from './dto/create-network.dto';
import { UpdateNetworkDto } from './dto/update-network.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { NetworkEntity } from './entities/network.entity';

@Controller('networks')
@ApiTags('Networks')
export class NetworksController {
  constructor(private readonly networksService: NetworksService) {}

  @Post()
  @ApiCreatedResponse({ type: NetworkEntity, isArray: true })
  create(@Body() createNetworkDto: CreateNetworkDto) {
    return this.networksService.create(createNetworkDto);
  }

  @Get()
  @ApiOkResponse({ type: NetworkEntity, isArray: true })
  findAll() {
    return this.networksService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: NetworkEntity })
  findOne(@Param('id') id: string) {
    return this.networksService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: NetworkEntity })
  update(@Param('id') id: string, @Body() updateNetworkDto: UpdateNetworkDto) {
    return this.networksService.update(+id, updateNetworkDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: NetworkEntity })
  remove(@Param('id') id: string) {
    return this.networksService.remove(+id);
  }
}
