/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

import { i18n } from '@osd/i18n';

export function getFieldTypeName(type: string) {
  switch (type) {
    case 'boolean':
      return i18n.translate('discover.fieldNameIcons.booleanAriaLabel', {
        defaultMessage: 'Boolean field',
      });
    case 'conflict':
      return i18n.translate('discover.fieldNameIcons.conflictFieldAriaLabel', {
        defaultMessage: 'Conflicting field',
      });
    case 'date':
      return i18n.translate('discover.fieldNameIcons.dateFieldAriaLabel', {
        defaultMessage: 'Date field',
      });
    case 'geo_point':
      return i18n.translate('discover.fieldNameIcons.geoPointFieldAriaLabel', {
        defaultMessage: 'Geo point field',
      });
    case 'geo_shape':
      return i18n.translate('discover.fieldNameIcons.geoShapeFieldAriaLabel', {
        defaultMessage: 'Geo shape field',
      });
    case 'ip':
      return i18n.translate('discover.fieldNameIcons.ipAddressFieldAriaLabel', {
        defaultMessage: 'IP address field',
      });
    case 'murmur3':
      return i18n.translate('discover.fieldNameIcons.murmur3FieldAriaLabel', {
        defaultMessage: 'Murmur3 field',
      });
    case 'number':
      return i18n.translate('discover.fieldNameIcons.numberFieldAriaLabel', {
        defaultMessage: 'Number field',
      });
    case 'source':
      // Note that this type is currently not provided, type for _source is undefined
      return i18n.translate('discover.fieldNameIcons.sourceFieldAriaLabel', {
        defaultMessage: 'Source field',
      });
    case 'string':
      return i18n.translate('discover.fieldNameIcons.stringFieldAriaLabel', {
        defaultMessage: 'String field',
      });
    case 'nested':
      return i18n.translate('discover.fieldNameIcons.nestedFieldAriaLabel', {
        defaultMessage: 'Nested field',
      });
    default:
      return i18n.translate('discover.fieldNameIcons.unknownFieldAriaLabel', {
        defaultMessage: 'Unknown field',
      });
  }
}
