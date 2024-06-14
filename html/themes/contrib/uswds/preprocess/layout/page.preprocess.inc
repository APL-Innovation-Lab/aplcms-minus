<?php

/**
 * @file
 * Preprocess function for this hook.
 */

/**
 * Implements hook_preprocess_page().
 */
function uswds_preprocess_page(&$variables) {
  // Set the path to the base theme.
  $variables['active_theme_path'] = base_path() . \Drupal::theme()->getActiveTheme()->getPath();

  // Provide the agency information for the footer.
  $variables['display_footer_agency'] = theme_get_setting('uswds_footer_agency');
  $footer_variables = [
    'footer_agency_name',
    'footer_agency_url',
    'footer_agency_logo',
    'contact_center',
    'phone',
    'email',
    'facebook',
    'twitter',
    'youtube',
    'rss',
  ];
  foreach ($footer_variables as $footer_variable) {
    $variables[$footer_variable] = theme_get_setting('uswds_' . $footer_variable);
  }
  // Fix the footer logo path.
  if ($variables['footer_agency_logo']) {
    $variables['footer_agency_logo'] = base_path() . uswds_theme_trail_file($variables['footer_agency_logo']);
  }

  // Decide what width the content area should have.
  $variables['main_class'] = 'grid-container';
  $sidebar_first = (!empty($variables['page']['sidebar_first']));
  $sidebar_second = (!empty($variables['page']['sidebar_second']));
  if ($sidebar_first && $sidebar_second) {
    $variables['content_class'] = 'tablet:grid-col-6';
  }
  elseif ($sidebar_first || $sidebar_second) {
    $variables['content_class'] = 'tablet:grid-col-9';
  }
  else {
    $variables['content_class'] = 'tablet:grid-col-12';
  }

  // Decide on the type of header.
  $header_style = theme_get_setting('uswds_header_style');
  if (empty($header_style)) {
    $header_style = 'extended';
  }
  $variables['header_style'] = 'usa-header--' . $header_style;
  $variables['header_classes'] = 'usa-header ' . $variables['header_style'];
  if (theme_get_setting('uswds_header_mega')) {
    if ($header_style == 'basic') {
      $variables['header_classes'] = 'usa-header ' . $variables['header_style'] . ' usa-header--megamenu';
    }
  }

  // And some helpful flags for the header.
  $variables['header_basic'] = ('basic' === $header_style);
  $variables['header_extended'] = ('extended' === $header_style);

  // Hide the secondary menu if using the basic header.
  if ($variables['header_basic']) {
    $variables['page']['secondary_menu'] = FALSE;
  }

  // Show the official U.S. Government banner?
  if (theme_get_setting('uswds_government_banner')) {
    $variables['government_banner'] = [
      '#theme' => 'government_banner',
      '#image_base' => $variables['active_theme_path'] . '/assets/img',
    ];
  }

  // Decide on the type of footer.
  $footer_style = theme_get_setting('uswds_footer_style');
  if (empty($footer_style)) {
    $footer_style = 'slim';
  }
  $variables['footer_style'] = 'usa-footer--' . $footer_style;
  $variables['footer_classes'] = 'usa-footer ' . $variables['footer_style'];

  // Add some helpful flags for the footer.
  $variables['footer_slim'] = ('slim' == $footer_style);
  $variables['footer_medium'] = ('medium' == $footer_style);
  $variables['footer_big'] = ('big' == $footer_style);

  // Check for contact info.
  if ($variables['phone'] || $variables['email']) {
    $variables['footer_contact'] = TRUE;
  }

  // Check for social media.
  if ($variables['facebook'] || $variables['twitter'] || $variables['youtube'] || $variables['rss']) {
    $variables['footer_social'] = TRUE;
  }

  // Check to see if we need to turn on edge-to-edge mode.
  if (_uswds_edge_to_edge_mode()) {
    // If edge-to-edge mode is on, then the content area will not be wrapped in
    // "usa-grid", and the sidebars will be disabled.
    $variables['edge_to_edge'] = TRUE;
    $variables['main_class'] = '';
    $variables['content_class'] = 'grid-col-12';
    $variables['page']['sidebar_first'] = [];
    $variables['page']['sidebar_second'] = [];
  }
}
