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

export const updateCourse = (pgPool, id, data) => {
  return pgPool
    ?.query(
      `UPDATE courses SET title='${data.title}', description='${data.description}', body='${data.body}' WHERE id='${id}' RETURNING *;`,
    )
    .then(response => response.rows?.[0]);
};

export const removeCourse = (courseId, pgPool) => {
  return pgPool?.query(`DELETE FROM courses WHERE id = '${courseId}'`).then(response => response.rows?.[0]);
};

export const getUser = (userId: number, pgPool) => {
  return pgPool?.query(`SELECT * FROM users WHERE id='${userId}'`).then(response => response.rows?.[0]);
};

export const getAllCourses = pgPool => {
  return pgPool?.query(`SELECT * FROM courses;`).then(response => {
    return response.rows.map(v => ({...v, id: v.id}));
  });
};

export const likeCourse = (userId, courseId, pgPool) => {
  return pgPool
    ?.query(`INSERT INTO likes (user_id, course_id) VALUES ('${userId}', '${courseId}')`)
    .then(response => response.rows?.[0]);
};

export const unlikeCourse = (userId, courseId, pgPool) => {
  return pgPool
    ?.query(`DELETE FROM likes WHERE course_id='${courseId}' AND user_id='${userId}'`)
    .then(response => response.rows?.[0]);
};

export const deleteCourseLikes = (courseId, pgPool) => {
  return pgPool?.query(`DELETE FROM likes WHERE course_id='${courseId}'`).then(response => response.rows?.[0]);
};

export const getCourseLikes = (id, pgPool) => {
  return pgPool?.query(`SELECT * FROM likes where course_id='${id}';`).then(response => {
    return response.rows;
  });
};

export const getCourseScores = (id, pgPool) => {
  return pgPool?.query(`SELECT * FROM scores where course_id='${id}';`).then(response => {
    return response.rows;
  });
};

export const getScore = (userId, courseId, pgPool) => {
  return pgPool?.query(`SELECT * FROM scores where user_id='${userId}' AND course_id='${courseId}';`).then(response => {
    return response.rows?.[0];
  });
};

export const addScore = (userId, courseId, score, sequence, pgPool) => {
  return pgPool
    ?.query(
      `INSERT into scores (user_id, course_id, score, sequence) VALUES ('${userId}', '${courseId}', ${score}, '${sequence}');`,
    )
    .then(response => {
      return response.rows;
    });
};

export const deleteCourseScores = (courseId, pgPool) => {
  return pgPool?.query(`DELETE FROM scores WHERE course_id='${courseId}'`).then(response => {
    return response.rows;
  });
};

export const updateScore = (userId, courseId, score, sequence, pgPool) => {
  return pgPool
    ?.query(
      `UPDATE scores SET score=${score}, sequence='${sequence}' where user_id='${userId}' AND course_id='${courseId}';`,
    )
    .then(response => {
      return response.rows;
    });
};

export const getAllScores = pgPool => {
  return pgPool?.query(`SELECT * FROM scores ORDER BY score asc;`).then(response => {
    return response.rows;
  });
};
//UPDATE courses SET title='${data.title}', description='${data.description}', body='${data.body}' WHERE id='${id}' RETURNING *;
