/**
 * Settings.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

import { Editor } from 'tinymce/core/api/Editor';

const getToolbarItems = (editor: Editor): string => {
  return editor.getParam('imagetools_toolbar', 'rotateleft rotateright | flipv fliph | crop editimage imageoptions');
};

const getProxyUrl = (editor: Editor): string => editor.getParam('imagetools_proxy');

const getCorsHosts = (editor: Editor): string[] => editor.getParam('imagetools_cors_hosts', [], 'array');

const getCredentialsHosts = (editor: Editor): string[] => editor.getParam('imagetools_credentials_hosts', [], 'array');

const getApiKey = (editor: Editor): string => editor.settings.api_key || editor.settings.imagetools_api_key;

const getUploadTimeout = (editor: Editor): number => editor.getParam('images_upload_timeout', 30000, 'number');

const shouldReuseFilename = (editor: Editor): boolean => editor.getParam('images_reuse_filename', false, 'boolean');

export default {
  getToolbarItems,
  getProxyUrl,
  getCorsHosts,
  getCredentialsHosts,
  getApiKey,
  getUploadTimeout,
  shouldReuseFilename
};