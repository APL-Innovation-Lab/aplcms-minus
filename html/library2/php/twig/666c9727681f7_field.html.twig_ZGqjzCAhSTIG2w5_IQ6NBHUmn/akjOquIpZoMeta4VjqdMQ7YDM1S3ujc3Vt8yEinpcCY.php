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

/* themes/contrib/aplpa/templates/field/field.html.twig */
class __TwigTemplate_90b049dfa0c758ce685183ff36068af6 extends \Twig\Template
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
        // line 40
        $context["classes"] = [0 => "field", 1 => ("field--name-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(        // line 42
($context["field_name"] ?? null), 42, $this->source))), 2 => ("field--type-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(        // line 43
($context["field_type"] ?? null), 43, $this->source))), 3 => ("field--label-" . $this->sandbox->ensureToStringAllowed(        // line 44
($context["label_display"] ?? null), 44, $this->source)), 4 => (((        // line 45
($context["label_display"] ?? null) == "inline")) ? ("clearfix") : (""))];
        // line 49
        $context["title_classes"] = [0 => "title", 1 => (((        // line 51
($context["label_display"] ?? null) == "visually_hidden")) ? ("usa-sr-only") : ("")), 2 => (((        // line 52
($context["label_display"] ?? null) == "inline")) ? ("display-inline") : (""))];
        // line 55
        echo "
";
        // line 57
        $context["field_classes"] = [0 => (((        // line 58
($context["label_display"] ?? null) == "inline")) ? ("display-inline") : (""))];
        // line 61
        echo "
";
        // line 62
        if (($context["label_hidden"] ?? null)) {
            // line 63
            echo "  ";
            if (($context["multiple"] ?? null)) {
                // line 64
                echo "    <div";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null), 1 => "field__items"], "method", false, false, true, 64), "addClass", [0 => ($context["field_classes"] ?? null)], "method", false, false, true, 64), 64, $this->source), "html", null, true);
                echo ">
      ";
                // line 65
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
                foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                    // line 66
                    echo "        <div";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["item"], "attributes", [], "any", false, false, true, 66), "addClass", [0 => "field__item"], "method", false, false, true, 66), "addClass", [0 => ($context["field_classes"] ?? null)], "method", false, false, true, 66), 66, $this->source), "html", null, true);
                    echo ">";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "content", [], "any", false, false, true, 66), 66, $this->source), "html", null, true);
                    echo "</div>
      ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 68
                echo "    </div>
  ";
            } else {
                // line 70
                echo "    ";
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
                foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                    // line 71
                    echo "      <div";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null), 1 => "field__item"], "method", false, false, true, 71), "addClass", [0 => ($context["field_classes"] ?? null)], "method", false, false, true, 71), 71, $this->source), "html", null, true);
                    echo ">";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "content", [], "any", false, false, true, 71), 71, $this->source), "html", null, true);
                    echo "</div>
    ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 73
                echo "  ";
            }
        } else {
            // line 75
            echo "  <div";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 75), 75, $this->source), "html", null, true);
            echo ">
    <div";
            // line 76
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["title_attributes"] ?? null), "addClass", [0 => ($context["title_classes"] ?? null)], "method", false, false, true, 76), 76, $this->source), "html", null, true);
            echo ">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["label"] ?? null), 76, $this->source), "html", null, true);
            echo "</div>
    ";
            // line 77
            if (($context["multiple"] ?? null)) {
                // line 78
                echo "    <div>
      ";
            }
            // line 80
            echo "      ";
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
            foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                // line 81
                echo "        <div";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["item"], "attributes", [], "any", false, false, true, 81), "addClass", [0 => "field__item"], "method", false, false, true, 81), "addClass", [0 => ($context["field_classes"] ?? null)], "method", false, false, true, 81), 81, $this->source), "html", null, true);
                echo ">";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "content", [], "any", false, false, true, 81), 81, $this->source), "html", null, true);
                echo "</div>
      ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 83
            echo "      ";
            if (($context["multiple"] ?? null)) {
                // line 84
                echo "    </div>
    ";
            }
            // line 86
            echo "  </div>
";
        }
    }

    public function getTemplateName()
    {
        return "themes/contrib/aplpa/templates/field/field.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  147 => 86,  143 => 84,  140 => 83,  129 => 81,  124 => 80,  120 => 78,  118 => 77,  112 => 76,  107 => 75,  103 => 73,  92 => 71,  87 => 70,  83 => 68,  72 => 66,  68 => 65,  63 => 64,  60 => 63,  58 => 62,  55 => 61,  53 => 58,  52 => 57,  49 => 55,  47 => 52,  46 => 51,  45 => 49,  43 => 45,  42 => 44,  41 => 43,  40 => 42,  39 => 40,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/contrib/aplpa/templates/field/field.html.twig", "/var/www/html/themes/contrib/aplpa/templates/field/field.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 40, "if" => 62, "for" => 65);
        static $filters = array("clean_class" => 42, "escape" => 64);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if', 'for'],
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
