<?php

/**
 * @file
 * Preprocess function for this hook.
 */

use Drupal\Core\Url;
use Drupal\Component\Utility\Html;
use Drupal\Core\Template\Attribute;
use Drupal\Core\Template\AttributeHelper;

/**
 * Prepares variables for pager templates.
 *
 * Overridden from the implmentation in Core theme.inc. Changes include
 * limiting the pager to 3 items, and removing First and Last links.
 *
 * Default template: pager.html.twig.
 *
 * Menu callbacks that display paged query results should use #type => pager
 * to retrieve a pager control so that users can view other results. Format a
 * list of nearby pages with additional query results.
 *
 * @param array $variables
 *   An associative array containing:
 *   - pager: A render element containing:
 *     - #tags: An array of labels for the controls in the pager.
 *     - #element: An optional integer to distinguish between multiple pagers on
 *       one page.
 *     - #parameters: An associative array of query string parameters to append
 *       to the pager links.
 *     - #route_parameters: An associative array of the route parameters.
 *     - #quantity: The number of pages in the list.
 */
function uswds_preprocess_pager(&$variables) {
  // Limit the pager to 3 items. With the prev/next links, plust the first
  // and last page number links added in, this is as many as we can fit on
  // a mobile screen.
  $variables['pager']['#quantity'] = 3;

  $element = $variables['pager']['#element'];
  $parameters = $variables['pager']['#parameters'];
  $quantity = empty($variables['pager']['#quantity']) ? 0 : $variables['pager']['#quantity'];
  $route_name = $variables['pager']['#route_name'];
  $route_parameters = isset($variables['pager']['#route_parameters']) ? $variables['pager']['#route_parameters'] : [];

  /** @var \Drupal\Core\Pager\PagerManagerInterface $pager_manager */
  $pager_manager = \Drupal::service('pager.manager');

  $pager = $pager_manager->getPager($element);

  // Nothing to do if there is no pager.
  if (!isset($pager)) {
    return;
  }
  // The actual page number. e.g. 9, if there are 9 total pages.
  $pager_max = $pager->getTotalPages();

  // Nothing to do if there is only one page.
  if ($pager_max <= 1) {
    return;
  }

  $tags = $variables['pager']['#tags'];

  // Calculate various markers within this pager piece:
  // Middle is used to "center" pages around the current page.
  $pager_middle = ceil($quantity / 2);
  // The page number where 0 means 1. If on page number 5, then 4.
  $current_page = $pager->getCurrentPage();
  // The actual page number. If on page number 5, then 5.
  $pager_current = $current_page + 1;
  // The first pager is the first page listed by this pager piece (re quantity).
  $pager_first = $pager_current - $pager_middle + 1;
  // The last is the last page listed by this pager piece (re quantity).
  $pager_last = $pager_current + $quantity - $pager_middle;
  // End of marker calculations.

  // Prepare for generation loop.
  $i = $pager_first;
  if ($pager_last > $pager_max) {
    // Adjust "center" if at end of query.
    $i = $i + ($pager_max - $pager_last);
    $pager_last = $pager_max;
  }
  if ($i <= 0) {
    // Adjust "center" if at start of query.
    $pager_last = $pager_last + (1 - $i);
    $i = 1;
  }
  // End of generation loop preparation.

  // "First" and "previous" links will only exist NOT on the first page.
  if ($current_page > 0 && $pager_max > 3) {
    // Create previous link whenever we're not on first page.
    $items['previous'] = [];
    $items['previous']['attributes'] = new Attribute();
    $options = [
      'query' => $pager_manager->getUpdatedParameters($parameters, $element, $current_page - 1),
    ];
    $items['previous']['href'] = Url::fromRoute($route_name, $route_parameters, $options)->toString();
    if (isset($tags[1])) {
      $items['previous']['text'] = $tags[1];
    }
    // Only create "first" link if current page is greater than page 1,2 or
    // 3, based on $quantity = 3. ex:
    // FALSE: < Prev  1 [2] 3 ... 12  Next >
    // TRUE:  < Prev  1 2 [3] 4 ... 12  Next >
    // TRUE:  < Prev  1 ... 3 [4] 5 ... 12  Next >.
    if ($pager_current > ceil($quantity/2)) {
      $items['first'] = [];
      $items['first']['attributes'] = new Attribute();
      $options = [
        'query' => $pager_manager->getUpdatedParameters($parameters, $element, 0),
      ];
      $items['first']['href'] = Url::fromRoute($route_name, $route_parameters, $options)->toString();
      if (isset($tags[0])) {
        $items['first']['text'] = $tags[0];
      }
    }
  }
  if ($i != $pager_max) {
    // Add a prev ellipsis if there are links in between the pager grouping
    // and the "first" link. Ex:
    // FALSE: < Prev  1 [2] 3 ... 12  Next >
    // TRUE:  < Prev  1 2 [3] 4 ... 12  Next >
    // TRUE:  < Prev  1 ... 3 [4] 5 ... 12  Next >.
    if ($i > 1) {
      $variables['ellipses']['previous'] = ($pager_current - 1 > ceil($quantity/2));
    }
    // Now generate the actual pager piece.
    for (; $i <= $pager_last && $i <= $pager_max; $i++) {
      $options = [
        'query' => $pager_manager->getUpdatedParameters($parameters, $element, $i - 1),
      ];
      $items['pages'][$i]['href'] = Url::fromRoute($route_name, $route_parameters, $options)->toString();
      $items['pages'][$i]['attributes'] = new Attribute();
      if ($i == $pager_current) {
        $variables['current'] = $i;
      }
    }

    if ($i < $pager_max + 1) {
      // Add a next ellipsis if there links in between the pager grouping
      // and the "last" link. Ex:
      // TRUE:  < Prev  1 ... 8 [9] 10 ... 12  Next >
      // FALSE: < Prev  1 ... 9 [10] 11 12  Next >
      // FALSE: < Prev  1 ... 10 [11] 12  Next >.
      $variables['ellipses']['next'] = (($pager_max - $pager_current) - 1  > floor($quantity/2));
    }
  }
  // Create the "next" and "last" links if we are not on the last page.
  if ($pager_current < $pager_max && $pager_max > 3) {
    $items['next'] = [];
    $items['next']['attributes'] = new Attribute();
    $options = [
      'query' => $pager_manager->getUpdatedParameters($parameters, $element, $current_page + 1),
    ];
    $items['next']['href'] = Url::fromRoute($route_name, $route_parameters, $options)->toString();
    if (isset($tags[3])) {
      $items['next']['text'] = $tags[3];
    }
    // Only create "last" (in these examples page 12) if current page is
    // greater than 2 pages from the end, based on $quantity = 3. ex:
    // TRUE: < Prev  1 ... 8 [9] 10 ... 12  Next >
    // TRUE: < Prev  1 ... 9 [10] 11 12  Next >
    // FALSE: < Prev  1 ... 10 [11] 12  Next >
    if ($pager_max - $pager_current > floor($quantity/2)) {
      $items['last'] = [];
      $items['last']['attributes'] = new Attribute();
      $options = [
        'query' => $pager_manager->getUpdatedParameters($parameters, $element, $pager_max - 1),
      ];
      $items['last']['href'] = Url::fromRoute($route_name, $route_parameters, $options)->toString();
      $items['last']['number'] = $pager_max;
      if (isset($tags[4])) {
        $items['last']['text'] = $tags[4];
      }
    }
  }

  $variables['items'] = $items;
  $variables['heading_id'] = Html::getUniqueId('pagination-heading');

  // The rendered link needs to play well with any other query parameter used
  // on the page, like exposed filters, so for the cacheability all query
  // parameters matter.
  $variables['#cache']['contexts'][] = 'url.query_args';
}
