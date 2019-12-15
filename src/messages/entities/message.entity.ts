import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Message {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    nickname: string;

    @Column()
    content: string;

}
