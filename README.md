# IGM Service Package

The Issue & Grievance Management (IGM) Service Package provides a mechanism for resolving issues between users of the ONDC network. The IGM flow is built on the Issue & Grievance Management framework, which facilitates the resolution of issues, grievances, and disputes between a Complainant and Respondent while ensuring transparency, fairness, and data security.

## Introduction

The IGM Service Package is designed to handle various interactions related to issue management, resolution, and status tracking within the ONDC network. It allows participants to raise, process, and track issues involving transactions, logistics services, and other identified entities.

## Features

- Issue creation and management for different network participants (Complainant, Respondent, Buyer, Seller, Logistics Service Provider, etc.).
- Issue resolution tracking and reporting.
- Event callbacks for handling success, error, and other custom actions.
- Modular structure for easy extensibility and customization.

## Installation

You can install the IGM Service Package using npm:

```
bash
npm install igm-service-package

```

## PropTypes

### `init()`

| Property         | Type              | Default                     | Description                       |
| ---------------- | ----------------- | --------------------------- | --------------------------------- |
| `validateSchema` | Boolean           | N/A                         | To stop schema validation.        |
| `npType`         | Array             | BUYER, SELLER, LOGISTICS    | Type of the Network Participants. |
| `context`        | Array of Objects  | N/A                         | Subscriber Detail.                |
| `Domain`         | Array of Strings  | RETAIL, MOBILITY, LOGISTICS | Subscriber Domain Type.           |
| `onSuccess`      | Callback Function | N/A                         | Handling the Success Responses.   |
| `onError`        | Callback Function | N/A                         | Handling the Error Responses.     |

**`context`**: An array of objects containing subscriber details.

Each object within the `context` array should have the following properties:

| Property                   | Type   | Description                                       |
| -------------------------- | ------ | ------------------------------------------------- |
| `subscriberId`             | String | A unique identifier for the subscriber.           |
| `subscriberType`           | String | The type of the subscriber (e.g., BUYER, SELLER). |
| `subscriberURL`            | String | The URL of the subscriber.                        |
| `expected_resolution_time` | String | The expected resolution time.                     |
| `expected_response_time`   | String | The expected response time.                       |
| `subscriberCity`           | String | The city where the subscriber is located.         |
| `subscriberCountry`        | String | The country where the subscriber is located.      |
| `subscriberDomain`         | String | The domain of the subscriber.                     |
| `ttl`                      | String | Time to live for the context.                     |
| `subscriberState`          | String | The state where the subscriber is located.        |

### `buyerIssue()`

| Property    | Type              | Default | Description                                           |
| ----------- | ----------------- | ------- | ----------------------------------------------------- |
| `issue`     | Object            | N/A     | The issue object to generate the issue to the seller. |
| `onNack`    | Callback Function | N/A     | Handling the Nack Responses                           |
| `onSuccess` | Callback Function | N/A     | Handling the Success Responses.                       |
| `onError`   | Callback Function | N/A     | Handling the Error Responses.                         |

### `buyerIssueStatus()`

| Property       | Type              | Default | Description                          |
| -------------- | ----------------- | ------- | ------------------------------------ |
| `issue_status` | Object            | N/A     | To get the issue status from seller. |
| `onNack`       | Callback Function | N/A     | Handling the Nack Responses.         |
| `onSuccess`    | Callback Function | N/A     | Handling the Success Responses.      |
| `onError`      | Callback Function | N/A     | Handling the Error Responses.        |

### `sellerOnIssue()`

| Property    | Type              | Default | Description                          |
| ----------- | ----------------- | ------- | ------------------------------------ |
| `on_issue`  | Object            | N/A     | To get the on issue from the seller. |
| `onNack`    | Callback Function | N/A     | Handling the Nack Responses.         |
| `onSuccess` | Callback Function | N/A     | Handling the Success Responses.      |
| `onError`   | Callback Function | N/A     | Handling the Error Responses.        |

### `sellerOnIssueStatus()`

| Property          | Type              | Default | Description                             |
| ----------------- | ----------------- | ------- | --------------------------------------- |
| `on_issue_status` | Object            | N/A     | To get the on issue status from seller. |
| `onNack`          | Callback Function | N/A     | Handling the Nack Responses.            |
| `onSuccess`       | Callback Function | N/A     | Handling the Success Responses.         |
| `onError`         | Callback Function | N/A     | Handling the Error Responses.           |

### `issueSellerToLogisitics()`

| Property    | Type              | Default | Description                                                      |
| ----------- | ----------------- | ------- | ---------------------------------------------------------------- |
| `issue`     | Object            | N/A     | The issue object to generate the issue from seller to logistics. |
| `onNack`    | Callback Function | N/A     | Handling the Nack Responses.                                     |
| `onSuccess` | Callback Function | N/A     | Handling the Success Responses.                                  |
| `onError`   | Callback Function | N/A     | Handling the Error Responses.                                    |

### `issueStatusSellerToLogisitics()`

| Property       | Type              | Default | Description                                        |
| -------------- | ----------------- | ------- | -------------------------------------------------- |
| `issue_status` | Object            | N/A     | To send the issue status from seller to logistics. |
| `onNack`       | Callback Function | N/A     | Handling the Nack Responses.                       |
| `onSuccess`    | Callback Function | N/A     | Handling the Success Responses.                    |
| `onError`      | Callback Function | N/A     | Handling the Error Responses.                      |

### `onIssueFromLogisitics()`

| Property    | Type              | Default | Description                         |
| ----------- | ----------------- | ------- | ----------------------------------- |
| `on_issue`  | Object            | N/A     | To get the on issue from logistics. |
| `onNack`    | Callback Function | N/A     | Handling the Nack Responses.        |
| `onSuccess` | Callback Function | N/A     | Handling the Success Responses.     |
| `onError`   | Callback Function | N/A     | Handling the Error Responses.       |

### `onIssueStatusFromLogistics()`

| Property          | Type              | Default | Description                                |
| ----------------- | ----------------- | ------- | ------------------------------------------ |
| `on_issue_status` | Object            | N/A     | To get the on issue status from logistics. |
| `onNack`          | Callback Function | N/A     | Handling the Nack Responses.               |
| `onSuccess`       | Callback Function | N/A     | Handling the Success Responses.            |
| `onError`         | Callback Function | N/A     | Handling the Error Responses.              |

# Usage

### For Buyer

```javascript
import { issue } from 'ondc-igm-sdk';

issue.init({
  validateSchema: true,
  npType: ['BUYER'],
  context: [
    {
      subscriberId: '<example-subscriber-id>',
      subscriberType: 'BUYER',
      subscriberURL: '<example-subscriber-url>',
      expected_resolution_time: 'rfrff',
      expected_response_time: '3434343',
      subscriberCity: 'IND',
      subscriberCountry: '0378',
      subscriberDomain: '<example-subscriber-domain>',
      ttl: 'PH239',
      subcriberState: '3434',
    },
  ],
  domain: ['RETAIL'],
  onSuccess: {
    on_issue: (value) => console.log('logging from on_issue callback', value),
    on_issue_status: (value) => console.log('logging from on_issue_status callback', value),
  },
  onError: (error) => {
    logger.info({ message: 'Here!', labels: { key: 'value' } });
    logger.info('welp');
    // console.log(logger.transports);
    console.log(error);
  },
});
```

#### buyerIssue({ issue, onError, onNack, onSuccess }: RouteSpecificManagerProps)

- **Description**: This function delegates the management of a buyer's issue to the `BuyerManager`.
- **Parameters**:

  - `issue`: The issue to be managed.
  - `onError`: Callback for error handling.
  - `onNack`: Callback for handling when the operation is not acknowledged.
  - `onSuccess`: Callback for handling when the operation is successful.

- **Issue Schema**:

```
bash
{
    "context": {
        "bpp_id": "<example-bpp_id>",
        "bpp_uri": "<example-bpp_uri>",
        "ttl": "PT30S"
    },
    "message": {
        "issue": {
            "category": "ITEM",
            "sub_category": "ITM01",
            "complainant_info": {
                "person": {
                    "name": "Sam Manuel"
                },
                "contact": {
                    "phone": "9879879870",
                    "email": "sam@yahoo.com"
                }
            },
            "order_details": {
                "id": "4597f703-e84f-431e-a96a-d147cfa142f9",
                "state": "Completed",
                "items": [
                    {
                        "id": "18275-ONDC-1-9",
                        "quantity": 1
                    }
                ],
                "fulfillments": [
                    {
                        "id": "Fulfillment1",
                        "state": "Order-delivered"
                    }
                ],
                "provider_id": "P1"
            },
            "description": {
                "short_desc": "Issue with product quality",
                "long_desc": "product quality is not correct. facing issues while using the product",
                "additional_desc": {
                    "url": "https://buyerapp.com/additonal-details/desc.txt",
                    "content_type": "text/plain"
                },
                "images": [
                    "http://buyerapp.com/addtional-details/img1.png",
                    "http://buyerapp.com/addtional-details/img2.png"
                ]
            },
            "source": {
                "network_participant_id": "buyerapp.com/ondc",
                "type": "CONSUMER"
            },
            "expected_response_time": {
                "duration": "PT2H"
            },
            "expected_resolution_time": {
                "duration": "P1D"
            },
            "status": "OPEN",
            "issue_type": "ISSUE",
            "issue_actions": {
                "complainant_actions": [
                    {
                        "complainant_action": "OPEN",
                        "short_desc": "Complaint created",
                        "updated_at": "2023-01-15T10:00:00.469Z",
                        "updated_by": {
                            "org": {
                                "name": "buyerapp.com::ONDC:RET10"
                            },
                            "contact": {
                                "phone": "9450394039",
                                "email": "buyerapp@interface.com"
                            },
                            "person": {
                                "name": "John Dode"
                            }
                        }
                    }
                ]
            },
            "created_at": "2023-01-15T10:00:00.469Z"

        }
    }
}
```

### sellerOnIssue({ on_issue, onError, onNack, onSuccess }: RouteSpecificManagerProps)

- **Description**: This function delegates the management of a seller's issue to the `SellerManager`.
- **Parameters**:

  - `on_issue`: The issue data to be managed by the seller.
  - `onError`: Callback for error handling.
  - `onNack`: Callback for handling when the operation is not acknowledged.
  - `onSuccess`: Callback for handling when the operation is successful.

- **On_Issue Schema**:

```
bash
   {
    "context": {
        "bap_id":"<example-bap_id>",
        "bap_uri": "<example-bap_uri>",
        "transaction_id": "<example-transaction_id>",
        "message_id": "<example-message_id>",
        "timestamp": "2023-07-28T08:14:14.639Z"
    },
    "message": {
        "issue": {
            "id": "1c1bd458-c524-4f13-949b-71ce1c20e023",
            "issue_actions": {
                "respondent_actions": [
                    {
                        "cascaded_level": 1,
                        "respondent_action": "PROCESSING",
                        "short_desc": "We are investigating your concern.",
                        "updated_at": "2023-07-28T08:14:14.641Z",
                        "updated_by": {
                            "contact": {
                                "email": "robin.chauhan@gmail.com",
                                "phone": "9876543210"
                            },
                            "org": {
                                "name": "https://fe48-115-240-127-98.ngrok-free.app::nic2004:52110"
                            },
                            "person": {
                                "name": "Robin Chauhan"
                            }
                        }
                    }
                ]
            },
            "created_at": "2023-07-28T08:14:09.915Z"
        }
    }
}
```

### buyerIssueStatus({ issue_status, onError, onNack, onSuccess }: RouteSpecificManagerProps)

- **Description**: This function delegates the management of a buyer's issue status to the `BuyerManager`.
- **Parameters**:

  - `issue_status`: The issue status data to be managed.
  - `onError`: Callback for error handling.
  - `onNack`: Callback for handling when the operation is not acknowledged.
  - `onSuccess`: Callback for handling when the operation is successful.

- **Issue_Status Schema**:

```
bash
{
  "context":
  {
    "bpp_id": "<example-bpp_id>",
    "bpp_uri": "<example-bpp_uri>",
    "transaction_id": "<example-transaction_id>",
    "message_id": "<example-message_id>",
    "timestamp": "2023-01-15T10:30:00.469Z",
    "ttl": "PT30S"
  },
  "message":
  {
    "issue_id": "I1"
  }
}
```

### sellerOnIssueStatus({ on_issue_status, onError, onNack, onSuccess }: RouteSpecificManagerProps)

- **Description**: This function delegates the management of a seller's issue status to the `SellerManager`.
- **Parameters**:

  - `on_issue_status`: The issue status data to be managed by the seller.
  - `onError`: Callback for error handling.
  - `onNack`: Callback for handling when the operation is not acknowledged.
  - `onSuccess`: Callback for handling when the operation is successful.

- **On_Issue_Status Seller Schema**:

```
bash
{
    "context": {
        "bap_id": "<example-bap_id>",
        "bap_uri": "<example-bap_uri>",
        "transaction_id": "<example-transaction_id>",
        "message_id": "<example-message_id>",
        "timestamp": "2023-01-15T10:31:00.523Z"
    },
    "message": {
        "issue": {
            "id": "I1",
            "issue_actions": {
                "respondent_actions": [
                    {
                        "respondent_action": "PROCESSING",
                        "short_desc": "Complaint is being processed",
                        "updated_at": "2023-01-15T10:10:00.142Z",
                        "updated_by": {
                            "org": {
                                "name": "sellerapp.com::ONDC:RET10"
                            },
                            "contact": {
                                "phone": "9450394140",
                                "email": "respondentapp@respond.com"
                            },
                            "person": {
                                "name": "Jane Doe"
                            }
                        },
                        "cascaded_level": 1
                    },
                    {
                        "respondent_action": "RESOLVED",
                        "short_desc": "Complaint resolved",
                        "updated_at": "2023-01-15T10:31:00.523Z",
                        "updated_by": {
                            "org": {
                                "name": "sellerapp.com::ONDC:RET10"
                            },
                            "contact": {
                                "phone": "9450394140",
                                "email": "respondentapp@respond.com"
                            },
                            "person": {
                                "name": "Jane Doe"
                            }
                        },
                        "cascaded_level": 1
                    }
                ]
            },
            "created_at": "2023-01-15T10:00:00.469Z",
            "updated_at": "2023-01-15T10:31:00.523Z",
            "resolution_provider": {
                "respondent_info": {
                    "type": "TRANSACTION-COUNTERPARTY-NP",
                    "organization": {
                        "org": {
                            "name": "sellerapp.com::ONDC:RET10"
                        },
                        "contact": {
                            "phone": "9059304940",
                            "email": "email@resolutionproviderorg.com"
                        },
                        "person": {
                            "name": "resolution provider org contact person name"
                        }
                    },
                    "resolution_support": {
                        "chat_link": "http://chat-link/respondent",
                        "contact": {
                            "phone": "9949595059",
                            "email": "respondantemail@resolutionprovider.com"
                        },
                        "gros": [
                            {
                                "person": {
                                    "name": "Sam D"
                                },
                                "contact": {
                                    "phone": "9605960796",
                                    "email": "email@gro.com"
                                },
                                "gro_type": "TRANSACTION-COUNTERPARTY-NP-GRO"
                            }
                        ]
                    }
                }
            },
            "resolution": {
                "short_desc": "Refund to be initiated",
                "long_desc": "For this complaint, refund is to be initiated",
                "action_triggered": "REFUND",
                "refund_amount": "100"
            }
        }
    }
}
```

### issueSellerToLogisitics({ issue, onError, onNack, onSuccess }: RouteSpecificManagerProps)

- **Description**: This function delegates the management of a seller's issue to the logistics manager.
- **Parameters**:

  - `issue`: The issue data to be managed by the logistics manager.
  - `onError`: Callback for error handling.
  - `onNack`: Callback for handling when the operation is not acknowledged.
  - `onSuccess`: Callback for handling when the operation is successful.

- **Issue Seller to Logistics Schema**:

```
bash
{
    "context": {
        "domain":"0030433",
        "country":"IND",
        "city":"0458",
        "bpp_id": "<example-bpp_id>",
        "bpp_uri": "<example-bpp_uri>",
        "ttl": "PT30S"
    },
    "message": {
        "issue": {
            "id":"4597f703-e84f-431e-a96a-d147cfa142f9",
            "category": "ITEM",
            "sub_category": "ITM01",
            "complainant_info": {
                "person": {
                    "name": "Sam Manuel"
                },
                "contact": {
                    "phone": "9879879870",
                    "email": "sam@yahoo.com"
                }
            },
            "order_details": {
                "id": "4597f703-e84f-431e-a96a-d147cfa142f9",
                "state": "Completed",

                "items": [
                    {
                        "id": "18275-ONDC-1-9",
                        "quantity": 1
                    }
                ],
                "fulfillments": [
                    {
                        "id": "Fulfillment1",
                        "state": "Order-delivered"
                    }
                ],
                "provider_id": "P1"
            },
            "description": {
                "short_desc": "Issue with product quality",
                "long_desc": "product quality is not correct. facing issues while using the product",
                "additional_desc": {
                    "url": "https://buyerapp.com/additonal-details/desc.txt",
                    "content_type": "text/plain"
                },
                "images": [
                    "http://buyerapp.com/addtional-details/img1.png",
                    "http://buyerapp.com/addtional-details/img2.png"
                ]
            },
            "source": {
                "network_participant_id": "buyerapp.com/ondc",
                "type": "CONSUMER"
            },
            "expected_response_time": {
                "duration": "PT2H"
            },
            "expected_resolution_time": {
                "duration": "P1D"
            },
            "status": "OPEN",
            "issue_type": "ISSUE",
            "issue_actions": {
                "complainant_actions": [
                    {
                        "complainant_action": "OPEN",
                        "short_desc": "Complaint created",
                        "updated_at": "2023-01-15T10:00:00.469Z",
                        "updated_by": {
                            "org": {
                                "name": "buyerapp.com::ONDC:RET10"
                            },
                            "contact": {
                                "phone": "9450394039",
                                "email": "buyerapp@interface.com"
                            },
                            "person": {
                                "name": "John Dode"
                            }
                        }
                    }
                ],
                "respondent_actions": [
                    {
                        "respondent_action": "PROCESSING",
                        "short_desc": "Complaint is being processed",
                        "updated_at": "2023-01-15T10:10:00.142Z",
                        "updated_by": {
                            "org": {
                                "name": "sellerapp.com::ONDC:RET10"
                            },
                            "contact": {
                                "phone": "9450394140",
                                "email": "respondentapp@respond.com"
                            },
                            "person": {
                                "name": "Jane Doe"
                            }
                        },
                        "cascaded_level": 1
                    },
                    {
                        "respondent_action": "RESOLVED",
                        "short_desc": "Complaint resolved",
                        "updated_at": "2023-01-15T10:31:00.523Z",
                        "updated_by": {
                            "org": {
                                "name": "sellerapp.com::ONDC:RET10"
                            },
                            "contact": {
                                "phone": "9450394140",
                                "email": "respondentapp@respond.com"
                            },
                            "person": {
                                "name": "Jane Doe"
                            }
                        },
                        "cascaded_level": 1
                    }
                ]
            },
            "created_at": "2023-01-15T10:00:00.469Z"
        }
    }
}
```

### issueStatusSellerToLogisitics({ issue_status, onError, onNack, onSuccess }: RouteSpecificManagerProps)

- **Description**: This function delegates the management of a seller's issue status to the logistics manager.
- **Parameters**:

  - `issue_status`: The issue status data to be managed by the logistics manager.
  - `onError`: Callback for error handling.
  - `onNack`: Callback for handling when the operation is not acknowledged.
  - `onSuccess`: Callback for handling when the operation is successful.

- **Issue_Status Seller To Logistics Schema**:

```
bash
{
    "context": {
        "domain": "0030433",
        "country": "IND",
        "city": "0458",
        "bpp_id": "<example-bpp_id>",
        "bpp_uri": "<example-bpp_uri>",
        "transaction_id": "<example-transaction_id>",
        "message_id": "<example-message_id>",
        "timestamp": "2023-01-15T10:30:00.469Z",
        "ttl": "PT30S"
    },
    "message": {
        "issue_id": "I1"
    }
}

```

### onIssueFromLogisitics({ on_issue, onError, onNack, onSuccess }: RouteSpecificManagerProps)

- **Description**: This function delegates the management of an on_issue to the logistics manager from a buyer perspective.
- **Parameters**:

  - `on_issue`: The on_issue data to be managed.
  - `onError`: Callback for error handling.
  - `onNack`: Callback for handling when the operation is not acknowledged.
  - `onSuccess`: Callback for handling when the operation is successful.

- **On_Issue Logistics Schema**:

```
bash
{
    "context": {
        "domain": "0030433",
        "country": "IND",
        "city": "0458",
        "bap_id": "<example-bap_id>",
        "bap_uri": "<example-bap_uri>",
        "transaction_id": "<example-transaction_id>",
        "message_id": "<example-message_id>",
        "timestamp": "2023-07-28T08:14:14.639Z",
        "ttl": "PT30S"
    },
    "message": {
        "issue": {
            "id": "1c1bd458-c524-4f13-949b-71ce1c20e023",
            "issue_actions": {
                "respondent_actions": [
                    {
                        "cascaded_level": 1,
                        "respondent_action": "PROCESSING",
                        "short_desc": "We are investigating your concern.",
                        "updated_at": "2023-07-28T08:14:14.641Z",
                        "updated_by": {
                            "contact": {
                                "email": "robin.chauhan@gmail.com",
                                "phone": "9876543210"
                            },
                            "org": {
                                "name": "https://fe48-115-240-127-98.ngrok-free.app::nic2004:52110"
                            },
                            "person": {
                                "name": "Robin Chauhan"
                            }
                        }
                    }
                ]
            },
            "created_at": "2023-07-28T08:14:09.915Z"
        }
    }
}
```


