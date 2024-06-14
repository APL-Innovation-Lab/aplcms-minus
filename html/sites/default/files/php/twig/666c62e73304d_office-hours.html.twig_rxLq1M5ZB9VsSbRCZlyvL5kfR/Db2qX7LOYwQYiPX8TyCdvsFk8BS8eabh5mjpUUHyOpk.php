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

/* modules/contrib/office_hours/templates/office-hours.html.twig */
class __TwigTemplate_d7fd293d59b50b97d8ee6ed14a526085 extends \Twig\Template
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
        // line 1
        $context["classes"] = ("office-hours office-hours-status--" . ((($context["is_open"] ?? null)) ? ("open") : ("closed")));
        // line 2
        ob_start(function () { return ''; });
        // line 3
        echo "<div";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 3), 3, $this->source), "html", null, true);
        echo ">
  ";
        // line 4
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
            // line 5
            echo "    <div class=\"office-hours__item\">
      ";
            // line 6
            if (twig_get_attribute($this->env, $this->source, $context["item"], "label", [], "any", false, false, true, 6)) {
                // line 7
                echo "        <span class=\"office-hours__item-label\" style=\"width: ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, (($context["label_length"] ?? null) * 0.6), "html", null, true);
                echo "em;\">";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "label", [], "any", false, false, true, 7), 7, $this->source), "html", null, true);
                echo "</span>
      ";
            }
            // line 9
            echo "      ";
            if ( !twig_test_empty((($__internal_compile_0 = twig_get_attribute($this->env, $this->source, $context["item"], "slots", [], "any", false, false, true, 9)) && is_array($__internal_compile_0) || $__internal_compile_0 instanceof ArrayAccess ? ($__internal_compile_0["#markup"] ?? null) : null))) {
                // line 10
                echo "        <span class=\"office-hours__item-slots\">";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "slots", [], "any", false, false, true, 10), 10, $this->source), "html", null, true);
                echo "</span>
      ";
            }
            // line 12
            echo "      ";
            if ( !twig_test_empty((($__internal_compile_1 = twig_get_attribute($this->env, $this->source, $context["item"], "comments", [], "any", false, false, true, 12)) && is_array($__internal_compile_1) || $__internal_compile_1 instanceof ArrayAccess ? ($__internal_compile_1["#markup"] ?? null) : null))) {
                // line 13
                echo "        <span class=\"office-hours__item-comments\">";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "comments", [], "any", false, false, true, 13), 13, $this->source), "html", null, true);
                echo "</span>
      ";
            }
            // line 15
            echo "      <span>";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(($context["item_separator"] ?? null), 15, $this->source));
            echo "</span>
    </div>
  ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 18
        echo "</div>
";
        $___internal_parse_1_ = ('' === $tmp = ob_get_clean()) ? '' : new Markup($tmp, $this->env->getCharset());
        // line 2
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(twig_spaceless($___internal_parse_1_));
    }

    public function getTemplateName()
    {
        return "modules/contrib/office_hours/templates/office-hours.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  97 => 2,  93 => 18,  83 => 15,  77 => 13,  74 => 12,  68 => 10,  65 => 9,  57 => 7,  55 => 6,  52 => 5,  48 => 4,  43 => 3,  41 => 2,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "modules/contrib/office_hours/templates/office-hours.html.twig", "/var/www/html/html/modules/contrib/office_hours/templates/office-hours.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 1, "apply" => 2, "for" => 4, "if" => 6);
        static $filters = array("escape" => 3, "raw" => 15, "spaceless" => 2);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['set', 'apply', 'for', 'if'],
                ['escape', 'raw', 'spaceless'],
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
