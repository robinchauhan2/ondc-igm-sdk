import { IGM_ROUTES, EvaluateRoute, IssuesParamaters, ERROR_CODES } from '../interfaces/igm.types';
import igmController from '../controller/igm.controller';
import BuyerManager from '../manager/buyer';
import { RouteSpecificManagerProps } from '../interfaces/manager.type';
import SellerManager from '../manager/seller';
import LogisticsManager from '../manager/logistics';

const buyerManager = new BuyerManager();
const sellerManager = new SellerManager();
const logisticsManager = new LogisticsManager();

class Issues {
  config: IssuesParamaters | undefined;

  init(params: IssuesParamaters) {
    if (!this.config) this.config = { ...params };
    else throw new Error('Issues class has already been initialised');
  }

  /**
   * Evaluates the provided route and invokes the corresponding controller function.
   *
   * @param req - The HTTP request object.
   * @param res - The HTTP response object.
   * @param route - The route to be evaluated.
   * @returns An object with error information if an error occurs; otherwise, it returns undefined.
   */
  evaluateRoute({ req, res, route }: EvaluateRoute) {
    try {
      switch (route) {
        case IGM_ROUTES.ISSUE:
          // split validation logic in different function

          if (!(this.config?.npType.includes('SELLER') || this.config?.npType.includes('LOGISTICS')))
            throw new Error('issue endpoint cannot be hosted if NP is not seller');
          igmController.issue({ req, res });

          // split post-callback action in different function
          if (this.config.onSuccess?.[IGM_ROUTES.ISSUE]) {
            this.config.onSuccess?.[IGM_ROUTES.ISSUE]('');
          }
          break;
        case IGM_ROUTES.ON_ISSUE:
          // split validation logic in different function
          if (!this.config?.npType.includes('BUYER'))
            throw new Error('on_issue endpoint cannot be hosted if NP is not buyer');
          igmController.on_issue(req, res);
          // split post-callback action in different function
          if (this.config.onSuccess?.[IGM_ROUTES.ON_ISSUE]) {
            this.config.onSuccess?.[IGM_ROUTES.ON_ISSUE]('');
          }
          break;
        case IGM_ROUTES.ISSUE_STATUS:
          // split validation logic in different function
          if (!(this.config?.npType.includes('SELLER') || this.config?.npType.includes('LOGISTICS')))
            throw new Error('issue_status endpoint cannot be hosted if NP is not seller');
          igmController.issue_status(req, res);
          // split post-callback action in different function
          if (this.config.onSuccess?.[IGM_ROUTES.ISSUE_STATUS]) {
            this.config.onSuccess?.[IGM_ROUTES.ISSUE_STATUS]('');
          }
          break;
        case IGM_ROUTES.ON_ISSUE_STATUS:
          // split validation logic in different function
          if (!this.config?.npType.includes('BUYER'))
            throw new Error('on_issue_status endpoint cannot be hosted if NP is not buyer');
          igmController.on_issue_status(req, res);
          // split post-callback action in different function
          if (this.config.onSuccess?.[IGM_ROUTES.ON_ISSUE_STATUS]) {
            this.config.onSuccess?.[IGM_ROUTES.ON_ISSUE_STATUS]('');
          }
          break;
        default:
          throw new Error('Unknown route');
      }
    } catch (err: any) {
      const errPayload = { message: err?.message, code: ERROR_CODES.ROUTE_NOT_VALID };
      if (this.config?.onError) this.config?.onError(errPayload);
      return { ...errPayload, error: true };
    }
    return { success: true };
  }

  /**
   * Delegate a buyer issue to the BuyerManager.
   * @param issue - The issue to be managed.
   * @param onError - Callback for error handling.
   * @param onNack - Callback for nack handling.
   * @param onSuccess - Callback for success handling.
   */
  buyerIssue({ issue, onError, onNack, onSuccess }: RouteSpecificManagerProps) {
    return buyerManager.issue({ issue, onError, onNack, onSuccess });
  }

  /**
   * Delegate a seller on_issue to the SellerManager.
   * @param on_issue - The on_issue data to be managed.
   */
  sellerOnIssue({ on_issue, onError, onNack, onSuccess }: RouteSpecificManagerProps) {
    return sellerManager.on_issue({ on_issue, onError, onNack, onSuccess });
  }

  /**
   * Delegate a buyer issue_status to the BuyerManager.
   * @param issue_status - The issue_status data to be managed.
   */
  buyerIssueStatus({ issue_status, onError, onNack, onSuccess }: RouteSpecificManagerProps) {
    return buyerManager.issue_status({ issue_status, onError, onNack, onSuccess });
  }

  /**
   * Delegate a seller on_issue_status to the SellerManager.
   * @param on_issue_status - The on_issue_status data to be managed.
   */
  sellerOnIssueStatus({ on_issue_status, onError, onNack, onSuccess }: RouteSpecificManagerProps) {
    return sellerManager.on_issue_status({ on_issue_status, onError, onNack, onSuccess });
  }

  /**
   * Delegate a seller issue to the logistics manager.
   * @param issue - The issue data to be managed.
   */
  issueSellerToLogisitics({ issue, onError, onNack, onSuccess }: RouteSpecificManagerProps) {
    return sellerManager.logistics_issue({ issue, onError, onNack, onSuccess });
  }

  /**
   * Delegate a seller issue_status to the logistics manager.
   * @param issue_status - The issue_status data to be managed.
   */
  issueStatusSellerToLogisitics({ issue_status, onError, onNack, onSuccess }: RouteSpecificManagerProps) {
    return sellerManager.logistics_issue_status({ issue_status, onError, onNack, onSuccess });
  }

  /**
   * Delegate an on_issue to the logistics manager from a buyer perspective.
   * @param on_issue - The on_issue data to be managed.
   */
  onIssueFromLogisitics({ on_issue, onError, onNack, onSuccess }: RouteSpecificManagerProps) {
    return logisticsManager.on_issue({ on_issue, onError, onNack, onSuccess });
  }

  /**
   * Delegate an on_issue_status to the logistics manager from a buyer perspective.
   * @param on_issue_status - The on_issue_status data to be managed.
   */
  onIssueStatusFromLogistics({ on_issue_status, onError, onNack, onSuccess }: RouteSpecificManagerProps) {
    return logisticsManager.on_issue_status({ on_issue_status, onError, onNack, onSuccess });
  }
}

export default Issues;
