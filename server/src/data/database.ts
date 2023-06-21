import {Pool} from 'pg';

export class Course {
  id: string;
  title: string;
  description: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  authorId: string;
  avatar: string;

  constructor(
    id: string,
    title: string,
    description: string,
    body: string,
    created_at: string,
    updated_at: string,
    author_id: string,
    avatar: string,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.body = body;
    this.createdAt = created_at;
    this.updatedAt = updated_at;
    this.authorId = author_id;
    this.avatar = avatar;
  }
}

export class User {
  id: string;
  email: string;
  username: string;
  firstLogin: string;
  lastLogin: string;

  constructor(id: string, email: string, username: string, firstLogin: string, lastLogin: string) {
    this.id = id;
    this.email = email;
    this.username = username;
    this.firstLogin = firstLogin;
    this.lastLogin = lastLogin;
  }
}

export class Score {
  userId: string;
  courseId: string;
  score: number;
  sequence: string;
  interval: number;
  wordsCount: number;
  constructor(userId: string, courseId: string, score: number, sequence: string, interval: number, wordsCount: number) {
    this.userId = userId;
    this.courseId = courseId;
    this.score = score;
    this.sequence = sequence;
    this.interval = interval;
    this.wordsCount = wordsCount;
  }
}

export class Streak {
  userId: string;
  courseId: string;
  streak: number;
  interval: number;
  wordsCount: number;
  constructor(userId: string, courseId: string, streak: number, interval: number, wordsCount: number) {
    this.userId = userId;
    this.courseId = courseId;
    this.streak = streak;
    this.interval = interval;
    this.wordsCount = wordsCount;
  }
}

export const getUser = (userId: string, pgPool: Pool) =>
  pgPool?.query(`SELECT * FROM users WHERE id='${userId}'`).then(response => {
    const user = response.rows?.[0];
    return new User(user.id, user.email, user.username, user.first_login, user.last_login);
  });

export const getUserByEmail = (email: string, pgPool: Pool) =>
  pgPool?.query(`SELECT * FROM users WHERE email = '${email}'`).then(response => {
    const user = response.rows?.[0];
    return new User(user.id, user.email, user.username, user.first_login, user.last_login);
  });

export const addUser = (email: string, username: string, pgPool: Pool) =>
  pgPool
    ?.query(`INSERT INTO users (email, username) VALUES ('${email}', '${username}');`)
    .then(response => response.rows?.[0]);

export const getCourses = (userId: string, pgPool): Promise<Course[]> =>
  pgPool
    ?.query(`SELECT * FROM courses WHERE author_id = '${userId}'`)
    .then(response =>
      response.rows.map(
        v => new Course(v.id, v.title, v.description, v.body, v.created_at, v.updated_at, v.author_id, v.avatar),
      ),
    );

export const getCourse = (courseId: number, pgPool): Promise<Course> =>
  pgPool?.query(`SELECT * FROM courses WHERE id = '${courseId}'`).then(response => {
    const course = response.rows?.[0];
    return new Course(
      course.id,
      course.title,
      course.description,
      course.body,
      course.created_at,
      course.updated_at,
      course.author_id,
      course.avatar,
    );
  });

export const addCourse = (pgPool, authorId, data) =>
  pgPool
    ?.query(
      `INSERT INTO courses (
    author_id,
    title,
    description,
    body, 
    avatar,
    created_at, 
    updated_at
    ) VALUES (
      '${authorId}', 
      '${data.title}', 
      '${data.description}', 
      '${data.body}', 
      '${data.avatar}', 
      '${data.createdAt}', 
      '${data.updatedAt}'
    ) returning *;`,
    )
    .then(response => response.rows?.[0]);

export const updateCourse = (id: string, data, pgPool: Pool) =>
  pgPool
    ?.query(
      `UPDATE courses SET title='${data.title}', description='${data.description}', body='${data.body}' WHERE id='${id}' RETURNING *;`,
    )
    .then(response => response.rows?.[0]);

export const removeCourse = (courseId: string, pgPool: Pool) =>
  pgPool?.query(`DELETE FROM courses WHERE id = '${courseId}'`).then(response => response.rows?.[0]);

export const fetchPaginatedCourses = async (first, after, last, before, pgPool: Pool) => {
  let query = 'SELECT * FROM courses ORDER BY created_at ASC';

  let params = [];

  // if (after) {
  //   query += ' WHERE id > $1';
  //   params.push(after);
  // }

  // if (before) {
  //   query += ' WHERE id < $1';
  //   params.push(before);
  // }

  // query += ' ORDER BY id';

  if (first) {
    query += ' LIMIT $1';
    params.push(first);
  }

  // if (last) {
  //   query += ' ORDER BY id DESC';
  //   query += ' LIMIT $2';
  //   params.push(last);
  // }

  // if (params.length === 0) {
  //   query += ' LIMIT 2';
  // }

  const result = await pgPool.query(query, params);
  console.log('Query ', query, params);
  return result.rows.map(
    v => new Course(v.id, v.title, v.description, v.body, v.created_at, v.updated_at, v.author_id, v.avatar),
  );
};

export const likeCourse = (userId: string, courseId: string, pgPool: Pool) =>
  pgPool
    ?.query(`INSERT INTO likes (user_id, course_id) VALUES ('${userId}', '${courseId}')`)
    .then(response => response.rows?.[0]);

export const unlikeCourse = (userId: string, courseId: string, pgPool: Pool) =>
  pgPool
    ?.query(`DELETE FROM likes WHERE course_id='${courseId}' AND user_id='${userId}'`)
    .then(response => response.rows?.[0]);

export const deleteCourseLikes = (courseId: string, pgPool: Pool) =>
  pgPool?.query(`DELETE FROM likes WHERE course_id='${courseId}'`).then(response => response.rows?.[0]);

export const getCourseLikes = (id: string, pgPool: Pool) =>
  pgPool?.query(`SELECT * FROM likes where course_id='${id}';`).then(response => response.rows);

export const getCourseScores = (id: string, pgPool: Pool) =>
  pgPool
    ?.query(`SELECT * FROM scores where course_id='${id}';`)
    .then(response =>
      response.rows.map(v => new Score(v.user_id, v.course_id, v.score, v.sequence, v.interval, v.words_count)),
    );

export const getScore = (userId: string, courseId: string, pgPool: Pool) =>
  pgPool?.query(`SELECT * FROM scores where user_id='${userId}' AND course_id='${courseId}';`).then(response => {
    const v = response.rows?.[0];
    return new Score(v.user_id, v.course_id, v.score, v.sequence, v.interval, v.words_count);
  });

export const addScore = (
  userId: string,
  courseId: string,
  score: number,
  sequence: string,
  interval: number,
  wordsCount: number,
  pgPool: Pool,
) =>
  pgPool
    ?.query(
      `INSERT into scores (user_id, course_id, score, sequence, interval, words_count) VALUES ('${userId}', '${courseId}', ${score}, '${sequence}', ${interval}, ${wordsCount});`,
    )
    .then(response => response.rows);

export const deleteCourseScores = (courseId: string, pgPool: Pool) =>
  pgPool?.query(`DELETE FROM scores WHERE course_id='${courseId}'`).then(response => response.rows);

export const updateScore = (
  userId: string,
  courseId: string,
  score: number,
  sequence: string,
  interval: number,
  wordsCount: number,
  pgPool: Pool,
) =>
  pgPool
    ?.query(
      `UPDATE scores SET score=${score}, sequence='${sequence}', interval=${interval}, words_count=${wordsCount}  where user_id='${userId}' AND course_id='${courseId}';`,
    )
    .then(response => response.rows);

export const getAllScores = (pgPool: Pool) =>
  pgPool
    ?.query(`SELECT * FROM scores ORDER BY score asc;`)
    .then(response =>
      response.rows.map(v => new Score(v.user_id, v.course_id, v.score, v.sequence, v.interval, v.words_count)),
    );

export const getAllScoresWhere = (wordsCount: number, interval: number, pgPool: Pool) =>
  pgPool
    ?.query(`SELECT * FROM scores where words_count=${wordsCount} AND interval=${interval} ORDER BY score asc;`)
    .then(response =>
      response.rows.map(v => new Score(v.user_id, v.course_id, v.score, v.sequence, v.interval, v.words_count)),
    );

export const getCourseStreaks = (id: string, pgPool: Pool) =>
  pgPool
    ?.query(`SELECT * FROM streaks where course_id='${id}';`)
    .then(response => response.rows.map(v => new Streak(v.user_id, v.course_id, v.streak, v.interval, v.words_count)));

export const getAllStreaks = (pgPool: Pool) =>
  pgPool
    ?.query(`SELECT * FROM streaks ORDER BY streak asc;`)
    .then(response => response.rows.map(v => new Streak(v.user_id, v.course_id, v.streak, v.interval, v.words_count)));

export const getStreak = (userId: string, courseId: string, pgPool: Pool) =>
  pgPool?.query(`SELECT * FROM streaks where user_id='${userId}' AND course_id='${courseId}';`).then(response => {
    const v = response.rows?.[0];
    return new Streak(v.user_id, v.course_id, v.streak, v.interval, v.words_count);
  });

export const addStreak = (
  userId: string,
  courseId: string,
  streak: number,
  interval: number,
  wordsCount: number,
  pgPool: Pool,
) =>
  pgPool
    ?.query(
      `INSERT into streaks (user_id, course_id, streak, interval, words_count) VALUES ('${userId}', '${courseId}', ${streak}, ${interval}, ${wordsCount});`,
    )
    .then(response => response.rows);

export const deleteCourseStreak = (courseId: string, pgPool: Pool) =>
  pgPool?.query(`DELETE FROM streaks WHERE course_id='${courseId}'`).then(response => response.rows);

export const updateStreak = (
  userId: string,
  courseId: string,
  streak: number,
  interval: number,
  wordsCount: number,
  pgPool: Pool,
) =>
  pgPool
    ?.query(
      `UPDATE streaks SET streak=${streak}, interval=${interval}, words_count=${wordsCount} where user_id='${userId}' AND course_id='${courseId}';`,
    )
    .then(response => response.rows);
