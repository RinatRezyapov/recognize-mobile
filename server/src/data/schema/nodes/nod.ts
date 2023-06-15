import {fromGlobalId, nodeDefinitions} from 'graphql-relay';
import {Course, Score, User, getCourse, getScore, getUser} from '../../database';
import {GraphQLObjectType} from 'graphql';

function swapiTypeToGraphQLType(obj: any): GraphQLObjectType {
  const GraphQLScore = require('./Score').default;
  const GraphQLUser = require('./User').default;
  const GraphQLCourse = require('./Course').default;

  if (obj instanceof Course) {
    return GraphQLCourse;
  } else if (obj instanceof User) {
    return GraphQLUser;
  } else if (obj instanceof Score) {
    return GraphQLScore;
  } else {
    throw new Error('Unrecognized type `' + obj + '`.');
  }
}

export default nodeDefinitions(
  (globalId, {pgPool}) => {
    const {type, id} = fromGlobalId(globalId);

    if (type === 'Course') {
      return getCourse(id, pgPool);
    } else if (type === 'User') {
      return getUser(id, pgPool);
    } else if (type === 'Score') {
      const [userId, courseId] = id.split(':');
      return getScore(userId, courseId, pgPool);
    }

    return null;
  },
  obj => swapiTypeToGraphQLType(obj),
);
