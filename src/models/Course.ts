import Id from './Id';
import { Option } from 'fp-ts/lib/Option';
import File from './File';

export default class Course {
  $Type = 'Course';
  id: Option<string>;
  title: Option<string>;
  data: Option<string>;
  picture: Option<Id<File>>;
  description: Option<string>;
  tags: Option<string>;
  createdAt: Option<Date>;
  updatedAt: Option<Date>;

  constructor({
    id,
    title,
    data,
    picture,
    description,
    tags,
    createdAt,
    updatedAt,
    ...rest
  }: {
    id: Option<string>;
    title: Option<string>;
    data: Option<string>;
    picture: Option<Id<File>>;
    description: Option<string>;
    tags: Option<string>;
    createdAt: Option<Date>;
    updatedAt: Option<Date>;
  }) {
    this.id = id;
    this.title = title;
    this.data = data;
    this.picture = picture;
    this.description = description;
    this.tags = tags;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
