import express, { Response } from 'express';
import issue from './Issue';
import { ERROR_CODES, IGM_ROUTES, IgmRoutes } from './igm.types';

const router = express.Router();

const evaluateErrorCode = (error: { [key: string]: any; code: ERROR_CODES }, res: Response) => {
  switch (error.code) {
    case ERROR_CODES.ROUTE_NOT_VALID:
      return res.sendStatus(404);
    default:
      return res.json(500).json({ message: 'Something went wrong' });
  }
};

router.get('/:route(issue|on_issue|issue_status|on_issue_status)', (req, res) => {
  const route: IgmRoutes = <IGM_ROUTES>req.params.route;
  if (!issue.config) throw new Error('IGM has not been initialised');

  const response = issue.evaluateRoute({ req, res, route });

  if (response?.error) {
    return evaluateErrorCode(response, res);
  }
  return res.status(200).json({ name: route });
});

export default router;
