export const getCourses = (userId: string, pgPool) => {
  return pgPool?.query(`SELECT * FROM courses WHERE author_id = '${userId}'`).then(response => {
    return response.rows.map(v => ({ ...v, id: v.id.toString() }))
  })
}

export const getCourse = (courseId: string, pgPool) => {
  return pgPool?.query(`SELECT * FROM courses WHERE id = '${courseId}'`).then(response => response.rows?.[0]);
}

export const getUser = (userId: string, pgPool) => {
  return  pgPool?.query(`SELECT * FROM users WHERE id = ${userId}`).then(response => response.rows?.[0]);
}