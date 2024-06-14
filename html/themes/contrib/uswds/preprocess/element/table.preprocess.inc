<?php

/**
 * Implements template_preprocess
 */
function uswds_preprocess_table(&$variables) {
  $variables['attributes']['class'][] = 'usa-table';
}
