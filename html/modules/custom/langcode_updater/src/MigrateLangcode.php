<?php

namespace Drupal\langcode_updater;

use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Messenger\MessengerInterface;

class MigrateLangcode {

  protected $entityTypeManager;
  protected $messenger;

  public function __construct(EntityTypeManagerInterface $entityTypeManager, MessengerInterface $messenger) {
    $this->entityTypeManager = $entityTypeManager;
    $this->messenger = $messenger;
  }

  public function updateLangcodes() {
    $json_path = drupal_get_path('module', 'langcode_updater') . '/nodes.json';
    if (!file_exists($json_path)) {
      $this->messenger->addError('JSON file not found.');
      return;
    }

    $data = json_decode(file_get_contents($json_path), TRUE);
    if (empty($data['nodes'])) {
      $this->messenger->addError('No nodes found in the JSON file.');
      return;
    }

    foreach ($data['nodes'] as $nid) {
      $node = $this->entityTypeManager->getStorage('node')->load($nid);

      if ($node) {
        if ($node->hasTranslation('en')) {
          \Drupal::logger('langcode_updater')->notice("Node {$nid} already has an 'en' translation. Skipping.");
          continue;
        }

        if ($node->language()->getId() === 'eng') {
          try {
            $node->set('langcode', 'en');
            $node->save();
            $this->messenger->addMessage("Updated node $nid to language code 'en'.");
          } catch (\Exception $e) {
            \Drupal::logger('langcode_updater')->error("Error processing node {$nid}: " . $e->getMessage());
          }
        } else {
          \Drupal::logger('langcode_updater')->notice("Node {$nid} language is not 'eng'. Skipping.");
        }
      } else {
        \Drupal::logger('langcode_updater')->notice("Node {$nid} not found.");
      }
    }
  }
}
