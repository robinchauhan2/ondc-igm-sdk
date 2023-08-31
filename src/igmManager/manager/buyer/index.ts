import { RouteSpecificManagerProps } from '../../interfaces/manager.type';
import BuyerServices from '../../services/buyerServices';

// Create an instance of BuyerServices to handle buyer-related actions
const buyerServices = new BuyerServices();

// Define the BuyerManager class responsible for handling buyer-related actions
class BuyerManager {
  constructor() {
    // Bind the 'issue' method to ensure proper context when used as a callback
    this.issue = this.issue.bind(this);
  }

  /**
   * Handle the issue action for buyers.
   * @param issue - The issue data to be managed.
   * @param onError - Callback for error handling.
   * @param onNack - Callback for nack handling.
   * @param onSuccess - Callback for success handling.
   */
  async issue({ issue, onError, onNack, onSuccess }: RouteSpecificManagerProps) {
    try {
      // Make an asynchronous call to BuyerServices to perform the 'issue' action
      const response: any = await buyerServices.issue(issue!);

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
   * Handle the issue_status action for buyers.
   * @param issue_status - The issue_status data to be managed.
   */
  async issue_status({ issue_status, onError, onNack, onSuccess }: RouteSpecificManagerProps) {
    try {
      // Make an asynchronous call to BuyerServices to perform the 'issue_status' action
      const response: any = await buyerServices.issue_status(issue_status!);

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

// Export the BuyerManager class as the default module
export default BuyerManager;
