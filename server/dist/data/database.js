"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.getCourse = exports.getCourses = void 0;
const getCourses = (userId, pgPool) => {
    return pgPool?.query(`SELECT * FROM courses WHERE authorid = '${userId}'`).then(response => {
        return response.rows.map(v => ({ ...v, id: v.id.toString() }));
    });
};
exports.getCourses = getCourses;
const getCourse = (courseId, pgPool) => {
    return pgPool?.query(`SELECT * FROM courses WHERE id = '${courseId}'`).then(response => response.rows?.[0]);
};
exports.getCourse = getCourse;
const getUser = (userId, pgPool) => {
    return pgPool?.query(`SELECT * FROM users WHERE id = ${userId}`).then(response => response.rows?.[0]);
};
exports.getUser = getUser;
//# sourceMappingURL=database.js.map