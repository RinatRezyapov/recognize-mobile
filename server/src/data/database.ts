export const getCourses = (userId: number, pgPool) => {
  return pgPool?.query(`SELECT * FROM courses WHERE author_id = '${userId}'`).then(response => {
    return response.rows.map(v => ({ ...v, id: v.id }))
  })
}

export const getCourse = (courseId: number, pgPool) => {
  return pgPool?.query(`SELECT * FROM courses WHERE id = '${courseId}'`).then(response => response.rows?.[0]);
}

export const addCourse = (pgPool, authorId, data) => {
  return pgPool?.query(`INSERT INTO courses (
    author_id,
    title,
    description,
    body, 
    created_at, 
    updated_at
    ) VALUES (
      '${authorId}', 
      '${data.title}', 
      '${data.description}', 
      '${data.body}', 
      '${data.createdAt}', 
      '${data.updatedAt}'
    ) returning *;`).then(response => response.rows?.[0]);
}

export const updateCourse = (pgPool, id, data) => {
  return pgPool?.query(`UPDATE courses SET title='${data.title}', description='${data.description}', body='${data.body}' WHERE id=${id} RETURNING *;`).then(response => response.rows?.[0]);
}

export const removeCourse = (pgPool, courseId) => {
  return pgPool?.query(`DELETE FROM courses WHERE id = ${courseId}`).then(response => response.rows?.[0]);
}

export const getUser = (userId: number, pgPool) => {
  return  pgPool?.query(`SELECT * FROM users WHERE id=${userId}`).then(response => response.rows?.[0]);
}

export const getAllCourses = (pgPool) => {
  return pgPool?.query(`SELECT * FROM courses;`).then(response => {
    return response.rows.map(v => ({ ...v, id: v.id }))
  })
}