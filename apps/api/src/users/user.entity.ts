import { Exclude } from 'class-transformer';
import { Column, Entity } from 'typeorm';
import { CommonEntity } from '../common/common.entity';
// import { OneToMany } from 'typeorm';
// import Post from '../posts/post.entity';

@Entity({ name: 'user' })
export class UserEntity extends CommonEntity {
  @Column({ unique: true })
  public email: string;

  @Column()
  public name: string;

  @Column()
  @Exclude()
  public password: string;

  @Column({ default: '3' })
  public lv: number;

  @Column({ type: 'text', nullable: true })
  public photo: string;

  @Column({ type: 'boolean' })
  public termsAgree: boolean;

  @Column({ type: 'boolean', default: true })
  public approval: boolean;

  // @OneToMany(() => Post, (post: Post) => post.author)
  // public posts?: Post[];
}
