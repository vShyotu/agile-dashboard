import { rest } from 'msw';

export const handlers = [
  rest.get('/stories/:projectId', (req, res, ctx) => {
    const { projectId } = req.params;

    if (projectId !== '1') {
      return res(ctx.status(404), ctx.json([]));
    }

    return res(
      ctx.status(200),
      ctx.json([
        { id: '1', name: 'Task A' },
        { id: '2', name: 'Task B' },
      ])
    );
  }),
];
