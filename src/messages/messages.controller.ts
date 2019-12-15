import { Controller, Post, Body, Get, Put, Delete, Res, HttpStatus, Param } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message-dto';
import { MessagesService } from './messages.service';
import { Message } from './entities/message.entity';

@Controller('messages')
export class MessagesController {

    constructor(private messagesService: MessagesService) { }

    @Post()
    create(@Body() createMessageDTO: CreateMessageDto, @Res() response) {
        this.messagesService.create(createMessageDTO).then((message => {
            response.status(HttpStatus.CREATED).json(message);
        })).catch(() => {
            response.status(HttpStatus.BAD_REQUEST).json({ message: 'An error has occurred creating the message' });
        });
    }

    @Get()
    findAll(@Res() response){
        this.messagesService.findAll().then((messages => {
            response.status(HttpStatus.OK).json(messages);
        })).catch(() => {
            response.status(HttpStatus.BAD_REQUEST).json({ message: 'An error has occurred listing the messages' });
        });
    }

    @Put(':id')
    update(@Body() updateMessageDTO: CreateMessageDto, @Res() response, @Param('id') id) {
        this.messagesService.update(id, updateMessageDTO).then((message => {
            response.status(HttpStatus.OK).json(message);
        })).catch(() => {
            response.status(HttpStatus.BAD_REQUEST).json({ message: 'An error has occurred updating the message' });
        });
    }

    @Delete(':id')
    delete(@Res() response, @Param('id') id) {
        this.messagesService.delete(id).then((res => {
            response.status(HttpStatus.OK).json(res);
        })).catch(() => {
            response.status(HttpStatus.BAD_REQUEST).json({ message: 'An error has occurred deleting the message' });
        });
    }
}
