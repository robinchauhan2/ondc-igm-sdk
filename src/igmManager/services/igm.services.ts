import { Request, Response } from 'express';
import BuyerServices from './buyerServices';
import SellerService from './sellerServices';
import IssueInstance from '../Issue/index';
import LogisticsServices from './logisticsServices';

// Create instances of relevant service classes
const sellerService = new SellerService();
const buyerServices = new BuyerServices();
const logisticsServices = new LogisticsServices();

// Define the IgmServices class responsible for managing various services related to IGM
class IgmServices {
  constructor() {
    // Bind the 'issue' method to ensure proper context when used as a callback
    this.issue = this.issue.bind(this);
  }

  /**
   * Handle the 'issue' action based on the configured NP type.
   * @param req - The HTTP request object.
   * @param res - The HTTP response object.
   */
  issue(req: Request, res: Response) {
    if (IssueInstance.config?.npType[0] === 'SELLER') {
      // If the configured NP type is 'SELLER', use the sellerService
      return sellerService.issue(req, res);
    }
    // Otherwise, use logisticsServices
    return logisticsServices.issue(req, res);
  }

  /**
   * Handle the 'on_issue' action based on the configured NP type.
   * @param req - The HTTP request object.
   * @param res - The HTTP response object.
   */
  on_issue(req: Request, res: Response) {
    if (IssueInstance.config?.npType[0] === 'BUYER') {
      // If the configured NP type is 'BUYER', use the buyerServices
      return buyerServices.on_issue(req, res);
    }
    // Otherwise, use sellerService
    return sellerService.on_issue(req, res);
  }

  /**
   * Handle the 'issue_status' action based on the configured NP type.
   * @param req - The HTTP request object.
   * @param res - The HTTP response object.
   */
  issue_status(req: Request, res: Response) {
    if (IssueInstance.config?.npType[0] === 'SELLER') {
      // If the configured NP type is 'SELLER', use the sellerService
      return sellerService.issue_status(req, res);
    }
    // Otherwise, use logisticsServices
    return logisticsServices.issue_status(req, res);
  }

  /**
   * Handle the 'on_issue_status' action based on the configured NP type.
   * @param req - The HTTP request object.
   * @param res - The HTTP response object.
   */
  on_issue_status(req: Request, res: Response) {
    if (IssueInstance.config?.npType[0] === 'BUYER') {
      // If the configured NP type is 'BUYER', use the buyerServices
      return buyerServices.on_issue_status(req, res);
    }
    // Otherwise, use sellerService
    return sellerService.on_issue_status(req, res);
  }
}

// Export the IgmServices class as the default module
export default IgmServices;
