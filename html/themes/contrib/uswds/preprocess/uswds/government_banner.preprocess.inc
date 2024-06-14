<?php

/**
 * @file
 * Preprocess function for this hook.
 */

/**
 * Implements hook_preprocess_government_banner().
 */
function uswds_preprocess_government_banner(&$variables) {
  $variables['military'] = theme_get_setting('uswds_government_banner_mil');
  $variables['tld'] = $variables['military'] ? '.mil' : '.gov';
}
