import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ unique: true })
  slug: string;

  @Column('text')
  content: string;

  @Column()
  excerpt: string;

  @Column({ nullable: true })
  coverImgUrl: string;

  @Column({ default: false })
  published: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;

  // Many to One <- authorId <- FK para User
}
