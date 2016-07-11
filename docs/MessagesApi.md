# ArtikCloud.MessagesApi

All URIs are relative to *https://api.artik.cloud/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAggregatesHistogram**](MessagesApi.md#getAggregatesHistogram) | **GET** /messages/analytics/histogram | Get Histogram aggregates
[**getFieldPresence**](MessagesApi.md#getFieldPresence) | **GET** /messages/presence | Get normalized message presence
[**getLastNormalizedMessages**](MessagesApi.md#getLastNormalizedMessages) | **GET** /messages/last | Get Last Normalized Message
[**getMessageAggregates**](MessagesApi.md#getMessageAggregates) | **GET** /messages/analytics/aggregates | Get Normalized Message Aggregates
[**getNormalizedMessages**](MessagesApi.md#getNormalizedMessages) | **GET** /messages | Get Normalized Messages
[**sendMessageAction**](MessagesApi.md#sendMessageAction) | **POST** /messages | Send Message Action


<a name="getAggregatesHistogram"></a>
# **getAggregatesHistogram**
> AggregatesHistogramResponse getAggregatesHistogram(startDate, endDate, opts)

Get Histogram aggregates

Get Histogram on normalized messages.

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.MessagesApi()

var startDate = 789; // {Integer} Timestamp of earliest message (in milliseconds since epoch).

var endDate = 789; // {Integer} Timestamp of latest message (in milliseconds since epoch).

var opts = { 
  'sdid': "sdid_example", // {String} Source device ID of the messages being searched.
  'field': "field_example", // {String} Message field being queried for building histogram.
  'interval': "interval_example" // {String} Interval of time for building histogram blocks. (Valid values: minute, hour, day, month, year)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getAggregatesHistogram(startDate, endDate, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **Integer**| Timestamp of earliest message (in milliseconds since epoch). | 
 **endDate** | **Integer**| Timestamp of latest message (in milliseconds since epoch). | 
 **sdid** | **String**| Source device ID of the messages being searched. | [optional] 
 **field** | **String**| Message field being queried for building histogram. | [optional] 
 **interval** | **String**| Interval of time for building histogram blocks. (Valid values: minute, hour, day, month, year) | [optional] 

### Return type

[**AggregatesHistogramResponse**](AggregatesHistogramResponse.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFieldPresence"></a>
# **getFieldPresence**
> FieldPresenceEnvelope getFieldPresence(startDate, endDate, interval, opts)

Get normalized message presence

Get normalized message presence.

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.MessagesApi()

var startDate = 789; // {Integer} startDate

var endDate = 789; // {Integer} endDate

var interval = "interval_example"; // {String} String representing grouping interval. One of: 'minute' (1 hour limit), 'hour' (1 day limit), 'day' (31 days limit), 'month' (1 year limit), or 'year' (10 years limit).

var opts = { 
  'sdid': "sdid_example", // {String} Source device ID of the messages being searched.
  'fieldPresence': "fieldPresence_example" // {String} String representing a field from the specified device ID.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getFieldPresence(startDate, endDate, interval, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **Integer**| startDate | 
 **endDate** | **Integer**| endDate | 
 **interval** | **String**| String representing grouping interval. One of: &#39;minute&#39; (1 hour limit), &#39;hour&#39; (1 day limit), &#39;day&#39; (31 days limit), &#39;month&#39; (1 year limit), or &#39;year&#39; (10 years limit). | 
 **sdid** | **String**| Source device ID of the messages being searched. | [optional] 
 **fieldPresence** | **String**| String representing a field from the specified device ID. | [optional] 

### Return type

[**FieldPresenceEnvelope**](FieldPresenceEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLastNormalizedMessages"></a>
# **getLastNormalizedMessages**
> NormalizedMessagesEnvelope getLastNormalizedMessages(opts)

Get Last Normalized Message

Get last messages normalized.

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.MessagesApi()

var opts = { 
  'count': 56, // {Integer} Number of items to return per query.
  'sdids': "sdids_example", // {String} Comma separated list of source device IDs (minimum: 1).
  'fieldPresence': "fieldPresence_example" // {String} String representing a field from the specified device ID.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getLastNormalizedMessages(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **count** | **Integer**| Number of items to return per query. | [optional] 
 **sdids** | **String**| Comma separated list of source device IDs (minimum: 1). | [optional] 
 **fieldPresence** | **String**| String representing a field from the specified device ID. | [optional] 

### Return type

[**NormalizedMessagesEnvelope**](NormalizedMessagesEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMessageAggregates"></a>
# **getMessageAggregates**
> AggregatesResponse getMessageAggregates(sdid, field, startDate, endDate)

Get Normalized Message Aggregates

Get Aggregates on normalized messages.

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.MessagesApi()

var sdid = "sdid_example"; // {String} Source device ID of the messages being searched.

var field = "field_example"; // {String} Message field being queried for aggregates.

var startDate = 789; // {Integer} Timestamp of earliest message (in milliseconds since epoch).

var endDate = 789; // {Integer} Timestamp of latest message (in milliseconds since epoch).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getMessageAggregates(sdid, field, startDate, endDate, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sdid** | **String**| Source device ID of the messages being searched. | 
 **field** | **String**| Message field being queried for aggregates. | 
 **startDate** | **Integer**| Timestamp of earliest message (in milliseconds since epoch). | 
 **endDate** | **Integer**| Timestamp of latest message (in milliseconds since epoch). | 

### Return type

[**AggregatesResponse**](AggregatesResponse.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNormalizedMessages"></a>
# **getNormalizedMessages**
> NormalizedMessagesEnvelope getNormalizedMessages(opts)

Get Normalized Messages

Get the messages normalized

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.MessagesApi()

var opts = { 
  'uid': "uid_example", // {String} User ID. If not specified, assume that of the current authenticated user. If specified, it must be that of a user for which the current authenticated user has read access to.
  'sdid': "sdid_example", // {String} Source device ID of the messages being searched.
  'mid': "mid_example", // {String} The SAMI message ID being searched.
  'fieldPresence': "fieldPresence_example", // {String} String representing a field from the specified device ID.
  'filter': "filter_example", // {String} Filter.
  'offset': "offset_example", // {String} A string that represents the starting item, should be the value of 'next' field received in the last response. (required for pagination)
  'count': 56, // {Integer} count
  'startDate': 789, // {Integer} startDate
  'endDate': 789, // {Integer} endDate
  'order': "order_example" // {String} Desired sort order: 'asc' or 'desc'
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getNormalizedMessages(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uid** | **String**| User ID. If not specified, assume that of the current authenticated user. If specified, it must be that of a user for which the current authenticated user has read access to. | [optional] 
 **sdid** | **String**| Source device ID of the messages being searched. | [optional] 
 **mid** | **String**| The SAMI message ID being searched. | [optional] 
 **fieldPresence** | **String**| String representing a field from the specified device ID. | [optional] 
 **filter** | **String**| Filter. | [optional] 
 **offset** | **String**| A string that represents the starting item, should be the value of &#39;next&#39; field received in the last response. (required for pagination) | [optional] 
 **count** | **Integer**| count | [optional] 
 **startDate** | **Integer**| startDate | [optional] 
 **endDate** | **Integer**| endDate | [optional] 
 **order** | **String**| Desired sort order: &#39;asc&#39; or &#39;desc&#39; | [optional] 

### Return type

[**NormalizedMessagesEnvelope**](NormalizedMessagesEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="sendMessageAction"></a>
# **sendMessageAction**
> MessageIDEnvelope sendMessageAction(data)

Send Message Action

Send a message or an Action:

Combination | Parameters | Description
------------- | ------------- | ------------- 
Send Message | sdid, type=message | Send a message from a Source Device
Send Action | ddid, type=action | Send an action to a Destination Device
Common | data, ts, token | Parameters that can be used with the above combinations.

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.MessagesApi()

var data = new ArtikCloud.MessageAction(); // {MessageAction} Message or Action object that is passed in the body


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.sendMessageAction(data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**MessageAction**](MessageAction.md)| Message or Action object that is passed in the body | 

### Return type

[**MessageIDEnvelope**](MessageIDEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

