import { IGM_ROUTES, EvaluateRoute, IssuesParamaters, ERROR_CODES } from '../igm.types';
import igmController from '../igm.controller';

class Issues {
  config: IssuesParamaters | undefined;

  init({ validateSchema, npType, context, domain }: IssuesParamaters) {
    if (!this.config) this.config = { validateSchema, npType, context, domain };
    else throw new Error('Issues class has already been initialised');
  }

  evaluateRoute({ req, res, route }: EvaluateRoute) {
    try {
      switch (route) {
        case IGM_ROUTES.ISSUE:
          if (!this.config?.npType.includes('SELLER'))
            throw new Error('issue endpoint cannot be hosted if NP is not seller');
          igmController.issue(req, res);
          break;
        case IGM_ROUTES.ON_ISSUE:
          if (!this.config?.npType.includes('BUYER'))
            throw new Error('on_issue endpoint cannot be hosted if NP is not buyer');
          igmController.on_issue(req, res);
          break;
        case IGM_ROUTES.ISSUE_STATUS:
          if (!this.config?.npType.includes('SELLER'))
            throw new Error('issue_status endpoint cannot be hosted if NP is not seller');
          igmController.issue_status(req, res);
          break;
        case IGM_ROUTES.ON_ISSUE_STATUS:
          if (!this.config?.npType.includes('BUYER'))
            throw new Error('on_issue_status endpoint cannot be hosted if NP is not buyer');
          igmController.on_issue_status(req, res);
          break;
        default:
          throw new Error('Unknown route');
      }
    } catch (err: any) {
      return { error: true, message: err?.message, code: ERROR_CODES.ROUTE_NOT_VALID };
    }
  }
}

export default Issues;
