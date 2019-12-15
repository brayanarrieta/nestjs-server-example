import { Controller, Post, Body, Get, Put, Delete } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message-dto';

@Controller('messages')
export class MessagesController {

    @Post()
    create(@Body() createMessageDTO: CreateMessageDto) {
        return 'The message was created';
    }

    @Get()
    findAll() {
        return 'Messages list';
    }

    @Put(':id')
    update(@Body() updateMessageDTO: CreateMessageDto) {
        return 'The message was updated';
    }

    @Delete(':id')
    delete() {
        return 'The message was deleted';
    }
}
