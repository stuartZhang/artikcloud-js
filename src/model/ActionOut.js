(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.ActionOut = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ActionOut model module.
   * @module model/ActionOut
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>ActionOut</code>.
   * Action received in a WebSocket.
   * @alias module:model/ActionOut
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>ActionOut</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ActionOut} obj Optional instance to populate.
   * @return {module:model/ActionOut} The populated <code>ActionOut</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('mid')) {
        obj['mid'] = ApiClient.convertToType(data['mid'], 'String');
      }
      if (data.hasOwnProperty('uid')) {
        obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
      }
      if (data.hasOwnProperty('sdtid')) {
        obj['sdtid'] = ApiClient.convertToType(data['sdtid'], 'String');
      }
      if (data.hasOwnProperty('cts')) {
        obj['cts'] = ApiClient.convertToType(data['cts'], 'Integer');
      }
      if (data.hasOwnProperty('mv')) {
        obj['mv'] = ApiClient.convertToType(data['mv'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * Message ID.
   * @member {String} mid
   */
  exports.prototype['mid'] = undefined;

  /**
   * User ID.
   * @member {String} uid
   */
  exports.prototype['uid'] = undefined;

  /**
   * Source Device Type ID.
   * @member {String} sdtid
   */
  exports.prototype['sdtid'] = undefined;

  /**
   * Created Timestamp (past, present or future). Defaults to current time if not provided.
   * @member {Integer} cts
   */
  exports.prototype['cts'] = undefined;

  /**
   * Manifest Version.
   * @member {Integer} mv
   */
  exports.prototype['mv'] = undefined;




  return exports;
}));
