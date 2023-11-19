import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMesageDto } from './dtos/create-message.dto';
@Controller('/messages')
export class MessagesController {
    @Get()
    listMessages(){

    }
    @Post()
    createMessage(@Body() body: CreateMesageDto){
        console.log(body);
    }
    @Get('/:id')
    getMessage(@Param('id') id : string){
        console.log(id);
    }
}
