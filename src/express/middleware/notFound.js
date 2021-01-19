import Boom from '@hapi/boom';

function notFound() {
  throw Boom.notFound();
}

export default notFound;
