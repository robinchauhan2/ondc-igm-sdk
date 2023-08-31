import { RouteSpecificManagerProps } from '../../interfaces/manager.type';
import SellerService from '../../services/sellerServices';

// Create an instance of SellerService to handle seller-related actions
const sellerService = new SellerService();

// Define the SellerManager class responsible for handling seller-related actions
class SellerManager {
  /**
   * Handle logistics-related issue from seller to logistics.
   * @param issue - The issue data to be managed.
   * @param onError - Callback for error handling.
   * @param onNack - Callback for nack handling.
   * @param onSuccess - Callback for success handling.
   */
  async logistics_issue({ issue, onError, onNack, onSuccess }: RouteSpecificManagerProps) {
    try {
      // Make an asynchronous call to SellerService to perform the 'issueToLogistics' action
      const response: any = await sellerService.issueToLogistics(issue!);

      // Check the response status and take appropriate actions
      if (response.status === 200) {
        if (response.data.message.ack.status === 'ACK') {
          // Call the success callback if the action was successful
          return onSuccess(response.data);
        } else {
          if (onNack) {
            // Call the nack callback if the action encountered a 'nack'
            return onNack(response.data);
          }
        }
      }
      // Call the error callback for any other scenario
      return onError(response.data);
    } catch (e) {
      if (onError) {
        // Call the error callback if an exception occurs
        onError(e);
      }
    }
  }

  /**
   * Handle logistics-related issue_status from seller to logistics.
   * @param issue_status - The issue_status data to be managed.
   * @param onError - Callback for error handling.
   * @param onNack - Callback for nack handling.
   * @param onSuccess - Callback for success handling.
   */
  async logistics_issue_status({ issue_status, onError, onNack, onSuccess }: RouteSpecificManagerProps) {
    try {
      // Make an asynchronous call to SellerService to perform the 'issue_statusToLogistics' action
      const response: any = await sellerService.issue_statusToLogistics(issue_status!);

      // Check the response status and take appropriate actions
      if (response.status === 200) {
        if (response.data.message.ack.status === 'ACK') {
          // Call the success callback if the action was successful
          return onSuccess(response.data);
        } else {
          if (onNack) {
            // Call the nack callback if the action encountered a 'nack'
            return onNack(response.data);
          }
        }
      }
      // Call the error callback for any other scenario
      return onError(response.data);
    } catch (e) {
      if (onError) {
        // Call the error callback if an exception occurs
        onError(e);
      }
    }
  }

  /**
   * Handle on_issue action from seller's perspective.
   * @param on_issue - The on_issue data to be managed.
   * @param onError - Callback for error handling.
   * @param onNack - Callback for nack handling.
   * @param onSuccess - Callback for success handling.
   */
  async on_issue({ on_issue, onError, onNack, onSuccess }: RouteSpecificManagerProps) {
    try {
      // Make an asynchronous call to SellerService to perform the 'on_issue_post' action
      const response: any = await sellerService.on_issue_post(on_issue!);

      // Check the response status and take appropriate actions
      if (response.status === 200) {
        if (response.data.message.ack.status === 'ACK') {
          // Call the success callback if the action was successful
          return onSuccess(response.data);
        } else {
          if (onNack) {
            // Call the nack callback if the action encountered a 'nack'
            return onNack(response.data);
          }
        }
      }
      // Call the error callback for any other scenario
      return onError(response.data);
    } catch (e) {
      if (onError) {
        // Call the error callback if an exception occurs
        onError(e);
      }
    }
  }

  /**
   * Handle on_issue_status action from seller's perspective.
   * @param on_issue_status - The on_issue_status data to be managed.
   * @param onError - Callback for error handling.
   * @param onNack - Callback for nack handling.
   * @param onSuccess - Callback for success handling.
   */
  async on_issue_status({ on_issue_status, onError, onNack, onSuccess }: RouteSpecificManagerProps) {
    try {
      // Make an asynchronous call to SellerService to perform the 'on_issue_status_post' action
      const response: any = await sellerService.on_issue_status_post(on_issue_status!);

      // Check the response status and take appropriate actions
      if (response.status === 200) {
        if (response.data.message.ack.status === 'ACK') {
          // Call the success callback if the action was successful
          return onSuccess(response.data);
        } else {
          if (onNack) {
            // Call the nack callback if the action encountered a 'nack'
            return onNack(response.data);
          }
        }
      }
      // Call the error callback for any other scenario
      return onError(response.data);
    } catch (e) {
      if (onError) {
        // Call the error callback if an exception occurs
        onError(e);
      }
    }
  }
}

// Export the SellerManager class as the default module
export default SellerManager;
