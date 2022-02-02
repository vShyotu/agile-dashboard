import { rest } from 'msw';

const stories = [
  {
    id: '1',
    title: 'Task A',
    description: 'Task description',
    acceptanceCriteria: ['Given When Then 1'],
  },
  {
    id: '2',
    title: 'Task B',
    description: 'Task description 2',
    acceptanceCriteria: ['Given When Then 1'],
  },
];

export const handlers = [
  rest.get('/stories/:projectId', (req, res, ctx) => {
    const { projectId } = req.params;

    if (projectId !== '1') {
      return res(ctx.status(404), ctx.json([]));
    }

    return res(ctx.status(200), ctx.json(stories));
  }),
  rest.post('/stories/create', (req, res, ctx) => {
    const { title, description, acceptanceCriteria } = JSON.parse(req.body);

    if (!title && !description && !acceptanceCriteria) {
      return res(
        ctx.status(400),
        ctx.json({ errors: 'Bad request - story values were all empty' })
      );
    }

    stories.push({ title, description, acceptanceCriteria });

    return res(ctx.status(201), ctx.json({}));
  }),
];
