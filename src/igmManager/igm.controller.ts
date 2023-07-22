import { Router, Request, Response, NextFunction } from 'express';

class IGMController {
  constructor() {
    this.issue = this.issue.bind(this);
  }

  issue(req: Request, res: Response) {
    // TO-DO
  }

  on_issue(req: Request, res: Response) {
    // TO-DO
  }

  issue_status(req: Request, res: Response) {
    // TO-DO
  }

  on_issue_status(req: Request, res: Response) {
    // TO-DO
  }
}

export default new IGMController();
