<?php

/**
 * @file
 * Preprocess function for this hook.
 */

/**
 * Implements hook_preprocess_views_view_table().
 */
function uswds_preprocess_views_view_table(&$variables) {
  $variables['attributes']['class'][] = 'usa-table';
}
