import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from './entities/message.entity';
import { CreateMessageDto } from './dto/create-message-dto';

@Injectable()
export class MessagesService {
	constructor(@InjectRepository(Message) private readonly messageRepository: Repository<Message>) {}

	async findAll(): Promise<Message[]> {
		return await this.messageRepository.find();
	}

	async create(message: CreateMessageDto): Promise<Message> {
		const newMessage = new Message();
		newMessage.content = message.content;
		newMessage.nickname = message.nickname;

		return await this.messageRepository.save(newMessage);
	}

	async update(id: number, message: CreateMessageDto): Promise<Message> {
		const messageToUpdate = await this.messageRepository.findOne(id);
		messageToUpdate.content = message.content;
		messageToUpdate.nickname = message.nickname;

		return await this.messageRepository.save(messageToUpdate);
	}

	async delete(id: number): Promise<any> {
		return await this.messageRepository.delete(id);
	}
}
