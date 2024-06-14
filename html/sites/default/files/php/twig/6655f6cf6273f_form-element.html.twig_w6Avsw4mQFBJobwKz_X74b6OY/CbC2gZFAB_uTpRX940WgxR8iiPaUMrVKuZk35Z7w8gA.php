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

/* themes/contrib/aplpa/templates/form/form-element.html.twig */
class __TwigTemplate_3dfb2e28417c207329723f0a3f2c1057cb4ceca62bca49a7e0375a64c49bd25b extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 51
        $context["classes"] = [0 => "form-item", 1 => "js-form-item", 2 => ("form-type-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(        // line 54
($context["type"] ?? null), 54, $this->source))), 3 => ("js-form-type-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(        // line 55
($context["type"] ?? null), 55, $this->source))), 4 => ("form-item-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(        // line 56
($context["name"] ?? null), 56, $this->source))), 5 => ("js-form-item-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(        // line 57
($context["name"] ?? null), 57, $this->source))), 6 => ((!twig_in_filter(        // line 58
($context["title_display"] ?? null), [0 => "after", 1 => "before"])) ? ("form-no-label") : ("")), 7 => (((        // line 59
($context["disabled"] ?? null) == "disabled")) ? ("form-disabled") : ("")), 8 => ((        // line 60
($context["is_form_group"] ?? null)) ? ("form-group") : ("")), 9 => (((        // line 61
($context["type"] ?? null) == "radio")) ? ("radio") : ("")), 10 => (((        // line 62
($context["type"] ?? null) == "checkbox")) ? ("checkbox") : ("")), 11 => (((        // line 63
($context["type"] ?? null) == "autocomplete")) ? ("form-autocomplete") : ("")), 12 => ((        // line 64
($context["has_error"] ?? null)) ? ("error has-error") : (""))];
        // line 68
        $context["description_classes"] = [0 => "description", 1 => "help-block", 2 => (((        // line 71
($context["description_display"] ?? null) == "invisible")) ? ("usa-sr-only") : (""))];
        // line 74
        echo "<div";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 74), 74, $this->source), "html", null, true);
        echo ">
  ";
        // line 75
        if (twig_in_filter(($context["label_display"] ?? null), [0 => "before", 1 => "invisible"])) {
            // line 76
            echo "    ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["label"] ?? null), 76, $this->source), "html", null, true);
            echo "
  ";
        }
        // line 78
        echo "  ";
        if (( !twig_test_empty(($context["prefix"] ?? null)) ||  !twig_test_empty(($context["suffix"] ?? null)))) {
            // line 79
            echo "  <div class=\"usa-input-group\">
    ";
        }
        // line 81
        echo "  ";
        if ( !twig_test_empty(($context["prefix"] ?? null))) {
            // line 82
            echo "    <span class=\"field-prefix usa-input-prefix\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["prefix"] ?? null), 82, $this->source), "html", null, true);
            echo "</span>
  ";
        }
        // line 84
        echo "  ";
        if (((($context["description_display"] ?? null) == "before") && twig_get_attribute($this->env, $this->source, ($context["description"] ?? null), "content", [], "any", false, false, true, 84))) {
            // line 85
            echo "    <div";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["description"] ?? null), "attributes", [], "any", false, false, true, 85), "addClass", [0 => ($context["description_classes"] ?? null)], "method", false, false, true, 85), 85, $this->source), "html", null, true);
            echo ">
      ";
            // line 86
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["description"] ?? null), "content", [], "any", false, false, true, 86), 86, $this->source), "html", null, true);
            echo "
    </div>
  ";
        }
        // line 89
        echo "  ";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["children"] ?? null), 89, $this->source), "html", null, true);
        echo "
  ";
        // line 90
        if ( !twig_test_empty(($context["suffix"] ?? null))) {
            // line 91
            echo "    <span class=\"field-suffix usa-input-suffix\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["suffix"] ?? null), 91, $this->source), "html", null, true);
            echo "</span>
  ";
        }
        // line 93
        echo "    ";
        if (( !twig_test_empty(($context["prefix"] ?? null)) ||  !twig_test_empty(($context["suffix"] ?? null)))) {
            // line 94
            echo "  </div>
  ";
        }
        // line 96
        echo "  ";
        if ((($context["label_display"] ?? null) == "after")) {
            // line 97
            echo "    ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["label"] ?? null), 97, $this->source), "html", null, true);
            echo "
  ";
        }
        // line 99
        echo "
  ";
        // line 100
        if (($context["errors"] ?? null)) {
            // line 101
            echo "    <div class=\"usa-error-message\" role=\"alert\">
      ";
            // line 102
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["errors"] ?? null), 102, $this->source), "html", null, true);
            echo "
    </div>
  ";
        }
        // line 105
        echo "
  ";
        // line 106
        if ((twig_in_filter(($context["description_display"] ?? null), [0 => "after", 1 => "invisible"]) && twig_get_attribute($this->env, $this->source, ($context["description"] ?? null), "content", [], "any", false, false, true, 106))) {
            // line 107
            echo "    <div";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["description"] ?? null), "attributes", [], "any", false, false, true, 107), "addClass", [0 => ($context["description_classes"] ?? null)], "method", false, false, true, 107), 107, $this->source), "html", null, true);
            echo ">
      ";
            // line 108
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["description"] ?? null), "content", [], "any", false, false, true, 108), 108, $this->source), "html", null, true);
            echo "
    </div>
  ";
        }
        // line 111
        echo "</div>
";
    }

    public function getTemplateName()
    {
        return "themes/contrib/aplpa/templates/form/form-element.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  157 => 111,  151 => 108,  146 => 107,  144 => 106,  141 => 105,  135 => 102,  132 => 101,  130 => 100,  127 => 99,  121 => 97,  118 => 96,  114 => 94,  111 => 93,  105 => 91,  103 => 90,  98 => 89,  92 => 86,  87 => 85,  84 => 84,  78 => 82,  75 => 81,  71 => 79,  68 => 78,  62 => 76,  60 => 75,  55 => 74,  53 => 71,  52 => 68,  50 => 64,  49 => 63,  48 => 62,  47 => 61,  46 => 60,  45 => 59,  44 => 58,  43 => 57,  42 => 56,  41 => 55,  40 => 54,  39 => 51,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/contrib/aplpa/templates/form/form-element.html.twig", "/var/www/html/html/themes/contrib/aplpa/templates/form/form-element.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 51, "if" => 75);
        static $filters = array("clean_class" => 54, "escape" => 74);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if'],
                ['clean_class', 'escape'],
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
