import {Pool} from 'pg';

export class Course {
  id: string;
  title: string;
  description: string;
  body: string;
  created_at: string;
  updated_at: string;
  author_id: string;
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
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.author_id = author_id;
    this.avatar = avatar;
  }
}

export class User {
  id: string;
  constructor(id: string) {
    this.id = id;
  }
}

export class Score {
  id: string;
  constructor(id: string) {
    this.id = id;
  }
}

export const getUser = (userId: number, pgPool: Pool) => {
  return pgPool?.query(`SELECT * FROM users WHERE id='${userId}'`).then(response => response.rows?.[0]);
};

export const getUserByEmail = (email: string, pgPool: Pool) => {
  return pgPool?.query(`SELECT * FROM users WHERE email = '${email}'`).then(response => response.rows?.[0]);
};

export const addUser = (email: string, username: string, pgPool: Pool) => {
  return pgPool
    ?.query(`INSERT INTO users (email, username) VALUES ('${email}', '${username}');`)
    .then(response => response.rows?.[0]);
};

export const getCourses = (userId: string, pgPool) => {
  return pgPool?.query(`SELECT * FROM courses WHERE author_id = '${userId}'`).then(response => {
    return response.rows.map(
      v => new Course(v.id, v.title, v.description, v.body, v.created_at, v.updated_at, v.author_id, v.avatar),
    );
  });
};

export const getCourse = (courseId: number, pgPool) => {
  return pgPool?.query(`SELECT * FROM courses WHERE id = '${courseId}'`).then(response => response.rows?.[0]);
};

export const addCourse = (pgPool, authorId, data) => {
  return pgPool
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
};

export const updateCourse = (id: string, data, pgPool: Pool) => {
  return pgPool
    ?.query(
      `UPDATE courses SET title='${data.title}', description='${data.description}', body='${data.body}' WHERE id='${id}' RETURNING *;`,
    )
    .then(response => response.rows?.[0]);
};

export const removeCourse = (courseId: string, pgPool: Pool) => {
  return pgPool?.query(`DELETE FROM courses WHERE id = '${courseId}'`).then(response => response.rows?.[0]);
};

export const getAllCourses = (pgPool: Pool, first: number) => {
  return pgPool?.query(`SELECT * FROM courses LIMIT ${first || 2};`).then(response => {
    return response.rows.map(
      v => new Course(v.id, v.title, v.description, v.body, v.created_at, v.updated_at, v.author_id, v.avatar),
    );
  });
};

export const likeCourse = (userId: string, courseId: string, pgPool: Pool) => {
  return pgPool
    ?.query(`INSERT INTO likes (user_id, course_id) VALUES ('${userId}', '${courseId}')`)
    .then(response => response.rows?.[0]);
};

export const unlikeCourse = (userId: string, courseId: string, pgPool: Pool) => {
  return pgPool
    ?.query(`DELETE FROM likes WHERE course_id='${courseId}' AND user_id='${userId}'`)
    .then(response => response.rows?.[0]);
};

export const deleteCourseLikes = (courseId: string, pgPool: Pool) => {
  return pgPool?.query(`DELETE FROM likes WHERE course_id='${courseId}'`).then(response => response.rows?.[0]);
};

export const getCourseLikes = (id: string, pgPool: Pool) => {
  return pgPool?.query(`SELECT * FROM likes where course_id='${id}';`).then(response => {
    return response.rows;
  });
};

export const getCourseScores = (id: string, pgPool: Pool) => {
  return pgPool?.query(`SELECT * FROM scores where course_id='${id}';`).then(response => {
    return response.rows;
  });
};

export const getScore = (userId: string, courseId: string, pgPool: Pool) => {
  return pgPool?.query(`SELECT * FROM scores where user_id='${userId}' AND course_id='${courseId}';`).then(response => {
    return response.rows?.[0];
  });
};

export const addScore = (
  userId: string,
  courseId: string,
  score: number,
  sequence: string,
  interval: number,
  wordsCount: number,
  pgPool: Pool,
) => {
  return pgPool
    ?.query(
      `INSERT into scores (user_id, course_id, score, sequence, interval, words_count) VALUES ('${userId}', '${courseId}', ${score}, '${sequence}', ${interval}, ${wordsCount});`,
    )
    .then(response => {
      return response.rows;
    });
};

export const deleteCourseScores = (courseId: string, pgPool: Pool) => {
  return pgPool?.query(`DELETE FROM scores WHERE course_id='${courseId}'`).then(response => {
    return response.rows;
  });
};

export const updateScore = (
  userId: string,
  courseId: string,
  score: number,
  sequence: string,
  interval: number,
  wordsCount: number,
  pgPool: Pool,
) => {
  return pgPool
    ?.query(
      `UPDATE scores SET score=${score}, sequence='${sequence}', interval=${interval}, words_count=${wordsCount}  where user_id='${userId}' AND course_id='${courseId}';`,
    )
    .then(response => {
      return response.rows;
    });
};

export const getAllScores = (pgPool: Pool) => {
  return pgPool?.query(`SELECT * FROM scores ORDER BY score asc;`).then(response => {
    return response.rows;
  });
};

export const getAllScoresWhere = (wordsCount: number, interval: number, pgPool: Pool) => {
  return pgPool
    ?.query(`SELECT * FROM scores where words_count=${wordsCount} AND interval=${interval} ORDER BY score asc;`)
    .then(response => response.rows);
};

export const getCourseStreaks = (id: string, pgPool: Pool) => {
  return pgPool?.query(`SELECT * FROM streaks where course_id='${id}';`).then(response => {
    return response.rows;
  });
};

export const getAllStreaks = (pgPool: Pool) => {
  return pgPool?.query(`SELECT * FROM streaks ORDER BY streak asc;`).then(response => {
    return response.rows;
  });
};

export const getStreak = (userId: string, courseId: string, pgPool: Pool) => {
  return pgPool
    ?.query(`SELECT * FROM streaks where user_id='${userId}' AND course_id='${courseId}';`)
    .then(response => {
      return response.rows?.[0];
    });
};

export const addStreak = (
  userId: string,
  courseId: string,
  streak: number,
  interval: number,
  wordsCount: number,
  pgPool: Pool,
) => {
  return pgPool
    ?.query(
      `INSERT into streaks (user_id, course_id, streak, interval, words_count) VALUES ('${userId}', '${courseId}', ${streak}, ${interval}, ${wordsCount});`,
    )
    .then(response => {
      return response.rows;
    });
};

export const deleteCourseStreak = (courseId: string, pgPool: Pool) => {
  return pgPool?.query(`DELETE FROM streaks WHERE course_id='${courseId}'`).then(response => {
    return response.rows;
  });
};

export const updateStreak = (
  userId: string,
  courseId: string,
  streak: number,
  interval: number,
  wordsCount: number,
  pgPool: Pool,
) => {
  return pgPool
    ?.query(
      `UPDATE streaks SET streak=${streak}, interval=${interval}, words_count=${wordsCount} where user_id='${userId}' AND course_id='${courseId}';`,
    )
    .then(response => {
      return response.rows;
    });
};
