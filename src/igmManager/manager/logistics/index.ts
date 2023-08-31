import { RouteSpecificManagerProps } from '../../interfaces/manager.type';
import LogisticsServices from '../../services/logisticsServices';

// Create an instance of LogisticsServices to handle logistics-related actions
const logisticsService = new LogisticsServices();

// Define the LogisticsManager class responsible for handling logistics-related actions
class LogisticsManager {
  /**
   * Handle on_issue action from logistics's perspective.
   * @param on_issue - The on_issue data to be managed.
   * @param onError - Callback for error handling.
   * @param onNack - Callback for nack handling.
   * @param onSuccess - Callback for success handling.
   */
  async on_issue({ on_issue, onError, onNack, onSuccess }: RouteSpecificManagerProps) {
    try {
      // Make an asynchronous call to LogisticsServices to perform the 'on_issue' action
      const response: any = await logisticsService.on_issue(on_issue!);

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
   * Handle on_issue_status action from logistics's perspective.
   * @param on_issue_status - The on_issue_status data to be managed.
   * @param onError - Callback for error handling.
   * @param onNack - Callback for nack handling.
   * @param onSuccess - Callback for success handling.
   */
  async on_issue_status({ on_issue_status, onError, onNack, onSuccess }: RouteSpecificManagerProps) {
    try {
      // Make an asynchronous call to LogisticsServices to perform the 'on_issue_status' action
      const response: any = await logisticsService.on_issue_status(on_issue_status!);

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

// Export the LogisticsManager class as the default module
export default LogisticsManager;
