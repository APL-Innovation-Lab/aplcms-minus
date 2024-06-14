<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* themes/contrib/aplpa/templates/layout/page.html.twig */
class __TwigTemplate_33dd871f74b514070a0b5ec3bc122892 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
            'government_banner' => [$this, 'block_government_banner'],
            'header' => [$this, 'block_header'],
            'hero' => [$this, 'block_hero'],
            'main' => [$this, 'block_main'],
            'breadcrumb' => [$this, 'block_breadcrumb'],
            'highlighted' => [$this, 'block_highlighted'],
            'help' => [$this, 'block_help'],
            'sidebar_first' => [$this, 'block_sidebar_first'],
            'content' => [$this, 'block_content'],
            'sidebar_second' => [$this, 'block_sidebar_second'],
            'footer' => [$this, 'block_footer'],
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 51
        if (($context["government_banner"] ?? null)) {
            // line 52
            echo "  ";
            $this->displayBlock('government_banner', $context, $blocks);
        }
        // line 58
        echo "
<div class=\"usa-overlay\"></div>

";
        // line 61
        $this->displayBlock('header', $context, $blocks);
        // line 118
        echo "
";
        // line 119
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "hero", [], "any", false, false, true, 119)) {
            // line 120
            echo "  ";
            $this->displayBlock('hero', $context, $blocks);
        }
        // line 128
        echo "
";
        // line 129
        $this->displayBlock('main', $context, $blocks);
        // line 186
        echo "
";
        // line 187
        $this->displayBlock('footer', $context, $blocks);
    }

    // line 52
    public function block_government_banner($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 53
        echo "    <section class=\"usa-banner\">
      ";
        // line 54
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["government_banner"] ?? null), 54, $this->source), "html", null, true);
        echo "
    </section>
  ";
    }

    // line 61
    public function block_header($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 62
        echo "  <header class=\"";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["header_classes"] ?? null), 62, $this->source), "html", null, true);
        echo "\" id=\"header\" role=\"banner\">

  ";
        // line 64
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header_top", [], "any", false, false, true, 64)) {
            // line 65
            echo "    <div class=\"usa-banner-inner\">
      ";
            // line 66
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header_top", [], "any", false, false, true, 66), 66, $this->source), "html", null, true);
            echo "
    </div>
  ";
        }
        // line 69
        echo "
  ";
        // line 70
        if (($context["header_basic"] ?? null)) {
            // line 71
            echo "  <div class=\"usa-nav-container\">
    ";
        }
        // line 73
        echo "
    ";
        // line 74
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header", [], "any", false, false, true, 74), 74, $this->source), "html", null, true);
        echo "

    <nav class=\"usa-nav\" role=\"navigation\">
      ";
        // line 77
        if (($context["header_extended"] ?? null)) {
            // line 78
            echo "      <div class=\"usa-nav__inner\">
        ";
        }
        // line 80
        echo "
        <button class=\"usa-nav__close\">
          <img src=\"";
        // line 82
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["uswds_images"] ?? null), 82, $this->source), "html", null, true);
        echo "usa-icons/close.svg\" alt=\"close\"/>
        </button>

        ";
        // line 85
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "mobile_menu", [], "any", false, false, true, 85)) {
            // line 86
            echo "          <div class=\"usa-nav-mobile\">
            ";
            // line 87
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "mobile_menu", [], "any", false, false, true, 87), 87, $this->source), "html", null, true);
            echo "
          </div>
        ";
        }
        // line 90
        echo "
        ";
        // line 91
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "mobile_menu", [], "any", false, false, true, 91)) {
            // line 92
            echo "        <div class=\"usa-nav-desktop\">
          ";
        }
        // line 94
        echo "
          ";
        // line 95
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "primary_menu", [], "any", false, false, true, 95)) {
            // line 96
            echo "            ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "primary_menu", [], "any", false, false, true, 96), 96, $this->source), "html", null, true);
            echo "
          ";
        }
        // line 98
        echo "
          ";
        // line 99
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "secondary_menu", [], "any", false, false, true, 99)) {
            // line 100
            echo "            ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "secondary_menu", [], "any", false, false, true, 100), 100, $this->source), "html", null, true);
            echo "
          ";
        }
        // line 102
        echo "
          ";
        // line 103
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "mobile_menu", [], "any", false, false, true, 103)) {
            // line 104
            echo "        </div>
        ";
        }
        // line 106
        echo "
        ";
        // line 107
        if (($context["header_extended"] ?? null)) {
            // line 108
            echo "      </div>
      ";
        }
        // line 110
        echo "    </nav>

    ";
        // line 112
        if (($context["header_basic"] ?? null)) {
            // line 113
            echo "  </div>
  ";
        }
        // line 115
        echo "
</header>
";
    }

    // line 120
    public function block_hero($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 121
        echo "    <section class=\"usa-hero\">
      <div class=\"grid-container\">
        ";
        // line 123
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "hero", [], "any", false, false, true, 123), 123, $this->source), "html", null, true);
        echo "
      </div>
    </section>
  ";
    }

    // line 129
    public function block_main($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 130
        echo "  <main class=\"main-content usa-layout-docs usa-section ";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["main_classes"] ?? null), 130, $this->source), "html", null, true);
        echo "\" role=\"main\"
        id=\"main-content\">

    <div class=\"grid-container\">

      ";
        // line 135
        if (((twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "breadcrumb", [], "any", false, false, true, 135) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "highlighted", [], "any", false, false, true, 135)) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "help", [], "any", false, false, true, 135))) {
            // line 136
            echo "        ";
            $this->displayBlock('breadcrumb', $context, $blocks);
            // line 141
            echo "
        ";
            // line 142
            $this->displayBlock('highlighted', $context, $blocks);
            // line 147
            echo "
        ";
            // line 149
            echo "        ";
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "help", [], "any", false, false, true, 149)) {
                // line 150
                echo "          ";
                $this->displayBlock('help', $context, $blocks);
                // line 155
                echo "        ";
            }
            // line 156
            echo "      ";
        }
        // line 157
        echo "
      <div class=\"grid-row grid-gap\">
        ";
        // line 159
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_first", [], "any", false, false, true, 159)) {
            // line 160
            echo "          ";
            $this->displayBlock('sidebar_first', $context, $blocks);
            // line 166
            echo "        ";
        }
        // line 167
        echo "
        ";
        // line 168
        $this->displayBlock('content', $context, $blocks);
        // line 173
        echo "
        ";
        // line 174
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_second", [], "any", false, false, true, 174)) {
            // line 175
            echo "          ";
            $this->displayBlock('sidebar_second', $context, $blocks);
            // line 181
            echo "        ";
        }
        // line 182
        echo "      </div>
    </div>
  </main>
";
    }

    // line 136
    public function block_breadcrumb($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 137
        echo "          <div class=\"grid-row\">
            ";
        // line 138
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "breadcrumb", [], "any", false, false, true, 138), 138, $this->source), "html", null, true);
        echo "
          </div>
        ";
    }

    // line 142
    public function block_highlighted($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 143
        echo "          <div class=\"\">
            ";
        // line 144
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "highlighted", [], "any", false, false, true, 144), 144, $this->source), "html", null, true);
        echo "
          </div>
        ";
    }

    // line 150
    public function block_help($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 151
        echo "            <div class=\"grid-row \">
              ";
        // line 152
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "help", [], "any", false, false, true, 152), 152, $this->source), "html", null, true);
        echo "
            </div>
          ";
    }

    // line 160
    public function block_sidebar_first($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 161
        echo "            <div
              class=\"usa-layout-docs__sidenav desktop:grid-col-3 layout-sidebar-first\">
              ";
        // line 163
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_first", [], "any", false, false, true, 163), 163, $this->source), "html", null, true);
        echo "
            </div>
          ";
    }

    // line 168
    public function block_content($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 169
        echo "          <div class=\"usa-layout-docs__main desktop:grid-col-";
        if ((twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_first", [], "any", false, false, true, 169) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_second", [], "any", false, false, true, 169))) {
            echo "9";
        } else {
            echo "fill";
        }
        echo "\">
            ";
        // line 170
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "content", [], "any", false, false, true, 170), 170, $this->source), "html", null, true);
        echo "
          </div>";
        // line 172
        echo "        ";
    }

    // line 175
    public function block_sidebar_second($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 176
        echo "            <div
              class=\"usa-layout-docs__sidenav desktop:grid-col-3 layout-sidebar-second\">
              ";
        // line 178
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_second", [], "any", false, false, true, 178), 178, $this->source), "html", null, true);
        echo "
            </div>
            ";
    }

    // line 187
    public function block_footer($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 188
        echo "  <footer class=\"";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["footer_classes"] ?? null), 188, $this->source), "html", null, true);
        echo "\" role=\"contentinfo\">
    <div class=\"grid-container usa-footer__return-to-top\">
      <a href=\"#\">";
        // line 190
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Return to top"));
        echo "</a>
    </div>

    ";
        // line 193
        if (($context["display_footer_primary"] ?? null)) {
            // line 194
            echo "      <div class=\"usa-footer__primary-section\">

        <div class=\"usa-footer__primary-content\">
          ";
            // line 197
            if ((($context["footer_style"] ?? null) != "medium")) {
                // line 198
                echo "          <div class=\"grid-container\">
            <div class=\"grid-row grid-gap\">
              ";
            }
            // line 201
            echo "
              ";
            // line 202
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_menu", [], "any", false, false, true, 202)) {
                // line 203
                echo "                ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_menu", [], "any", false, false, true, 203), 203, $this->source), "html", null, true);
                echo "
              ";
            }
            // line 205
            echo "
              ";
            // line 206
            if ((($context["footer_slim"] ?? null) && (($context["footer_phone"] ?? null) || ($context["footer_email"] ?? null)))) {
                // line 207
                echo "                <div class=\"mobile-lg:grid-col-4\">
                  <address class=\"usa-footer__address\">
                    <div class=\"grid-row grid-gap mobile-lg:grid-gap-0\">

                      ";
                // line 211
                if (($context["footer_phone"] ?? null)) {
                    // line 212
                    echo "                        <div
                          class=\"grid-col-auto mobile-lg:grid-col-12 desktop:grid-col-auto\">
                          <div class=\"usa-footer-contact_info\">
                            <a
                              href=\"tel:";
                    // line 216
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["footer_phone"] ?? null), 216, $this->source), "html", null, true);
                    echo "\">";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["footer_phone"] ?? null), 216, $this->source), "html", null, true);
                    echo "</a>
                          </div>
                        </div>
                      ";
                }
                // line 220
                echo "
                      ";
                // line 221
                if (($context["footer_email"] ?? null)) {
                    // line 222
                    echo "                        <div
                          class=\"grid-col-auto mobile-lg:grid-col-12 desktop:grid-col-auto\">
                          <div class=\"usa-footer-contact_info\">
                            <a
                              href=\"mailto:";
                    // line 226
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["footer_email"] ?? null), 226, $this->source), "html", null, true);
                    echo "\">";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["footer_email"] ?? null), 226, $this->source), "html", null, true);
                    echo "</a>
                          </div>
                        </div>
                      ";
                }
                // line 230
                echo "                    </div>
                  </address>
                </div>
              ";
            }
            // line 234
            echo "
              ";
            // line 235
            if ((($context["footer_style"] ?? null) != "medium")) {
                // line 236
                echo "            </div>
          </div>
          ";
            }
            // line 239
            echo "
          ";
            // line 240
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer", [], "any", false, false, true, 240)) {
                // line 241
                echo "            <div class=\"grid-container\">
              <div class=\"grid-row grid-gap\">
                <div class=\"grid-col-fill\">
                  ";
                // line 244
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer", [], "any", false, false, true, 244), 244, $this->source), "html", null, true);
                echo "
                </div>
              </div>
            </div>
          ";
            }
            // line 249
            echo "        </div>

      </div>
    ";
        }
        // line 253
        echo "
    ";
        // line 254
        if (($context["display_footer_secondary"] ?? null)) {
            // line 255
            echo "      <div class=\"usa-footer__secondary-section\">
        <div class=\"grid-container\">
          <div class=\"grid-row grid-gap\">
            ";
            // line 258
            if (($context["display_footer_agency"] ?? null)) {
                // line 259
                echo "            <div
              class=\"usa-footer__logo grid-row mobile-lg:grid-col-6 mobile-lg:grid-gap-2\">

              ";
                // line 262
                if (($context["footer_agency_url"] ?? null)) {
                    // line 263
                    echo "              <a href=\"";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["footer_agency_url"] ?? null), 263, $this->source), "html", null, true);
                    echo "\">
              ";
                }
                // line 265
                echo "
                ";
                // line 266
                if (($context["footer_agency_logo"] ?? null)) {
                    // line 267
                    echo "                  <div class=\"mobile-lg:grid-col-auto\">
                    <img class=\"usa-footer__logo-img\"
                         src=\"";
                    // line 269
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["footer_agency_logo"] ?? null), 269, $this->source), "html", null, true);
                    echo "\"
                         alt=\"";
                    // line 270
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Agency logo"));
                    echo "\">
                  </div>
                ";
                }
                // line 273
                echo "
                ";
                // line 274
                if (($context["footer_agency_name"] ?? null)) {
                    // line 275
                    echo "                  <div class=\"mobile-lg:grid-col-auto\">
                    <h3
                      class=\"usa-footer__logo-heading\">";
                    // line 277
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["footer_agency_name"] ?? null), 277, $this->source), "html", null, true);
                    echo "</h3>
                  </div>
                ";
                }
                // line 280
                echo "
              ";
                // line 281
                if (($context["footer_agency_url"] ?? null)) {
                    // line 282
                    echo "              </a>
              ";
                }
                // line 284
                echo "
            </div>

            ";
                // line 287
                if ( !($context["footer_slim"] ?? null)) {
                    // line 288
                    echo "              <div class=\"usa-footer__contact-links desktop:grid-col-6\">
                ";
                    // line 289
                    if ((((($context["facebook"] ?? null) || ($context["twitter"] ?? null)) || ($context["youtube"] ?? null)) || ($context["rss"] ?? null))) {
                        // line 290
                        echo "                <div class=\"usa-footer__social-links grid-row grid-gap-1\">
                ";
                        // line 291
                        if (($context["facebook"] ?? null)) {
                            // line 292
                            echo "                  <div class=\"grid-col-auto\">
                  <a class=\"usa-social-link usa-social-link--facebook\" href=\"";
                            // line 293
                            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["facebook"] ?? null), 293, $this->source), "html", null, true);
                            echo "\">
                    <img class=\"usa-social-link__icon\" src=\"";
                            // line 294
                            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["uswds_images"] ?? null), 294, $this->source), "html", null, true);
                            echo "usa-icons/facebook.svg\" alt=\"Facebook\">
                  </a>
                  </div>
                ";
                        }
                        // line 298
                        echo "
                ";
                        // line 299
                        if (($context["twitter"] ?? null)) {
                            // line 300
                            echo "                  <div class=\"grid-col-auto\">
                  <a class=\"usa-social-link usa-social-link--twitter\" href=\"";
                            // line 301
                            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["twitter"] ?? null), 301, $this->source), "html", null, true);
                            echo "\">
                    <img class=\"usa-social-link__icon\" src=\"";
                            // line 302
                            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["uswds_images"] ?? null), 302, $this->source), "html", null, true);
                            echo "usa-icons/twitter.svg\" alt=\"Twitter\">
                  </a>
                  </div>
                ";
                        }
                        // line 306
                        echo "
                ";
                        // line 307
                        if (($context["youtube"] ?? null)) {
                            // line 308
                            echo "                    <div class=\"grid-col-auto\">
                  <a class=\"usa-social-link usa-social-link--youtube\" href=\"";
                            // line 309
                            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["youtube"] ?? null), 309, $this->source), "html", null, true);
                            echo "\">
                    <img class=\"usa-social-link__icon\" src=\"";
                            // line 310
                            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["uswds_images"] ?? null), 310, $this->source), "html", null, true);
                            echo "usa-icons/youtube.svg\" alt=\"YouTube\">
                  </a>
                    </div>
                ";
                        }
                        // line 314
                        echo "
                ";
                        // line 315
                        if (($context["instagram"] ?? null)) {
                            // line 316
                            echo "                    <div class=\"grid-col-auto\">
                  <a class=\"usa-social-link usa-social-link--instagram\" href=\"";
                            // line 317
                            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["instagram"] ?? null), 317, $this->source), "html", null, true);
                            echo "\">
                    <img class=\"usa-social-link__icon\" src=\"";
                            // line 318
                            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["uswds_images"] ?? null), 318, $this->source), "html", null, true);
                            echo "usa-icons/instagram.svg\" alt=\"Instagram\">
                  </a>
                    </div>
                ";
                        }
                        // line 322
                        echo "
                ";
                        // line 323
                        if (($context["rss"] ?? null)) {
                            // line 324
                            echo "                  <div class=\"grid-col-auto\">
                  <a class=\"usa-social-link usa-social-link--rss\" href=\"";
                            // line 325
                            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["rss"] ?? null), 325, $this->source), "html", null, true);
                            echo "\">
                    <img class=\"usa-social-link__icon\" src=\"";
                            // line 326
                            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["uswds_images"] ?? null), 326, $this->source), "html", null, true);
                            echo "usa-icons/rss_feed.svg\" alt=\"RSS\">
                  </a>
                  </div>
                ";
                        }
                        // line 330
                        echo "                </div>
                ";
                    }
                    // line 332
                    echo "                ";
                    if (($context["contact_center"] ?? null)) {
                        // line 333
                        echo "                  <h3
                    class=\"usa-footer__contact-heading\">";
                        // line 334
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["contact_center"] ?? null), 334, $this->source), "html", null, true);
                        echo "</h3>
                ";
                    }
                    // line 336
                    echo "                <address class=\"usa-footer__address\">
                  <div class=\"usa-footer__contact-info grid-row grid-gap\">
                    ";
                    // line 338
                    if (($context["phone"] ?? null)) {
                        // line 339
                        echo "                      <div class=\"grid-col-auto\">
                        <a href=\"tel:";
                        // line 340
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["phone"] ?? null), 340, $this->source), "html", null, true);
                        echo "\">";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["phone"] ?? null), 340, $this->source), "html", null, true);
                        echo "</a>
                      </div>
                    ";
                    }
                    // line 343
                    echo "
                    ";
                    // line 344
                    if (($context["email"] ?? null)) {
                        // line 345
                        echo "                      <div class=\"grid-col-auto\">
                        <a href=\"mailto:";
                        // line 346
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["email"] ?? null), 346, $this->source), "html", null, true);
                        echo "\">";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["email"] ?? null), 346, $this->source), "html", null, true);
                        echo "</a>
                      </div>
                    ";
                    }
                    // line 349
                    echo "                  </div>
                </address>
              </div>
            ";
                }
                // line 353
                echo "
          </div>
          ";
            }
            // line 356
            echo "
          ";
            // line 357
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_secondary", [], "any", false, false, true, 357)) {
                // line 358
                echo "            <div class=\"grid-container\">
              <div class=\"grid-row grid-gap\">
                <div class=\"grid-col-fill\">
                  ";
                // line 361
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_secondary", [], "any", false, false, true, 361), 361, $this->source), "html", null, true);
                echo "
                </div>
              </div>
            </div>
          ";
            }
            // line 366
            echo "        </div>
      </div>
    ";
        }
        // line 369
        echo "
  </footer>
";
    }

    public function getTemplateName()
    {
        return "themes/contrib/aplpa/templates/layout/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  797 => 369,  792 => 366,  784 => 361,  779 => 358,  777 => 357,  774 => 356,  769 => 353,  763 => 349,  755 => 346,  752 => 345,  750 => 344,  747 => 343,  739 => 340,  736 => 339,  734 => 338,  730 => 336,  725 => 334,  722 => 333,  719 => 332,  715 => 330,  708 => 326,  704 => 325,  701 => 324,  699 => 323,  696 => 322,  689 => 318,  685 => 317,  682 => 316,  680 => 315,  677 => 314,  670 => 310,  666 => 309,  663 => 308,  661 => 307,  658 => 306,  651 => 302,  647 => 301,  644 => 300,  642 => 299,  639 => 298,  632 => 294,  628 => 293,  625 => 292,  623 => 291,  620 => 290,  618 => 289,  615 => 288,  613 => 287,  608 => 284,  604 => 282,  602 => 281,  599 => 280,  593 => 277,  589 => 275,  587 => 274,  584 => 273,  578 => 270,  574 => 269,  570 => 267,  568 => 266,  565 => 265,  559 => 263,  557 => 262,  552 => 259,  550 => 258,  545 => 255,  543 => 254,  540 => 253,  534 => 249,  526 => 244,  521 => 241,  519 => 240,  516 => 239,  511 => 236,  509 => 235,  506 => 234,  500 => 230,  491 => 226,  485 => 222,  483 => 221,  480 => 220,  471 => 216,  465 => 212,  463 => 211,  457 => 207,  455 => 206,  452 => 205,  446 => 203,  444 => 202,  441 => 201,  436 => 198,  434 => 197,  429 => 194,  427 => 193,  421 => 190,  415 => 188,  411 => 187,  404 => 178,  400 => 176,  396 => 175,  392 => 172,  388 => 170,  379 => 169,  375 => 168,  368 => 163,  364 => 161,  360 => 160,  353 => 152,  350 => 151,  346 => 150,  339 => 144,  336 => 143,  332 => 142,  325 => 138,  322 => 137,  318 => 136,  311 => 182,  308 => 181,  305 => 175,  303 => 174,  300 => 173,  298 => 168,  295 => 167,  292 => 166,  289 => 160,  287 => 159,  283 => 157,  280 => 156,  277 => 155,  274 => 150,  271 => 149,  268 => 147,  266 => 142,  263 => 141,  260 => 136,  258 => 135,  249 => 130,  245 => 129,  237 => 123,  233 => 121,  229 => 120,  223 => 115,  219 => 113,  217 => 112,  213 => 110,  209 => 108,  207 => 107,  204 => 106,  200 => 104,  198 => 103,  195 => 102,  189 => 100,  187 => 99,  184 => 98,  178 => 96,  176 => 95,  173 => 94,  169 => 92,  167 => 91,  164 => 90,  158 => 87,  155 => 86,  153 => 85,  147 => 82,  143 => 80,  139 => 78,  137 => 77,  131 => 74,  128 => 73,  124 => 71,  122 => 70,  119 => 69,  113 => 66,  110 => 65,  108 => 64,  102 => 62,  98 => 61,  91 => 54,  88 => 53,  84 => 52,  80 => 187,  77 => 186,  75 => 129,  72 => 128,  68 => 120,  66 => 119,  63 => 118,  61 => 61,  56 => 58,  52 => 52,  50 => 51,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/contrib/aplpa/templates/layout/page.html.twig", "/var/www/html/themes/contrib/aplpa/templates/layout/page.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 51, "block" => 52);
        static $filters = array("escape" => 54, "t" => 190);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['if', 'block'],
                ['escape', 't'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
