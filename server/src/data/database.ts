export const getCourses = (userId: string, pgPool) => {
  return pgPool?.query(`SELECT * FROM courses WHERE author_id = '${userId}'`).then(response => {
    return response.rows.map(v => ({ ...v, id: v.id.toString() }))
  })
}

export const getCourse = (courseId: string, pgPool) => {
  return pgPool?.query(`SELECT * FROM courses WHERE id = '${courseId}'`).then(response => response.rows?.[0]);
}

export const addCourse = (pgPool, data) => {
  return pgPool?.query(`INSERT INTO courses (
    uuid,
    author_id,
    title,
    description,
    body, 
    created_at, 
    updated_at
    ) VALUES (
      '2f2b78e1-0248-4393-a8d7-76358b42a139',
      '${data.authorId}', 
      '${data.title}', 
      '${data.description}', 
      '${data.body}', 
      '${data.createdAt}', 
      '${data.updatedAt}'
    ) returning *;`).then(response => response.rows?.[0]);
}

export const getUser = (userId: string, pgPool) => {
  return  pgPool?.query(`SELECT * FROM users WHERE id = ${userId}`).then(response => response.rows?.[0]);
}